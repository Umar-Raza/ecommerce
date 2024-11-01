import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/myContext";
import { useNavigate, useParams } from "react-router-dom";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "../../config/Firebase";
import toast from "react-hot-toast";

const categoryList = [
  {
    name: 'fashion'
  },
  {
    name: 'shirt'
  },
  {
    name: 'jacket'
  },
  {
    name: 'mobile'
  },
  {
    name: 'laptop'
  },
  {
    name: 'shoes'
  },
  {
    name: 'home'
  },
  {
    name: 'books'
  }
]

export const EditProduct = () => {
  const context = useContext(MyContext)
  const { loading, setLoading, getAllProductFunction } = context

  // navigate 
  const navigate = useNavigate();
  const { id } = useParams()

  // product state
  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  });

  // Get Single Product Function
  const getSingleProductFunction = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(firestore, "products", id))
      //   console.log(product.data())
      const product = productTemp.data();
      setProduct({
        title: product?.title,
        price: product?.price,
        productImageUrl: product?.productImageUrl,
        category: product?.category,
        description: product?.description,
        quantity: product?.quantity,
        time: product?.time,
        date: product?.date
      })
      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const editProduct = async () => {
    setLoading(true)
    try {

      await setDoc(doc(firestore, 'products', id), product)
      toast.success("Product Updated successfully")
      getAllProductFunction();
      setLoading(false)
      navigate('/adminDashboard')

    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getSingleProductFunction();
  }, []);
  return (
    <div className="bg-deep-purple-100">
      <div className='flex justify-center items-center h-screen'>
        {/* Login Form  */}
        <div className="login_Form bg-plane px-8 py-6 border border-primary rounded-xl shadow-md">

          {/* Top Heading  */}
          <div className="mb-5">
            <h2 className='text-center text-2xl font-bold text-dark '>
              Update Product
            </h2>
          </div>

          {/* Input One  */}
          <div className="mb-3">
            <input
              type="text"
              name="title"
              value={product.title}
              onChange={(e) => {
                setProduct({
                  ...product,
                  title: e.target.value
                })
              }}
              placeholder='Product Title'
              className='bg-plane border text-dark border-primary px-2 py-2 w-96 rounded-md outline-none placeholder-dark'
            />
          </div>

          {/* Input Two  */}
          <div className="mb-3">
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={(e) => {
                setProduct({
                  ...product,
                  price: e.target.value
                })
              }}
              placeholder='Product Price'
              className='bg-plane border text-dark border-primary px-2 py-2 w-96 rounded-md outline-none placeholder-dark'
            />
          </div>

          {/* Input Three  */}
          <div className="mb-3">
            <input
              type="text"
              name="productImageUrl"
              value={product.productImageUrl}
              onChange={(e) => {
                setProduct({
                  ...product,
                  productImageUrl: e.target.value
                })
              }}
              placeholder='Product Image Url'
              className='bg-plane border text-dark border-primary px-2 py-2 w-96 rounded-md outline-none placeholder-dark'
            />
          </div>

          {/* Input Four  */}
          <div className="mb-3">
            <select
              value={product.category}
              onChange={(e) => {
                setProduct({
                  ...product,
                  category: e.target.value
                })
              }}
              className="w-full px-1 py-2 text-dark bg-plane border border-primary rounded-md outline-none  ">
              <option disabled>Select Product Category</option>
              {categoryList.map((value, index) => {
                const { name } = value
                return (
                  <option className=" first-letter:uppercase" key={index} value={name}>{name}</option>
                )
              })}
            </select>
          </div>

          {/* Input Five  */}
          <div className="mb-3">
            <textarea
              name="description"
              value={product.description}
              onChange={(e) => {
                setProduct({
                  ...product,
                  description: e.target.value
                })
              }}
              placeholder="Product Description" rows="5" className=" w-full px-2 py-1 text-dark bg-plane border border-primary rounded-md outline-none placeholder-dark ">
            </textarea>
          </div>

          {/* Update Product Button  */}
          <div className="mb-3">
            <button type="button" onClick={editProduct} className="w-full text-white bg-dark hover:bg-primary  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-dark dark:focus:ring-dark">
              {!loading ? "Edit Product" : <span className="grid w-full place-items-center overflow-x-scroll rounded-lg lg:overflow-visible">
                <svg className="text-light animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24">
                  <path
                    d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                    stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path
                    d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                    stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
                  </path>
                </svg>
              </span>}</button>
          </div>
        </div>
      </div>
    </div>
  );
}