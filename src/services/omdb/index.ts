
import getConfig from 'next/config';
import queryString from 'query-string';

import { GetBySearchReqBody, GetBySearchResBody, GetByIdReqBody, GetByIdResBody } from './types';

const { publicRuntimeConfig } = getConfig();
const { OMDB_API_URL, OMDB_API_KEY } = publicRuntimeConfig ?? {};


// request search data
// TODO: have added overwrite on type so ensure only movie are searched
// TODO: can be extended to allow series & episodes
export const getBySearch = async (data: GetBySearchReqBody): Promise<GetBySearchResBody> => {
    const endpoint = queryString.stringifyUrl({
        url: OMDB_API_URL,
        query: {
            apikey: OMDB_API_KEY,
            ...data,
            type: 'movie'
        }
    });

    const searchData = await fetch(endpoint);

    return await searchData.json();
};

// request film byId data
// TODO: have added overwrite on type so ensure only movie are searched
// TODO: can be extended to allow series & episodes
export const getById = async (data: GetByIdReqBody): Promise<GetByIdResBody> => {
    const endpoint = queryString.stringifyUrl({
        url: OMDB_API_URL,
        query: {
            apikey: OMDB_API_KEY,
            ...data,
            type: 'movie'
        }
    });

    const IdData = await fetch(endpoint);

    return await IdData.json();
};