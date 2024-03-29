import Category from "../reusable/Category";
import data from "../../data/CategoryData";
import MainHeading from "../reusable/MainHeading";
const CategorySection = () => {
  return (
    <div className="flex flex-col justify-center items-center m-12">
      <MainHeading text="Category Selection" color="text-dark" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 m-10">
        {data.map((item, index) => (
          <Category key={index} title={item.title} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
