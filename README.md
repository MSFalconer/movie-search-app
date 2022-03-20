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
- [x] setup OMDb endpoints `By Search` & `By ID`
- [] add tests for both OMDb endpoints - (didn't have enough time to test)
- [x] setup feature `Search` component
    - [x] read over form/labeling W3 accessability - https://www.w3.org/WAI/tutorials/forms/labels/
    - [x] search input will update state on `onChange` will need to add debouce. example here - https://usehooks.com/useDebounce/
    - [x] add `useMemo` on input value to ensure minimal rerenders/rerequests
    - [x] add `useEffect` with dependency of search input value (memo value), will request search data
    - [x] add subcomponent `Results` map search results to `Card` to display to the user
- [] setup shared `Input` component - (ran out of time, but probs isn't needed for this app)
- [x] setup shared `Card` component - to display movie result, will have link so a user can see more information about the film
- [x] setup shared `Movie` component - to display full movie result, on movie page
- [x] setup dynamic route `film/[id]` for when a user want to see more detail about the film, will be SSR and call `By ID` endpoint

## Improvements

- [] refactor parts of the Search component to use useReducer instead of state to make it clearer/easier & also add loading/error states in
- [] add tests in for both `getBySearch` & `getById`, successful & failing requests to ensure correct data is being passed back - would have mocked each endpoint or looked at using mock service worker
- [] add tests for `Search` using react testing library would have tested input functionality

## New features
 - [] allow users to also select what type of media to search by currently only set for movie
 - [] add save/favorite functionality, using local storage so a user can create a list of films as favorites
 - [] improve UI add a skeleton loading states, when a request is being made in `Search`