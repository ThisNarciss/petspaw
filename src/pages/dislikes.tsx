import { Dislikes } from "@/components/screens/dislikes/Dislikes";
import { CatServices } from "@/services/CatServices";
import { ICat } from "@/ts/interfaces";
import { GetStaticProps } from "next";
import { FC } from "react";

interface IProps {
  dislikedCats: ICat[];
}

export const getStaticProps: GetStaticProps = async () => {
  const votes = await CatServices.getVotes();

  const dislikedCats = votes
    ?.filter((vote: ICat) => vote.value === -1)
    .slice(0, 15);

  return {
    props: { dislikedCats },
  };
};

const DislikesPage: FC<IProps> = ({ dislikedCats }) => {
  return <Dislikes dislikedCats={dislikedCats} />;
};

export default DislikesPage;
