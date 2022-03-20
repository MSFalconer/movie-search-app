
enum MediaType {    
    movie = 'movie',
    series = 'series',
    episode = 'episode',
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

export interface GetByIdReqBody {
    /**
     * A valid IMDb ID (e.g. tt1285016)
     */
    i?: string;
    /**
     * 	Movie title to search for.
     */
    t?: string;
    /**
     * media type
     */
    type?: MediaType;

}