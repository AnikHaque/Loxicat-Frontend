import React, { useState } from 'react';
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';






const testimonials = [
  {
    id: 1,
    name: 'Seymour Buts',
    designation: 'CEO,Google Inc',
    image: 'https://lifeinnovior.org/wp-content/uploads/2022/09/img__0000_Layer-8.jpg',
    testimonial: 'Ut aenean ipsum pharetra risus ultricies rhoncus imperdiet. Tempor velit nullam blandit leo aliquet volutpat.',
  },
  {
    id: 2,
    name: 'Seymour Buts',
    designation: 'CEO,Google Inc',
    image: 'https://lifeinnovior.org/wp-content/uploads/2022/09/img__0003_Layer-5.jpg',
    testimonial: 'Ut aenean ipsum pharetra risus ultricies rhoncus imperdiet. Tempor velit nullam blandit leo aliquet volutpat.',
  },
  {
    id: 3,
    name: 'Robert Jhon',
    designation: 'CEO,Apple Inc',
    image: "https://lifeinnovior.org/wp-content/uploads/2022/09/img__0007_Layer-1.jpg",
    testimonial: 'Ut aenean ipsum pharetra risus ultricies rhoncus imperdiet. Tempor velit nullam blandit leo aliquet volutpat.',
  },
  {
    id: 4,
    name: 'Robert Jhon',
    designation: 'CEO,Apple Inc',
    image: 'https://lifeinnovior.org/wp-content/uploads/2022/09/img__0006_Layer-2.jpg',
    testimonial: 'Ut aenean ipsum pharetra risus ultricies rhoncus imperdiet. Tempor velit nullam blandit leo aliquet volutpat.',
  },
  {
    id: 5,
    name: 'Selina Andrey',
    designation: 'CEO,Google Inc',
    image: 'https://lifeinnovior.org/wp-content/uploads/2022/09/img__0005_Layer-3.jpg',
    testimonial: 'Ut aenean ipsum pharetra risus ultricies rhoncus imperdiet. Tempor velit nullam blandit leo aliquet volutpat.',
  },
];

const TestimonialSlide = () => {
  return (
    <div className=" py-12 bg-white">
        
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="grid grid-cols-1 md:grid-cols-3 container mx-auto px-[5%]"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="flex justify-center">
            <div className=" p-8 rounded-lg  text-center ">
              
              
              
             <i>
             <p className="text-white text-lg mb-6 border  shadow-3xl rounded-lg bg-black   h-48 w-96  text-center p-10 border-t-[#ff7906]">{testimonial.testimonial}</p>
             </i>
              
              <div className='flex '>
              <div>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-xl mb-2 "
                />
               
              </div>
              <div className='px-5'>
              <h5 className="font-bold  text-2xl font-rajdhani">{testimonial.name}</h5>
              <p className="text-[#00A1E6] text-left">{testimonial.designation}</p>
              </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlide;