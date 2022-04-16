import React, { useState } from 'react';
import TopPagePresenter from '../Presenter';
import { useFetchWeathers } from './fetchWeathers';
import { LatLon } from '../../../../types/latLon';

//Containerはデータ取得してPresentatorに渡す
const TopPageContainer = () => {
  const [latLon, setLatLon] = useState({ latitude: '30', longitude: '130' });
  const { data, error } = useFetchWeathers(latLon);
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);

  const changeLatLon = (latLon: LatLon) => {
    setLatLon(latLon);
  };

  const plusSelectedDateIndex = () => {
    setSelectedDateIndex((prevDateIndex) => prevDateIndex + 1);
  };

  const minusSelectedDateIndex = () => {
    setSelectedDateIndex((prevDateIndex) => prevDateIndex - 1);
  };

  if (error) <>エラー</>;
  if (typeof data === 'undefined') {
    return <>Loading...</>;
  } else {
    const weather = {
      max_temp: data.data[selectedDateIndex].max_temp,
      min_temp: data.data[selectedDateIndex].min_temp,
      datetime: data.data[selectedDateIndex].datetime,
      ...data.data[selectedDateIndex].weather,
    };
    return (
      <TopPagePresenter
        weather={weather}
        changeLatLon={changeLatLon}
        selectedDateIndex={selectedDateIndex}
        plusSelectedDateIndex={plusSelectedDateIndex}
        minusSelectedDateIndex={minusSelectedDateIndex}
      />
    );
  }
};

export default TopPageContainer;
