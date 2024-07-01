import React from "react";
import logo from '../assets/images/logo.avif'
const Footer = () => {
    return (
        <div>
            <footer className="footer bg-black opacity-70 text-white p-10 mt-20">
            <aside>
                <div>
                    <img src={logo} className="w-[60px] h-[60px] rounded-[50%]" alt="" srcset="" />
                </div>
                <p>
                    ACME Industries Ltd.
                    <br />
                    Providing reliable tech since 1992
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
        <p className="text-center bg-black opacity-70 text-white">Copyright © ${new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
        </div>
    )
}
export default Footer