import Card from "./Card";
import MidSide from "./MidSide";

const Container = () => {
    return (
        <div className="w-full h-full pb-8">
            <div className="pl-8 pt-8">
                <div className="flex justify-between pr-12">
                    <h1>contenido</h1>
                    <h1>contenido</h1>
                </div>
                <div className="w-full">
                    <div className="gap-6 flex flex-wrap pt-8">
                        <Card/>
                    </div>
                </div>
            </div>
            <div className="pt-8">
                    <MidSide/>
            </div>
            <div className="pl-8 pt-8">
                <div className="flex justify-between pr-12">
                    <h1>contenido</h1>
                    <h1>contenido</h1>
                </div>
                <div className="w-full">
                    <div className="gap-6 flex flex-wrap pt-8">
                        <Card/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container;
