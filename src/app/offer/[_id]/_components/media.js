"use client";

import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";

export default function Media({ offer }) {
  return (
    <>
      <div className="flex flex-col gap-8">
        <PhotoProvider>
          {offer?.medias
            ?.filter((_, index) => index === 0)
            .map((media, index) => (
              <PhotoView src={media} key={index}>
                <Image
                  src={`https:${media}`}
                  alt=""
                  className="rounded-xl shadow-xl shadow-primary h-96 w-full object-cover"
                  width={2000}
                  height={2000}
                />
              </PhotoView>
            ))}
        </PhotoProvider>
        <div className="grid grid-cols-4 gap-8 ">
          <PhotoProvider>
            {offer?.medias
              ?.filter((_, index) => index > 0)
              .map((media, index) => (
                <PhotoView src={media} key={index}>
                  <Image
                    src={`https:${media}`}
                    alt=""
                    className="rounded-xl shadow-xl shadow-primary h-36 w-full object-cover"
                    width={2000}
                    height={2000}
                  />
                </PhotoView>
              ))}
          </PhotoProvider>
        </div>
      </div>
    </>
  );
}
