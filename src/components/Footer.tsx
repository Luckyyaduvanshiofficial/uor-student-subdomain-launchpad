
const Footer = () => {
  return (
    <footer className="bg-uor-dark-purple text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} uorstudent.me
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm opacity-80">
              An initiative by a UOR student for UOR students
            </p>
            <a 
              href="mailto:contact@uorstudent.me" 
              className="text-sm text-uor-light-purple hover:underline mt-1 block"
            >
              contact@uorstudent.me
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
