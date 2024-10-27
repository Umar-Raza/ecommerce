const OrderDetail = () => {
    return (
        <div>
            <div className="py-5 px-5 flex justify-center items-center mt-5">
                {/* text  */}
                <h1 className=" text-xl text-dark font-bold">All Product</h1>
                {/* Add Product Button  */}
             
            </div>

            {/* table  */}
            <div className="w-full overflow-x-auto px-5">
                <table className="w-full text-left border border-collapse sm:border-separate border-dark rounded-2xl text-dark" >
                    <tbody>
                        <tr>
                            <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-dark text-slate-700 bg-slate-100 font-bold fontPara">S.No.</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-dark text-slate-700 bg-slate-100">Location Name</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-dark text-slate-700 bg-slate-100">Action</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-dark text-slate-700 bg-slate-100">Action</th>
                        </tr>
                        <tr className="text-dark">
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-dark stroke-slate-500 text-slate-500 ">
                                1.
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-dark stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                {'name'}
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-dark stroke-slate-500 text-slate-500 text-green-500 cursor-pointer ">
                                Edit
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-dark stroke-slate-500 text-slate-500 text-red-500 cursor-pointer ">
                                Delete
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OrderDetail;