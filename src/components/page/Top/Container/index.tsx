import React, { useState } from 'react';
import TopPagePresenter from '../Presenter';
import { useFetchWeathers } from './fetchWeathers';
import { LatLon } from '../../../../types/latLon';

//Containerはデータ取得してPresentatorに渡す
const TopPageContainer = () => {
  const [latLon, setLatLon] = useState({ latitude: '30', longitude: '130' });
  const { data, error } = useFetchWeathers(latLon);
  const changeLatLon = (latLon: LatLon) => {
    setLatLon(latLon);
  };
  if (error) <>エラー</>;
  if (typeof data === 'undefined') {
    return <>Loading...</>;
  } else {
    const weather = {
      max_temp: data.data[0].max_temp,
      min_temp: data.data[0].min_temp,
      ...data.data[0].weather!,
    };
    return <TopPagePresenter weather={weather} changeLatLon={changeLatLon} />;
  }
};

export default TopPageContainer;
