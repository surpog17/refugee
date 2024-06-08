import React from "react";
import { date } from "./DateFormat";
import { RiDeleteBinLine } from "react-icons/ri";
import { Image_url } from "../../api/endPoint";

const FeedPost = ({ post, handleSubmitDelete, user }) => {
  console.log(user, "*&");
  return (
    <div className="flex flex-col items-center">
      <div className="w-full ">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            {post?.idp_info?.profileImage ? (
              <img
                src={
                  "https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg"
                }
                alt="User"
                className="w-12 h-12 rounded-full"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-[#3ba3a4] flex justify-center items-center text-white     ">
                {post?.idp_info?.username[0]}
              </div>
            )}
            <div>
              <div className="flex items-center gap-5">
                <div className="font-semibold">{post?.idp_info?.username}</div>
                {post?.idp_info?.username === user?.actor_profile?.username && (
                  <button
                    onClick={(e) => handleSubmitDelete(e, post.id)}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    title="Remove"
                  >
                    <RiDeleteBinLine />
                  </button>
                )}
              </div>

              <div className="text-gray-500 text-sm">
                {date(post?.shared_at)}
              </div>
            </div>
          </div>
          <p className="mt-4">{post?.story_text}</p>
          {post?.photos?.length > 0 ? (
            // <CarouselTransition
            //   autoplay={true}
            //   autoplayDelay={5000}
            //   loop={true}
            // >
            <div className="flex flex-nowrap gap-x-5">
              {post?.photos?.map((items) => (
                <div className="w-full">
                  <img
                    src={Image_url + items}
                    alt="Post"
                    className="w-full h-80   object-cover mt-4 rounded-lg"
                  />
                </div>
              ))}
            </div>
          ) : (
            // </CarouselTransition>
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDVuaQbojYLTlYezNW7HPVIYO6QiLZsd8RFP86jMuySoBlJ369aVAK0Mtzo7La2hyVcxU&usqp=CAU"
              }
              alt="Post"
              className="w-full h-80   object-cover mt-4 rounded-lg"
            />
          )}

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
