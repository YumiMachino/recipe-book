export type CategoryType = {
  title: string;
  image: string;
};

const Category: React.FC<CategoryType> = ({ title, image }) => {
  return (
    <button className="relative w-48 h-48 m-3 transform transition duration-500 hover:scale-105">
      <img className="m-0 object-cover" src={image} />
      <p className="font-main text-white absolute bottom-0 right-2 whitespace-pre-wrap font-semibold text-2xl text-center">
        {title}
      </p>
    </button>
  );
};

export default Category;
