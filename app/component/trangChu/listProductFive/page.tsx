"use client";
import {
  getDataProducts,
  getDiscountDataProducts,
  getHotDataProducts,
  src,
} from "@/app/api/fetchApi";
import { addToCart } from "@/app/redux/slices/CartSlice";
import { notification } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function ListProductFive() {
  const dispatch = useDispatch();

  const [number, setNumber] = useState(0);
  const [productHot, setProductHot] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  const [listProductDiscount, setListProductDiscount] = useState([]);
  let renderProduct: any[] = [];
  if (number == 0) {
    renderProduct = listProduct;
  } else if (number == 1) {
    renderProduct = listProductDiscount;
  } else {
    renderProduct = productHot;
  }
  const addCart=(product:any)=>{
    
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cartItems.find((item:any) => item._id == product._id);
    
    console.log(existingItem);
    
  
    
    if (existingItem) {
      existingItem.soLuong++;
    } else {
      cartItems.push({...product, soLuong: 1 });
    }
  
    localStorage.setItem('cart', JSON.stringify(cartItems));
    
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getHotDataProducts();
        const response1 = await getDiscountDataProducts();
        const response2 = await getDataProducts();
        if ((response.message = "Thành công !")) {
          setProductHot(response.content);
          setListProductDiscount(response1.content);
          setListProduct(response2.content.slice(0, 5).reverse());
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData(); 
  }, []);
  return (
    <section className="container mt-2">
      <div className="sp-hot">
        <h3 className="text-white text-center text-[22px]">Các sản phẩm</h3>
        <div className="flex justify-center gap-3">
          <button
            className="text-white btn btn-primary"
            onClick={() => {
              setNumber(0);
            }}
          >
            Sản Phẩm Mới
          </button>
          <button
            className="text-white btn btn-primary"
            onClick={() => {
              setNumber(1);
            }}
          >
            Sản Phẩm Giảm Giá
          </button>
          <button
            className="text-white btn btn-primary"
            onClick={() => {
              setNumber(2);
            }}
          >
            Sản Phẩm Hot
          </button>
        </div>
        
        <div className="mt-3 flex flex-wrap gap-[.6%]">
          {renderProduct.map((item: any) => {
            return (
              <div
                className="w-[19.5%] item-product bg-white mt-[10px] relative"
                style={{ background: "white" }}
              >
                <Link href={`/sanPhamChiTiet/${item._id}`}>    {item.discount > 0 ? (
                  <div
                    className="discount absolute top-2 right-2 text-white py-1 px-3"
                    style={{ background: "red" }}
                  >
                    -{item.discount}%
                  </div>
                ) : (
                  ""
                )}
{number=== 0 ? (
                  <div
                    className="discount absolute top-2 left-2 text-white py-1 px-3"
                    style={{ background: "red" }}
                  >
                    New
                  </div>
                ) : (
                  ""
                )}
{number=== 2 ? (
                  <div
                    className="discount absolute top-2 left-2 text-white py-1 px-3"
                    style={{ background: "red" }}
                  >
                    Hot
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
                    <button className="btn-primary"
                    onClick={()=>{
                      dispatch(addToCart({item:item}))
                      notification.success({
                        message: 'Thành công',
                        description:
                          'Thêm giỏ hàng thành công.',
                      });
                    }}
                    >Mua ngay</button>
                  </div>
                </div>
              </div>
            );
          })}
          
        </div>
        <div className="text-center mt-3">
          <button className="btn btn-primary">Xem Thêm &gt;</button>
        </div>
      </div>
    </section>
  );
}

export default ListProductFive;
