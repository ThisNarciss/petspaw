import { Gallery } from "@/components/screens/gallery/Gallery";
import { CatServices } from "@/services/CatServices";
import { ICat } from "@/ts/interfaces";
import { GetStaticProps } from "next";
import { FC } from "react";

interface IProps {
  breedsList: { value: string; label: string }[];
  uploadGallery: ICat[];
}

interface IBreed {
  id: string;
  name: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const uploadGallery = await CatServices.getUpload();
  const breeds = await CatServices.getBreeds();
  const breedsList = breeds.map((breed: IBreed) => ({
    value: breed.id,
    label: breed.name,
  }));
  return {
    props: { uploadGallery, breedsList },
    revalidate: 10,
  };
};

const GalleryPage: FC<IProps> = ({ uploadGallery, breedsList }) => {
  return (
    <Gallery
      uploadGallery={uploadGallery}
      breedsList={[{ value: "none", label: "None" }, ...breedsList]}
    />
  );
};

export default GalleryPage;
