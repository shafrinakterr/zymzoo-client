import logo from '../../../assets/image/logo/logo1.png'

const Footer = () => {
    return (
        <div className="mt-20">
            <footer className="footer shadow-inner shadow-primaryColor-0  relative p-10 bg-[] text-white">

                <aside className='flex flex-col items-center'>
                    <img className='w-36' src={logo} alt="" />
                    <p className='text-center flex justify-center text-primaryColor-0 text-2xl font-semibold'>ZYMZOO</p>
                </aside>
                <nav className='capitalize'>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Gallery</a>
                    <a className="link link-hover">Trainer</a>
                    <a className="link link-hover">Classes</a>
                    <a className="link link-hover">Dashboard</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
                <div className="footer footer-center p-4 bg-black text-base-content">
                    <aside>
                        <p className='text-gray-300'>Copyright © 2023 - All right reserved by ZYMZOO Ltd</p>
                    </aside>
                </div>
        </div>
    );
};

export default Footer;