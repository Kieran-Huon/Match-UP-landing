// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-transparent text-center py-6 ">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-8 mb-4">
          <Link href="/" className=" hover:text-blue-700">
            Accueil
          </Link>
          <Link href="/privacy-policy" className=" hover:text-blue-700">
            CGV & Politique de confidentialité
          </Link>
        </div>

        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://twitter.com/" target="_blank" className="text-green hover:text-blue-700">
            Twitter
          </a>
          <a href="https://facebook.com/" target="_blank" className="text-green hover:text-blue-700">
            Facebook
          </a>
          <a href="https://instagram.com/" target="_blank" className="text-green hover:text-blue-700">
            Instagram
          </a>
        </div>

        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Match&apos;UP. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;