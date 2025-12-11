import { motion } from 'framer-motion';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import BG from "../assets/WhatsApp Image 2025-12-06 at 22.02.26_19aefc87.jpg";

const aboutContainerVariants = {
    hidden: { opacity: 0.6 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, 
            delayChildren: 0.1
        }
    }
};
const aboutTextVariants = {
    hidden: { x: -50, opacity: 0.1 }, 
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "tween", 
            duration: 2.5,
            ease: "easeOut",
            
        }
    }
};
const aboutBlockVariants = {
    hidden: { y: 30, opacity: 0.05 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 10,
          
             delay: 0.6,
            
        }
    }
};
const aboutImageVariants = {
    hidden: { x: 50, opacity: 0, scale: 0.95 },
    visible: {
        x: 0,
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 10,
            delay: 0.2
        }
    },
    hover: {
        scale: 1.05,
        rotate: 1,
        transition: { type: "spring", stiffness: 400, damping: 10 }
    }
};
const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
    }
};
const pulseAnimation = {
    scale: [1, 1.1, 1],
    opacity: [0.7, 0.9, 0.7],
    transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
    }
};
const AboutPage = () => {
    return (
        <>
        
 <motion.section 
     id="about" 
     className="bg-black text-white py-20 border-t border-gray-a relative overflow-hidden" 
     style={{ 
          backgroundImage: `radial-gradient(circle, #34117E  0%,  #A981FF 100%)`, 
            }}
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.3 }}>

    <div className="center-container sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
    <motion.div
        variants={aboutImageVariants} 
        whileHover="hover"
        className="lg:w-1/3 flex justify-center lg:justify-start relative">
        <div className="relative">
        <motion.div
        animate={floatingAnimation}
        className="absolute top-0 -left-6 w-16 h-16 bg-primary rounded-full opacity-70"/>

        <motion.div
            animate={{
            ...floatingAnimation,
                y: [0, -15, 0],
                transition: { ...floatingAnimation.transition, delay: 0.5 } }}
            className="absolute bottom-4 -right-8 w-10 h-10 bg-primary rounded-full opacity-80" />
        <motion.div
                 animate={pulseAnimation}
                className="absolute -top-4 -right-4 w-8 h-8 border-2 border-primary rounded-full"/>
        <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-secondry shadow-2xl relative group" > 
                <img 
                    src={BG} 
                    alt="Mariana Sijaa" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
            </motion.div>
        </div>
            </motion.div>

                <motion.div 
                variants={aboutContainerVariants} 
                className="lg:w-2/3 space-y-6 text-center lg:text-left pt-8 lg:pt-0">
                            <motion.span 
                                variants={aboutTextVariants} 
                                className="text-sm border border-gray-a text-primary px-3 py-1 rounded-full inline-block font-medium"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                         About Me
                    </motion.span>
                            
                    <motion.h2 
                        variants={aboutTextVariants} 
                        className="text-2xl font-extrabold leading-tight text-white-a text-shadow-green-2">
                        I bridge the gap between vision and reality. I design, develop, and deploy integrated technology solutions that ensure operational efficiency and an unforgettable user experience!
                    </motion.h2>

                    <motion.p 
                        variants={aboutTextVariants} 
                        className="text-gray-a leading-relaxed max-w-4xl lg:mr-auto lg:ml-0">
                        My passion drives my career. I believe strongly in my abilities and strive to deliver real value through my work as a front-end developer.
                    </motion.p>
                            
                    <motion.div 
                        variants={aboutBlockVariants} 
                        className="grid grid-cols-2 gap-y-4 gap-x-8 pt-4 pb-4 bg-secondry/50  p-6 rounded-lg text-left border border-gray-a/30"
                    >
                        <motion.p className="text-sm text-green-2"><span className="text-gray-a font-semibold">Name:</span> Mariana Sijaa</motion.p>
                        <motion.p className="text-sm  text-green-2"><span className="text-gray-a font-semibold">Phone:</span> (+963) 932-251-138</motion.p>
                        <motion.p className="text-sm  text-green-2"><span className="text-gray-a font-semibold">Email:</span> sijaamimo@gmailcom</motion.p>
                        <motion.p className="text-sm  text-green-2"><span className="text-gray-a font-semibold">Facebook:</span> Mariana Sijaa</motion.p>
                    </motion.div>


                    <motion.div 
                        variants={aboutBlockVariants} 
                        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                        <motion.a
                        href='#contact' 
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(140,7,170,0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary border border-secondry hover:bg-green-1 hover:text-gray-a text-white-a  font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg">
                            Contact me 
                        </motion.a>
                        <motion.a
                        target="_blank"
                        href= "/Mariana _Sijaa_IT Engineer_resume (5).pdf" 
                        download
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(140,7,170,0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className=" bg-primary border border-secondry hover:bg-green-1 hover:text-gray-a text-white-a font-semibold py-3 px-8 rounded-full transition duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse">
                            <span className='order-2 rtl:order-1 text-white-a'> Download My Resume </span>
                            <FaCloudDownloadAlt size={14} className='order-2 rtl:order-1' />
                        </motion.a>
                    </motion.div>

                </motion.div>
            </div>
        </div>
    </motion.section>

        </>
    );
};

export default AboutPage;