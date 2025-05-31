export function MercedesFooter() {
  return (
    <footer className="w-full bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="text-lg font-bold mb-4">Models</h3>
            <ul className="space-y-2">
              {["AMG GT", "C-Class", "E-Class", "S-Class", "SUVs", "Electric"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {["Financing", "Service & Parts", "Fleet", "Roadside Assistance", "Recalls", "Warranty"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <ul className="space-y-2">
              {["Our Story", "Innovation", "Sustainability", "Careers", "News", "Investors"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              {["Find a Dealer", "Request a Brochure", "Contact Us", "FAQ", "Newsletter"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <svg
              width="36"
              height="36"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <circle
                cx="24"
                cy="24"
                r="23"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M24 4C35.05 4 44 12.95 44 24C44 35.05 35.05 44 24 44C12.95 44 4 35.05 4 24C4 12.95 12.95 4 24 4ZM24 8C15.18 8 8 15.18 8 24C8 32.82 15.18 40 24 40C32.82 40 40 32.82 40 24C40 15.18 32.82 8 24 8Z"
                fill="currentColor"
              />
              <path
                d="M24 12L28 24H20L24 12ZM24 36L20 24H28L24 36Z"
                fill="currentColor"
              />
            </svg>
            <span className="ml-2 text-lg font-semibold tracking-wider">
              MERCEDES-BENZ
            </span>
          </div>
          
          <div className="flex space-x-6">
            {["Facebook", "Instagram", "Twitter", "YouTube"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Mercedes-Benz. All Rights Reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Use</a>
            <a href="#" className="hover:text-gray-300">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}