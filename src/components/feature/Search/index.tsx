import { FC, useEffect, useState, FormEvent } from 'react';

import { getBySearch } from '@services/omdb';

import { useDebounce } from '@hooks';

import Results from './Results';

interface Props { };

const Search: FC<Props> = ({ }) => {
    const [{ results, total }, setResults] = useState({
        results: [],
        total: null,
    });
    const [searchTerm, setSearchTerm] = useState<string>('');
    const debouncedSearchTerm = useDebounce(searchTerm, 350);

    // TODO: if I had more time I would turn this into a reusable `useSearch` hook
    // TODO: that would also include loading & error states
    useEffect(() => {
        // if there is a search term, request search data
        if (debouncedSearchTerm) {
            (async () => {
                const { Search: results, totalResults: total } = await getBySearch({ s: debouncedSearchTerm });
                setResults((state) => ({ ...state, results, total }))
            })();
            // when theres no search term, set state back to defaults
        } else setResults({ results: [], total: null });
        // debounce search term value set as the dependencies
        // so the useEffect is only triggered an optimal amount of times
    }, [debouncedSearchTerm])

    return (
        <section>
            <form>
                <div>
                    <label htmlFor="search">Search</label>
                    <input type="search" id="search" name="search" data-testid="search-input" placeholder="search for a movie..." onChange={(event: FormEvent<HTMLInputElement>) => setSearchTerm(event.target.value)} />
                </div>
            </form>

            <div>
                {results && total && <Results results={results} total={total} />}
            </div>
        </section>
    )

}

export default Search;