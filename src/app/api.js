import * as contentful from "contentful";
import { cache } from "react";

export const content = contentful.createClient({
  space: "6wkh0zv78kbn",
  accessToken: "69meeX2pV21M4CdcfqHAwcFZfeUuJ4r3IoEgfoYmmE0",
});

export function getCars() {
  return content
    .getEntries({
      content_type: "car",
    })
    .then((res) =>
      res.items.map((car) => {
        return {
          description: car.fields.description,
          medias: car.fields.medias.map((media) => media.fields.file.url),
        };
      })
    );
}

export function getHotels() {
  return content
    .getEntries({
      content_type: "hotel",
    })
    .then((res) =>
      res.items.map((car) => {
        return {
          description: car.fields.description,
          medias: car.fields.medias.map((media) => media.fields.file.url),
        };
      })
    );
}

export function getHeadline() {
  return content
    .getEntry("60mI3p6xwqWXVAxsdJggCy")
    .then((res) => res.fields.text);
}

export const getOffers = cache(async () => {
  return content
    .getEntries({
      content_type: "offer",
    })
    .then((res) =>
      res.items.map((offer) => {
        return {
          id: offer.sys.id,
          title: offer.fields.title,
          description: offer.fields.description,
          shortDescription: offer.fields.shortDescription,
          image: offer.fields.medias[0].fields.file.url,
        };
      })
    );
});

export function getOffer(offerId) {
  return content.getEntry(offerId).then((offer) => ({
    title: offer.fields.title,
    description: offer.fields.description,
    medias: offer.fields.medias.map((media) => media.fields.file.url),
  }));
}
