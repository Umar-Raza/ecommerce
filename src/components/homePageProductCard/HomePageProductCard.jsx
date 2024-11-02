import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/myContext";
// productData 
// const productData = [
//     {
//         id: 1,
//         image: '/src/assets/items/SBC_1553.webp',
//         title: 'Gluten Free Spices & Powders',
//         desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
//         price: 150,
//         trendingProductName: 'Featured',
//         quantity: 1,
//     },
//     {
//         id: 2,
//         image: '/src/assets/items/Keto-and-Gluten-Free-Almond-Bread-300x300.webp',
//         title: 'Kaushalam kalash Copper Pot',
//         desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
//         price: 120,
//         trendingProductName: 'Featured',
//         quantity: 1,
//     },
//     {
//         id: 3,
//         image: '/src/assets/items//Gluten-Free-Red-Velvet-Swiss-Rolls-2-300x300.webp',
//         title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
//         desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
//         price: 130,
//         trendingProductName: 'Featured',
//         quantity: 1,
//     },
//     {
//         id: 4,
//         image: '/src/assets/items/Gluten-Free-Rasgullay-2-300x300.webp',
//         title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
//         desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
//         price: 120,
//         trendingProductName: 'Featured',
//         quantity: 1,
//     },

// ]


export const HomePageProductCard = () => {
    const navigate = useNavigate()
    const context = useContext(MyContext)
    const { getAllProduct } = context

    return (
        <div className="mt-10">
            {/* Heading  */}
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">Bestselling Products</h1>
            </div>

            {/* main  */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {getAllProduct.slice(0, 8).map((item, index) => {
                            const { id, title, price, productImageUrl } = item
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                        <img
                                            onClick={() => navigate('/productInfo')}
                                            className="lg:h-80  h-96 w-full"
                                            src={productImageUrl}
                                            alt="img"
                                        />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                Frozen Food
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3 font-bold">
                                                Rs.{price}
                                            </h1>
                                            <div className="flex justify-center ">
                                                <button className=" bg-dark hover:bg-primary w-full text-white py-[4px] rounded-lg font-bold">
                                                    Add To Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
