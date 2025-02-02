// import logo from "../../public/person_img.jpg";
import logo from "../../public/Coding.gif";
import Image from "next/image";

const HeroImage = () => {
  return (
    <>
      <Image
        style={{ borderRadius: "20px" }}
        src={logo}
        alt="logo"
        loading="eager"
        priority
        height={1000}
        width={1000}
      />
    </>
  );
};
export default HeroImage;
