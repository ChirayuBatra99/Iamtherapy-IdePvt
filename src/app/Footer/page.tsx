import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Section 1 */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Development</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Web Development</a></li>
            <li><a href="#" className="hover:text-blue-400">Android Development</a></li>
            <li><a href="#" className="hover:text-blue-400">Game Development</a></li>
            <li><a href="#" className="hover:text-blue-400">AI/ML</a></li>
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Resources</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Docs</a></li>
            <li><a href="#" className="hover:text-blue-400">Tutorials</a></li>
            <li><a href="#" className="hover:text-blue-400">Community</a></li>
            <li><a href="#" className="hover:text-blue-400">Blog</a></li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Company</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Careers</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            <li><a href="#" className="hover:text-blue-400">Support</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
