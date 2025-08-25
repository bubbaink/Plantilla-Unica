const Header = () => {
    return (
        <nav className="w-full h-2 pb-8 pt-2 border-b-2 border-gray-300 flex justify-between">
            <div className="pl-2">
                <img className="w-6 h-6" src="./src/assets/logo.svg" alt="" />
            </div>
            <div>
                Texto
            </div>
            <div className="pr-2">
                <div className="flex">
                    <img className="w-10 h-7 pr-2" src="./src/assets/cart-shopping.svg" alt="" />
                    <img className="w-10 h-7 pr-2" src="./src/assets/menu-bars.svg" alt="" />
                </div>
            </div>
        </nav>
    );
}

export default Header;
