import React from 'react';
import { Heading, Button, HStack } from '@chakra-ui/react';
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
  <>
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
  </>
);

export default TopPagePresenter;
