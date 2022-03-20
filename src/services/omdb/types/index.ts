export type MediaType = 'movie' | 'series' | 'episode';
export interface SearchResult {
    Title: string;
    Year: string;
    imdbID: string;
    Type: MediaType;
    Poster: string;
}

export interface FullResult extends SearchResult {
    Plot: string;
    Actors: string;
    Release: string;
    Runtime: string;
    Genre: string;
}

export interface GetBySearchReqBody {
    /**
     * Movie title to search for.
     */
    s: string;
    /**
     * media type
     */
    type?: MediaType;
}

export interface GetBySearchResBody {
    Search: SearchResult[];
    totalResults: number;
    /**
     * should really be boolean but these values are coming through the API
     */
    Response: 'True' | 'False';
    Error?: string;
}

export interface GetByIdReqBody {
    /**
     * A valid IMDb ID (e.g. tt1285016)
     */
    i: string;
    // TODO: add t so films can be searched by title
    // t?: string;
    /**
     * media type
     */
    type?: MediaType;

}

export interface GetByIdResBody extends FullResult {
    Response: boolean;
}