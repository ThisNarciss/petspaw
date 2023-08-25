import { Voting } from "@/components/screens/voting/Voting";
import { CatServices } from "@/services/CatServices";
import { GetServerSideProps } from "next";
import { FC } from "react";

interface ICat {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface IProps {
  cats: ICat[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const cats: IProps = await CatServices.getCats();

  return {
    props: {
      cats,
    },
    revalidate: 10,
  };
};

const VotingPage: FC<IProps> = ({ cats }) => {
  return <Voting cats={cats} />;
};

export default VotingPage;
