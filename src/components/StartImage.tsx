import Image from "next/image";

export const StartImage = () => {
  return (
    <Image width={100} height={100} src={"/sprites/start.png"} alt={"guide"} />
  );
};
