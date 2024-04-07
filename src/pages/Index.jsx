import { Button, Checkbox, FormLabel, Heading, Input, VStack, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Heading as="h1">My Todo List</Heading>

      <Box>
        <FormLabel>New todo</FormLabel>
        <Input placeholder="Enter a new todo" />
        <Button colorScheme="blue" ml={2}>
          Add
        </Button>
      </Box>

      <VStack align="start" mt={4}>
        <Box>
          <Checkbox>Todo 1</Checkbox>
        </Box>
        <Box>
          <Checkbox>Todo 2</Checkbox>
        </Box>
        <Box>
          <Checkbox>Todo 3</Checkbox>
        </Box>
      </VStack>
    </VStack>
  );
};

export default Index;
