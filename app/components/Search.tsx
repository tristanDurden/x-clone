import React from "react";
import IKImage from "./Image";
import { Input } from "@/components/ui/input"

type Props = {};

export default function Search({}: Props) {
  return (
    <div className="flex bg-slate-300 py-2 px-4 items-center gap-2 rounded-full">
      <IKImage src="public/explore.svg" alt="explore" width={32} height={32} />
      <input type="text" placeholder="Search" className="bg-transparent outline-none placeholder:text-black" />
    </div>
  );
}
