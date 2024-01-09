"use client";

import Link from "next/link";
import { PhotoProvider, PhotoView } from "react-photo-view";

export default function OfferItem({ offer, index }) {
  return (
    <div className="grid grid-cols-2 gap-8 items-center" key={offer.title}>
      <PhotoProvider>
        <PhotoView src={[offer.image]}>
          <img
            src={offer.image}
            alt=""
            className={`rounded-xl shadow-xl shadow-primary h-96 w-full object-cover ${
              index % 2 !== 0 && "order-last"
            }`}
          />
        </PhotoView>
      </PhotoProvider>

      <div>
        <div className="text-2xl text-primary font-bold tracking-wider">
          {offer.title}
        </div>
        <div dangerouslySetInnerHTML={{ __html: offer.shortDescription }}></div>
        <Link href={`/offer/${offer.id}`} className="text-primary">
          <button className="flex items-center bg-secondary shadow-primary text-onSecondary uppercase rounded-full mt-2 px-8 py-2 shadow-lg hover:scale-110 duration-100">
            En savoir plus
            <img
              src="./assets/icons/arrow-right.svg"
              alt=""
              className="w-4 h-4 ml-4 scale-125"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
