'use client'
import React, { useEffect, useState } from 'react'
import { getSearchProduct, src } from '../api/fetchApi.js';
import Link from 'next/link';

function TimKiem(params:any) {
  const [dataSearch,setDataSearch]=useState([]);
  console.log(params.searchParams.key);
 
  
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await getSearchProduct(params.searchParams.key)
            setDataSearch(response.content);
       
            
           
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    fetchData(); // Gọi hàm fetchData() khi component mount

}, [params.searchParams.key]);


 console.log(dataSearch);
  return (
    <div className="container">
    <div className="product-top h-[35px] mt-3 flex items-center px-3" style={{background:"white"}}>
      <p>Những sản phẩm khác:{params.searchParams.key}</p>
    </div>
    
    <div className="flex flex-wrap gap-[0.5%]">
  {dataSearch.map((item:any)=>{
    return    <div
    className="w-[19.5%] item-product bg-white mt-[10px] relative"
    style={{ background: "white" }}
  >
    <Link href={`/sanPhamChiTiet/${item._id}`}>    
    {item.discount > 0 ? (
      <div
        className="discount absolute top-2 right-2 text-white py-1 px-3"
        style={{ background: "red" }}
      >
        -{item.discount}%
      </div>
    ) : (
      ""
    )}

  
    <div className="image-product">
      <img
        src={`${src}/${item.image}`}
        alt=""
      />
    </div>
    <div className="text-product text-center py-3">
      <h5 className="font-semibold">{item.name}</h5>
         {item.discount > 0 ?<p className="price-product text-center text-red-600">
        
    
          {(item.price-(item.price * (item.discount / 100))).toLocaleString()} <span className="banDau">  {item.price.toLocaleString()}đ</span>
                  </p> :<p className="price-product text-center text-red-600">
                    
                
                    {item.price.toLocaleString()}đ
                  </p>} 
  
      <div className="flex justify-center">
        <button className="btn-primary">Mua ngay</button>
      </div>
    </div></Link>

  </div>
  })}
  
    </div>
  </div>
  )
}

export default TimKiem