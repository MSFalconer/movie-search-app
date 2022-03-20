import { FC } from 'react';

import { SearchResult } from '@services/omdb/types';


const Card: FC<SearchResult> = ({ Title }) => (
    <article>
        {Title && <h3>{Title}</h3>}
    </article>
);

export default Card;