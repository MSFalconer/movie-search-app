
import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { getById } from '@services/omdb';

import Movie from '@components/feature/Movie';

const MoviePage: NextPage = ({ data }) => {
    const { Title } = data ?? {};
    console.log({data});
  return (
    <div>
      <Head>
        <title>Move | {Title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Movie {...data} />
    </div>
  )
}



// This gets called on every request
export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { id = '' } = params ?? {};
    // Fetch data from external API
    const data = await getById({i: id })
  
    // Pass data to the page via props
    return { props: { data } }
  }
  
  export default MoviePage;