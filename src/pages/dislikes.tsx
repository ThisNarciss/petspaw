import { Dislikes } from "@/components/screens/dislikes/Dislikes";
import { CatServices } from "@/services/CatServices";
import { ICat } from "@/ts/interfaces";
import { GetStaticProps } from "next";
import { FC } from "react";

interface IProps {
  dislikedCats: ICat[];
}

export const getStaticProps: GetStaticProps = async () => {
  const dislikedCats = await CatServices.getVotes(-1);

  return {
    props: { dislikedCats },
  };
};

const DislikesPage: FC<IProps> = ({ dislikedCats }) => {
  return <Dislikes dislikedCats={dislikedCats} />;
};

export default DislikesPage;
