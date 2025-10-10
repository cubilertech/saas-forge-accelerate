import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Dribbble,
  // Globe,
  Linkedin,
} from "lucide-react";
// import FooterBackgroundGradient from "./FooterBackgroundGradient";
import { TextHoverEffect } from "./TextHoverEffect";
import GlowLine from "../ui/divider";

function Footer() {
  return (
    <footer className=" relative h-fit overflow-hidden ">
      <div className="max-w-7xl mx-auto p-6 md:p-14 z-40 relative">
        {/* Main grid for the footer content */}

        <div className="flex flex-col ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-5">
            {/* Section 1: Pollen brand and description */}

            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src="/lovable-uploads/b2c5f819-1256-4a43-892f-c6b656d73bf5.png"
                  alt="Cubiler Technologies"
                  className="h-10 w-auto"
                />
              </div>

              <p className="text-sm leading-relaxed">
                Ready to build something amazing together.
              </p>
            </div>

            {/* Section 2: About Us links */}

            <div>
              <h4 className="text-white text-lg font-semibold mb-6">
                About Us
              </h4>

              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#0097b2] transition-colors"
                  >
                    Company History
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="hover:text-[#0097b2] transition-colors"
                  >
                    Meet the Team
                  </a>
                </li>

                {/* <li>
                  <a
                    href="#"
                    className="hover:text-[#0097b2] transition-colors"
                  >
                    Employee Handbook
                  </a>
                </li> */}

                <li>
                  <a
                    href="#"
                    className="hover:text-[#0097b2] transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 3: Helpful Links */}

            {/* <div>
              <h4 className="text-white text-lg font-semibold mb-6">
                Helpful Links
              </h4>

              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#0097b2] transition-colors"
                  >
                    FAQs
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="hover:text-[#0097b2] transition-colors"
                  >
                    Support
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="hover:text-[#0097b2] transition-colors relative"
                  >
                    Live Chat
                    <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-[#0097b2] animate-pulse"></span>
                  </a>
                </li>
              </ul>
            </div> */}

            {/* Section 4: Contact Us */}

            <div>
              <h4 className="text-white text-lg font-semibold mb-6">
                Contact Us
              </h4>

              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Mail size={18} className="text-[#0097b2]" />

                  <a
                    href="mailto:hello@Pollen.com"
                    className="hover:text-[#0097b2] transition-colors"
                  >
                    hr@cubiler.com
                  </a>
                </li>

                <li className="flex items-center space-x-3">
                  <Phone size={18} className="text-[#0097b2]" />

                  <a
                    href="tel:+918637373116"
                    className="hover:text-[#0097b2] transition-colors"
                  >
                    +92 302 6427668
                  </a>
                </li>

                <li className="flex items-center space-x-3">
                  <MapPin size={18} className="text-[#0097b2]" />

                  <span className="hover:text-[#0097b2] transition-colors">
                    Mumtaz Market Gujranwala Pakistan
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex space-x-6 text-gray-400">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-[#0097b2] transition-colors relative"
              >
                <Facebook size={20} color="#0097b2" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-[#0097b2] transition-colors"
              >
                <Instagram color="#0097b2" size={20} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-[#0097b2] transition-colors"
              >
                <Twitter size={20} color="#0097b2" />
              </a>

              <a
                href="#"
                aria-label="Dribbble"
                className="hover:text-[#0097b2] transition-colors"
              >
                <Dribbble size={20} color="#0097b2" />
              </a>
              <a
                href="#"
                aria-label="Dribbble"
                className="hover:text-[#0097b2] transition-colors"
              >
                <Linkedin size={20} color="#0097b2" />
              </a>
            </div>
          </div>

          {/* Bottom section: social media and copyright */}
          {/* <div className="flex flex-col md:flex-row md:gap-14 justify-between items-center text-sm space-y-4 md:space-y-0 mt-5 "> */}
          {/* Social Media Icons */}

          {/* <div className="flex space-x-6 text-gray-400">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-[#0097b2] transition-colors relative"
              >
                <Facebook size={20} color="#0097b2" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-[#0097b2] transition-colors"
              >
                <Instagram color="#0097b2" size={20} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-[#0097b2] transition-colors"
              >
                <Twitter size={20} color="#0097b2" />
              </a>

              <a
                href="#"
                aria-label="Dribbble"
                className="hover:text-[#0097b2] transition-colors"
              >
                <Dribbble size={20} color="#0097b2" />
              </a>

              <a
                href="#"
                aria-label="Globe"
                className="hover:text-[#0097b2] transition-colors"
              >
                <Globe size={20} color="#0097b2" />
              </a>
            </div> */}

          {/* Copyright text */}

          {/* <div className="text-center md:text-left">
              <p>
                &copy; 2025 Cubiler Technologies. Ready to build something
                amazing together.
              </p>
            </div> */}
          {/* </div> */}
        </div>

        {/* Separator line */}

        <div className="relative w-full mt-2 ">
          <GlowLine
            orientation="horizontal"
            // position="50%"
            color="blue"
          />
        </div>
      </div>

      <div className="lg:flex hidden h-[30rem] -mt-48 -mb-40">
        <TextHoverEffect text="Cubiler" className="z-10" />
      </div>

      {/* <FooterBackgroundGradient /> */}
    </footer>
  );
}

export default Footer;
