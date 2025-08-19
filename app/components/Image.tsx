"use client";
import React, { useState } from "react";
import { Image, buildSrc } from "@imagekit/next";

type ImageType = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  tr?: boolean;
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function IKImage(props: ImageType) {
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  return (
    <Image
      urlEndpoint={urlEndpoint}
      alt={props.alt}
      src={props.src}
      className={props.className}
      width={props.width}
      height={props.height}
      {...(props.tr
        ? {
            transformation: [
              { width: `${props.width}`, height: `${props.height}` },
            ],
          }
        : {})}
      //placeholder poor quality pre render of image
      style={
        showPlaceholder
          ? {
              backgroundImage: `url(${buildSrc({
                urlEndpoint: "https://ik.imagekit.io/ikmedia",
                src: "/default-image.jpg",
                transformation: [
                  // {}, // Any other transformation you want to apply
                  {
                    quality: 20,
                    blur: 80,
                  },
                ],
              })})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
      onLoad={() => {
        setShowPlaceholder(false);
      }}
    />
  );
}
