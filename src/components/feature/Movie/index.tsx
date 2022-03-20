import { FC } from 'react';

import { FullResult } from '@services/omdb/types';

const Movie: FC<FullResult> = ({
Title,
Plot,
Genre,
Runtime,
Actors,
Poster,
}) => {

    return (
        <div>
            {Title && <h1>{Title}</h1>}
            {Plot && <p>{Plot}</p>}
        </div>
    )
};

export default Movie;