import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Brener Silva</Text>
          <Text color="gray.300" fontSize="small">
            sergio.brener95@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Brener Silva"
        src="https://github.com/brener-js.png"
      />
    </Flex>
  );
}
