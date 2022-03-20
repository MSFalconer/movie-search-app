import { FC, useEffect, useState, useMemo } from 'react';

import { getBySearch } from '@services/omdb';
import { SearchResult } from '@services/omdb/types';

import { useDebounce } from '@hooks';

import Results from './Results';

interface Props { };

const Search: FC<Props> = ({ }) => {
    //TODO: on reflection & more time I would refactor this into a useReducer
    const [{ results, total, error }, setResults] = useState<{ results: SearchResult[] | []; total: number | null; error?: string }>({
        results: [],
        total: null,
        error: '',
    });
    const [searchTerm, setSearchTerm] = useState<string>('');
    const debouncedSearchTerm = useDebounce(searchTerm, 350);
    const searchTermMemo = useMemo(() => debouncedSearchTerm, [debouncedSearchTerm]);

    // TODO: if I had more time I would turn this into a reusable `useSearch` hook
    // TODO: that would also include loading & error states
    useEffect(() => {
        // if there is a search term, request search data
        if (searchTermMemo) {
            (async () => {
                const { Search: results, totalResults: total, Response = false, Error: error } = await getBySearch({ s: searchTermMemo });

                if (Response === 'True') {
                    setResults((state) => ({ ...state, results, total, error: '' }))
                } else {
                    setResults({ results: [], total: null, error })
                }
            })();
            // when theres no search term, set state back to defaults
        } else setResults({ results: [], total: null, error: '' });
        // memo debounced search term
        // set searchTermMemo as the dependencies
        // so the useEffect is only triggered an optimal amount of times
    }, [searchTermMemo]);

    console.log(error)

    return (
        <section>
            <form>
                <div>
                    <label htmlFor="search">Search</label>
                    <input type="search" id="search" name="search" data-testid="search-input" placeholder="search for a movie..." onChange={(event) => setSearchTerm(event.target.value)} />
                </div>
                {error && <p>{error}</p>}
            </form>

            <div>
                {results && total && <Results results={results} total={total} />}
            </div>
        </section>
    )

}

export default Search;