import React from "react";
import { Video } from "@imagekit/next";

type VideoType = {
  src: string;
  className?: string;
};

export default function IKVideo({ src, className }: VideoType) {
  return (
    <div>
      <Video
        urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}
        src={src}
        width={600}
        height={400}
        controls
        classname={className}
        transformation={[
          //{ width: "1920", height: "1080", quality: 90 },
          { raw: "l-text,i-default,fs-40,co-white,l-end"}
        ]}
      />
    </div>
  );
}
