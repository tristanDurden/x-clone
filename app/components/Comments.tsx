import React from "react";
import IKImage from "./Image";
import { Input } from "@/components/ui/input";
import Post from "./Post";
import { Button } from "@/components/ui/button";

type Props = {};

export default function ({}: Props) {
  return (
    <div>
      <form className="flex items-center justify-between gap-4 p-4">
        <div className=" relative w-10 h-10 rounded-full overflow-hidden">
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
          type="text"
          className="bg-transparent p-2 text-lg flex-1 outline-none"
          placeholder="Post your Reply"
        />
        <Button className="bg-slate-300 rounded-full font-bold text-black hover:bg-pink-300">
          Reply
        </Button>
      </form>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
