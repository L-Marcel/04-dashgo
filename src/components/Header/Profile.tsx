import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
};

export default function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      { 
        showProfileData && 
        <Box mr="4" textAlign="right">
          <Text>L-Marcel</Text>
          <Text color="gray.300" fontSize="small">
            Lucas Marcel
          </Text>
        </Box>
      }

      <Avatar size="md" name="Lucas Marcel"/>
    </Flex>
  );
};