import React, { useState } from 'react';
import { Input, Button, VStack, Text } from '@chakra-ui/react';

const regex = RegExp(/^([1-9]\d*|0)$/);

const validateLatitude = (value: string) => {
  let result = {
    isValid: true,
    errorMessage: '',
  };
  if (!regex.test(value)) {
    result = {
      isValid: false,
      errorMessage: '数字で入力してください。',
    };
    return result;
  }
  if (Number(value) < 20 || Number(value) > 46) {
    result = {
      isValid: false,
      errorMessage: '20~46を入力してください。',
    };
    return result;
  }
  return result;
};
const validateLongitude = (value: string) => {
  let result = {
    isValid: true,
    errorMessage: '',
  };
  if (!regex.test(value)) {
    result = {
      isValid: false,
      errorMessage: '数字で入力してください。',
    };
    return result;
  }
  if (Number(value) < 122 || Number(value) > 154) {
    result = {
      isValid: false,
      errorMessage: '122~154を入力してください。',
    };
    return result;
  }
  return result;
};

const SearchForm = () => {
  //緯度
  const [latittude, setLatitude] = useState('30');
  // 経度
  const [longitude, setLongitude] = useState('130');

  const onChangeLatitude: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setLatitude(event.target.value);
  };

  const onChangeLongitude: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setLongitude(event.target.value);
  };
  const isValidLatittude = validateLatitude(latittude);
  const isValidLongitude = validateLongitude(longitude);

  return (
    <VStack spacing={4} marginY={5}>
      <Input
        variant='outline'
        placeholder='緯度'
        isInvalid={!isValidLatittude.isValid}
        onChange={onChangeLatitude}
      />
      <Text color='red'>{isValidLatittude.errorMessage}</Text>
      <Input
        variant='outline'
        placeholder='経度'
        isInvalid={!isValidLongitude.isValid}
        onChange={onChangeLongitude}
      />
      <Text color='red'>{isValidLongitude.errorMessage}</Text>
      <Button colorScheme='orange' ml='auto'>
        検索
      </Button>
    </VStack>
  );
};

export default SearchForm;
