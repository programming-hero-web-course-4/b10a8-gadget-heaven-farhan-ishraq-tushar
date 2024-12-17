/* eslint-disable react/prop-types */
const WhitelistItem = ({ wish }) => {
    console.log(wish)
    const { product_title, product_image, description, price } = wish
    // const { product_title, product_image, description, price, availability, rating, Specification }= wish
    // const [test] = a;
    // console.log(test)
    return (
        <div className="border-2 rounded-lg p-2 m-4 w-10/12 mx-auto">
            {
                <div className="flex items-center gap-3">

                    <img src={product_image} className="bg-contain w-[100px]" />

                    <div>
                        <h1 className="font-bold text-xl">{product_title}</h1>
                        <p>{description}</p>
                        <p>{price} $</p>
                    </div>
                </div>

            }
        </div>
    );
};

export default WhitelistItem;

