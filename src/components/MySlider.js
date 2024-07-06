import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

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
      <div className='h-96 w-full bg-purple-200 p-48 text-2xl text-white'>
        <h3 className='text-center font-semibold'>Real Time Results</h3>
      </div>
      <div className='h-96 w-full bg-purple-300 p-48 text-2xl text-white'>
        <h3 className='text-center font-semibold'>
          Call 200 7632 45 For Help Line
        </h3>
      </div>
      <div className='h-96 w-full bg-purple-400 p-48 text-2xl text-white'>
        <h3 className='text-center font-semibold'>Free App!</h3>
      </div>
    </Slider>
  );
}
