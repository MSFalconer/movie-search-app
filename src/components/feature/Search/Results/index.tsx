import { FC } from 'react';

import { SearchResult } from '@services/omdb/types';

import Card from 'components/shared/Card';

import { Wrapper } from './style';

interface Props {
    results: SearchResult[],
    total: number | null;
};

const Results: FC<Props> = ({ results, total }) => (
    <Wrapper>
        <ul>
            {results?.map(({ Title, ...rest }, index) => (
                <li key={`${Title}-${index}`}>
                    <Card Title={Title} {...rest} />
                </li>
            ))}
        </ul>
    </Wrapper>
);

export default Results;