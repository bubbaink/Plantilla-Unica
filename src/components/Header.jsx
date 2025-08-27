import { useState } from "react";
import MenuBar from "./MenuBar";


const Header = () => {
    
    const [open, setOpen] = useState(false)
    const handleOpenMenu = () => {
    setOpen(!open)
    
    }

    return (
        <nav className="relative w-full border-b-2 border-gray-300">
            <div className="flex h-2 pb-8 pt-2 justify-between">
                <div className="pl-2">
                    <img className="w-6 h-6" src="./src/assets/logo.svg" alt="" />
                </div>
                <div>
                    Texto
                </div>
                <div className="pr-2">
                    <div className="flex">
                        <button>
                            <img className="w-10 h-7 pr-2" src="./src/assets/cart-shopping.svg" alt="" />
                        </button>
                        <button onClick={()=> handleOpenMenu()}>
                            <img className="w-10 h-7 pr-2" src="./src/assets/menu-bars.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${open ? open : "hidden"} flex justify-end pr-2`}>
                <MenuBar/>
            </div>
        </nav>
    );
}

export default Header;
