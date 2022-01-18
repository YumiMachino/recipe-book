import data from "../../data/MyPostData";
import Category from "../reusable/Category";
import { AiOutlinePlus } from "react-icons/ai";
import { IconContext } from "react-icons";

const AddButton: React.FC<any> = () => (
  <button className="flex w-52 md:w-48 lg:w-62 xl:w-64 h-52 md:h-48 lg:h-62 xl:h-64 m-3 transform transition duration-50 hover:scale-105 bg-gray-50 items-center justify-center">
    <IconContext.Provider value={{ color: "#C9C5C5", size: "50px" }}>
      <AiOutlinePlus />
    </IconContext.Provider>
  </button>
);
const MyPost = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 m-10 justify-items-center">
        {data.map((item, index) => (
          <Category key={index} title={item.title} image={item.image} />
        ))}
        <AddButton />
      </div>
    </>
  );
};

export default MyPost;
