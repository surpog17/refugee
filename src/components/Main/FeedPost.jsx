import React from "react";

const FeedPost = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <div className="w-full p-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <img
              src={
                "https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg"
              }
              alt="User"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="font-semibold">Marta Kebede</div>
              <div className="text-gray-500 text-sm">Jan 31, 2024</div>
            </div>
          </div>
          <p className="mt-4">
            I would like to host up to two people. Location – Adama, Bole
          </p>
          <img
            src={
              "https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg"
            }
            alt="Post"
            className="w-full h-64 object-cover mt-4 rounded-lg"
          />
          <div className="mt-4 flex space-x-4">
            <button className="text-blue-500 font-semibold">Connect</button>
            <button className="text-gray-500">Comment</button>
            <button className="text-gray-500">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPost;
