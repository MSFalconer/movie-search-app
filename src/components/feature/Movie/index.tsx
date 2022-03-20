/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';

import { FullResult } from '@services/omdb/types';

const Movie: FC<FullResult> = ({
    Title,
    Plot,
    Genre,
    Runtime,
    Actors,
    Poster,
}) => (
    <div>
        {Title && <h1>{Title}</h1>}
        {Poster &&
            <div className="image__wrapper">
                <img src={Poster} alt={`${Title} Poster`} width={300} height={400} />
            </div>
        }
        {Plot && <p>{Plot}</p>}
    </div>
);

export default Movie;