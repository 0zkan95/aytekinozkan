import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import '/components/styles/Footer.scss';


const Footer = () => {
    return (
        <footer className="footer-container" id="contact">

            <div className="img-div">
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="grid-img "
                />
            </div>

            <div className="message-content">
                <h1 className="heading">
                    Ready to take <span>your digital
                        presence </span> to the next level?
                </h1>
                <p className="content-text">
                    Reach out to me today and let&apos;s discuss how I can help you
                    achieve your goals.
                </p>
                <a href="mailto:aytekin7ozkan@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
            <div className="copyright-con">
                <p className="copy-text">
                    Copyright © 2025 Aytekin Özkan
                </p>

                <div className="social-medias">
                    {socialMedia.map((info) => (
                        <div
                            key={info.id}
                            className="social-item"
                        >
                            <a href={info.link}>
                                <img src={info.img} alt="icons" width={20} height={20} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
