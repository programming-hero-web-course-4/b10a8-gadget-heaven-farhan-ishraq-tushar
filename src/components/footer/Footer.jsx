
const Footer = () => {
    return (
        <div className="flex flex-col items-center mt-20 py-10 text-white bg-black">
            <div className="text-center">
                <h1 className="text-3xl font-bold">Gadget Heaven</h1>
                <p className="px-2 py-1">Leading the way in cutting-edge technology <br className="hidden" /> and innovation.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-evenly w-full mt-8">
                <div className="text-center">
                    <h1 className="font-bold text-lg pb-1">Services</h1>
                    <p>Product Support</p>
                    <p>Order Tracking</p>
                    <p>Shipping & Delivery</p>
                    <p>Returns</p>
                </div>

                <div className="text-center">
                    <h1 className="font-bold text-lg pb-1">Company</h1>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Contact</p>
                </div>

                <div className="text-center">
                    <h1 className="font-bold text-lg pb-1">Legal</h1>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;