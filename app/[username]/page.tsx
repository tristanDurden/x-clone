import Link from "next/link";
import React from "react";
import IKImage from "../components/Image";
import { Button } from "@/components/ui/button";
import Feed from "../components/Feed";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      {/* Profile Title */}
      <div className="flex gap-8 items-center sticky top-0 py-2 pl-2 z-10 bg-slate-200/25 backdrop-blur-xs">
        <Link href={"/test"}>
          <IKImage
            src="public/arrow-left.svg"
            alt="back"
            width={32}
            height={32}
          />
        </Link>
        <h1 className="font-bold text-lg">Dima Dev</h1>
      </div>
      {/* Info */}
      <div>
        {/* Cover & Avatar Container */}
        <div className="relative w-full">
          {/* Cover */}
          <div className="w-full aspect-[3/1] relative">
            <IKImage
              src="Posts/pexels-mag.jpg"
              alt=""
              width={600}
              height={400}
              tr={true}
            />
          </div>
          {/* Avatar */}
          <div className="w-1/5 aspect-square rounded-full overflow-hidden border-4 border-slate-300 bg-gray-300 absolute left-4 -translate-y-1/2">
            <IKImage
              src="general/hero.webp"
              alt=""
              width={150}
              height={150}
              tr={true}
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-end p-2 gap-2">
          <div className="flex items-center justify-center w-9 h-9 rounded-full border-1 border-slate-300 cursor-pointer">
            <IKImage
              src="public/three-dots.svg"
              alt="more"
              width={20}
              height={20}
            />
          </div>
          <div className="flex items-center justify-center w-9 h-9 rounded-full border-1 border-slate-300 cursor-pointer">
            <IKImage
              src="public/explore.svg"
              alt="explore"
              width={20}
              height={20}
            />
          </div>
          <div className="flex items-center justify-center w-9 h-9 rounded-full border-1 border-slate-300 cursor-pointer">
            <IKImage
              src="public/messages.svg"
              alt="messages"
              width={20}
              height={20}
            />
          </div>

          <Button className="py-2 px-4 rounded-full bg-slate-300 cursor-pointer hover:bg-pink-300 text-black font-bold">
            Follow
          </Button>
        </div>
        {/* User Details */}
        <div className="p-4 flex flex-col gap-2">
          {/* Username & Handle */}
          <h1 className="font-bold text-lg">Dima Dev</h1>
          <span className="text-textGray">@dimadev</span>
          <p>Dima Leichenko Portfolio</p>

          {/* Job & Location & Date */}
          <div className="flex gap-4 text-textGray text-sm pl-4">
            <div className="flex items-center gap-2">
              <IKImage
                src="public/location.svg"
                alt="location"
                width={20}
                height={20}
              />
              <span>Georgia</span>
            </div>
            <div className="flex items-center gap-2">
              <IKImage
                src="public/schedule.svg"
                alt="location"
                width={20}
                height={20}
              />
              <span>Joined February 2020</span>
            </div>
          </div>
          {/* Following & Followers */}
          <div className="flex gap-4">
            <div className=" flex items-center gap-2">
              <span className=" font-bold">100</span>
              <span className="text-textGray text-sm">Followers</span>
            </div>
            <div className=" flex items-center gap-2">
              <span className=" font-bold">151</span>
              <span className="text-textGray text-sm">Followings</span>
            </div>
          </div>
        </div>
      </div>
      {/* Feed */}
      <Feed />
    </div>
  );
}
