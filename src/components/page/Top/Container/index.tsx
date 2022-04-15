import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Heading } from '@chakra-ui/react';
import TopPagePresentator from '../Presentator/';

//todo後で必要になるデータを定義する
// type Props = {};
//Containerはデータ取得してPresentatorに渡す
const TopPageContainer = () => <TopPagePresentator />;

export default TopPageContainer;
