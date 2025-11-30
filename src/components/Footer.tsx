import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="flex flex-col justify-center items-center py-6 bg-background gap-4 px-4 sm:px-6">
      
      {/* Scroll to Top Button */}
      <div className="flex justify-center items-center">
        <button
          onClick={scrollToTop}
          className="relative flex justify-center items-center p-2 sm:p-3 md:p-4 bg-primary border-2 border-primary rounded-xl transition-all duration-500 overflow-hidden group hover:bg-secondary"
        >
          {/* Hover background effect */}
          <div className="absolute top-0 left-0 w-0 h-full bg-secondary transition-all duration-500 -z-10 group-hover:w-full" />
          
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-background transition-colors duration-500 group-hover:text-primary" />
        </button>
      </div>

      {/* Footer Text */}
      <div className="text-center max-w-3xl">
        <p className="text-xs sm:text-sm md:text-base">
          Copyright &copy; 2025 | Portfolio Developed by Mr.R.Naveenkumar, BE., | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
