import { FC, useEffect } from 'react';

import { getBySearch, getById } from '@services/omdb';

interface Props {};

const Search: FC<Props> = ({}) => {


    useEffect(() => {
        (async() => {
            const search = await getBySearch({s: 'james'});
            
            console.log(search);
        })();
    }, [])

    useEffect(() => {
        (async() => {
            const search = await getById({i: 'tt0116683'});
            
            console.log(search);
        })();
    }, [])

    return (
        <div>
            Search component
        </div>
    )

} 

export default Search;