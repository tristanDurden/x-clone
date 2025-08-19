import React from "react";
import IKImage from "./Image";
import Link from "next/link";

type Props = {};

export default function PopularTags({}: Props) {
  return (
    <div className="p-4 rounded-2xl border-1 border-borderGray flex flex-col gap-1">
      <h1 className="text-xl font-bold text-textGray">What's Happening</h1>
      {/* Trend Event */}
      <div className="flex gap-4">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden">
          <IKImage
            src="/Posts/lukas.jpg"
            alt="event"
            width={120}
            height={120}
            tr={true}
          />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-black">Another rainy night in town</h2>
          <span className="text-sm text-textGray">Last Night</span>
        </div>
      </div>
      {/* Topic */}
      <div>
        <div className="flex justify-between items-center">
          <span className="text-slate-500 text-sm">Technology . Trending</span>
          <IKImage
            src="public/three-dots.svg"
            alt="more"
            width={16}
            height={16}
          />
        </div>
        <h2 className="text-slate-700 font-bold">OpenAI</h2>
        <span className="text-black text-sm">20k posts</span>
      </div>

      <div>
        <div className="flex justify-between items-center">
          <span className="text-slate-500 text-sm">Technology . Trending</span>
          <IKImage
            src="public/three-dots.svg"
            alt="more"
            width={16}
            height={16}
          />
        </div>
        <h2 className="text-slate-700 font-bold">OpenAI</h2>
        <span className="text-black text-sm">20k posts</span>
      </div>

      <div>
        <div className="flex justify-between items-center">
          <span className="text-slate-500 text-sm">Technology . Trending</span>
          <IKImage
            src="public/three-dots.svg"
            alt="more"
            width={16}
            height={16}
          />
        </div>
        <h2 className="text-slate-700 font-bold">OpenAI</h2>
        <span className="text-black text-sm">20k posts</span>
      </div>

      <Link href={"/"} className="text-iconBlue text-sm">
        See more
      </Link>
    </div>
  );
}
