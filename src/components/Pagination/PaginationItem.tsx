import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
};

export default function PaginationItem({ number, isCurrent = false }: PaginationItemProps) {
  if(isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'default'
        }}
      >
        {number}
      </Button>
    );
  };

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      disabled
      _disabled={{
        cursor: 'default'
      }}
      _hover={{
        bg: 'pink.500',
        cursor: 'default'
      }}
    >
      {number}
    </Button>
  );
};