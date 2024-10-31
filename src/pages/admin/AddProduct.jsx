import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/myContext";
import { Timestamp } from "firebase/firestore";
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
  },
  {
    name: 'Food'
  }
]
export const AddProduct = () => {
  const context = useContext(MyContext);
  const { loading, setLoading } = context;

  // navigate 
  const navigate = useNavigate();

  // product state
  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    quantity: 1,
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

  const addProductFunction = async () => {
    if (product.title == "" || product.price == "" || product.productImageUrl == "" || product.category == "" || product.description == "") {
      return toast.error("all fields are required")
    }

    setLoading(true);
    try {
      const productRef = collection(firestore, 'products');
      await addDoc(productRef, product)
      toast.success("Add product successfully");
      navigate('/adminDashboard')
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
      toast.error("Add product failed");
    }

  }
  return (
    <div>
      <div className='flex justify-center items-center h-screen'>
        {/* Login Form  */}
        <div className="login_Form bg-plane px-8 py-6 border border-dark rounded-xl shadow-md">

          {/* Top Heading  */}
          <div className="mb-5">
            <h2 className='text-center text-2xl font-bold text-dark '>
              Add Product
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
              className='bg-plane text-dark border border-dark px-2 py-2 w-96 rounded-md outline-none placeholder-dark'
            />
          </div>

          {/* Input Two  */}
          <div className="mb-3">
            <input
              type="number"
              value={product.price}
              onChange={(e) => {
                setProduct({
                  ...product,
                  price: e.target.value
                })
              }}
              placeholder='Product Price'
              className='bg-plane text-dark border border-dark px-2 py-2 w-96 rounded-md outline-none placeholder-dark'
            />
          </div>

          {/* Input Three  */}
          <div className="mb-3">
            <input
              type="text"
              value={product.productImageUrl}
              onChange={(e) => {
                setProduct({
                  ...product,
                  productImageUrl: e.target.value
                })
              }}
              placeholder='Product Image Url'
              className='bg-plane text-dark border border-dark px-2 py-2 w-96 rounded-md outline-none placeholder-dark'
            />
          </div>

          {/* Input Four  */}
          <div className="mb-3">
            <select className="w-full px-1 py-2 text-sm rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer text-dark bg-plane border border-dark rounded-md outline-none">
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
            <textarea name="description" value={product.description}
              onChange={(e) => {
                setProduct({
                  ...product,
                  description: e.target.value
                })
              }} placeholder="Product Description" rows="5" className=" w-full px-2 py-1 text-dark bg-plane border border-dark rounded-md outline-none placeholder-dark ">

            </textarea>
          </div>
          {/* Add Product Button  */}
          <div className="mb-3">
            <button
              onClick={addProductFunction}
              type='button'
              className='bg-dark hover:bg-primary w-full text-plane text-center py-2 font-bold rounded-md '
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
