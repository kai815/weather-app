import React from 'react';
import TopPagePresenter from '../Presenter';
import { useFetchWeathers } from './fetchWeathers';

//Containerはデータ取得してPresentatorに渡す
const TopPageContainer = () => {
  const { data, error } = useFetchWeathers({
    latitude: '30',
    longitude: '130',
  });
  if (error) <>エラー</>;
  if (typeof data === 'undefined') {
    return <>Loading...</>;
  } else {
    const weather = {
      max_temp: data.data[0].max_temp,
      min_temp: data.data[0].min_temp,
      ...data.data[0].weather!,
    };
    return <TopPagePresenter weather={weather} />;
  }
};

export default TopPageContainer;
