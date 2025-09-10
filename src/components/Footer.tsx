'use client';

import { FaEnvelope, FaPhone, FaFacebookF, FaXTwitter, FaInstagram, FaLinkedin, FaHeart } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-[#004d43] text-white font-body px-4 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <div>
          <h3 className="font-heading text-2xl font-bold mb-4">She Forward Coast</h3>
          <p>
            Empowering women and youth in Coastal Kenya through advocacy, education,
            climate action, and economic development.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-xl font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="#programs" className="hover:underline">Programs</a></li>
            <li><a href="#impact" className="hover:underline">Impact</a></li>
            <li><a href="#get-involved" className="hover:underline">Get Involved</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-heading text-xl font-semibold mb-3">Contact Info</h4>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FaEnvelope className="text-lg" /> sheforwardcoastcbo@gmail.com
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 mt-2">
            <FaPhone className="text-lg" /> 0725947601 / 0115179437
          </p>
          <p className="mt-2">Location: Mombasa, Kisauni, Kenya</p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4 text-xl">
            <a href="https://www.facebook.com/share/1FcLgwG9zt/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://x.com/scoastcbo90450?s=21" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
            <a href="https://www.instagram.com/shefowardcoast_org?utm_source=qr&igsh=MTBobGVkamd1ZDVjdw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/she-forward-coast-cbo-565046340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center border-t border-white pt-6 space-y-2">
        <p>&copy; {new Date().getFullYear()} She Forward Coast. All rights reserved.</p>
        <p className="flex items-center justify-center gap-2 text-sm text-white">
          Proudly built with <FaHeart className="text-red-500" /> by{' '}
          <a
            href="https://techit-eazy-svpi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:text-red-200 transition"
          >
            TechIT Eazy
          </a>
        </p>
      </div>
    </footer>
  );
}
