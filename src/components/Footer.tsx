
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-lavender-300 mb-4">
              Shina Kaur
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Helping high-capacity individuals navigate life transitions with grace, 
              clarity, and self-trust through compassionate coaching.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/shina.kaur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-lavender-300 transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://linkedin.com/in/kaurshina4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-lavender-300 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p>info@shinakaur.com</p>
              <p>+1 206.618.7852</p>
              <p>British Columbia, Canada</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Shina Kaur - Spark Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
