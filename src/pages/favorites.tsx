import { GetStaticProps } from "next";
import { FC } from "react";
import { Favorites } from "@/components/screens/favorites/Favorites";
import { CatServices } from "@/services/CatServices";

interface IFavItem {
  id: number;
  image: { id: string; url: string };
  user_id: string;
}

interface IProps {
  favourite: IFavItem[];
}

export const getStaticProps: GetStaticProps = async () => {
  const favourite = await CatServices.getFavorite("?limit=15");

  return {
    props: { favourite },
    revalidate: 10,
  };
};

const FavoritesPage: FC<IProps> = ({ favourite }) => {
  return <Favorites favourite={favourite} />;
};

export default FavoritesPage;
