import React, { useEffect, useState } from 'react'

const NewsCard = () => {
    const [cards,setCards]=useState([]);
    

    useEffect(()=>{
        fetch('NewsCard.json')
        .then(res=>res.json())
        .then(data =>{
            setCards(data);
        })
    },[])
  return (
    <div>
        <div className='container mx-auto p-5 px-[5%]' >
                <div className="grid gap-8 row-gap-5 mb-8 bg-[#F9F9F9] sm:grid-cols-2 lg:grid-cols-3 sm:mx-auto justify-center ">
                    {cards.map((card) => (
                        <div key={card.id} className="relative group shadow-lg">
                            {/* Group class at the card level */}
                            <div className="relative w-full overflow-hidden rounded shadow-lg">
                                {/* Image */}
                                <img
                                    src={card.image}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                    alt={card.name}
                                />

                                {/* Date with hover translate effect */}
                                <div className="absolute top-8  bg-[#00A1E6] h-10 w-28  p-2 rounded-br-full rounded-tr-[3994px] text-white text-sm font-normal transform transition-transform duration-700 group-hover:delay-150  group-hover:-translate-y-4 z-20 group-hover:rounded-br-[3994px] group-hover:rounded-tr-full group-hover:w-[120px]">
                                    {card.date_of_publication}
                                </div>
                            </div>

                            <div className="p-6 ">
                                <p className="transition-colors duration-500 font-rajdhani hover:text-[#00A1E6] font-bold text-[28px] leading-8 pb-3 py-4">
                                    {card.title}
                                </p>
                                <p className='font-roboto'>{card.description}</p>
                            </div>

                            {/* Author section */}
                            <div className="flex justify-between items-center border-t border-[#EEEEEE] p-6 ">
                                <div className="flex items-center">
                                    {/* Author image */}
                                    <img
                                        src={card.author_image} // Assuming this field exists in your data
                                        alt="Author"
                                        className="w-10 h-10 rounded-full border-[#FF7906] border-2 mr-3"
                                    />
                                     <div className="text-base font-normal flex">                                    
                                    <p className="text-gray-900 mr-1">By </p>
                                    <a className='text-[#00A1E6]'>{card.author}</a>
                                  </div>

                                    
                                </div>

                                {/* Read more link */}
                                <div>
                                    <a
                                        href="#"
                                        className="text-[#00A1E6] underline "
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

    </div>
  )
}

export default NewsCard