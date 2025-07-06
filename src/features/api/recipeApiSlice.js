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
  getRecipeByCategories: build.query({
    query: ()=>`categories.php`
  }),
  getRecipeByCategory: build.query({
    query: (category)=>`filter.php?c=${category}`
  }),
  getAllRecipeAreas: build.query({
  query: () => `list.php?a=list`
})
})
})


export const { useGetRecipeByNameQuery, useGetRecipeByAreaQuery, useGetRecipeByCategoriesQuery, useGetRecipeByCategoryQuery, useGetRecipeByIdQuery, useGetRecipeRandomQuery, useGetAllRecipeAreasQuery } = recipeApiSlice