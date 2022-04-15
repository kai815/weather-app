import React from 'react';
import Head from 'next/head';
import { Heading, Box, Button, HStack } from '@chakra-ui/react';
import WeatherCard from '../../../parts/WeatherCard';
import SearchForm from '../../../parts/SearchForm';
import { formatDate } from '../../../../utils/FormatDate';
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
      <SearchForm />
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
