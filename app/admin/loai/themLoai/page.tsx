'use client'

import React, { useState } from 'react'
import '/public/css/admin.css'
import '/public/css/Input.css'
import { Button, Modal } from 'antd'
import { useDispatch } from 'react-redux'
import { addCategoriesThunk, getCategoriesThunk } from '@/app/redux/slices/Categories'

function ThemLoai() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tenLoai,setTenLoai]=useState("");
  const dispatch=useDispatch();
  const handleSubmit = async () => {
    try {
       const data={tenLoai};
      console.log(data);
      dispatch(addCategoriesThunk(data));
      dispatch(getCategoriesThunk(""));
      setTenLoai("");

     
    } catch (error) {
        console.error('Error logging in: ', error);
    }
};

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
       <Button type="primary" onClick={showModal}>
        Thêm loại
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <form action method="post" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <div className="group-form__two d-flex gap-2">
          <div className="group-form__one w-50">
            <label htmlFor className="label">Tên Loại*</label> 
            <input type="text"
            
            
            placeholder="Họ Tên" id="hoTen" 
            
            className="form-input" name='tenLoai'
            value={tenLoai}
            onChange={(e) => setTenLoai(e.target.value)}
            />
          </div> 
         
        </div>
      
        <div className="flex gap-3">
          <button className="btn btn-primary-one w-[80px] h-[28px] rounded-sm">Quay Lại</button>
          <button className="btn btn-primary-two w-[80px] h-[28px] rounded-sm">Xác Nhận</button>
        </div>
      </form>
      </Modal>
        {/* <nav className="sidebar" id="sidebar">
    <header>
      <div className="image-text">
        <span className="image">
          <img src alt />
        </span>
        <div className="text header-text">
          <span className="name">Phạm Duy</span>
          <span className="profession">Zxmot</span>
        </div>
      </div>
      <i className="bx bx-chevron-right toggle" />
    </header>
    <div className="menu-bar">
      <div className="menu">
        <li className="search-box">
          <i className="bx bx-search icon" />
          <input type="search" placeholder="Search..." />
        </li>
        <ul className="menu-links">
          <li className="nav-link">
            <a href="index.html">
              <i className="bx bx-home icon" />
              <span className="text nav-text">Trang chủ</span>
            </a>
          </li>
          <li className="nav-link">
            <a href="danhmuc.html">
              <i className="bx bx-home icon" />
              <span className="text nav-text">Loại hàng</span>
            </a>
          </li>
          <li className="nav-link">
            <a href="sanpham.html">
              <i className="bx bx-home icon" />
              <span className="text nav-text">Sản phẩm</span>
            </a>
          </li>
          <li className="nav-link">
            <a href>
              <i className="bx bx-home icon" />
              <span className="text nav-text">Khách hàng</span>
            </a>
          </li>
          <li className="nav-link">
            <a href="donhang.html">
              <i className="bx bx-home icon" />
              <span className="text nav-text">Đơn hàng</span>
            </a>
          </li>
          <li className="nav-link">
            <a href>
              <i className="bx bx-log-out icon" />
              <span className="text nav-text">Thoát</span>
            </a>
          </li>
          <li className="mode">
            <div className="moon-sun">
              <i className="bx bx-moon icon moon" />
              <i className="bx bx-sun icon sun" />
            </div>
            <span className="mode-text text">Dark Mode</span>
            <div className="toggle-switch">
              <span className="switch" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <section className="home" id="home">
  <div className="header__home">
    asdasd
  </div>
  <div className="text body w-75">     
    <div className="table_section">
      <div className="table___title">
        <h4>Thêm Sản Phẩm</h4> */}
        {/* <a href="themSP.html" class="add">Thêm Sản Phẩm</a>
      </div>
      <form action method="post">
        <div className="group-form__two d-flex gap-2">
          <div className="group-form__one w-50">
            <label htmlFor className="label">Tên Sản Phẩm*</label> 
            <input type="text" placeholder="Họ Tên" id="hoTen" className="form-input" />
          </div> 
         
        </div>
      
        <div className="flex gap-3">
          <a href className="btn btn-primary-one">Quay Lại</a>
          <a href className="btn btn-primary-two">Xác Nhận</a>
        </div>
      </form>
    </div> 
  </div>
</section> */}

    </div>
  

  )
}

export default ThemLoai