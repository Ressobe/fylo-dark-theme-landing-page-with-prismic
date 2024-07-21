import { EmailIcon } from "./email-icon";
import { FacebookIcon } from "./facebook-icon";
import { InstagramIcon } from "./instagram-icon";
import { LocationIcon } from "./location-icon";
import { Logo } from "./logo";
import { PhoneIcon } from "./phone-icon";
import { TwitterIcon } from "./twitter-icon";

export function Footer() {
  return (
    <footer className="bg-dark-blue3 pt-40 pb-8">
      <div className=" mx-auto w-full max-w-7xl">
        <Logo />
        <div className="pt-10 grid grid-cols-5 gap-12">
          <div className="flex gap-4">
            <LocationIcon />
            <p className="max-w-sm text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <PhoneIcon />
              <span className="text-sm">+1-543-123-4567</span>
            </div>
            <div className="flex items-center gap-6">
              <EmailIcon />
              <span className="text-sm">example@fylo.com</span>
            </div>
          </div>
          <ul className="space-y-6">
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
          <ul className="space-y-6">
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
          <div className="flex gap-x-6">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
    </footer>
  );
}
