"use client"

import React, { useEffect, useState } from 'react'
import '/public/css/gioHang.css'
import { MdDelete } from 'react-icons/md'
import { LuMinus } from 'react-icons/lu'
import { FaPlus } from 'react-icons/fa'
import { FiPlus } from 'react-icons/fi'
import HookGioHang from '../component/hook/GioHang'
import { useDispatch, useSelector } from 'react-redux'
import { giamSL, removeItem, selectTotal, selectTotalQuantity, tangSL } from '../redux/slices/CartSlice'
import Link from 'next/link'
import { notification } from 'antd'
function gioHang() {
  // const {listCart,giamSL,tangSL,handleDelete,tongSoLuong,tongThanhTien}=HookGioHang();
  const listCart = useSelector((state:any) => state.cart.items);
  const dispatch = useDispatch();
  const totalQuantity = useSelector(selectTotalQuantity);
  const total = useSelector(selectTotal);

  
  return (
    
   <main className="container">
  <h3 className="text-center my-4 text-[25px] font-medium">Giỏ Hàng</h3>
  <div className="cart flex gap-3">
    <div className="cart-left" style={{width:'80%'}}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="text-center text-white py-2">Sản Phẩm</th>
            <th scope="col" className="text-center text-white">Giá</th>
            <th scope="col" className="text-center text-white">Số Lượng</th>
            <th scope="col" className="text-center text-white">Thành Tiền</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {listCart.map((item:any)=>{
            return        <tr className=''>
            <td>
              <div className="product-cart flex gap-2 p-2">
                <img src="https://product.hstatic.net/1000096703/product/1_d4c95fe0dc8a47e28b0b3d3083498997_master.jpg" alt />
                <div className="product-cart__text">
                  <h6>{item.name}
                  </h6>
                  <p className='text-blue-800 font-medium'> 
                    
                     {item.discount > 0 ?<p className="price-product text-blue-800">
                    
                
                    {(item.price-(item.price * (item.discount / 100))).toLocaleString()} <span className="banDau">  {item.price.toLocaleString()}đ</span>
                </p> :<p className="price-product text-blue-800">
                  
              
                  {item.price.toLocaleString()}đ
                </p>} </p>
                </div>
              </div>
            </td>
            <td className="text-center font-medium">
            {item.discount > 0 ?<p className="price-product text-center text-red-600">
                    
                
                    {(item.price-(item.price * (item.discount / 100))).toLocaleString()} 
               đ </p> :<p className="price-product text-center text-red-600">
                  
              
                  {item.price.toLocaleString()}đ
                </p>} 
              </td>
            <td className="text-center">
              <div className="soLuong flex justify-center items-center">
                <div className="tru flex justify-center items-center">
                  <button onClick={()=>{
                    dispatch(giamSL(item._id))
     
                  }}
                    
                    >
   <LuMinus />
                  </button>
             

                </div>
                <div className="number">
               {item.soLuong}
                </div>
                <button className="cong"
                onClick={()=>{
                  dispatch(tangSL(item._id))
                }}
                >
                <FiPlus 
                
                />


                </button>
              </div> 
            </td>
            <td className="text-center text-red-600 font-medium">
            {item.discount > 0 ?<p className="price-product text-center text-red-600">
                    
                
                    {((item.price-(item.price * (item.discount / 100)))*item.soLuong).toLocaleString()} 
               đ </p> :<p className="price-product text-center text-red-600">
                  
              
                  {(item.price*item.soLuong).toLocaleString()}đ
                </p>} 
              </td>
            <td className="text-center text-[22px]">
              <button onClick={()=>{
                // handleDelete(item._id)
                dispatch(removeItem(item._id))
                notification.success({
                  message: 'Thành công',
                  description:
                    'Xóa sản phẩm thành công.',
                });
              }}>
                <MdDelete />
              </button>
              
            </td>
          </tr>
     
          })}
   
        </tbody>
      </table>
    </div>
    <div className="cart-right" style={{width: 400,background:"white"}}>
      <div className="bg-white">
        <h4 className="text-center text-[22px] font-semibold">Giỏ Hàng Của Bạn</h4>
        <div>
          <p className="flex justify-between">Số lượng: <span className="font-semibold">{totalQuantity}</span></p>
          <p className="flex justify-between">Thành tiền:
            :<span className="font-semibold">{total}đ
            </span></p>
        </div>
        <p className="flex justify-between">Khuyến mãi:
          : <span className="font-semibold">0</span></p>
        <p className="flex justify-between">Giao hàng:
          : <span className="font-semibold">0</span></p>
        <p className="flex justify-between">Tổng thanh toán:
          : <span className="font-semibold text-danger">{total}đ</span></p>
          <button className="btn btn-info mt-2 w-[100%] h-[35px] rounded-lg">
          <Link href="/thanhToan" >Mua Ngay</Link>
          </button>
        
      </div>
    </div>
  </div>
</main>

  )
}

export default gioHang