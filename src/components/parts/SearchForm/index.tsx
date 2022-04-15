import React from 'react';
import { Input, Button, VStack } from '@chakra-ui/react';

const SearchForm = () => {
  return (
    <VStack spacing={4} marginY={5}>
      <Input variant='outline' placeholder='緯度' />
      <Input variant='outline' placeholder='経度' />
      <Button colorScheme='orange' ml='auto'>
        検索
      </Button>
    </VStack>
  );
};

export default SearchForm;
