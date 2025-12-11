import { motion } from 'framer-motion';
import { 
    FaCode, FaDatabase, FaBug 
} from 'react-icons/fa';
import { AiOutlineAntDesign } from 'react-icons/ai';

export const servicesContainerVariants = {
    hidden: { opacity: 0.5 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, 
            delayChildren: 0.3
        }
    }
};

export const serviceCardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12
        }
    },
    hover: {
        y: -10,
        boxShadow: "0 15px 30px rgba(140, 7, 170, 0.3)",
        scale: 1.03
    }
};



const ServicesSection = () => {
    const services = [
        { 
            icon: AiOutlineAntDesign, 
            title: "Simple Landing Pages", 
            description: "Creating fast advertising or informational landing pages using raw CSS, HTML, and JavaScript, ideal for marketing campaigns or initial prototypes."
        },
        { 
            icon: FaCode, 
            title: "Design to Code", 
            description: "Converting visual files (PSD, Sketch) into accurate, browser-compatible front-end using libraries such as Tailwind, or CSS."
        },
        { 
            icon: FaDatabase, 
            title: "Basic Database Modeling", 
            description: "Designing simple database schemas (SQL or NoSQL) for small projects, focusing on efficiency and data organization."
        },
        { 
            icon: FaBug, 
            title: "Bug Fixing (Level 1)", 
            description: "Identifying and correcting logical or rendering errors within simple, specific front-end bugs."
        },
    ];

    return (
        <motion.section 
            id="services" 
            className="bg-black text-white py-25 border-t border-white-b" 
            style={{ backgroundImage: `radial-gradient(circle, #34117E  0%, #A981FF 100%)`}}
            variants={servicesContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}>
        
            <div className="center-container sm:px-6 lg:px-8">
                
                <h2 className="text-3xl font-bold mb-12 text-white-b text-center ">
                    <span className=" border-b-4 border-primary pb-1">My Services</span>
                </h2>

                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-secondry/30  p-6 rounded-xl shadow-xl border border-primary/50 text-center space-y-4 hover:border-purple-950 transition duration-300"
                            variants={serviceCardVariants}
                            whileHover="hover">
                    
                            <service.icon size={40} className="text-primary mx-auto transition-transform duration-300 transform group-hover:scale-110"/>
                            <h3 className="text-xl font-bold text-white-a">{service.title}</h3>
                            <p className="text-white-b text-sm">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

const ServicesPage = () => {
    return (
        <>
            
            <ServicesSection />
            
           
        </>
    );
};

export default ServicesPage;