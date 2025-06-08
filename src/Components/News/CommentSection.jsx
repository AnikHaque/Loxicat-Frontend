import React from 'react';
import { LuClock9 } from 'react-icons/lu';

import { SlCalender } from 'react-icons/sl';

const CommentSection = () => {
  const comments = [
    {
      id: 1,
      name: 'Hazard Jhonson',
      date: 'March 19, 2019',
      time: '12:00 am',
      avatar: 'https://webextheme.com/html/loxicat/images/footer/recent-post_01.jpg', // Replace with actual avatar URL
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
    },
    {
      id: 2,
      name: 'Alex Williams',
      date: 'March 19, 2019',
      time: '12:00 am',
      avatar: 'https://webextheme.com/html/loxicat/images/footer/recent-post_02.jpg', // Replace with actual avatar URL
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 3,
      name: 'Hazard Jhonson',
      date: 'March 19, 2019',
      time: '12:00 am',
      avatar: 'https://webextheme.com/html/loxicat/images/footer/recent-post_03.jpg', // Replace with actual avatar URL
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
    },
  ];

  return (
    <div className='  container mx-auto  mb-10 ' >
    <div className=" bg-gray-100 w-[1000px] px-20 py-5">
      <h2 className="text-3xl font-bold mb-8 text-black ">(02) Comments:</h2>
      {comments.map((comment) => (
        <div key={comment.id} className=" border-b border-gray-200 pb-4">
          <div className="flex items-start space-x-4">
            <img
              className="w-16 h-16 border border-orange-500 border-t mt-4 "
              src={comment.avatar}
              alt={comment.name}
            />
            <div>
              <div className="text-base font-semibold text-gray-800 mb-4">{comment.name}</div>
              <div className="text-sm text-gray-500 flex">
                <div className='text-sm mt-1 px-1 mb-2'>
                <SlCalender />
                </div>
                <div>
                {comment.date} at
                </div>
                
               <div className='text-sm mt-1 px-1'> <LuClock9 /> </div>{comment.time}
              </div>
              <p className="mt-2 text-gray-700 text-base mb-4">{comment.content}</p>
              <button className="mt-2 text-base text-black  h-11 w-20 border rounded-xl shadow-md hover:bg-[#00A1E6] hover:text-white ">Reply</button>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className=''>
    <div className="bg-gray-100 w-[1000px] px-36 ">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Leave a Reply:</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full h-16 p-3 border border-gray-300 bg-white text-gray-200 rounded-md focus:outline-none focus:border-gray-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full h-16 p-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:border-gray-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Messages"
            rows="6"
            className="w-full h-52 p-5 border border-gray-300 bg-white rounded-md focus:outline-none focus:border-gray-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#00A1E6] text-white h-16 font-semibold py-2 px-6 rounded-md mb-4 hover:bg-[#0c2239] transition-colors"
        >
          POST COMMENT
        </button>
      </form>
    </div>
    </div>
    </div>
    
  );
};

export default CommentSection;