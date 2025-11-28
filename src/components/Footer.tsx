import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="flex flex-col justify-center items-center py-6 bg-background gap-4">
      <div className="flex justify-center items-center">
        <button
          onClick={scrollToTop}
          className="relative flex justify-center items-center p-3 bg-primary border-2 border-primary rounded-xl transition-all duration-500 overflow-hidden group hover:bg-secondary"
        >
          <div className="absolute top-0 left-0 w-0 h-full bg-secondary transition-all duration-500 -z-10 group-hover:w-full" />
          <ArrowUp className="w-6 h-6 text-background transition-colors duration-500 group-hover:text-primary" />
        </button>
      </div>
      <div className="text-center">
        <p className="text-base md:text-lg">
          Copyright &copy; 2025 | Portfolio Developed by Mr.R.Naveenkumar, BE., | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
