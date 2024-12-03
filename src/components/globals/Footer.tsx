import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import SanshiIcon from "@/icons/sanshiIcon";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#5272F2] text-white py-8 px-20" id="footer">
      <div className="max-w-screen  flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-2">
            <SanshiIcon className="w-10 h-10" />
          </div>

          <p className="mt-4 text-sm">connect@sanshinetworktech.com</p>
          <p className=" text-sm">vanaparthisanthosh@sanshinetworktech.com</p>

          <p className="mt-2 text-center md:text-left text-sm">
            5-8-50/206 Sagar Complex, Sripuram, <br />
            B.N Reddy Nagar, Hyderabad, Telangana <br />
            500070, India
          </p>
        </div>

        {/* Right Section */}
        <div className="mt-6 md:mt-0">
          <h3 className="font-semibold mb-4 text-center ">Follow Us</h3>
          <div className="flex md:flex-col gap-2 md:ml-5">
            {/* <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-white hover:text-gray-300 w-6 h-6" />
            </Link> */}
            <Link
              href="https://www.linkedin.com/company/sanshi-network-tech-pvt-lmt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white hover:text-gray-300 w-6 h-6" />
            </Link>
            {/* <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-white hover:text-gray-300 w-6 h-6" />
            </Link> */}
            <Link
              href="https://www.instagram.com/wisein.in/profilecard/?igsh=MXE4c2E5Y2ZxNzY0Yw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white hover:text-gray-300 w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm">
        © 2024 - 2034 Sanshi Network Tech Private Limited.
      </div>
    </footer>
  );
};

export default Footer;
