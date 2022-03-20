import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Search from '@components/feature/Search';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search />
    </div>
  )
}

export default Home
