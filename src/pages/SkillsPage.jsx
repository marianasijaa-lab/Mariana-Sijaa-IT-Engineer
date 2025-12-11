import { motion } from 'framer-motion';

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
                    animate="visible" 
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
const SkillsPage = () => {
    return (
        <>
        
            <SkillsSection />
        </>
    );
};

export default SkillsPage;