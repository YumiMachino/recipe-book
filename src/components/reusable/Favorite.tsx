import data from "../../data/MyFavorite";
import Category from "../reusable/Category";
import Button from "./Button";

const Favorite = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 m-10">
      {data.map((item, index) => (
        <div className="text-right">
          <Category key={index} title={item.title} image={item.image} />
          <Button isPrimary={true} content="Check" link="/" />
        </div>
      ))}
    </div>
  );
};

export default Favorite;
