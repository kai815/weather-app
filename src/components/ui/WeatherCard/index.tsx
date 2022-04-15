import React from 'react';
import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { weather } from '../../../types/weather';

//todo後で必要になるデータを定義する
type Props = weather;

const WeatherCard = ({ icon, description, max_temp, min_temp }: Props) => (
  <Box padding={6} boxShadow='md'>
    <VStack spacing={2}>
      <Text>ここはアイコン</Text>
      <Text>{description}</Text>
      <HStack>
        <Text as='span' color='red'>
          {max_temp}
        </Text>
        <Text>/</Text>
        <Text as='span' color='blue'>
          {min_temp}
        </Text>
      </HStack>
    </VStack>
  </Box>
);

export default WeatherCard;
