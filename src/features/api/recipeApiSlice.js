import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const recipeApiSlice = createApi({
  reducerPath: "recipeApiSlice",
baseQuery: fetchBaseQuery({ baseUrl: 'https://www.themealdb.com/api/json/v1/1/' }),
endpoints: (build)=>({
  getRecipeByName: build.query({
    query: (name)=>`search.php?s=${name}`
  }),
  getRecipeById: build.query({
    query: (id)=>`lookup.php?i=${id}`
  }),
  getRecipeRandom: build.query({
    query: ()=>`random.php`
  }),
  getRecipeByArea: build.query({
    query: (area)=>`filter.php?a=${area}`
  }),
})
})


export const { useGetRecipeByNameQuery } = recipeApiSlice