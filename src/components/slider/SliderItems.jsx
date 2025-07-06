import React from "react";
import Slider from "react-slick";
import Container from "../../layouts/Container";
import Flex from "../../layouts/Flex";
import { Link } from "react-router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderItems({ items }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoPlay: true,
    autoplay: true,
    speed: 2000,
    cssEase: "linear",
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container my-10">
      <Container>
        <Flex className="justify-between gap-x-10">
          <Slider {...settings} className="w-full">
            {items.map((item) => (
              <div
                key={item.idMeal}
                className="mx-10 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
              >
                <Link to={`/food/${item.idMeal}`}>
                  <img
                    className="w-full h-56 object-cover"
                    src={item?.strMealThumb}
                    alt={item?.strMeal}
                  />
                </Link>

                <div className="p-5">
                  <Link to={`/food/${item.idMeal}`}>
                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 hover:text-[#84BD00] transition">
                      {item?.strMeal || "Food Name"}
                    </h5>
                  </Link>

                  <p className="mb-3 text-gray-700 text-sm">
                    {item?.strCategory
                      ? `Category: ${item.strCategory}`
                      : "No category available"}
                  </p>

                  <Link
                    to={`/food/${item.idMeal}`}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white"
                    style={{
                      backgroundColor: "#84BD00",
                      borderRadius: "20px",
                    }}
                  >
                    View Recipe
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </Flex>
      </Container>
    </div>
  );
}

export default SliderItems;
