import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Heading, Box, Input, Button, VStack, HStack } from '@chakra-ui/react';
import WeatherCard from '../../../ui/WeatherCard';
import { formatDate } from '../../../ui/FormatDate';
import { weather } from '../../../../types/weather';

type Props = {
  weather: weather;
};

const TopPagePresenter = ({ weather }: Props) => (
  <div>
    <Head>
      <title>お天気アプリ</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    {/* スマホのみのサイズを対応する予定なので、500pxにしてる */}
    <Box maxW='500px' minH='100vh' marginX='auto' boxShadow='base' padding={4}>
      <Heading as='h1'>お天気チェック</Heading>
      <VStack spacing={4} marginY={5}>
        <Input variant='outline' placeholder='緯度' />
        <Input variant='outline' placeholder='経度' />
        <Button colorScheme='orange' ml='auto'>
          検索
        </Button>
      </VStack>
      <Heading as='h2' textAlign='center' mb='2'>
        {formatDate(new Date())}
      </Heading>
      <WeatherCard {...weather} />
      <HStack justifyContent='space-between' mt='6'>
        <Button variant='outline' colorScheme='blue'>
          前日
        </Button>
        <Button variant='outline' colorScheme='blue'>
          翌日
        </Button>
      </HStack>
    </Box>
  </div>
);

export default TopPagePresenter;
