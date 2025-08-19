"use client";
import React, { useState } from "react";
import IKImage from "./Image";
import { shareAction } from "../actions";
import Image from "next/image";
import ImageEditor from "./ImageEditor";
import { Button } from "@/components/ui/button";

type Props = {};

export default function Share({}: Props) {
  const [media, setMedia] = useState<File | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [settings, setSettings] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  });

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (media) {
      const formData = new FormData();
      formData.append("file", media);
      formData.append(
        "desc",
        (
          e.currentTarget.querySelector(
            'input[name="desc"]'
          ) as HTMLInputElement
        )?.value || ""
      );

      // Call shareAction directly with the FormData and settings
      await shareAction(formData, settings);
    }
  };

  const previewURL = media ? URL.createObjectURL(media) : null;

  return (
    <form className="flex p-4 gap-8" onSubmit={handleFormSubmit}>
      {/* Avatar */}
      <div className="flex relative items-center justify-center w-10 h-10 rounded-full overflow-hidden">
        <IKImage
          src="public/next.svg"
          alt="avatar"
          width={32}
          height={32}
          tr={true}
        />
      </div>
      {/* Others */}
      <div className="flex-1 flex flex-col gap-4">
        <input
          type="textarea"
          placeholder="What's happening?"
          aria-rowspan={2}
          name="desc"
          className="bg-transparent outline-none placeholder:text-textGray text-xl"
        />
        {/* Preview Image */}
        {media?.type.includes("image") && previewURL && (
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src={previewURL}
              alt="pic"
              width={600}
              height={400}
              className={`w-full ${
                settings.type === "original"
                  ? "h-full object-contain"
                  : settings.type === "square"
                  ? "aspect-square object-cover"
                  : "aspect-video object-cover"
              }`}
            />

            <Button
              variant="outline"
              onClick={() => setIsEditorOpen(true)}
              className="absolute top-3 left-3 hover:font-bold text-slate-500 cursor-pointer opacity-70 hover:opacity-100"
            >
              Edit
            </Button>
            <Button
            onClick={() => setMedia(null)}
              variant="outline"
              className="absolute top-3 right-3 hover:font-bold text-slate-500 cursor-pointer opacity-70 hover:opacity-100"
            >
              X
            </Button>
          </div>
        )}
        {/* Video Preview */}
        {previewURL && media?.type.includes("video") && (
          <div className="relative overflow-hidden">
            <video src={previewURL} controls />
            <Button
            onClick={() => setMedia(null)}
              variant="outline"
              className="absolute top-3 right-3 hover:font-bold text-slate-500 cursor-pointer opacity-70 hover:opacity-100"
            >
              X
            </Button>
          </div>
        )}
        {/* Image Editor */}
        {isEditorOpen && previewURL && (
          <ImageEditor
            onClose={() => setIsEditorOpen(false)}
            previewURL={previewURL}
            settings={settings}
            setSettings={setSettings}
          />
        )}
        {/* Share Panel */}
        <div className="flex justify-between items-center gap-4 flex-wrap">
          <div className="flex flex-wrap gap-4 ">
            <input
              type="file"
              onChange={handleMediaChange}
              className="hidden"
              id="file"
              name="file"
              accept="image/*, video/*"
            />
            <label htmlFor="file">
              <IKImage
                src="public/image.svg"
                alt=""
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </label>
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
          <button
            type="submit"
            className="bg-slate-300 font-bold text-black rounded-full py-2 px-4 hover:bg-[#eccaca]"
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}
