"use client";




import { getDataProducts, src } from '@/app/api/fetchApi';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function ListProductTen() {
    const [listProduct,setListProduct]=useState([])
    useEffect(() => {
      const fetchData = async () => {
        try {
          
          const response = await getDataProducts();
          if ((response.message = "Thành công !")) {
            
            setListProduct(response.content.slice(0, 10).reverse());
          }
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };
  
      fetchData(); // Gọi hàm fetchData() khi component mount
    }, []);
  return (
    <div className="flex flex-wrap gap-[0.5%]">   {listProduct.map((item: any) => {
        return (
          <div
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
                </Link>
        
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
            </div>
          </div>
        );
      })}</div>
  )
}

export default ListProductTen