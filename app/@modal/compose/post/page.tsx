"use client";
import IKImage from "@/app/components/Image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function PostModal({}: Props) {
  const router = useRouter();
  const closeModal = () => {
    router.back();
  };

  return (
    <div className=" absolute w-full h-full top-0 left-0 z-20 bg-slate-200/50 flex justify-center">
      <div className="py-4 px-8 rounded-xl bg-white w-[600px] h-max mt-12  flex flex-col">
        {/* Top */}
        <div className="flex items-center justify-between">
          <div onClick={closeModal} className="cursor-pointer">
            X
          </div>
          <div className="text-iconBlue font-bold">Drafts</div>
        </div>
        {/* Center */}
        <div className="py-6 flex gap-4">
          <div className="relative overflow-hidden rounded-full w-10 h-10">
            <IKImage
              className="w-full h-full"
              src="public/next.svg"
              alt="avatar"
              width={64}
              height={64}
              tr={true}
            />
          </div>
          <Input
            className="flex-1 text-lg bg-transparent"
            type="text"
            placeholder="What's Happenning?"
          />
        </div>
        {/* Bottom */}
        <div className="flex justify-between items-center gap-4 flex-wrap border-t border-black pt-4">
          <div className="flex flex-wrap gap-4">
            <IKImage
              src="public/image.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <IKImage
              src="public/gif.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <IKImage
              src="public/poll.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <IKImage
              src="public/emoji.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <IKImage
              src="public/schedule.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <IKImage
              src="public/location.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
          <Button className="bg-slate-400 hover:bg-pink-300 cursor-pointer font-bold text-black rounded-full">
            Post
          </Button>
        </div>
      </div>
    </div>
  );
}
