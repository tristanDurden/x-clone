import Link from "next/link";
import Image from "./components/Image";
import Share from "./components/Share";
import Feed from "./components/Feed";


export default function Home() {
  return (
    <div className="">
      <div className="flex justify-between text-textGray font-bold border-b-[1px] border-borderGray">
        <Link 
          href={'/'}
          className="mx-auto py-3 flex items-center border-b-4 border-iconBlue"
          >For you</Link>
        <Link 
          href={'/'}
          className="mx-auto py-3 flex items-center border-b-4"
          >Following</Link>
      </div>
      <Share/>
      <Feed/>
    </div>
  );
}
