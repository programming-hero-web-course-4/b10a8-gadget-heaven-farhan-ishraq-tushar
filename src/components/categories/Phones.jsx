// import React from 'react';
import { useLoaderData } from "react-router";
import Card from "../home/Card";

const Phones = () => {

    const data = useLoaderData();
    const matchedData = data.filter(p => p.category === "phones") || []
    console.log(matchedData)

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

export default Phones;