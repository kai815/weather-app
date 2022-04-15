import Link from 'next/link'
import Layout from '../components/Layout'
import { Heading } from '@chakra-ui/react';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Heading color="red">Hello Next.js 👋</Heading>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
