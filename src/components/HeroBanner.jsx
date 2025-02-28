import banner1 from '../assets/images/banners/1.png'
import banner2 from '../assets/images/banners/2.png'
import banner3 from '../assets/images/banners/3.png'
import banner4 from '../assets/images/banners/4.png'

const HeroBanner = () => {
  
  return (
    <div className="container mt-5">
      <div className="gap-2 flex justify-center w-full">
        <img src={banner1} alt="Dairy Delight" className="w-full h-full object-cover rounded-md shadow-lg md:hidden" />
        {/* Left Side Image */}
        <div className="flex-col gap-2 justify-between hidden md:flex md:w-2/4 h-full">
          <div className="flex-1">
            <img src={banner1} alt="Dairy Delight" className="w-full h-full object-cover rounded-md shadow-md" />
          </div>
          <div className="flex-1">
            <img src={banner4} alt="Dairy Delight" className="w-full h-full object-cover rounded-md shadow-md" />
          </div>
        </div>

        {/* Right Side Images */}
        <div className="flex-col gap-2 justify-between hidden md:flex md:w-2/4 h-full">
          <div className="flex-1">
            <img src={banner2} alt="Dairy Delight" className="w-full h-full object-cover rounded-md shadow-md" />
          </div>
          <div className="flex-1">
            <img src={banner3} alt="Dairy Delight" className="w-full h-full object-cover rounded-md" />
          </div>
        </div>
      </div>
    </div>

  );
}

export default HeroBanner