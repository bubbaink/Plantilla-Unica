const Footer = () => {
    return (
        <footer className="w-full h-1 border-b-2 border-gray-300 justify-items-center">
            <div className="pl-2 pt-8 pb-4">
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur consequuntur dolorem ut?</p>
                    <div className="pt-4">
                        <div className="grid grid-cols-4">
                            <div className="flex">
                                <img className="w-8 h-8" src="./src/assets/facebook.svg" alt="" />
                                <p className="pt-1">Facebook</p>
                            </div>
                            <div className="flex">
                                <img className="w-8 h-8" src="./src/assets/instagram.svg" alt="" />
                                <p className="pt-1">Instagram</p>
                            </div>
                            <div className="flex">
                                <img className="w-8 h-8" src="./src/assets/tiktok.svg" alt="" />
                                <p className="pt-1">Tiktok</p>
                            </div>
                            <div className="flex">
                                <img className="w-8 h-8" src="./src/assets/whatsapp.svg" alt="" />
                                <p className="pt-1">Whatsapp</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
