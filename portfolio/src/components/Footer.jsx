
const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 text-center 
    py-6 border-t border-gray-800 mt-10">
            <p className="text-sm">
                © {new Date().getFullYear()} Anil Kumar Mende
            </p>
            <p className="text-xs mt-2">
                Built with React & Tailwind CSS
            </p>
        </footer>
    );
};

export default Footer;