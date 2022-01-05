import MainHeading from "../reusable/MainHeading";
import data from "../../data/PostData";
import Post from "../reusable/Post";
import { useParams } from "react-router-dom";

export type PostProps = {
  key: any;
};

const PostSection = () => {
  let { category } = useParams();

  return (
    <div className="flex flex-col items-center m-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 m-10">
        {data
          .filter((item) => item.category === category)
          .map((item, index) => (
            <Post
              key={index}
              id={item.id}
              category={item.category}
              name={item.name}
              description={item.description}
            ></Post>
          ))}
      </div>
    </div>
  );
};

export default PostSection;
