import { FC } from 'react';
import Link from 'next/link';

import { SearchResult } from '@services/omdb/types';

import { generateSearchMoviePath } from '@helpers/search';

import { Wrapper, ImageWrapper, ContentWrapper, LinkWrapper } from './style';


const Card: FC<SearchResult> = ({ Title, Year, imdbID, Type, Poster }) => (
    <Wrapper>
        {Poster &&
            <ImageWrapper>
                <img src={Poster} alt={`${Title} Poster`} />
            </ImageWrapper>
        }
        <ContentWrapper>
            {Title && <h3>{Title}</h3>}
            {Year && <span>{Year}</span>}
            <LinkWrapper>
                <Link href={generateSearchMoviePath({ type: Type, id: imdbID })}>
                    <a>View {Type}</a>
                </Link>
            </LinkWrapper>
        </ContentWrapper>
    </Wrapper>
);

export default Card;