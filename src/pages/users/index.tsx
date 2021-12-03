import { Box, Button, Text, Flex, Icon, Heading, Table, Thead, Tr, Th, Checkbox, Tbody, Td, useBreakpointValue, IconButton, Spinner, Progress, Link } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Pagination from "../../components/Pagination";
import NextLink from "next/link";
import { getUsers, useUsers } from "../../services/hooks/useUsers";
import { useState } from "react";
import { queryClient } from "../../services/axios/query";
import { api } from "../../services/axios/api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export default function UserList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error } = useUsers(page);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(['user', userId],
    async() => {
      const response = await api.get(`users/${userId}`);

      return response.config;
    }, {
      staleTime: 1000 * 60 * 10
    });
  };
  
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
          bg="gray.800"
          flexDir="column"
          h="min-content"
          pb={isLoading? 8:0}
        >
          { isFetching && <Progress 
            size="sm" 
            isIndeterminate
            colorScheme="pink"
          /> }
          <Box
            flex="1"
            p={8}
            pt={isFetching ? 6:8}
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

              <NextLink href="/users/create">
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="pink"
                  color="white"
                  leftIcon={<Icon as={RiAddLine} fontSize="16"/>}
                >
                  Criar novo
                </Button>
              </NextLink>
            </Flex>

            {
              isLoading? (
                <Flex 
                  justify="center"
                >
                  <Spinner/>
                </Flex>
              ): error? (
                <Flex justify="center">
                  <Text>Falha ao obter dados dos usuários</Text>
                </Flex>
              ): (
                <>
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
                      { data.users.map((user) => {
                        return (
                          <Tr key={user.id}>
                            <Td px={["4", "4", "6"]}>
                              <Checkbox colorScheme="pink"/>
                            </Td>
                            <Td>
                              <Box>
                                <Link
                                  color="purple.200"
                                  onMouseEnter={() => {
                                    handlePrefetchUser(user.id)
                                  }}
                                >
                                  <Text
                                    fontWeight="bold"
                                  >
                                    {user.name}
                                  </Text>
                                </Link>
                                <Text
                                  fontSize="small"
                                  color="gray.300"
                                >
                                  {user.email}
                                </Text>
                              </Box>
                            </Td>
                            { isWideVersion &&  <Td>
                              {user.createdAt}
                            </Td> }
                            <Td>
                              { !isWideVersion ? <IconButton
                                aria-label="Editar"
                                as="animateMotion"
                                size="sm"
                                fontSize="sm"
                                colorScheme="purple"
                                color="white"
                                icon={<Icon as={RiPencilLine} fontSize="16"/>}
                              />:
                              <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="purple"
                                color="white"
                                leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                              >
                                Editar
                              </Button> }
                            </Td>
                          </Tr>
                        );
                      }) }
                    </Tbody>
                  </Table>

                  <Pagination
                    totalCountOfRegisters={data.totalCount}
                    currentPage={page}
                    onPageChange={setPage}
                  />
                </>
              )
            }
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};