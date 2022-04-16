import React from 'react';
import Head from 'next/head';
import { Heading, Box, Button, HStack } from '@chakra-ui/react';
import WeatherCard from '../../../parts/WeatherCard';
import SearchForm from '../../../parts/SearchForm';
import { formatDate } from '../../../../utils/FormatDate';
import { weather } from '../../../../types/weather';
import { LatLon } from '../../../../types/latLon';

type Props = {
  weather: weather;
  changeLatLon: (args: LatLon) => void;
  plusSelectedDateIndex: () => void;
  minusSelectedDateIndex: () => void;
  selectedDateIndex: number;
};

const TopPagePresenter = ({
  weather,
  changeLatLon,
  plusSelectedDateIndex,
  minusSelectedDateIndex,
  selectedDateIndex,
}: Props) => (
  <div>
    <Head>
      <title>お天気アプリ</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta
        httpEquiv='Content-Security-Policy'
        content='upgrade-insecure-requests'
      />
    </Head>
    {/* スマホのみのサイズを対応する予定なので、500pxにしてる */}
    <Box maxW='500px' minH='100vh' marginX='auto' boxShadow='base' padding={4}>
      <Heading as='h1'>お天気チェック</Heading>
      <SearchForm changeLatLon={changeLatLon} />
      <Heading as='h2' textAlign='center' mb='2'>
        {formatDate(new Date(weather.datetime))}
      </Heading>
      <WeatherCard {...weather} />
      <HStack justifyContent='space-between' mt='6'>
        <Button
          variant='outline'
          colorScheme='blue'
          onClick={minusSelectedDateIndex}
          disabled={selectedDateIndex <= 0}
        >
          前日
        </Button>
        <Button
          variant='outline'
          colorScheme='blue'
          onClick={plusSelectedDateIndex}
          disabled={selectedDateIndex >= 6}
        >
          翌日
        </Button>
      </HStack>
    </Box>
  </div>
);

export default TopPagePresenter;
