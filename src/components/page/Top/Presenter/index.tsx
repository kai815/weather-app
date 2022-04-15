import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Heading, Box, Input, Button, Stack, HStack } from '@chakra-ui/react';

//todo後で必要になるデータを定義する
// type Props = {};

const TopPagePresenter = () => (
  <div>
    <Head>
      <title>お天気アプリ</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    {/* スマホのみのサイズを対応する予定なので、500pxにしてる */}
    <Box maxW='500px' minH='100vh' marginX='auto' boxShadow='base' padding={4}>
      <Heading as='h1'>お天気チェック</Heading>
      <Stack spacing={4} marginY={5}>
        <Input variant='outline' placeholder='緯度' />
        <Input variant='outline' placeholder='経度' />
        <Button colorScheme='orange' ml='auto'>
          検索
        </Button>
      </Stack>
      <Heading as='h2' textAlign='center'>
        日付
      </Heading>
    </Box>
  </div>
);

export default TopPagePresenter;
