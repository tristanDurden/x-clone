import React from "react";
import IKImage from "./Image";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";
import { imageKit } from "@/lib/imageKitUtils";
import IKVideo from "./Video";
import Link from "next/link";

interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetadata?: {
    sensitive: boolean;
  };
}

export default async function Post({ type }: { type?: "status" | "comment" }) {
  const getFileDetails = async (
    fileId: string
  ): Promise<FileDetailsResponse> => {
    return new Promise((resolve, reject) => {
      imageKit.getFileDetails(fileId, function (error, result) {
        if (error) reject(error);
        else resolve(result as FileDetailsResponse);
      });
    });
  };

  const fileDetails = await getFileDetails("689e082c5c7cd75eb8e2e0c5");

  console.log(fileDetails);

  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/* Post Type */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        {/* Repost */}
        <div className="flex group items-center gap-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="text-textGray"
          >
            <path
              d="M6,14V9A6,6,0,0,1,16.89,5.54"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <polyline
              points="8 12 6 14 4 12"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M18,10v5A6,6,0,0,1,7.11,18.46"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <polyline
              points="16 12 18 10 20 12"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <span>Dima Dev reposted</span>
      </div>
      {/* Post content */}
      {/* </div><div className="flex gap-4"> */}
      <div className={`flex gap-4 ${type === "status" && "flex-col"}`}>
        {/* Avatar */}
        <div
          className={`${
            type === "status" && "hidden"
          } flex relative w-10 h-10 overflow-hidden rounded-full justify-center items-center`}
        >
          <IKImage
            src="public/next.svg"
            alt="avatar"
            width={100}
            height={100}
            tr={true}
          />
        </div>
        {/* Content */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="w-full flex justify-between">
            {/* Top  */}
            <Link href={"/test"} className="flex gap-4">
              <div
                className={`${
                  type !== "status" && "hidden"
                } flex relative w-10 h-10 overflow-hidden rounded-full justify-center items-center`}
              >
                <IKImage
                  src="public/next.svg"
                  alt="avatar"
                  width={100}
                  height={100}
                  tr={true}
                />
              </div>
              <div
                className={`flex items-center gap-1 flex-wrap ${
                  type === "status" && "flex-col gap-0 items-start"
                }`}
              >
                <h1 className="text-md font-bold">Dima Dev</h1>
                <span
                  className={`text-textGray ${type === "status" && "text-sm"}`}
                >
                  1 day ago
                </span>
                {type !== "status" && (
                  <span className="text-textGray">@dimadev</span>
                )}
              </div>
            </Link>
            <PostInfo />
          </div>
          {/* Text & Media */}
          <div>
            <Link href={"/test/status/123"}>
              <p className={`${type === "status" && "text-lg"}`}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
                consequuntur officia tempora rem quisquam, id sit cum totam
                quaerat enim vitae fugiat, suscipit ducimus? Est suscipit cum
                modi mollitia deleniti!
              </p>
            </Link>
          </div>
          {fileDetails && fileDetails.fileType === "image" && (
            <IKImage
              src={fileDetails.filePath}
              alt=""
              width={fileDetails.width}
              height={fileDetails.height}
              //className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
            />
          )}
          {fileDetails && fileDetails.fileType === "non-image" && (
            <IKVideo
              src={fileDetails.filePath}
              //className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
            />
          )}
          {type === "status" && (
            <span className="text-textGray">8:41 . Dec 5 2025</span>
          )}
          <PostInteractions />
        </div>
      </div>
    </div>
  );
}
