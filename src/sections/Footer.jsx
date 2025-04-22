import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center items-center md:items-start">
          <a href="#hero">
            Pio<span className="text-blue-500 font-medium">Der</span>
          </a>
        </div>

        <div className="socials">
          {socialImgs.map((img) => (
            <a className="icon target=_blank" href={img.url} key={img.url}>
              <img src={img.imgPath} />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center items-center md:items-end">
          <p>
            Copyright © {new Date().getFullYear()} Pioter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
