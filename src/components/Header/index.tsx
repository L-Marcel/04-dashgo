import { Flex, IconButton, useBreakpointValue, Icon } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../context/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";
import Logo from "./Logo";
import NotificationsNav from "./NotificationsNav";
import Profile from "./Profile";
import SearchBox from "./SearchBox";

export default function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxW="1400px"
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      {
        !isWideVersion && (
          <IconButton
            fontSize="24"
            aria-label="Open navigation"
            variant="unstyled"
            mr="2"
            onClick={onOpen}
            icon={<Icon as={RiMenuLine}/>}
          />
        )
      }
      <Logo/>
      { isWideVersion && <SearchBox/> }
      <Flex align="center" ml="auto">
        <NotificationsNav/>
        <Profile showProfileData={isWideVersion}/>
      </Flex>
    </Flex>
  );
};