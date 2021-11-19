import { Box, Stack } from "@chakra-ui/react";
import PaginationItem from "./PaginationItem";

export default function Pagination() {
  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align={["flex-start", "center"]}
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack
        direction="row"
        spacing="2"
      >
        <PaginationItem number={1} isCurrent/>
        <PaginationItem number={2}/>
        <PaginationItem number={3}/>
      </Stack>
    </Stack>
  );
};