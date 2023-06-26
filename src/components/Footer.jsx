import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import Spinner from "./Spinner";

export default function Footer() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an async operation
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <footer className="bg-gray-700 text-white py-6 px-14 mt-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-auto sm:mb-3">
          <h2 className="text-xl font-bold mb-4">Realtor.com</h2>
          <p className="mb-4">123 Chevron Estate</p>
          <p className="mb-4">Lekki, Lagos State 94529</p>
          <p className="mb-4">Phone: (123) 456-7890</p>
          <p>Email: info@realtor.com</p>
          <div className="mt-4 mb-4 flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                className="text-white hover:text-gray-400 transition-colors duration-300"
                size={24}
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                className="text-white hover:text-gray-400 transition-colors duration-300"
                size={24}
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="text-white hover:text-gray-400 transition-colors duration-300"
                size={24}
              />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="text-white hover:text-gray-400 transition-colors duration-300"
                size={24}
              />
            </a>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-auto">
          <h2 className="text-xl font-bold mb-2">EXPLORE</h2>
          <ul className="flex space-x-5 mb-4">
            <li className="mb-2 hover:text-red-500 transition-colors duration-300">
              <a href="/">Home</a>
            </li>
            <li className="mb-2 hover:text-red-500 transition-colors duration-300">
              <a href="/offers">Offers</a>
            </li>
            <li className="mb-2 hover:text-red-500 transition-colors duration-300">
              <a href="/profile">Listings</a>
            </li>
            <li className="mb-2 hover:text-red-500 transition-colors duration-300">
              <a href="/sign-up">Contact</a>
            </li>
          </ul>
          <h2 className="text-xl font-bold mb-2">PRODUCTS</h2>
          <ul className="flex space-x-2 mb-3">
            <li className="mb-2 hover:text-red-500 transition-colors duration-300">
              <a href="/">Leads & Branding</a>
            </li>
            <li className="mb-2 hover:text-red-500 transition-colors duration-300">
              <a href="/">ListHub</a>
            </li>
            <li className="mb-2 hover:text-red-500 transition-colors duration-300">
              <a href="/">International</a>
            </li>
            <li className="mb-2 hover:text-red-500 transition-colors duration-300">
              <a href="/">Doorsteps</a>
            </li>
          </ul>
          <h2 className="text-xl font-bold mb-2">GET THE APP</h2>
          <ul className="flex space-x-10 hover:text-red-500 transition-colors duration-300">
            <a
              href="https://www.apple.com/app-store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaApple
                className="text-white hover:text-gray-400 transition-colors duration-300"
                size={30}
              />
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGooglePlay
                className="text-white hover:text-gray-400 transition-colors duration-300"
                size={30}
              />
            </a>
          </ul>
        </div>

      </div>
      <p className="mt-4 text-center">© <a href="/" className="hover:text-red-500 transition-colors duration-300">Fuad</a> All rights reserved.</p>
    </footer>
  );
}
