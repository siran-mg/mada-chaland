import { PhotoProvider, PhotoView } from "react-photo-view";

export default function PartnerItem({ partner }) {
  console.log(partner?.medias);
  return (
    <div className="flex gap-8">
      <PhotoProvider>
        {partner?.medias.map((media, index) => (
          <PhotoView src={media}>
            <img
              src={media}
              alt=""
              className={`rounded-xl shadow-xl shadow-primary h-64 w-64 object-cover ${
                index !== 0 && "hidden"
              }`}
            />
          </PhotoView>
        ))}
      </PhotoProvider>

      <div dangerouslySetInnerHTML={{ __html: partner?.description }}></div>
    </div>
  );
}
