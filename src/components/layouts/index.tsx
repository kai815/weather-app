import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';

type Props = {
  children?: ReactNode;
};
const Layout = ({ children }: Props) => (
  <>
    <Head>
      <title>お天気アプリ</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    {/* スマホのみのサイズを対応する予定なので、500pxにしてる */}
    <Box maxW='500px' minH='100vh' marginX='auto' boxShadow='base' padding={4}>
      {children}
    </Box>
  </>
);
export default Layout;
