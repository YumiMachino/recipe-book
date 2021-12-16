import MainHeading from "../reusable/MainHeading";
import data from "../../data/PostData";
import Post from "../reusable/Post";

const PostSection = () => {
  return (
    <div className="flex flex-col items-center m-12">
      <MainHeading text="Latest Posts" color="text-dark" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 m-10">
        {data.map((item, index) => (
          <Post
            key={index}
            name={item.name}
            description={item.description}
          ></Post>
        ))}
      </div>
    </div>
  );
};

export default PostSection;
