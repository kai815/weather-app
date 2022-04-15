import React from 'react';
import useSWR from 'swr';
import TopPagePresenter from '../Presenter';

const fetcher = (url: string): Promise<any> =>
  fetch(url).then((res) => res.json());

type WeatherListResponse = {
  data: [
    {
      weather: {
        icon: string;
        code: string;
        description: string;
      };
      max_temp: number;
      min_temp: number;
    },
  ];
  city_name: string;
  country_code: string;
};

//Containerはデータ取得してPresentatorに渡す
const TopPageContainer = () => {
  const { data, error } = useSWR<WeatherListResponse>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}daily?lat=30&lon=130&days=7&key=${process.env.NEXT_PUBLIC_API_KEY}`,
    fetcher,
  );
  if (error) <>エラー</>;
  if (typeof data === 'undefined') {
    return <>Loading...</>;
  } else {
    const weather = {
      max_temp: data.data[0].max_temp!,
      min_temp: data.data[0].min_temp!,
      ...data.data[0].weather!,
    };
    return <TopPagePresenter weather={weather} />;
  }
};

export default TopPageContainer;
