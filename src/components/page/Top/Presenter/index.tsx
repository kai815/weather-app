import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Heading } from '@chakra-ui/react';

//todo後で必要になるデータを定義する
// type Props = {};

const TopPagePresenter = () => (
  <div>
    <Head>
      <title>お天気アプリ</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Heading color='red'>お天気アプリ</Heading>
    <footer>
      <hr />
      <span>お天気フッター</span>
    </footer>
  </div>
);

export default TopPagePresenter;
