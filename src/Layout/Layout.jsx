import Header from '../components/Header'; 
import Footer from '../components/Footer';  

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-black">
    
        <Header />
        <main className="pt-16">
            {children}
        </main>
        <Footer />
    </div>
);
}
export default Layout;