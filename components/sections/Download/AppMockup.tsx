import React from "react";
import { Heart, MessageCircle, Bookmark, MoreHorizontal } from "lucide-react";

const AppMockup = () => {
  const posts = [
    {
      username: "smellslikeoranges",
      time: "12h ago",
      category: "Positive Experiences",
      categoryColor: "bg-[#C88574]",
      postType: "text",
      title: "Really lovely experience with JM last night",
      content: "He was hilarious and kind, so excited to meet again!",
      tags: ["#GreenFlags", "#FirstDate"],
      likes: 498,
      comments: 87,
    },
    {
      username: "CocktailsOnly",
      time: "24m ago",
      category: "Breakups & Boundaries",
      categoryColor: "bg-[#C88574]",
      postType: "text",
      title: "I deleted him on social media!",
      content: "I finally did it! Thank you everyone for your encouragement...",
      tags: ["#MovingOn", "#SelfCare"],
      likes: 51,
      comments: 17,
    },
  ];

  return (
    <div className="bg-him-purple-medium relative rounded-[30px] p-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
      <div className="absolute border border-him-purple-dark inset-[-1px] pointer-events-none rounded-[30px] shadow-him-md" />
      <div className="relative bg-him-peach rounded-[25px] p-4 text-left overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 pb-2">
          <div className="font-montserrat font-semibold text-him-purple-dark text-base">
            Forum Feed
          </div>
        </div>

        {/* Posts */}
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {posts.map((post, index) => (
            <div key={index} className="space-y-2">
              {/* Header with username and actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-montserrat font-bold text-him-purple-dark text-xs">
                    {post.username}
                  </span>
                  <span className="text-[#977A99] font-montserrat font-medium text-[10px]">
                    {post.time}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Bookmark className="w-3 h-3 text-him-purple-dark" strokeWidth={2} />
                  <MoreHorizontal className="w-3 h-3 text-him-purple-dark" />
                </div>
              </div>

              {/* Post Card with shadow */}
              <div className="relative">
                {/* Shadow effect */}
                <div className="absolute -left-[3px] top-[3px] w-full h-full bg-him-purple-dark rounded-2xl opacity-20" />
                
                {/* Card content */}
                <div className="relative bg-him-orange-light rounded-2xl border border-him-purple-dark p-3">
                  {/* Meta badges */}
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <div className={`${post.categoryColor} px-2 py-0.5 rounded-xl`}>
                      <span className="text-white text-[10px] font-montserrat font-semibold">
                        {post.category}
                      </span>
                    </div>
                    <div className="bg-him-primary-medium px-2 py-0.5 rounded">
                      <span className="text-him-text-secondary text-[10px] font-montserrat font-semibold uppercase">
                        {post.postType}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="font-montserrat font-semibold text-him-purple-dark text-sm mb-1 leading-tight">
                    {post.title}
                  </div>

                  {/* Tags */}
                  {post.tags && (
                    <div className="flex gap-1 mb-2 flex-wrap">
                      {post.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-him-purple-dark/10 px-2 py-0.5 rounded-full text-[10px] text-him-purple-dark font-inter"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Content */}
                  <div className="font-inter text-him-text-primary text-xs leading-relaxed">
                    {post.content}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2">
                {/* Like button with shadow */}
                <div className="relative">
                  <div className="absolute -left-[1px] top-[1px] bg-him-purple-dark rounded-full px-3 py-1 opacity-20" />
                  <div className="relative flex items-center gap-1 bg-white rounded-full px-3 py-1 border border-him-purple-dark">
                    <Heart className="w-3 h-3 text-him-error fill-him-error" strokeWidth={2} />
                    <span className="text-[10px] font-montserrat font-semibold text-him-purple-dark">
                      {post.likes}
                    </span>
                  </div>
                </div>

                {/* Comment button with shadow */}
                <div className="relative">
                  <div className="absolute -left-[1px] top-[1px] bg-him-purple-dark rounded-full px-3 py-1 opacity-20" />
                  <div className="relative flex items-center gap-1 bg-white rounded-full px-3 py-1 border border-him-purple-dark">
                    <MessageCircle className="w-3 h-3 text-him-purple-dark" strokeWidth={2} />
                    <span className="text-[10px] font-montserrat font-semibold text-him-purple-dark">
                      {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppMockup;