import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { SearchResult } from '@services/omdb/types';


const Card: FC<SearchResult> = ({ Title, Year, imdbID, Type, Poster }) => (
    <article>
        <div className="image__wrapper">
            <img src={Poster} alt={`${Title} Poster`} width={300} height={400} />
        </div>
        {Title && <h3>{Title}</h3>}
        {Year && <span>{Year}</span>}
        {Type && <span>{Type}</span>}

        <div className="link__wrapper">
            <Link href="">
                <a>View {Type}</a>
            </Link>
        </div>
    </article>
);

export default Card;