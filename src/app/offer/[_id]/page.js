import { getOffer } from "@/app/api";
import Media from "./_components/media";

export default async function OfferPage({ params }) {
  const { _id: offerId } = params;
  const offer = await getOffer(offerId);

  return (
    <div className="px-56 py-16">
      <div className="text-2xl text-primary font-bold tracking-wider mb-8">
        {offer?.title}
      </div>
      <div className="grid grid-cols-2 gap-8 mt-8 ">
        <div>
          <div dangerouslySetInnerHTML={{ __html: offer?.description }}></div>
          <div className="flex flex-col mt-8">
            <div className="text-gray-500">A partir de</div>
            <div className="text-primary text-2xl">{offer?.price}€ / pax</div>
          </div>
        </div>
        <Media offer={offer} />
      </div>
    </div>
  );
}
