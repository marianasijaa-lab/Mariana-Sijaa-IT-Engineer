import { motion } from 'framer-motion';
import { 
    FaTabletAlt, FaFolderOpen, FaExternalLinkAlt, 
} from 'react-icons/fa';

 const workContainerVariants = {
    hidden: { opacity: 0.7 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const workCardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 10
        }
    },
    hover: {
        scale: 1.03,
        boxShadow: "0 10px 20px  rgba(140, 7, 170, 0.3)", 
        transition: { duration: 0.3 }
    }
};



const WorkSection = () => {
    const projects = [
        { 
            title: "StyleShop", 
            type: "Website", 
            icon: <FaTabletAlt size={40} />, 
            link: "https://styleshop-bi5p.onrender.com", 
        },
        { 
            title: "Zen-Digital", 
            type: "Website", 
            icon: <FaTabletAlt size={40} />, 
            link: "https://zendigital.onrender.com", 
        },
        { 
            title: "Eco", 
            type: "Website", 
            icon: <FaTabletAlt size={40} />, 
            link: "https://eco-dy5y.onrender.com", 
        },
        
    ];

    const handleSeeNow = (link) => {
        if (link) {
            window.open(link, '_blank');
        }
    };

    return (
        <motion.section 
            id="work" 
            className=" text-white py-25 border-t border-secondry" 
            style={{ 
                backgroundImage: `radial-gradient(circle,#A981FF  0%,  #34117E 100%)`, 
            }}
            variants={workContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}>
     
            <div className="center-container sm:px-6 lg:px-8 text-center">
                
                <FaFolderOpen size={40} className="text-secondry mx-auto mb-4"/>
               
                <h2 className="text-4xl font-extrabold mb-14 text-primary">
                    <span className="border-b-4 border-white-b pb-1">My Work</span>
                </h2>

                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-primary/25 p-6 rounded-xl shadow-2xl border border-primary/50 text-left space-y-4 group transition duration-300"
                            variants={workCardVariants}
                            whileHover="hover">

                            
                      
                            <p className="text-sm font-medium text-gray-a opacity-80">{project.type}</p>
                            <h3 className="text-2xl font-bold text-white-b group-hover:text-primary transition duration-300">{project.title}</h3>
                            
                            <div className="flex justify-between items-end pt-4">
                                <button 
                                    onClick={() => handleSeeNow(project.link)}
                                    className="text-sm font-semibold text-primary hover:text-white-b flex items-center space-x-2 rtl:space-x-reverse transition duration-300">
                                    <span className='order-2 rtl:order-1'>SEE NOW</span>
                                    <FaExternalLinkAlt size={12} className='order-2 rtl:order-1' />
                                </button>
                                <div className="text-primary opacity-70 group-hover:opacity-100 transition duration-300">
                                    {project.icon}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};
const WorksPage = () => {
    return (
        <>
           
            <WorkSection />
        </>
    );
};

export default WorksPage;