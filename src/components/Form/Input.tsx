import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  errors?: FieldError;
  register?: any
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, errors, register, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!errors} id={`label-${name}`}>
      { !!label && <FormLabel htmlFor={name}>
        {label}
      </FormLabel> }
      <ChakraInput
        nome={name}
        type="text"
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900"
        }}
        size="lg"
        ref={ref}
        { ...rest }
        { ...register }
      />

      { !!errors && <FormErrorMessage>{errors.message}</FormErrorMessage> }
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);