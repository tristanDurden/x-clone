"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

;

export default function ImageEditor({
  onClose,
  previewURL,
  settings,
  setSettings,
}: {
  onClose: () => void;
  previewURL: string;
  settings: {
    type: "original" | "wide" | "square";
    sensitive: boolean;
  };
  setSettings: React.Dispatch<
    React.SetStateAction<{
      type: "original" | "wide" | "square";
      sensitive: boolean;
    }>
  >;
}) {
  const handleChangeSensitive = (sensitive: boolean) => {
    setSettings((prev) => ({ ...prev, sensitive }));
  };
  const handleChangeType = (type: "original" | "wide" | "square") => {
    setSettings((prev) => ({ ...prev, type }));
  };
  return (
    <div className="fixed w-full h-full left-0 top-0 bg-black/75 z-10 flex items-center justify-center">
      <div className="bg-black rounded-xl p-12 flex flex-col gap-4">
        {/* Top */}
        <div className="flex items-center justify-between">
          <div className="flex justify-between items-center gap-8">
            <svg
              className="cursor-pointer"
              onClick={onClose}
              width={32}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M5 12H19M5 12L11 6M5 12L11 18"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <h1 className="font-bold text-xl text-white">Media Settings</h1>
          </div>
          <Button variant="outline" 
            onClick={onClose}
            type="button"
            className="cursor-pointer"
            >
            Save
          </Button>
        </div>
        {/* Image Content */}
        <div className="flex w-[600px] h-[600px] items-center z-20">
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
        </div>
        {/* Settings */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-8">
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => handleChangeType("original")}
            >
              <svg
                width={24}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  color: settings.type === "original" ? "#1d9bf0" : "#e7e9ea",
                }}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g fill="currentColor">
                    {" "}
                    <path
                      d="M5.994 2c-1.258.015-2.179-.03-2.932.385a1.88 1.88 0 0 0-.837.998C2.06 3.82 2 4.343 2 5v6c0 .658.06 1.179.225 1.617.164.439.461.79.837.998.753.416 1.674.37 2.932.385H10.006c1.258-.015 2.179.03 2.932-.385a1.88 1.88 0 0 0 .838-.998c.164-.438.224-.96.224-1.617V5c0-.658-.06-1.179-.225-1.617a1.88 1.88 0 0 0-.838-.998c-.752-.416-1.673-.37-2.931-.385H5.998zM6 3h4c1.259.015 2.087.06 2.453.262.184.1.29.212.387.472.097.26.16.674.16 1.266v6c0 .592-.063 1.006-.16 1.266-.098.26-.202.371-.385.472-.366.202-1.197.247-2.455.262H6c-1.259-.015-2.09-.06-2.455-.262-.184-.1-.287-.212-
                      .385-.472C3.063 12.006 3 11.592 3 11V5c0-.592.063-1.006.16-1.266.098-.26.201-.371.385-.472C3.91 3.06 4.74 3.015 6 3z"
                      fontWeight="400"
                      fontFamily="sans-serif"
                      white-space="normal"
                      overflow="visible"
                    ></path>{" "}
                    <path
                      d="M6.117 6.247c.167-.07.34-.147.52-.234.184-.092.363-.19.536-.294a8.2 8.2 0 0 0 .494-.338c.161-.121.306-.248.433-.381H9v6H8V6.348c-.448.347-1.012.566-1.494.762z"
                      fontWeight="700"
                      fontFamily="Ubuntu"
                      letterSpacing="0"
                      wordSpacing="0"
                      textAnchor="middle"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <p
                className={
                  settings.type === "original"
                    ? "text-iconBlue"
                    : "text-white"
                }
              >
                Original
              </p>
            </div>
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => handleChangeType("wide")}
            >
              <svg
                width={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M3 10V5L8 5M3 14V19L8 19M16 5H21V10M21 14V19H16"
                    stroke={settings.type === "wide" ? "#1d9bf0" : "#e7e9ea"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <p
                className={
                  settings.type === "wide"
                    ? "text-iconBlue"
                    : "text-white"
                }
              >
                Wide
              </p>
            </div>
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => handleChangeType("square")}
            >
              <svg
                width={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V8M4 11V13M4 16V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20H8M11 20H13M16 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V16M20 13V11M20 8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H16M13 4H11"
                    stroke={
                      settings.type === "square" ? "#1d9bf0" : "#e7e9ea"
                    }
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <p
                className={
                  settings.type === "square"
                    ? "text-iconBlue"
                    : "text-white"
                }
              >
                Square
              </p>
            </div>
          </div>
          <div
            className={`cursor-pointer py-1 px-4 rounded-full 
                ${settings.sensitive ? "bg-red-400" : "bg-white"}`}
            onClick={() => handleChangeSensitive(!settings.sensitive)}
          >
            Sensitive
          </div>
        </div>
      </div>
    </div>
  );
}
