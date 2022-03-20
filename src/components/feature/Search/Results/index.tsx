import { FC } from 'react';

import { SearchResult } from '@services/omdb/types';

import Card from 'components/shared/Card';

interface Props {
    results: SearchResult[],
    total: number | null;
};

const Results: FC<Props> = ({ results, total }) => (
    <section>
        <ul>
        {results?.map(({Title, ...rest}, index) => (
            <li key={`${Title}-${index}`}>
                <Card Title={Title} {...rest} />
            </li>
        ))}
        </ul>
    </section>
);

export default Results;