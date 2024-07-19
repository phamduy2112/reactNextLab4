'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import '/public/css/dangNhap.css'
import '/public/css/Input.css'
import { signIn } from '../api/fetchApi'
import { notification } from 'antd'
function DangKi() {
  const [data,setDate]=useState([]);
  const [value,setValue]=useState({});
  console.log(value);
  const handleLogin = async () => {
    try {
        const model = value;
        const response = await signIn(model);
        // Xử lý kết quả từ API tại đây
        if(response){
          console.log(response.content);
          window.location.href="/dangNhap"
          notification.success({
            message: 'Thành công',
            description:
              'Đăng Kí thành công.',
          });
        }
       
    
      
     
    } catch (error) {
        console.error('Error logging in: ', error);
    }

  }
  return (
    <main className="container mt-4">
        <div className="mt-4"></div>
  <div className="sign">
    <h3 className="text-center">Đăng Ký</h3>
    <p className="text-center mb-3">Hãy Đăng Ký Với Chúng Tôi</p>
    <form action="" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Tên</label>
        <input type="text" className="form-input" id="email" 
        name='name'
        onChange={(e)=>{setValue({...value,['name']:e.target.value})}}

        placeholder="Mời bạn nhập họ tên" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-input" id="email"
         placeholder="Mời bạn nhập email" 
         onChange={(e)=>{setValue({...value,['email']:e.target.value})}}

         />
      </div>
      <div className="mb-3 flex justify-between gap-2">
        <div className="w-[50%]">
          <label htmlFor="password" className="form-label">Mật Khẩu</label>
          <input type="password" className="form-input" id="password" placeholder="Mời bạn nhập mật khẩu" 
          name='password'
                   onChange={(e)=>{setValue({...value,['password']:e.target.value})}}

          />
        </div>
        <div className="w-[50%]">
          <label htmlFor="conformPassword" className="form-label">Xác Nhận Mật Khẩu</label>
          <input type="password" className="form-input" id="conformPassword" placeholder="Mời bạn nhập mật khẩu" 
                   name='password2'
                   onChange={(e)=>{setValue({...value,['password2']:e.target.value})}}

          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="mb-3 form-check flex justify-center">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Đồng ý điều khoản</label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary w-100">Đăng Ký</button>
    </form>
    <div className="text-center or mt-2">OR</div>
    <div className="button-dangnhap flex justify-between mt-2">
      <div className="flex gap-2 justify-center items-center google">
      <FaGoogle />
        Đăng nhập google
      </div>
      <div className="flex gap-2 justify-center items-center facebook">
      <FaFacebookF />
        Đăng nhập facebook</div>
    </div>
    <p className="text-center mt-3">Bạn đã có tài khoản?<Link href="/dangNhap">Đăng nhập ngay</Link></p>
  </div>
</main>

  )
}

export default DangKi