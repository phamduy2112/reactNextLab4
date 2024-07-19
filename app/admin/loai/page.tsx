'use client'
import React, { useEffect, useState } from 'react'
import '/public/css/admin.css'
import { Breadcrumb, Popconfirm, Table, Tooltip } from 'antd';
import Link from 'next/link';
import ThemLoai from './themLoai/page';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategoriesThunk, getCategoriesThunk } from '@/app/redux/slices/Categories';
import { TiDelete } from 'react-icons/ti';
import ChinhSuaLoai from './chinhSua/page';
import { MdDelete } from 'react-icons/md';

function Loai() {
    const listLocation: any = useSelector(
        (state:any) => state.categoriesSlice.listLocation,
      );
      const dispatch=useDispatch();
      console.log(listLocation);
      useEffect(() => {
        dispatch(getCategoriesThunk(""));
      }, [dispatch]);
    const columns = [
        {
            title: "STT",
            dataIndex: "stt",
            key: "id",
      
            sorter: (a: any, b: any) => a.id - b.id,
          },
       
        {
          title: 'Tên Loại',
          dataIndex: 'tenLoai',
        },
        {
            title: "Chỉnh sửa",
            dataIndex: "chinhSua",
            render: (_: string, record: any) => (
                <div className="flex justify-center gap-3">
                <ChinhSuaLoai data={record}/>
      
                <Popconfirm
                  title="Bạn có muốn xóa "
                  onConfirm={async () => {
                 dispatch(deleteCategoriesThunk(record))
                   
                    
                  }}
                  cancelText="Huỷ"
                  okText="Chắn chắn"
                >
                  <span
                    className={" mr-3 cursor-pointer"}
                    onClick={async () => {}}
                  >
                    <Tooltip title="Xoá">
                    
                      <MdDelete />


                    </Tooltip>
                  </span>
                </Popconfirm>
              </div>
            ),
          },
     
      ];
    //   const dataLoai = listLocation.map((item:any, index:number) => ({
    //     ...item,
    //     stt: index + 1,
       
    //   }));
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
      <Breadcrumb
    items={[
      {
        title: <a href="">Trang chủ</a>
      },
      {
        title: <span className='text-blue-900'>Loại</span>,
      },
     
    ]}
  />
            <h4 className='flex justify-center items-center text-[20px] text-blue-900 font-semibold'>Thông tin loại</h4>

        <div className="table___title">

          {/* <Link href="loai/themLoai" className="add">Thêm loại</Link> */}
        <ThemLoai/>
        </div>
        <Table columns={columns} dataSource={listLocation} size="small" />

      </div> 
    </div>
  </section>
  </div>

  )
}

export default Loai
