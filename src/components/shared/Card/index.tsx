import { FC } from 'react';
import Link from 'next/link';

import { SearchResult } from '@services/omdb/types';

import { generateSearchMoviePath } from '@helpers/search';


const Card: FC<SearchResult> = ({ Title, Year, imdbID, Type, Poster }) => (
    <article>
        {Poster &&
            <div className="image__wrapper">
                <img src={Poster} alt={`${Title} Poster`} width={300} height={400} />
            </div>
        }
        {Title && <h3>{Title}</h3>}
        {Year && <span>{Year}</span>}
        {Type && <span>{Type}</span>}
        <div className="link__wrapper">
            <Link href={generateSearchMoviePath({ type: Type, id: imdbID })}>
                <a>View {Type}</a>
            </Link>
        </div>
    </article>
);

export default Card;