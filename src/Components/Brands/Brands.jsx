import React, { useState } from 'react';
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';


const testimonials = [
    {
      id: 1,
      name: 'Seymour Buts',
      designation: 'CEO,Google Inc',
      image: 'https://webextheme.com/html/loxicat/images/clients/client1.png',
      testimonial: 'Ut aenean ipsum pharetra risus ultricies rhoncus imperdiet. Tempor velit nullam blandit leo aliquet volutpat.',
    },
    {
      id: 2,
      name: 'Seymour Buts',
      designation: 'CEO,Google Inc',
      image: 'https://webextheme.com/html/loxicat/images/clients/client2.png',
      testimonial: 'Ut aenean ipsum pharetra risus ultricies rhoncus imperdiet. Tempor velit nullam blandit leo aliquet volutpat.',
    },
    {
      id: 3,
      name: 'Robert Jhon',
      designation: 'CEO,Apple Inc',
      image: "https://webextheme.com/html/loxicat/images/clients/client4.png",
      testimonial: 'Ut aenean ipsum pharetra risus ultricies rhoncus imperdiet. Tempor velit nullam blandit leo aliquet volutpat.',
    },
    {
      id: 4,
      name: 'Robert Jhon',
      designation: 'CEO,Apple Inc',
      image: 'https://webextheme.com/html/loxicat/images/clients/client5.png',
      testimonial: 'Ut aenean ipsum pharetra risus ultricies rhoncus imperdiet. Tempor velit nullam blandit leo aliquet volutpat.',
    },
    {
      id: 5,
      name: 'Selina Andrey',
      designation: 'CEO,Google Inc',
      image: 'https://webextheme.com/html/loxicat/images/clients/client5.png',
     
    },
    {
      id: 6,
      name: 'Selina Andrey',
      designation: 'CEO,Google Inc',
      image: 'https://webextheme.com/html/loxicat/images/clients/client5.png',
     
    },
    {
      id: 7,
      name: 'Selina Andrey',
      designation: 'CEO,Google Inc',
      image: 'https://webextheme.com/html/loxicat/images/clients/client5.png',
     
    },
  ];
  
  const Brands = () => {
    return (
      <div className=" py-12 px-36 bg-[#0786FC]">
         
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 3000 }}
          className="grid grid-cols-1 md:grid-cols-3 p-3 "
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="flex justify-center">
              <div className=" p-8 rounded-lg  text-center">
                
                
                
               
                
                <div className='flex  '>
                <div className='border h-24 w-52  bg-white'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-40 h-12 mt-5 "
                  />
                 
                </div>
              
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
    );
  };
  
  export default Brands;
