# movie-search-app
A small application that allows a user to search for movies

## Getting Started

To run application in development mode

```bash
npm run dev
```

To build the application for production

```bash
npm run build
```

To serve the built production application

```bash
npm run start
```

## Requirements

 - Text input a user can input string to search for movies
 - User should be able to select a value from the search results and get more details about the film, including `plot synopsis`
 - search results should only return max of `10`
 - usability & accessability for all users
 - performance - need to ensure minimal amount of requests to api

## Checklist

- [x] setup initial project 
- [] setup OMDb endpoints `By Search` & `By ID`
- [] add tests for both OMDb endpoints
- [] setup feature `Search` component
    - [] read over form/labeling W3 accessability - https://www.w3.org/WAI/tutorials/forms/labels/
    - [] search input will update state on `onChange` & `onBlur` will need to add debouce. example here - https://usehooks.com/useDebounce/
    - [] add `useMemo` on input value to ensure minimal rerenders/rerequests
    - [] add `useEffect` with dependency of search input value (memo value), will request search data
    - [] add subcomponent `Results` map search results to `Card` to display to the user
- [] setup shared `Input` component
- [] setup shared `Card` component - to display movie result, will have link so a user can see more information about the film
- [] setup dynamic route `film/[id]` for when a user want to see more detail about the film, will be SSR and call `By ID` endpoint