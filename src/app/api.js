import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import * as contentful from "contentful";

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
          description: documentToHtmlString(car.fields.description),
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
          description: documentToHtmlString(car.fields.description),
          medias: car.fields.medias.map((media) => media.fields.file.url),
        };
      })
    );
}

export function getHeadline() {
  return content
    .getEntry("mvM8H2cs7vwzjMVY7cA12")
    .then((res) => documentToHtmlString(res.fields.value));
}

export function getOffers() {
  return content
    .getEntries({
      content_type: "offer",
    })
    .then((res) =>
      res.items.map((offer) => {
        return {
          id: offer.sys.id,
          title: offer.fields.title,
          description: documentToHtmlString(offer.fields.description),
          image: offer.fields.medias[0].fields.file.url,
        };
      })
    );
}

export function getOffer(offerId) {
  return content.getEntry(offerId).then((offer) => ({
    title: offer.fields.title,
    description: documentToHtmlString(offer.fields.description),
    medias: offer.fields.medias.map((media) => media.fields.file.url),
  }));
}
