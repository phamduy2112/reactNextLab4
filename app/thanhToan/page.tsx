'use client'

import React, { useEffect, useState } from 'react'
import '/public/css/cartChiTiet.css'
import '/public/css/Input.css'
import { donHang, donHangChiTiet } from '../api/fetchApi';
import { useSelector } from 'react-redux';
import { selectTotal, selectTotalQuantity } from '../redux/slices/CartSlice';
import { notification } from 'antd';

function ThanhToan() {
    const listCart = useSelector((state:any) => state.cart.items);
    const totalQuantity = useSelector(selectTotalQuantity);
    const total = useSelector(selectTotal);

    let user:any={}

 console.log(listCart);
 
    if (typeof window !== 'undefined' && window.localStorage) {
      const userJSON = localStorage.getItem('user');
      if (userJSON) {
          user = JSON.parse(userJSON);
      }
    }
    const handleLogin = async () => {
   
            try {
          
                let newDonHang={
                    tenKhachHang:user.name,
                    soLuong:totalQuantity,
                    tongTien:total,
                    id_khachHang:user._id
                }
            let checkDonHang=await donHang(newDonHang);
            console.log(checkDonHang);
            
            if(checkDonHang){
                let id_donHang=checkDonHang.content.insertedId;
        
                 
                 let newDonHangCT={
                    id_donHang,
                    listCart,
                    id_khachHang:user._id
                  
                 } 
                 console.log(newDonHangCT);
                let checkDonHangChiTiet=await donHangChiTiet(newDonHangCT)
                    if(checkDonHangChiTiet){
                      notification.success({
                        message: 'Thành công',
                        description:
                          'Đặt hàng thành công.',
                      });
                        window.location.href="/";
                    }
            }
               

                
                
         
        } catch (error) {
            console.error('Error logging in: ', error);
        }

    }


  return (
       <main className="container mt-3">
  <div className="cart-chitiet">
    <div className="cart-chitiet__box flex justify-between gap-3">
      <div className="cart-chitiet__left">
        <div className="cart">
          <h3>Thông tin thanh toán</h3>
        </div>
        <form action="" method="post" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <div className="group-form__two flex gap-2">
            <div className="group-form__one w-[50%]">
              <label htmlFor="">Ho ten*</label> 
              <input type="text" placeholder="Họ Tên" id="hoTen"
              value={user.name}
              className="form-input" />
            </div> 
            <div className="group-form__one w-[50%]">
              <label htmlFor="">Số điện thoại*</label> 
              <input type="number" placeholder="vidu@gmail.com" id="sdt" className="form-input" />
            </div>
          </div>
          <div className="group-form__two  flex gap-2">
            <div className="group-form__one w-[50%]">
              <label htmlFor="">Địa chỉ*</label> 
              <input type="text" placeholder="vidu@gmail.com" id="diaChi" className="form-input" />
            </div> 
            <div className="group-form__one w-[50%]">
              <label htmlFor="">Email*</label> 
              <input type="gmail" placeholder="vidu@gmail.com" id="email" className="form-input" />
            </div>
          </div>
          <div className="cart-chitiet__thanhtoan flex items-center">
            <h4 className='text-[18px]'>Bạn muốn thanh toán?</h4>
            <div className="group-form__radio">
              <input type="radio" name="asd" id="value1" defaultChecked defaultValue="Thanh toán khi giao hàng" />
              <label htmlFor="value1">Thanh toán khi giao hàng</label>
            </div>
            <div className="group-form__radio">
              <input type="radio" name="asd" id="value1" defaultValue="Thanh toán thẻ ngân hàng" />
              <label htmlFor="value">Thanh toán thẻ ngân hàng</label>
            </div>
          </div>

          <div className="buttons flex justify-between">
            <button className="btn btn-primary-one" style={{width: 100}}>Quay lại</button>
            <button className="btn btn-primary-two" style={{width: 100}} type="submit">Xác nhận</button>
          </div>
        </form>
      </div>
      <div className="cart-chitiet__right">
        <h3>Giỏ hàng của bạn</h3>
        <div id="cart-ct-right">
            {listCart.map((item:any)=>{
                return         <div className="cart-chitiet__product flex gap-2">
                <div className="cart-chitiet__box">
                  <img src="https://product.hstatic.net/1000096703/product/1_eb2901d04c0c4aad881d6e7f4fd0ac19_master.jpg" alt />
                </div>
                <div className="cart-chitiet__bottom">
                  <div className="cart-chitiet_title">
                  {item.name}
                  </div>
                  <div className="cart-chitiet__soluong">
                    SL: <span className="fw-bold">{item.soLuong}</span>
                  </div>
                  <div className="cart-chitiet__price">
                    Giá:<span className="text-danger fw-bold"> {item.discount > 0 ?<span className="price-product text-red-600">
                    
                
                    {(item.price-(item.price * (item.discount / 100))).toLocaleString()} 
               đ </span> :<span className="price-product text-red-600">
                  
              
                  {(item.price).toLocaleString()}đ
                </span>} </span>
                  </div>
                </div>
              </div>
            })}
  
         
        </div>
        <div className="cart-chitiet__tong">
          <div className="flex justify-between font-semibold"><span>Số lượng:</span>{totalQuantity}</div>
          <div className="flex justify-between font-semibold"><span>Tổng tiền:</span>{total.toLocaleString()}đ</div>
        </div>
      </div>
    </div>
  </div>
</main>

  )
}

export default ThanhToan