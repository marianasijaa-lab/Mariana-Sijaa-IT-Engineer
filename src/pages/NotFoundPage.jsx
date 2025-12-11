import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 


const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1, 
        transition: { 
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 12 } }
};

const numberVariants = {
    hidden: { scale: 0.5, rotate: -90, opacity: 0 },
    visible: { 
        scale: 1, 
        rotate: 0, 
        opacity: 1, 
        transition: { 
            type: "spring", 
            stiffness: 80, 
            damping: 10,
            duration: 0.8 
        } 
    }
};

const NotFoundPage = () => {
    
    const navigate = useNavigate();

    const handleGoBack = () => {
       
        navigate('/'); 
    };

    return (
        <motion.div 
            className="flex items-center justify-center min-h-screen text-white text-center px-4"
            style={{ backgroundImage: `radial-gradient(circle, #34117E  0%,  #A981FF 100%)` }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="space-y-8 max-w-lg">
                
              
                <motion.div className="flex justify-center items-center space-x-2">
                    <motion.span 
                        className="text-8xl sm:text-9xl font-extrabold text-primary"
                        variants={numberVariants}
                    >
                        4
                    </motion.span>
                    <motion.span 
                        className="text-8xl sm:text-9xl font-extrabold text-white-b"
                        variants={numberVariants}
                        transition={{ delay: 0.2 }}
                    >
                        0
                    </motion.span>
                    <motion.span 
                        className="text-8xl sm:text-9xl font-extrabold text-primary"
                        variants={numberVariants}
                        transition={{ delay: 0.4 }}
                    >
                        4
                    </motion.span>
                </motion.div>

                <motion.h1 
                    className="text-3xl sm:text-4xl font-bold text-white-a uppercase tracking-wider"
                    variants={itemVariants}
                >
                    PAGE NOT FOUND
                </motion.h1>

                <motion.p 
                    className="text-lg text-white-b/80"
                    variants={itemVariants}
                >
                  Sorry, the page you are looking for has been moved, deleted, or never created.
                </motion.p>

                <motion.button
                    onClick={handleGoBack}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(169, 129, 255, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 bg-primary hover:bg-secondry text-white font-semibold py-3 px-8 rounded-full transition duration-300 flex items-center justify-center mx-auto space-x-3"
                >
                    <FaArrowLeft size={16} className='text-white-b'  />
                    <span className='text-purple-300'>Return to HomePage</span>
                </motion.button>

            </motion.div>
        </motion.div>
    );
};

export default NotFoundPage;