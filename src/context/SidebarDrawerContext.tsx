import { useDisclosure, UseDisclosureProps } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { createContext, useContext } from "use-context-selector";

export const SidebarDrawerContext = createContext({} as UseDisclosureProps);

interface SidebarDrawerProviderProps {
  children: React.ReactNode;
};

type SidebarDrawerContext = UseDisclosureProps;

export default function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);
  
  return (
    <SidebarDrawerContext.Provider 
      value={disclosure}
    >
      { children }
    </SidebarDrawerContext.Provider>
  );
};

export const useSidebarDrawer = () => {
  const context = useContext(SidebarDrawerContext);

  return context;
};