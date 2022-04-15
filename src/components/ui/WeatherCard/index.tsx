import React from 'react';
import { Box, HStack, Text, VStack } from '@chakra-ui/react';

//todo後で必要になるデータを定義する
// type Props = {};

const WeatherCard = () => (
  <Box padding={6} boxShadow='md'>
    <VStack spacing={2}>
      <Text>ここはアイコン</Text>
      <Text>説明説明</Text>
      <HStack>
        <Text as='span' color='red'>
          最高気温
        </Text>
        <Text>/</Text>
        <Text as='span' color='blue'>
          最低気温
        </Text>
      </HStack>
    </VStack>
  </Box>
);

export default WeatherCard;
