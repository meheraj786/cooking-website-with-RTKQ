import React from "react";
import { Link } from "react-router";
import { useGetAllRecipeAreasQuery } from "../features/api/recipeApiSlice";
import Container from "../layouts/Container";

const AllFoodAreas = () => {
  const areaImages = {
    American:
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&h=300&fit=crop",
    British:
      "https://images.unsplash.com/photo-1599020792689-9c52c796acb8?w=500&h=300&fit=crop",
    Canadian:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=300&fit=crop",
    Chinese:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&h=300&fit=crop",
    Croatian:
      "https://images.unsplash.com/photo-1542574621-e088a4464f7e?w=500&h=300&fit=crop",
    Dutch:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
    Egyptian:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=300&fit=crop",
    Filipino:
      "https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?w=500&h=300&fit=crop",
    French:
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=500&h=300&fit=crop",
    Greek:
      "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?w=500&h=300&fit=crop",
    Indian:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=300&fit=crop",
    Irish:
      "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=500&h=300&fit=crop",
    Italian:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop",
    Jamaican:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop",
    Japanese:
      "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=500&h=300&fit=crop",
    Kenyan:
      "https://images.unsplash.com/photo-1544982503-9f984c14501a?w=500&h=300&fit=crop",
    Malaysian:
      "https://images.unsplash.com/photo-1593181595617-877ee8fbe4b1?w=500&h=300&fit=crop",
    Mexican:
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&h=300&fit=crop",
    Moroccan:
      "https://images.unsplash.com/photo-1526471100048-26d6dd608b3b?w=500&h=300&fit=crop",
    Polish:
      "https://images.unsplash.com/photo-1518491312871-6b3e5c9c5b02?w=500&h=300&fit=crop",
    Portuguese:
      "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=500&h=300&fit=crop",
    Russian:
      "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=500&h=300&fit=crop",
    Spanish:
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&h=300&fit=crop",
    Thai: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=500&h=300&fit=crop",
    Tunisian:
      "https://images.unsplash.com/photo-1526471100048-26d6dd608b3b?w=500&h=300&fit=crop",
    Turkish:
      "https://images.unsplash.com/photo-1599020792689-9c52c796acb8?w=500&h=300&fit=crop",
    Vietnamese:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?w=500&h=300&fit=crop",
  };

  const getImageForArea = (areaName) =>
    areaImages[areaName] ||
    `https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop`;

  const { data, isLoading, error } = useGetAllRecipeAreasQuery();

  if (isLoading) return <p className="text-center text-primary">Loading...</p>;

  if (error)
    return <p className="text-center text-primary">Error loading data.</p>;

  const areas = data?.meals || [];

  return (
    <div className="py-10 px-6 relative z-[100] bg-gray-50">
      <h2 className="text-primary font-secondary font-semibold text-center mb-10 text-[50px]">
        All Food Areas
      </h2>

      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
          {areas.map((area, index) => (
            <Link to={`/area/${area.strArea}`} key={index}>
              <div
                className="rounded-xl shadow-lg overflow-hidden relative group h-[200px] flex items-end justify-start bg-cover bg-center cursor-pointer transition-transform duration-300 hover:scale-105"
                style={{
                  backgroundImage: `url(${
                    getImageForArea(area.strArea) || "/fallback.jpg"
                  })`,
                }}
              >
                <div className="w-full h-full bg-black/40 absolute top-0 left-0 group-hover:bg-black/20 transition"></div>
                <h3 className="relative text-white text-2xl font-bold p-4">
                  {area.strArea}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllFoodAreas;
