'use client'

import React, { useEffect, useState } from 'react'
import '/public/css/information.css'
import '/public/css/input.css'
import { getUserById, putUserById } from '@/app/api/fetchApi';
import { notification, Table } from 'antd';
import DonHang from '@/app/donHang/DonHang';
function ThongTin({params}:any) {

    const [user,setUser]=useState<any>({});

    const [value,setValue]=useState<any>({});
    const [number,setNumber]=useState(0);
    const id=params.id
    useEffect(
      ()=>{
        const fetchData = async () => {
          try {
            const response = await getUserById(id);
        
            if ((response.message == "Thành công !")) {
                setUser(response.content)
            }
            setValue({
                name: response.content.name,
                email: response.content.email,
                password: '', 
                sdt: response.content.sdt || '',
                diaChi: response.content.diaChi || ''
              });
            
          } catch (error) {
            console.error("Error fetching data: ", error);
          }
        };
    
        fetchData(); // Gọi hàm fetchData() khi component mount
      }
      ,[id])
   
      const handleLogin = async () => {
        try {
            const model = value;
            console.log(model);
            const response = await putUserById(id,model);
        
            if ((response.message == "Thành công !")) {
              notification.success({
                message: 'Thành công',
                description:
                  'Cập nhận thành công.',
              });

            }
            
          
           
        
          
         
        } catch (error) {
            console.error('Error logging in: ', error);
        }
    
      }
  return (
    <div>
   <main className="container">
  <div className="information">
    <div className="information-box">
      <div className="information-box__left">
        <div className="information-box__top">
          <img src="../src/img/ao/ao1.webp" alt="" />
          <div className="information_item">
            <h3>{value.name}</h3>
            <p>Đăng xuất</p>   
          </div>
        </div>
        <div className="information-box__bottom">
          <ul>
            <li className={`${number==0 ? "active" : ""}`}
            onClick={()=>{
              setNumber(0);
            }}
            ><button>Thông tin chi tiết</button></li>
            <li><button>Yêu thích</button></li>
            <li className={`${number==0 ? "" : "active"}`}
             onClick={()=>{
              setNumber(1);
            }}
            ><button>Đơn hàng</button></li>
            <li><button>Đăng xuất</button></li>
          </ul>
        </div>
      </div>
      {/* chi tiết */}
      {
      number==0 ? (  <div className="information-box__right">
        <div className="information-title">
          <h3>Thông tin tài khoản</h3>
          (Có thể chính sửa tài khoản)
        </div>
        <div className="information-item">
          <h3>Thông tin cá nhân</h3>
          <p>Edit</p>
          <form action="" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <div className="group-form__one">
              <label htmlFor="">Fullname*</label> 
              <input type="text" 
              value={value.name}
              onChange={(e)=>{setValue({...value,['name']:e.target.value})}}
              placeholder="vidu@gmail.com" className="form-input" />
            </div>
            <div className="group-form__two flex gap-2">
              <div className="group-form__one w-[50%]">
                <label htmlFor="">Email*</label> 
                <input type="email" 
                name='email'
                value={value.email}
                onChange={(e)=>{setValue({...value,['email']:e.target.value})}}
                placeholder="vidu@gmail.com" className=" form-input" />
              </div> 
              <div className="group-form__one w-[50%]">
                <label htmlFor="">Mật khẩu*</label> 
                <input type="password"
               value='********'
               name='password'
               onChange={(e)=>{setValue({...value,['password']:e.target.value})}}

                placeholder="vidu@gmail.com" className=" form-input" />
              </div>
            </div>
            <div className="group-form__one">
              <label htmlFor="">SDT*</label> 
              <input type="text" 
            name='sdt'
              value={value.sdt|| "Chưa cập nhận"}
              onChange={(e)=>{setValue({...value,['sdt']:e.target.value})}}

              placeholder="vidu@gmail.com" className="form-input" />
            </div>
            <div className="group-form__one">
              <label htmlFor="">Địa chỉ*</label> 
              <input type="text" 
              name='diaChi'
                value={value.diaChi|| "Chưa cập nhận"}
                onChange={(e)=>{setValue({...value,['diaChi']:e.target.value})}}

              placeholder="vidu@gmail.com" className="form-input" />
            </div>
            <div className="form-button">
              <button type='submit' className="btn btn-primary-one">Chỉnh sửa dữ liệu</button>   
              <a href="" className="btn btn-primary-one">Đổi mật khẩu</a>   
            </div>
          </form>
        </div>
      </div>) :(<div className="w-[75%]">

      <div className="text-center">
          <h3>Đơn hàng của bạn</h3>
       
        </div>
        <div>
            <DonHang id={id}></DonHang>
          </div>
      </div> )
      }
    
      {/* đơn hàng */}
      {/* */}
    </div>
  </div>
</main>


    </div>
  )
}

export default ThongTin