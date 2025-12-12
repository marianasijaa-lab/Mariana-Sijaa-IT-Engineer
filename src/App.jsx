
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';       
import AboutPage from './pages/AboutPage'; 
import SkillsPage from './pages/SkillsPage';     
import ServicesPage from './pages/ServicesPage'; 
import ContactPage from './pages/ContactPage';   
import WorksPage from './pages/WorksPage';  
import NotFoundPage from './pages/NotFoundPage'; 


const App = () => {
    
    return (
        <Routes>
            <Route 
                path="/" 
                element={<HomePage />} 
            />
            
            <Route 
                path="/about" 
                element={<AboutPage />} 
            /> 
            <Route 
                path="/skills" 
                element={<SkillsPage />} 
            /> 
            
            <Route 
                path="/services" 
                element={<ServicesPage />} 
            />
            <Route 
                path="/works" 
                element={<WorksPage />} 
            />
            
            <Route 
                path="/contact" 
                element={<ContactPage />} 
            />
            
 
            <Route 
                path="/404" 
                element={<NotFoundPage />} 
            />
       
             <Route 
                path="*" 
                element={<Navigate to={"/404"}  />} 
            />
        </Routes>
    );
};

export default App;