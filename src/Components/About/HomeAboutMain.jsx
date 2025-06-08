import { useEffect, useState } from "react";

const HomeAboutMain = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("AboutBanner.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, []);

  return (
    <div className="font-rajdhani px-[5%]">
      <p className="font-semibold text-lg text-[#00A1E6] underline pb-3.5">
      Welcome to genesis technology
      </p>
      <h1 className="font-bold text-5xl text-[#0C2239] pb-6">
      Most Leading Industrial Service Provider.
      </h1>
      <p className="text-[#5C5E64] text-base font-roboto pb-5">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eaque, maxime aliquam cum odio aut ex, et blanditiis corporis rerum unde vitae nihil. 
      </p>

      <div>
        {cards.map((card) => (
          <div key={card.id}>
            <li className="flex items-start pb-3 py-4">
              {/* to change the logo, just need to change the span part  */}
              <span className="mr-2 pt-1 ">
               <img className="w-4" src="https://i.postimg.cc/7h6d9Y7r/image-7.png"></img>
              </span>
              <p className="text-base text-[#5C5E64] font-roboto">
                {card.title}
              </p>
            </li>
          </div>
        ))}
      </div>
      <button className="bg-[#00A1E6] text-lg font-roboto text-white px-16	py-5 my-6 hover:bg-[#00A1E6] rounded-md">
        About Us
      </button>
    </div>
  );
};

export default HomeAboutMain;
