import useSWR from 'swr';

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
type Props = {
  latitude: string | number;
  longitude: string | number;
};

export const useFetchWeathers = (props: Props) => {
  const { latitude, longitude } = props;
  return useSWR<WeatherListResponse>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}daily?lat=${latitude}&lon=${longitude}&days=7&key=${process.env.NEXT_PUBLIC_API_KEY}`,
    fetcher,
  );
};
