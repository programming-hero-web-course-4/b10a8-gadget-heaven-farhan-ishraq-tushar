import { useLoaderData } from "react-router";
import Card from "../home/Card";

const SmartWatches = () => {
  const data = useLoaderData();
  const matchedData = data.filter((p) => p.category === "smartWatches") || [];

  return (
    <div className="grid grid-cols-1 w-full px-3 md:px-0 md:w-fit md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 md:pt-0">
      {matchedData.map((gadget) => (
        <Card key={gadget.product_id} gadget={gadget}></Card>
      ))}
    </div>
  );
};

export default SmartWatches;
