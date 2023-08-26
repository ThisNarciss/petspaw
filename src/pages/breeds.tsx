import { Breeds } from "@/components/screens/breeds/Breeds";
import { CatServices } from "@/services/CatServices";
import { ICat } from "@/ts/interfaces";
import { GetStaticProps } from "next";
import { FC } from "react";

interface IBreed {
  id: string;
  name: string;
}

export interface IProps {
  breedsList: { value: string; label: string }[];
  searchBreeds: ICat[];
}

export const getStaticProps: GetStaticProps = async () => {
  const breeds = await CatServices.getBreeds();
  const searchBreeds = await CatServices.searchBreeds("all breeds");
  const breedsList = breeds.map((breed: IBreed) => ({
    value: breed.name.toLowerCase(),
    label: breed.name,
  }));

  return {
    props: { breedsList, searchBreeds },
  };
};

const BreedsPage: FC<IProps> = ({ breedsList, searchBreeds }) => {
  return (
    <Breeds
      breedsList={[{ value: "", label: "All breeds" }, ...breedsList]}
      searchBreeds={searchBreeds}
    />
  );
};

export default BreedsPage;
