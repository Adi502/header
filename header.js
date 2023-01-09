import React from 'react';
import telephone from '../images/telephone_icon.png'
import email from '../images/email_icon.png'
import pccoelogo from '../images/pccoe-logo-new.webp'
import pcetlogo from '../images/pcet-trust-logo-new.webp'

const header = () => {
    return(
        <>
        <div className="top-strip">
            <div className="margin">
                <div className="full">
                    <div className="width">
                        <div className="plr">
                            <img src={telephone} className="eticon" width="15px" height="15px" alt="PCCOE" /> <a href="tel:+91-9226094819">+91 - 9226094819 </a> |{" "}
                            <img src={email} className="eticon" width="16px" height="16px" alt="PCCOE" /> <a href="mailto:pdszpune@gmail.com">pdszpune@gmail.com</a>
                        </div>
                    </div>
                    <div className="width-65">
                        <div className="plr">
                            <div className="tright">
                                |<a href="http://www.pccoepune.com/sports.php">Mr. Santosh Pacharane</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cleardiv"></div>
            </div>
        </div>
        
        <div className="margin">
                <div className="full-wdt">
                    <div className="width-12">
                        <div className="logo">
                            <a href="http://www.pccoepune.com/"><img alt="PCCOE LOGO" className="wmh-img-rsp" src={pccoelogo} width="100px" />
                            </a>
                        </div>
                    </div>

                    <div className="width-76">
                        <div style={{ wmh: "plr -15px" }}>
                            <div className="header1" align="center">PIMPRI CHINCHWAD EDUCATION TRUST's</div>
                            <div className="header2" align="center">PIMPRI CHINCHWAD COLLEGE OF ENGINEERING</div>
                            <div className="para"><i><span><strong>NBA </strong> Accredited</span>|<span><strong> NAAC</strong> Accredited with <strong>'A'</strong> Grade</span>|<span>An<strong> Autonomous</strong> Institute</span>|<span><strong> AICTE</strong> Approved</span>|<span><strong> ISO 9001: 2015</strong> Certified</span>|<span> Permanently Affiliated to<strong> SPPU</strong>, Pune</span></i></div>
                            <div className="header2" align="center">GAMES & SPORTS DEPARTMENT</div>
                        </div>
                    </div>

                    <div className="width-12">
                        <div className="logo">
                            <a href="http://pcet.org.in/" target="_blank" rel='noreferrer'><img src={pcetlogo} className="wmh-img-rsp" alt="PCET TRUST LOGO" width="100px" /></a></div>
                    </div>
                </div>
                <div className="cleardiv"></div>
            </div></>
    );
}

export default header;