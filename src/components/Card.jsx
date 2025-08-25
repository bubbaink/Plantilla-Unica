const Card = () => {
    return (
        <div className="max-w-36 max-h-66 justify-items-center border-2 border-gray-300 rounded-md">
            <img className="w-full pt-1 pb-1 border-b border-gray-300" src="./src/assets/react.svg" alt="" />
            <div className="pl-1">
                <p className="text-green-500">$4.000</p>
                <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cum hic eaque?</p>
            </div> 
        </div>
    )
}
export default Card;