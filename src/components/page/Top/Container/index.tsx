import React from 'react';
import useSWR from 'swr';
import TopPagePresenter from '../Presenter';

const fetcher = (url: string): Promise<any> =>
  fetch(url).then((res) => res.json());

type WeatherListResponse = {
  weather: {
    icon: string;
    code: string;
    description: string;
  };
  max_temp: number;
  min_temp: number;
};

//Containerはデータ取得してPresentatorに渡す
const TopPageContainer = () => {
  const { data, error } = useSWR<WeatherListResponse>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}daily?lat=30&lon=130&days=7&key=${process.env.NEXT_PUBLIC_API_KEY}`,
    fetcher,
  );
  return <TopPagePresenter />;
};

export default TopPageContainer;
