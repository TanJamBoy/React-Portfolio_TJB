import React from "react";
import "./Footer.css"

function Footer() {
    return (
        <footer className="footer mt-auto py-3 bg-light">
                <div className="container">
                    <center>
                        <a className="mr-5" href="https://www.linkedin.com/in/tanner-boyer-7a4a231a8/" target="_blank" rel="noopener noreferrer">
                            <img src="https://icons-for-free.com/iconfiles/png/512/linked+linkedin+logo+social+icon-1320191784782940875.png" width="50px" alt="Linkedin Logo"/>
                        </a>
                        <a className="mr-5" href="https://github.com/TanJamBoy" target="_blank" rel="noopener noreferrer">
                            <img src="./githubLogo.png" width="50px" alt="Github Logo"/>
                        </a>
                        <a href="https://docs.google.com/document/d/1FFpHSK37EeIWwld85VcNH-uPRkcnKCHm1ZcnKZVyEmo/preview" target="_blank" rel="noopener noreferrer">
                            <img src="./resumeLogo.png" width="50px" alt="Resume Logo"/>
                        </a>
                    </center>
                </div>
        </footer>
    )
};

export default Footer;