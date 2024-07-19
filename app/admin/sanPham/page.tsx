'use client'
import React, { useEffect, useState } from 'react'
import '/public/css/admin.css'
import { Table } from 'antd';
import Link from 'next/link';

function SanPham() {
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
        },
      ];
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sydney No. 1 Lake Park',
        },
      ];
  return (
<div> 
     <nav className="sidebar" id="sidebar">
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
    <div className="text body">     
      <div className="table_section">
        <div className="table___title">
          <h4>Thông tin loại</h4>
          <Link href="sanPham/themSP" className="add">Thêm sản phẩm</Link>
        </div>
        <Table columns={columns} dataSource={data} size="small" />

      </div> 
    </div>
  </section>
  </div>

  )
}

export default SanPham