import { useState } from "react";
import Image from "../../assets/background/bgd-top.png";
import Button from "./Button";
import MainHeading from "./MainHeading";
import SubHeading from "./SubHeading";

const Hero: React.FC = () => {
  const [searchWord, setSearchWord] = useState("");

  return (
    <div className="flex items-center text-center justify-center h-full">
      <img src={Image} width="100%" height="auto" />
      <div className="absolute mx-96">
        <div className="flex flex-col gap-10">
          <MainHeading text="Lorem ipsum dolor sit amet eam quas malorum accusam" />
          <SubHeading text="Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te." />
          <div className="flex justify-between mt-16">
            <input
              className="grow w-full px-3 mr-5"
              type="text"
              placeholder="Search by keyword..."
              onChange={(e) => setSearchWord(e.target.value)}
            ></input>
            <Button isPrimary={true} content="Search" link="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
