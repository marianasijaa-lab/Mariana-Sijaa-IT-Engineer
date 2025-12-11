
import { motion } from 'framer-motion';
import { 
    FaFacebook, FaInstagram, FaWhatsapp, FaCloudDownloadAlt, 
    FaCode, FaDatabase, FaBug, FaTabletAlt, FaFolderOpen, FaExternalLinkAlt, FaEnvelope, FaGithub
} from 'react-icons/fa';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { MdOutlineMailOutline, MdLocationOn } from "react-icons/md";
import { IoIosCall } from 'react-icons/io';
import BG from "../assets/WhatsApp Image 2025-12-06 at 22.02.26_19aefc87.jpg";

const homeContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        }
    },
};
const homeTextVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};
const homeImageVariants = {
    hidden: { opacity: 0, scale: 0.7, rotate: -15 },
    visible: { 
        opacity: 1, 
        scale: 1, 
        rotate: 0, 
        transition: { 
            type: "spring", 
            stiffness: 100,
            damping: 10,
            duration: 1.2
        } 
    },
};


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


const skillsContainerVariants = {
    hidden: { opacity: 0.7 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.5
        }
    }
};
const skillItemVariants = {
    hidden: { x: -100, opacity: 0.05 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 70,
            damping: 10
        }
    }
};

const SkillBar = ({ skill, percentage }) => {
    const barFillVariants = {
        hidden: { width: 0 },
        visible: {
            width: `${percentage}%`,
            transition: { 
                duration: 1.5, 
                ease: "easeOut" ,
            }
        }
    };
    
    return (
        <motion.div className="mb-6" variants={skillItemVariants}> 
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-primary">{skill}</span>
                <span className="text-sm font-medium text-white-a">{percentage}%</span>
            </div>
            <div className="w-full bg-primary rounded-full h-2.5">
                <motion.div 
                    className="bg-white-b h-2.5 rounded-full" 
                    variants={barFillVariants}
                    initial="hidden"
        
                    whileInView="visible" 
                    viewport={{ once: true }}
                ></motion.div>
            </div>
        </motion.div>
    );
};

const SkillsSection = () => {
    const skills = [
        { name: "HTML", percentage: 100 },
        { name: "CSS", percentage: 97 },
        { name: "JAVASCRIPT", percentage: 90 },
        { name: "REACT", percentage: 85 },
        { name: "TAILWINDCSS", percentage: 93 },
    ];

    return (
        <motion.section 
            id="skills" 
            className="bg-black text-white py-20 border-t border-secondry"
            style={{ 
                backgroundImage: `radial-gradient(circle, #A981FF 0%,  #34117E 100%)`, 
            }}
            variants={skillsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="center-container sm:px-6 lg:px-8">
                
                <h2 className="text-3xl font-bold mb-12 text-primary text-center">
                    <span className="border-b-4 border-white-b pb-1">My Skills</span>
                </h2>

                <div className="w-full">
                    {skills.map((skill) => (
                        <SkillBar key={skill.name} skill={skill.name} percentage={skill.percentage} />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};


const servicesContainerVariants = {
    hidden: { opacity: 0.5 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, 
            delayChildren: 0.3
        }
    }
};

const serviceCardVariants = {
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

const ContactSection = () => {
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
            backgroundImage: `radial-gradient(circle,#34117E 0%, #A981FF 100%)`,
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


const HomePage = () => {
     const facebookUrl="https://www.facebook.com/mariana.sijaa.2025";
     const instagramUrl="https://www.instagram.com/mariana_sijaa?igsh=MWcwNmF4bWZuNjAzag==";
     const phoneNumber="+963932251138"

  return (
    <>
    
      <section 
          id="home" 
          className="bg-black text-white pt-24 pb-16 min-h-screen flex items-center" 
          style={{ backgroundImage: `radial-gradient(circle,#A981FF 0%, #34117E 100%)`, borderBottom: '1px solid #B796FE' }}
      >
          
          <div className="center-container sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
              
              <motion.div 
                  className="md:w-1/2 space-y-6 text-center md:text-left"
                  variants={homeContainerVariants}
                  initial="hidden"
                  animate="visible" 
              >
                  <motion.p variants={homeTextVariants} className=" text-[23px] text-primary font-medium">HELLO!</motion.p>
                  
                  <motion.h1 variants={homeTextVariants} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                      <span className='text-gray-a'> I'm </span> 
                      <span className="text-primary"> Mariana Sijaa</span>
                  </motion.h1>
                  
                  <motion.p variants={homeTextVariants} className="text-2xl font-light mb-4 text-gray-a ">Front-End Developer</motion.p>
                  
                  <motion.p variants={homeTextVariants} className="text-white-a text-[23px] max-w-lg mx-auto md:mx-0">
                      Every pixel has a purpose, and every line of code tells a story. Welcome to my portfolio.
                  </motion.p>
                  <motion.div variants={homeTextVariants} className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
                      <motion.button 
                          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(140,7,170,0.4)" }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-secondry hover:bg-primary text-white-b font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg">
                          Let's talk
                      </motion.button>
                      <div className="flex space-x-4 text-primary">
                          <motion.a target='_blank' href={ facebookUrl} whileHover={{ scale: 1.2 }}> <FaFacebook size={24} className="hover:text-white-a  cursor-pointer"/> </motion.a>
                          <motion.a target='_blank' href={instagramUrl} whileHover={{ scale: 1.2 }}> <FaInstagram size={24} className="hover:text-white-a cursor-pointer"/> </motion.a>
                           <motion.a target='_blank' href={`https://wa.me/${phoneNumber}`} whileHover={{ scale: 1.2 }} > <FaWhatsapp size={24} className="hover:text-white-a cursor-pointer"/> </motion.a>
                             
                      </div>
                  </motion.div>
              </motion.div>
              <motion.div 
                  className="md:w-1/2 flex justify-center mt-12 md:mt-0"
                  variants={homeImageVariants}
                  initial="hidden"
                  animate="visible"
              >
                  <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                      <img src={BG} alt="Mariana Sijaa " 
                              className="w-full h-full object-cover transform scale-105" />
                  </div>
              </motion.div>
          </div>
      </section>

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
                             download="Mariana _Sijaa_IT Engineer_Resume"
                                 whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(140,7,170,0.4)" }}
                                 whileTap={{ scale: 0.95 }}
                                 className=" bg-primary border border-secondry hover:bg-green-1 hover:text-gray-a text-white-a font-semibold py-3 px-8 rounded-full transition duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse">
                                 <span className='order-2 rtl:order-1'> Download My Resume </span>
                                 <FaCloudDownloadAlt size={14} className='order-2 rtl:order-1' />
                             </motion.a>
                         </motion.div>

                     </motion.div>
                 </div>
             </div>
         </motion.section>
         
         <SkillsSection />

         <ServicesSection />

         <WorkSection />

         <ContactSection />
    </>
  );
};

export default HomePage;