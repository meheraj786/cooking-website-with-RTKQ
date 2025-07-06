import React from "react";
import Container from "../../layouts/Container";
import Flex from "../../layouts/Flex";
import FoodCard from "../foodCard/FoodCard";
import { useGetRecipeByCategoryQuery } from "../../features/api/recipeApiSlice";
import SliderItems from "../slider/SliderItems";

const ThirdRow = () => {
  const { data, isLoading, error } = useGetRecipeByCategoryQuery("Dessert");

  if (isLoading) return <p className="text-center text-primary">Loading...</p>;
  if (error)
    return <p className="text-center text-primary">Error loading data.</p>;

  const meals = data?.meals || [];

  return (
    <div className="mt-[75px]">
      <Container>
        <h2 className="text-[45px] mb-4 font-secondary text-primary font-semibold">
          Dessert
        </h2>
        <Flex>
          <SliderItems items={meals.slice(0, 6)} />
        </Flex>
      </Container>
    </div>
  );
};

export default ThirdRow;
