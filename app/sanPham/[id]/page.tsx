"use client";

import React, { useEffect, useState } from "react";
import "../sanPham.css";
import Link from "next/link";
import { getDataCate, getDataProductsByCate, getDiscountDataProductsByIdCate, src } from "@/app/api/fetchApi";
import { Spin } from "antd";
function SanPham({ params }: any) {
  const [data, setData] = useState([]);
  const [sortOption, setSortOption] = useState('asc');
  const [cate,getCate]=useState([]);
  const [giamGia,setGiamGia]=useState([]);
  const [loading,setLoading]=useState(true);

  const handleSort = (data:any) => {
 
  
    // Sử dụng [...data] để tạo ra một bản sao của mảng data, không làm thay đổi mảng gốc
    return [...data].sort((a, b) => {
      if (sortOption === 'asc') {
        return a.price - b.price;
      } else if (sortOption === 'desc') {
        return b.price - a.price;
      } else if(sortOption =='idAsc'){
        return a._id - b._id;
      }else if(sortOption =='idDesc'){
        return b._id - a._id;
      }
      // Nếu sortOption không phải là 'asc' hoặc 'desc', trả về 0 hoặc một giá trị mặc định
      return a._id - b._id;
    });
  }

  const handleSortChange = (e:any) => {
    setSortOption(e.target.value);
  }
  const id = params.id;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDataProductsByCate(id);
        const response1 = await getDataCate()
        
        setTimeout(() => {  if (response.message == "Thành công !") {
          setData(response.content);
          getCate(response1.content);
         
          setLoading(false)

          
        }         }, 1000);
       
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData(); // Gọi hàm fetchData() khi component mount
  }, [id]);

  
  return (
    <main className="mt-4">
      <div className="container">
        {loading ? <div className='flex justify-center items-center my-[10rem]'>
          <Spin />
        </div> :(  <div className="products-box">
          <div className="products-left">
            <div className="product-title">
              <h5>Tìm Kiếm</h5>
              <div className="products-left__box  ">
                <p className="mt-1">Sản phẩm</p>
                <form className="products-left__item flex justify-between pt-3">
                  <button onClick={async(e)=>{
                    e.preventDefault()
                         const response2=await getDiscountDataProductsByIdCate(id,1);       
                        setData(response2.content)
                  }}
                  className="ml-5"

                  >Sản Phẩm Giảm</button>
                  <span>11</span>
                </form>
                <div className="products-left__item flex justify-between">
                <button onClick={async(e)=>{
                    e.preventDefault()
                         const response2=await getDiscountDataProductsByIdCate(id,0);       
                        setData(response2.content)
                  }}
                  className="ml-5"
                  >Sản Phẩm Không Giảm</button>
                  <span>11</span>
                </div>
              </div>
              <div className="products-left__box">
                <p className="mt-2">Loại</p>
                <div className="pt-3"></div>
                {cate.map((item:any)=>{
                  return   <div className="products-left__item flex justify-between">
                  <Link href={`/sanPham/${item._id}`}>{item.tenLoai}</Link>
                  <span>11</span>
                </div>
                })}
              </div>
              <div className="products-left__box">
                <p className="mt-2">Giá</p>
                <div className="products-left__item flex justify-between  pt-3">
                  <a href="">Sản Phẩm Giảm</a>
                  <span>11</span>
                </div>
                <div className="products-left__item flex justify-between">
                  <a href="">Sản Phẩm Không Giảm</a>
                  <span>11</span>
                </div>
              </div>
              <div className="products-left__box ">
                <p className="mt-2">Màu Sắc</p>
                <div className="products-left__item flex justify-between  pt-3">
                  <a href="">Sản Phẩm Giảm</a>
                  <span>11</span>
                </div>
                <div className="products-left__item flex justify-between">
                  <a href="">Sản Phẩm Không Giảm</a>
                  <span>11</span>
                </div>
              </div>
            </div>
          </div>
          <div className="products-right">
            <div className="products-title flex justify-between items-center">
              <h5>101 sản phẩm</h5>
              <select className="form-select w-auto border-solid border border-black" onChange={handleSortChange}>
            <option value="asc">Giá tăng dần</option>
            <option value="desc">Giá giảm dần</option>
            <option value="idAsc">Mới nhất</option>
            <option value="idDesc">Cũ Nhất</option>

          </select>

            </div>
            <div className="flex flex-wrap gap-[0.5%]">
              {handleSort(data).map((item:any)=>{
                return   <div
                className="w-[24.5%] item-product mt-[10px] relative"
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

              })}
            
            </div>
          </div>
        </div>)}
      
      </div>
    </main>
  );
}

export default SanPham;
