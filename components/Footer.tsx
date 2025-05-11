"use client"
// FaLocationArrow will be replaced by SiGmail
import { FaGithub, FaSquareXTwitter, FaLinkedinIn } from "react-icons/fa6"; 
import { SiGmail } from "react-icons/si"; // Import SiGmail
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import '@/components/styles/Footer.scss';


const Footer = () => {
    const renderSocialIcon = (id: number) => { // Added same helper function
        switch (id) {
            case 1: // GitHub
                return <FaGithub size="1.25rem" />; // 20px
            case 2: // Twitter/X
                return <FaSquareXTwitter size="1.25rem" />;
            case 3: // LinkedIn
                return <FaLinkedinIn size="1.25rem" />;
            default:
                return null;
        }
    };

    return (
        <footer className="footer-container" id="contact">

            <div className="img-div">
                <img
                    src="/footer-grid.svg"
                    alt="" // Decorative
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
                        icon={<SiGmail />} // Changed icon to SiGmail
                        position="right"    // Keeping position as "right"
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
                            <a href={info.link} aria-label={`Social media link ${info.id}`}> {/* Added aria-label */}
                                {renderSocialIcon(info.id)}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
