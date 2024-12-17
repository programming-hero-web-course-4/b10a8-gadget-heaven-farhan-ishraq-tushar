import { useLoaderData } from "react-router";
import Card from "../home/Card";

const SmartWatches = () => {

    const data = useLoaderData();
    const matchedData = data.filter(p => p.category === "smartWatches") || []
    
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 md:pt-0 h-fit">
            
            {
                matchedData.map(
                    gadget => (
                        <Card key={gadget.product_id} gadget={gadget}></Card>
                    )
                )
            }

            
        </div>
    );
};

export default SmartWatches;