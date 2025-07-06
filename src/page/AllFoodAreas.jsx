import React from "react";
import { Link } from "react-router";
import { useGetAllRecipeAreasQuery } from "../features/api/recipeApiSlice"; 
import Container from "../layouts/Container";

const AllFoodAreas = () => {
 const areaImages = {
  American: "https://source.unsplash.com/500x300/?american,food",
  British: "https://source.unsplash.com/500x300/?british,food",
  Canadian: "https://source.unsplash.com/500x300/?canadian,food",
  Chinese: "https://source.unsplash.com/500x300/?chinese,food",
  Croatian: "https://source.unsplash.com/500x300/?croatian,food",
  Dutch: "https://source.unsplash.com/500x300/?dutch,food",
  Egyptian: "https://source.unsplash.com/500x300/?egyptian,food",
  Filipino: "https://source.unsplash.com/500x300/?filipino,food",
  French: "https://source.unsplash.com/500x300/?french,food",
  Greek: "https://source.unsplash.com/500x300/?greek,food",
  Indian: "https://source.unsplash.com/500x300/?indian,food",
  Irish: "https://source.unsplash.com/500x300/?irish,food",
  Italian: "https://source.unsplash.com/500x300/?italian,food",
  Jamaican: "https://source.unsplash.com/500x300/?jamaican,food",
  Japanese: "https://source.unsplash.com/500x300/?japanese,food",
  Kenyan: "https://source.unsplash.com/500x300/?kenya,food",
  Malaysian: "https://source.unsplash.com/500x300/?malaysia,food",
  Mexican: "https://source.unsplash.com/500x300/?mexican,food",
  Moroccan: "https://source.unsplash.com/500x300/?moroccan,food",
  Polish: "https://source.unsplash.com/500x300/?polish,food",
  Portuguese: "https://source.unsplash.com/500x300/?portugal,food",
  Russian: "https://source.unsplash.com/500x300/?russian,food",
  Spanish: "https://source.unsplash.com/500x300/?spanish,food",
  Thai: "https://source.unsplash.com/500x300/?thai,food",
  Tunisian: "https://source.unsplash.com/500x300/?tunisian,food",
  Turkish: "https://source.unsplash.com/500x300/?turkish,food",
  Vietnamese: "https://source.unsplash.com/500x300/?vietnamese,food"
};

const getImageForArea = (areaName) =>
  areaImages[areaName] || `https://source.unsplash.com/500x300/?${areaName},food`;


  const { data, isLoading, error } = useGetAllRecipeAreasQuery();

  if (isLoading)
    return <p className="text-center text-primary">Loading...</p>;

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
  backgroundImage: `url(${getImageForArea(area.strArea) || '/fallback.jpg'})`
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
