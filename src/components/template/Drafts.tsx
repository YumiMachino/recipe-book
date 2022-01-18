import Slider from "react-slick";
import data from "../../data/DraftData";
import Button from "../reusable/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Drafts = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-12 my-16">
      <Slider {...settings}>
        {data.map((item, index) => (
          <>
            <div className="flex justify-center items-center">
              <img width={150} height={150} src={item.image} />
              <div className="text-left mx-2">
                <p className="font-main text-xl font-bold mb-3">{item.title}</p>
                <Button isPrimary={false} content="Edit" link="/">
                  Edit
                </Button>
              </div>
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
};

export default Drafts;
