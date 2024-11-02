import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { firestore, storage } from "../../config/Firebase";
import toast from "react-hot-toast";
import { getDownloadURL, ref, uploadBytes, } from 'firebase/storage';

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
  const [productImg, setProductImg] = useState()
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
    // if (product.title == "" || product.price == "" || product.productImageUrl == "" || product.category == "" || product.description == "") {
    //   return toast.error("all fields are required")
    // }
    uploadImage()
  }

  const uploadImage = async () => {
    if (!productImg) return;
    const imageRef = ref(storage, `productImgs/${productImg.name}`);
    uploadBytes(imageRef, productImg).then((snapshot) => {
      console.log(imageRef)

      getDownloadURL(snapshot.ref).then((url) => {
        const productRef = collection(firestore, "products")
        setLoading(true)
        try {
          addDoc(productRef, {
            product,
            productImg: url,
            time: Timestamp.now(),
            date: new Date().toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            )
          })
          toast.success("Add product successfully");
          navigate('/adminDashboard')
          setLoading(false)
        } catch (error) {
          toast.error(error)
          console.log(error)
        }
      });
    });
    // const imageRef = ref(storage, `productImage/${productImg.name}`);
    // uploadBytes(imageRef, productImg).then((snapshot) => {
    //   getDownloadURL(snapshot.ref).then((url) => {
    //     const productRef = collection(firestore, "products")
    //     try {
    //       addDoc(productRef, {
    //         product,
    //         productImg: url,
    //         time: Timestamp.now(),
    //         date: new Date().toLocaleString(
    //           "en-US",
    //           {
    //             month: "short",
    //             day: "2-digit",
    //             year: "numeric",
    //           }
    //         )
    //       })
    //       toast.success("Add product successfully");
    //       navigate('/adminDashboard')
    //       setLoading(false)
    //     } catch (error) {
    //       console.log(error);

    //       toast.error("Product is not add!");
    //       setLoading(false)
    //     }
    //   });
    // });
  }


  return (
    <div className="bg-deep-purple-100">
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
              required="2"
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
              required
            />
          </div>
          <div className="mb-3">
            <input
              name="productImg"
              type="file"
              onChange={(e) => setProductImg(e.target.files[0])}
              className='bg-plane text-dark border border-dark px-2 py-2 w-96 rounded-md outline-none placeholder-dark'
              required
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
              className="w-full px-1 py-2 text-sm rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-primary shadow-sm focus:shadow-md appearance-none cursor-pointer text-dark bg-plane border border-dark rounded-md outline-none">
              <option disabled>Select Product Category</option>
              {categoryList.map((value, index) => {
                const { name } = value
                return (
                  <option className=" first-letter:uppercase text-dark" key={index} value={name}>{name}</option>
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
              className='bg-dark hover:bg-primary w-full text-plane text-center py-2 font-bold rounded-md'
            >
              {!loading ? "ADD PRODUCTS" : <span className="grid w-full place-items-center overflow-x-scroll rounded-lg lg:overflow-visible">
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
              </span>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
