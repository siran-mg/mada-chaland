import { getHeadline, getOffers } from "./api";
import OfferItem from "./_components/offer";

export default async function Home() {
  const offers = await getOffers();
  const headline = await getHeadline();
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${headline?.medias?.[0]})`,
          backgroundSize: "cover",
          height: "700px",
          width: "100%",
        }}
      >
        <div
          className="flex justify-center items-center text-white font-semibold tracking-wide text-4xl m-auto h-full"
          dangerouslySetInnerHTML={{ __html: headline.text }}
        ></div>
      </div>

      <div className="relative rounded-t-3xl -top-5 bottom-0 w-full bg-surface h-full px-56 py-8">
        <div className="text-center text-4xl mb-16 mt-8">Nos offres</div>

        <div className="flex flex-col gap-16">
          {offers?.map((offer, index) => (
            <OfferItem offer={offer} index={index} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
