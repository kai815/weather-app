import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Heading } from '@chakra-ui/react';
import TopPagePresenter from '../Presenter';

//todo後で必要になるデータを定義する
// type Props = {};
//Containerはデータ取得してPresentatorに渡す
const TopPageContainer = () => <TopPagePresenter />;

export default TopPageContainer;
