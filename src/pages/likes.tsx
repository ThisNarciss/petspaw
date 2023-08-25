import { Likes } from "@/components/screens/likes/Likes";
import { CatServices } from "@/services/CatServices";
import { ICat } from "@/ts/interfaces";
import { GetStaticProps } from "next";
import { FC } from "react";

interface IProps {
  likedCats: ICat[];
}

export const getStaticProps: GetStaticProps = async () => {
  const votes = await CatServices.getVotes();

  const likedCats = votes.filter((vote: ICat) => vote.value === 1).slice(0, 15);

  return {
    props: { likedCats },
  };
};

const LikesPage: FC<IProps> = ({ likedCats }) => {
  return <Likes likedCats={likedCats} />;
};

export default LikesPage;
