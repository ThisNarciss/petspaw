import Image from "next/image";
import errorImg from "../../public/404.webp";

const Custom404 = () => {
  return (
    <div className=" flex items-center justify-center">
      <Image
        src={errorImg}
        alt="error 404 not found picture"
        width={600}
        height={400}
      />
    </div>
  );
};
export default Custom404;
