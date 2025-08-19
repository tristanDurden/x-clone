import Comments from "@/app/components/Comments";
import IKImage from "@/app/components/Image";
import Post from "@/app/components/Post";
import Link from "next/link";
import React from "react";

type Props = {};

export default function StatusPage({}: Props) {
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
        <h1 className="font-bold text-lg">Post</h1>
      </div>
      <Post type="status" />
      <Comments />
    </div>
  );
}
