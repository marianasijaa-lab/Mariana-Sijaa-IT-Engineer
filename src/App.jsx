// import { Navigate, Route, Routes } from "react-router-dom";
// import HomePage from './pages/HomePage';       
// import AboutPage from './pages/AboutPage'; 
// import SkillsPage from './pages/SkillsPage';     
// import ServicesPage from './pages/ServicesPage'; 
// import ContactPage from './pages/ContactPage';   
// import WorksPage from './pages/WorksPage';  
// import NotFoundPage from './pages/WorksPage'; 
// const App = () => {
    
//     return (
//         <Routes>
//             <Route 
//                 path="/" 
//                 element={<HomePage />} 
//             />
            
//             <Route 
//                 path="/about" 
//                 element={<AboutPage />} 
//             /> 
//             <Route 
//                 path="/skills" 
//                 element={<SkillsPage />} 
//             /> 
            
//             <Route 
//                 path="/services" 
//                 element={<ServicesPage />} 
//             />
//             <Route 
//                 path="/works" 
//                 element={<WorksPage />} 
//             />
            
//             <Route 
//                 path="/contact" 
//                 element={<ContactPage />} 
//             />
            
//             <Route 
//                 path="/404" 
//                 element={ <NotFoundPage/>} 
//             />
//              <Route 
//                 path="*" 
//                 element={<Navigate to={"/404"}/>} 
//             />
//         </Routes>
//     );
// };

// export default App;
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';       
import AboutPage from './pages/AboutPage'; 
import SkillsPage from './pages/SkillsPage';     
import ServicesPage from './pages/ServicesPage'; 
import ContactPage from './pages/ContactPage';   
import WorksPage from './pages/WorksPage';  
// =========================================================
// 1. استيراد مكون صفحة 404 الجديد (يفترض أنه في نفس مجلد الصفحات)
import NotFoundPage from './pages/NotFoundPage'; 
// ملاحظة: تأكد من وضع ملف NotFoundPage.jsx في المجلد المناسب،
// أو عدّل مسار الاستيراد أعلاه.
// =========================================================

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
            
            {/* 2. استبدال المحتوى البسيط بمكون NotFoundPage الكامل */}
            <Route 
                path="/404" 
                element={<NotFoundPage />} 
            />
             {/* 3. توجيه جميع المسارات غير المطابقة إلى /404 */}
             <Route 
                path="*" 
                element={<Navigate to={"/404"} replace />} 
            />
        </Routes>
    );
};

export default App;