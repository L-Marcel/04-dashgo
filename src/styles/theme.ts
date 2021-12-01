import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#181823",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B385C6",
      "100": "#01020C",
      "50": "#EEEEF2",
    },
    pink: {
      "200": "#D12E82",
      "500": "#D12E82",
    },
    purple: {
      "200": "#805AD5"
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "gray.50"
      },
      "&::-webkit-scrollbar": {
        width: "4px",
      },
      "&::-webkit-scrollbar-track": {
        width: "6px",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "pink.500",
        borderRadius: "24px",
      },
    },
  },
});