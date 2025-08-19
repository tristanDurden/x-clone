import Link from "next/link";
import React from "react";
import IKImage from "./Image";
import { Button } from "@/components/ui/button";

type Props = {};

export default function Recommendations({}: Props) {
  return (
    <div className="p-4 rounded-2xl border-1 border-borderGray flex flex-col gap-1">
      <h1 className="text-lg font-bold">Who To Follow</h1>
      {/* User Card */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex gap-4">
          <div className="flex relative rounded-full overflow-hidden w-10 h-10 items-center justify-center">
            <IKImage
              className="w-full h-full"
              src="public/next.svg"
              alt="avatar"
              width={64}
              height={64}
              tr={true}
            />
          </div>
          <div>
            <h1 className="text-sm font-bold">John Doe</h1>
            <span className="text-textGray text-sm">@johndoe</span>
          </div>
        </div>
        <Button className="bg-slate-300 text-black rounded-3xl hover:bg-[#eccaca] font-semibold">
          Follow
        </Button>
      </div>
      <div className="flex justify-between items-center gap-4">
        <div className="flex gap-4">
          <div className="flex relative rounded-full overflow-hidden w-10 h-10 items-center justify-center">
            <IKImage
              className="w-full h-full"
              src="public/next.svg"
              alt="avatar"
              width={64}
              height={64}
              tr={true}
            />
          </div>
          <div>
            <h1 className="text-sm font-bold">John Doe</h1>
            <span className="text-textGray text-sm">@johndoe</span>
          </div>
        </div>
        <Button className="bg-slate-300 text-black rounded-3xl hover:bg-[#eccaca] font-semibold">
          Follow
        </Button>
      </div>
      <div className="flex justify-between items-center gap-4">
        <div className="flex gap-4">
          <div className="flex relative rounded-full overflow-hidden w-10 h-10 items-center justify-center">
            <IKImage
              className="w-full h-full"
              src="public/next.svg"
              alt="avatar"
              width={64}
              height={64}
              tr={true}
            />
          </div>
          <div>
            <h1 className="text-sm font-bold">John Doe</h1>
            <span className="text-textGray text-sm">@johndoe</span>
          </div>
        </div>
        <Button className="bg-slate-300 text-black rounded-3xl hover:bg-[#eccaca] font-semibold">
          Follow
        </Button>
      </div>
      <div>
        <Link href={"/"} className="text-iconBlue text-sm">
          See more
        </Link>
      </div>
    </div>
  );
}
