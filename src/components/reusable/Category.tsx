import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export type CategoryType = {
  title: string;
  image: string;
};

const Category: React.FC<CategoryType> = ({ title, image }) => {
  const navigate = useNavigate();
  // const showTitle = `${title}\nfood`;

  const handleClick = () => {
    navigate(`../results/${title}`);
  };

  return (
    <button
      className="relative w-52 md:w-48 lg:w-62 xl:w-64 m-3 transform transition duration-500 hover:scale-105"
      onClick={() => handleClick()}
    >
      <img className="m-0 object-cover" src={image} />
      <p className="font-main text-white absolute bottom-0 right-2 whitespace-pre-wrap font-semibold text-2xl text-center m-3">
        {title}
      </p>
    </button>
  );
};

export default Category;
