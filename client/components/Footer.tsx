export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Me Section */}
          <div className="space-y-3">
            <h3 className="text-foreground-muted font-medium text-lg sm:text-xl lg:text-[20px] leading-relaxed">
              Contact Me 📧
            </h3>
            <p className="text-foreground-light text-sm sm:text-base lg:text-[16px] leading-relaxed break-all">
              lemuria.fay.fernandez@gmail.com
            </p>
          </div>

          {/* Let's Connect Section */}
          <div className="space-y-3">
            <h3 className="text-foreground-muted font-medium text-lg sm:text-xl lg:text-[20px] leading-relaxed">
              Let's Connect 💫
            </h3>
            <div className="text-foreground-light text-sm sm:text-base lg:text-[16px] leading-relaxed">
              <a 
                href="#" 
                className="hover:text-gradient-purple transition-colors duration-200"
              >
                LinkedIn
              </a>
              <span className="mx-2">|</span>
              <a 
                href="#" 
                className="hover:text-gradient-purple transition-colors duration-200"
              >
                Behance
              </a>
              <span className="mx-2">|</span>
              <a 
                href="#" 
                className="hover:text-gradient-purple transition-colors duration-200"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Designed & Built Section */}
          <div className="space-y-3 sm:col-span-2 lg:col-span-1">
            <h3 className="text-foreground-muted font-medium text-lg sm:text-xl lg:text-[20px] leading-relaxed">
              Designed & Built by Lemuria Fay✨
            </h3>
            <p className="text-foreground-light text-sm sm:text-base lg:text-[16px] leading-relaxed">
              © 2025 Original Work
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
