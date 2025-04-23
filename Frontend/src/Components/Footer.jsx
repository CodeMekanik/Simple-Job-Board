import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-4 mt-4 rounded-lg">
        <div className="container mx-auto text-center ">
          <p>&copy; 2025 Your Company Name. All rights reserved.</p>
          <p>Follow us on social media:</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              Facebook
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Twitter
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
