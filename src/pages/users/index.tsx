import { Box, Button, Text, Flex, Icon, Heading, Table, Thead, Tr, Th, Checkbox, Tbody, Td, useBreakpointValue, IconButton } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Pagination from "../../components/Pagination";
import Link from "next/link";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });
  return (
    <Box>
      <Header/>
      <Flex
        w="100%"
        my="6"
        maxW="1480"
        mx="auto"
        px="6"
      >
        <Sidebar/>
        <Box
          flex="1"
          borderRadius={8}
          p={8}
          bg="gray.800"
        >
          <Flex
            mb="8"
            justify="space-between"
            align="center"
          >
            <Heading
              size="lg"
              fontWeight="normal"
            >
              Usuários
            </Heading>

            <Link href="/users/create">
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="16"/>}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table
            colorScheme="whiteAlpha"
          >
            <Thead>
              <Tr>
                <Th
                  px={["4", "4", "6"]}
                  color="gray.300"
                  w="8"
                >
                  <Checkbox colorScheme="pink"/>
                </Th>
                <Th>
                  Usuário
                </Th>
                { isWideVersion && <Th>
                  Data de cadastro
                </Th> }
                <Th w="8px"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text
                      fontWeight="bold"
                    >
                      Lucas Marcel
                    </Text>
                    <Text
                      fontSize="small"
                      color="gray.300"
                    >
                      lmgh1312@gmail.com
                    </Text>
                  </Box>
                </Td>
                { isWideVersion &&  <Td>
                  01 de Abril de 2021
                </Td> }
                <Td>
                  { !isWideVersion ? <IconButton
                    aria-label="Editar"
                    as="animateMotion"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    icon={<Icon as={RiPencilLine} fontSize="16"/>}
                  />:
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                  >
                    Editar
                  </Button> }
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination/>
        </Box>
      </Flex>
    </Box>
  );
};