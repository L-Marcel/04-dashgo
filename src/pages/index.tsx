import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { useForm, SubmitHandler,  } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  password: yup.string().required("Senha obrigatória")
});

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  
  let { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async(values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxW="360px"
        bg="gray.800"
        p="8"
        borderRadius="8"
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            label="E-mail"
            errors={errors.email}
            register={register('email')}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            errors={errors.password}
            register={register('password')}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};
