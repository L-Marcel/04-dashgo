import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
};

export default function PaginationItem({ number, isCurrent = false, onPageChange }: PaginationItemProps) {
  if(isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        color="white"
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
      _hover={{
        bg: 'pink.500',
        cursor: 'pointer'
      }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  );
};