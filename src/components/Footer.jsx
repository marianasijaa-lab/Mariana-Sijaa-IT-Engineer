import { FaFacebookF,FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Logo from "../../public/m gra 2 150.svg"
import { MdOutlineMailOutline } from 'react-icons/md';
const Footer = () => {
        const phoneNumber="+963932251138";
        const date = new Date().getFullYear();
  return (
    <footer 

      className="w-full text-white pt-12 bg-primary">
    
    <div className="center-container sm:px-6 lg:px-8">
        
      <div className="flex flex-wrap justify-between pb-10 border-b border-gray-700 gap-y-8">
          
        <div className="w-full sm:w-1/2 lg:w-1/4">
        
          <div className="flex items-center space-x-2 mb-2">
                
              <div className="w-6 h-6 rounded-full text-white-b" ></div> 
                <div className="w-[85px]  overflow-hidden">
                    <img src={Logo} alt="MS Logo" />
                </div>
          </div>
           
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4">
          <h3 className="text-lg font-semibold mb-3 text-white-a" >My address</h3>
          <p className="text-sm text-green-2" >Syria</p>
          <p className="text-sm  text-green-2" >Swaida</p>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 mt-4 lg:mt-0">
          <h3 className="text-lg font-semibold mb-3 text-white-a" >Need help?</h3>
          <p className="text-sm text-green-2" ><span className='text-sm text-white-b'>Phone:</span> +963 932251138</p>
          <p className="text-sm  text-green-2" ><span className='text-sm text-white-b'>Email:</span> sijaamimo@gmail.com</p>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 mt-4 lg:mt-0">
          <h3 className="text-lg font-semibold mb-3 text-white-a" >Follow me</h3>
          <div className="flex space-x-4">
            <a target="_blank" href={"https://www.facebook.com/mariana.sijaa.2025"}  className="hover:text-white-a transition text-white-b"><FaFacebookF size={20} /></a>
            <a target="_blank" href={`https://wa.me/${phoneNumber}`} className="hover:text-white-a transition text-white-b"><FaWhatsapp size={20} /></a>
            <a target="_blank" href={"https://www.instagram.com/mariana_sijaa?igsh=MWcwNmF4bWZuNjAzag=="}  className="hover:text-white-a transition text-white-b"><FaInstagram size={20} /></a>
            <a target="_blank" href={"mailto:${userEmail}"} className="hover:text-white-a transition text-white-b"><MdOutlineMailOutline size={20} /></a>
          </div>
        </div>
      </div>
    <hr className='text-purple-200'></hr>
      <div className="py-4 text-center">
        <p className="text-sm text-white-b" > &copy; Copyright {date} - Mariana Sijaa</p>
      </div>

    </div>
  </footer>
  );
};

export default Footer;
