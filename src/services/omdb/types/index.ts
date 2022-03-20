enum MediaType {    
    movie = 'movie',
    series = 'series',
    episode = 'episode',
}


export interface SearchResult  {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface FullResult extends SearchResult {
    Plot: string;
    Actors: string;
    Release: string;
    Runtime:string;
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
    Response: boolean;
}

export interface GetByIdReqBody {
    /**
     * A valid IMDb ID (e.g. tt1285016)
     */
    i: string;
    // /**
    //  * 	Movie title to search for.
    //  */
    // t?: string;
    /**
     * media type
     */
    type?: MediaType;

}

export interface GetByIdResBody extends FullResult {
    Response: boolean;
}