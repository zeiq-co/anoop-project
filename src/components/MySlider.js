import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function MySlider() {
  var settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="w-full h-96 bg-purple-200 text-white text-2xl p-48">
        <h3 className="text-center font-semibold">Real Time Results</h3>
      </div>
      <div className="w-full h-96 bg-purple-300 text-white text-2xl p-48">
        <h3 className="text-center font-semibold">Call 200 7632 45 For Help Line</h3>
      </div>
      <div className="w-full h-96 bg-purple-400 text-white text-2xl p-48">
        <h3 className="text-center font-semibold">Free App!</h3>
      </div>
    </Slider>
  )
}