'use client'
import React, { useRef, useState } from 'react'

import '/public/css/dangNhap.css'
import '/public/css/Input.css'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import Link from 'next/link'
import { loginAPI } from '../api/fetchApi.js'
import { notification } from 'antd'

function dangNhap() {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
;
  const email1=useRef("");
  const passowrd1=useRef("");

    const handleLogin = async () => {
      try {
          const model = { email, password };
          const response = await loginAPI(model);
          // Xử lý kết quả từ API tại đây
          if(response){
            console.log(response.content);
           
           window.location.href="/";
            localStorage.setItem("user",JSON.stringify(response.content[0]));
            localStorage.setItem("assetToken",response.content[1].token);
            
            notification.success({
              message: 'Thành công',
              description:
                'Đăng nhập thành công.',
            });
          }
         

       
      } catch (error) {
          console.error('Error logging in: ', error);
      }
  };
  return (
  <main className="container">
    <div className='mt-4'></div>
  <div className="sign">
    <h3 className="text-center">Đăng nhập</h3>
    <p className="text-center mb-3">Chào Mừng Bạn Trở Lại</p>
    <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
    <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email"
        
        className="form-input" id="email" placeholder="Mời bạn nhập email" name='email' 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-input" id="password" placeholder="Mời bạn nhập mật khẩu" name='password' 
               value={password}

       onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex justify-between">
        <div className="mb-3 form-check flex justify-center">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Lưu nhớ</label>
        </div>
        <Link href="" className="forget">Quên Mật Khẩu</Link>
      </div>
      <button type="submit" className="btn btn-primary w-100"
      
 
        
     
      >Đăng Nhập</button>
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
    <p className="text-center mt-3">Bạn chưa có tài khoản?<Link href="/dangKi">Tạo tài khoản ngay</Link></p>
  </div>
</main>

  )
}

export default dangNhap