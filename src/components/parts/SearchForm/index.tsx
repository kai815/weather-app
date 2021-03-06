import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Input,
  Button,
  VStack,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { LatLon } from '../../../types/latLon';

type FormData = {
  latitude: string;
  longitude: string;
};

type Props = {
  changeLatLon: (args: LatLon) => void;
};
const SearchForm = ({ changeLatLon }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const latLon = {
      latitude: data.latitude,
      longitude: data.longitude,
    };
    changeLatLon(latLon);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.latitude || !!errors.longitude}>
        <VStack spacing={4} marginY={5}>
          <Input
            variant='outline'
            placeholder='緯度'
            {...register('latitude', {
              required: '入力してください',
              pattern: {
                value: /^([1-9]\d*|0)$/,
                message: '数字で入力してください。',
              },
              validate: {
                checkLatitude: (v) =>
                  (Number(v) >= 20 && Number(v) <= 46) ||
                  '20~46を入力してください。',
              },
            })}
          />
          <FormErrorMessage>
            {errors.latitude && errors.latitude.message}
          </FormErrorMessage>
          <Input
            variant='outline'
            placeholder='経度'
            {...register('longitude', {
              required: '入力してください',
              pattern: {
                value: /^([1-9]\d*|0)$/,
                message: '数字で入力してください。',
              },
              validate: {
                checkLongitude: (v) =>
                  (Number(v) >= 122 && Number(v) <= 154) ||
                  '122~154を入力してください。',
              },
            })}
          />
          <FormErrorMessage>
            {errors.longitude && errors.longitude.message}
          </FormErrorMessage>
          <Button colorScheme='orange' isLoading={isSubmitting} type='submit'>
            検索
          </Button>
        </VStack>
      </FormControl>
    </form>
  );
};

export default SearchForm;
