import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";

export default function PartnerItem({ partner }) {
  return (
    <div className="flex gap-8">
      <PhotoProvider>
        {partner?.medias.map((media, index) => (
          <PhotoView src={media} key={index}>
            <Image
              src={`https:${media}`}
              alt=""
              className={`rounded-xl shadow-xl shadow-primary h-64 w-64 object-cover ${
                index !== 0 && "hidden"
              }`}
              width={64}
              height={64}
            />
          </PhotoView>
        ))}
      </PhotoProvider>

      <div dangerouslySetInnerHTML={{ __html: partner?.description }}></div>
    </div>
  );
}
