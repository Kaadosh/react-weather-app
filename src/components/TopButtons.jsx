import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Moscow",
    },
    {
      id: 2,
      title: "Saint Petersburg",
    },
    {
      id: 3,
      title: "Berlin",
    },
    {
      id: 4,
      title: "London",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];

  return (
    <div className="flex items-center justify-around   my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          onClick={() => setQuery({ q: city.title })}
          className="text-white text-lg font-medium"
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
