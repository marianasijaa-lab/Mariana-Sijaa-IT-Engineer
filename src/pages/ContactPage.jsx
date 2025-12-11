import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaGithub 
} from 'react-icons/fa';
import { MdOutlineMailOutline, MdLocationOn } from "react-icons/md";
import { motion } from 'framer-motion';
import { IoIosCall } from 'react-icons/io';


 const contactContainerVariants = {
    hidden: { opacity: 0.7 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};
const contactBlockVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 10
        }
    },
    hover: {
        scale: 1.05,
        boxShadow: "0 8px 15px rgba(140, 7, 170, 0.4)", 
    }
};

 const contactFormVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 10,
            delay: 0.2
        }
    }
};
const ContactPage = () => {
    const phoneNumber="+963932251138";
    const userEmail="sijaamimo@gmail.com";
    const facebookUrl="https://www.facebook.com/mariana.sijaa.2025";
    const instagramUrl="https://www.instagram.com/mariana_sijaa?igsh=MWcwNmF4bWZuNjAzag==";
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted!");
        alert("Thank you for your message!");
    };
    
    return (
    <motion.section 
        id="contact" 
        className="bg-black text-white py-20 px-4 md:px-20 relative overflow-hidden border-t border-white-b"
        style={{ 
            backgroundImage: `radial-gradient(circle,#34117E 0%, #A981FF 100%) `
        }}
        variants={contactContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
    >
        <div className="flex flex-col lg:flex-row justify-between relative z-10 max-w-7xl mx-auto">

            <motion.div 
                className="w-full lg:w-5/12 pr-0 lg:pr-10 mb-10 lg:mb-0 relative"
                variants={contactBlockVariants}
            >
                <p className="text-sm text-white-a mb-1 tracking-widest uppercase">Contact</p>
                <h2 className="text-4xl font-bold text-primary mb-5 uppercase tracking-wide">GET IN TOUCH</h2>
                <p className="text-white-b leading-relaxed mb-10">
                    Whether you have a project ready to go or just a preliminary idea, I'm here to help. Get in touch to discuss the details and how I can turn your vision into reality.
                </p>

                {/* بطاقات معلومات الاتصال */}
                <div className=" center-container flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
                        
                    {/* بطاقة الموقع */}
                    <motion.div 
                        className="bg-secondry/50  p-4 rounded-lg flex-1 text-center group  border border-transparent hover:border-primary transition-all duration-300"
                        whileHover="hover"
                        variants={contactBlockVariants}
                    >
                        <MdLocationOn size={25} className="text-xl text-primary group-hover:text-white-b mb-2 mx-auto transition-colors"/>
                        <p className="text-sm text-white-a font-semibold">Syria</p>
                        <p className="text-xs text-white-b group-hover:text-white-a">Swaida</p>
                    </motion.div>
                        
                    {/* بطاقة الهاتف */}
                    <motion.a 
                        href={`tel:${phoneNumber}`}
                        className="bg-secondry/50 p-4 rounded-lg flex-1 text-center group cursor-pointer border border-transparent hover:border-primary transition-all duration-300"
                        whileHover="hover"
                        variants={contactBlockVariants}
                    >
                        <IoIosCall size={25} className="text-xl text-primary group-hover:text-white-b mb-2 mx-auto transition-colors"/>
                        <p className="text-sm text-white-a font-semibold">(+963)</p>
                        <p className="text-xs text-white-b group-hover:text-white-a">932251138</p>
                    </motion.a>
                        
                    {/* بطاقة البريد الإلكتروني */}
                    <motion.a
                        href={`mailto:${userEmail}`}
                        className="bg-secondry/50  p-4 rounded-lg flex-1 text-center group cursor-pointer border border-transparent hover:border-primary transition-all duration-300"
                        whileHover="hover"
                        variants={contactBlockVariants}
                    >
                        <FaEnvelope size={22} className="text-xl text-primary group-hover:text-white-b mb-2 mx-auto transition-colors"/>
                        <p className="text-sm text-white-a font-semibold">sijaamimo</p>
                        <p className="text-xs text-white-b group-hover:text-white-a">@gmail.com</p>
                    </motion.a>
                </div>
             
                <div className=" flex space-x-4 justify-center lg:justify-start pt-4">
                    <a target="_blank" href={facebookUrl}   className="text-purple-100 hover:text-primary text-2xl transition-colors"><FaFacebook /></a>
                    <a  target="_blank" href={instagramUrl}  className="text-purple-100 hover:text-primary text-2xl transition-colors"><FaInstagram /></a>
                    <a  target="_blank" href={`mailto:${userEmail}`}  className="text-purple-100 hover:text-primary text-2xl transition-colors"><MdOutlineMailOutline /></a>
                    <a  target="_blank" href={"https://github.com/marianasijaa-lab"} className="text-purple-100 hover:text-primary text-2xl transition-colors"><FaGithub /></a>
                    <a target="_blank" href={`https://wa.me/${phoneNumber}`}  className="text-purple-50 hover:text-primary text-2xl transition-colors"><FaWhatsapp /></a>
                   
                </div>
                    
            </motion.div>

              
            <motion.div 
                className="w-full lg:w-7/12"
                variants={contactFormVariants}
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                        
                     
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input type="text" placeholder="Your Name" className="w-full p-4 bg-secondry/50 border border-primary/50 rounded-md text-white placeholder-gray-400 focus:ring-white-a focus:border-white-a transition-colors" required />
                        <input type="email" placeholder="example@email.com" className="w-full p-4 bg-secondry/50 border border-primary/50 rounded-md text-white placeholder-gray-400 focus:ring-white-a focus:border-white-a transition-colors" required />
                    </div>
                        
                    <input type="text" placeholder="Your Contact Number" className="w-full p-4 bg-secondry/50 border border-primary/50 rounded-md text-white-b placeholder-gray-400 focus:ring-white-a focus:border-white-a transition-colors" required />

                    <textarea placeholder="Your Message Here" rows="6" className="w-full p-4 bg-secondry/50 border border-primary/50 rounded-md text-white placeholder-gray-400 focus:ring-white-a focus:border-white-a transition-colors" required></textarea>
                    
                    <motion.button 
                        type="submit" 
                        className="bg-primary text-white-a  cursor-pointer px-6 py-2 rounded-full font-semibold hover:bg-white-b hover:text-primary transition border border-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Send Message
                    </motion.button>
                    </form>
            </motion.div>
        </div>
    </motion.section>
 );
};

export default ContactPage;