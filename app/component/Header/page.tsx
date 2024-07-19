"use client"
import { Alert, Badge, Button, Dropdown, notification, Space } from 'antd';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { FaBars, FaHeart, FaRegUserCircle, FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

import {getDataCate} from '../../api/fetchApi'
import { useSelector } from 'react-redux';

function Header() {
  let user:any={}
  const numCart = useSelector((state:any) => state.cart.numCart);


 
const userJSON = localStorage.getItem('user');
if (typeof window !== 'undefined' && window.localStorage) {
  const userJSON = localStorage.getItem('user');
  if (userJSON) {
      user = JSON.parse(userJSON);
  }
}


  const items = [
    
    {
      key: "1",
      label: userJSON?(
        <Link href={`/thongTin/${user._id}`}>Xem Thông tin</Link>
      ):(
<Link href='/dangNhap'>Đăng nhập</Link>
      ),
       
    },
    {
      key: "2",
      label:userJSON? (
        <button
        onClick={()=>{
          localStorage.removeItem('user');
          localStorage.removeItem('assetToken');
          window.location.href="/";
          notification.success({
            message: 'Thành công',
            description:
              'Đăng xuất thành công.',
          });
        }}>Đăng Xuất</button>
      ):(
        <Link href='/dangKi'
        
        >Đăng kí</Link>

      )
       
    },
   
  ];
  const [data,setData]=useState([]);
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await getDataCate()
            if(response.message=='Thành công !'){
              setData(response.content);
            }
           
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    fetchData(); // Gọi hàm fetchData() khi component mount

}, []);


    return (
      
        <main className="">
          <div className="bg-primary h-[28px] ">
            <div
             className="container flex items-center justify-between "
             
             >
              <p className=" text-white ">Khai trương tưng bừng giảm giá sập sàn</p>
              <div className="flex items-center text-white gap-3">
                <p  style={{ lineHeight: "28px" }}>Giới thiệu</p>
                <p  style={{ lineHeight: "28px" }}>Tin tức</p>
              </div>
            </div>
          </div>

          <div className="  h-[55px]" style={{background:"white"}}>
            <div className="container flex justify-between items-center h-[55px]">

            <div className="logo text-[23px]" >Niked</div>
            <form action="/timKiem">
              <input type="text" placeholder="Tìm kiếm sản phẩm" name='key' 
              className="border border-black border-solid w-[800px] h-[35px]  p-[5px]"/>
              <button type="submit" className="bg-primary h-[35px] text-white p-[5px]">Tìm Kiếm</button>
            </form>
            <div className="flex gap-3 justify-center items-center">
            <Space size="large">
            <Badge count={10}>
 <FaHeart className="text-[25px]"/>
    </Badge>
            </Space>
            <Space size="large">
            <Badge count={numCart}>
              <Link href="/gioHang">
              <FaCartShopping className="text-[25px]"/>
              </Link>
          
    </Badge>
            </Space>
           
            <Dropdown
            menu={{
              items,
            }}
            placement="bottomLeft"
            arrow
            trigger={["click"]}
          >
            <Button
              className="flex items-center gap-3 h-[40px]"
              style={{ borderRadius: "30px" }}
            >
              <FaBars />
              <div className="text-[25px]">
              {userJSON ? (
                  <div
                    className={`flex h-[30px] w-[30px] items-center justify-center rounded-full ${user.avatar ? "bg-cover bg-center bg-no-repeat" : "bg-[#F62682] text-[16px] text-white "} `}
                    style={{
                      backgroundImage: user.avatar
                        ? `url(${user.avatar})`
                        : "none",
                    }}
                  >
                    <span className='text-[18px]'>{user.avatar === "" ? user.name[0].toUpperCase() : null}</span>
                  </div>
                ) : (
                  <FaUserCircle />
                )}
             
              </div>
            </Button>
          </Dropdown>
    
            </div>
            </div>
           
          </div>
          <div className="h-[35px] w-[100%] bg-primary">
            <nav>
              <ul className="flex items-center justify-center gap-5">
                <li
                  className="text-white text-[19px]"
                  style={{ lineHeight: "36px" }}
                >
                  <Link href="/">Trang chủ</Link>
                </li>
                {data.map((item:any)=>{
                  return <li style={{ lineHeight: "35px" }}>
                  <Link href={`/sanPham/${item._id}`} className="text-white text-[19px]">
                    {item.tenLoai}
                  </Link>
                </li>
                })}
                
                <li style={{ lineHeight: "35px" }}>
                  <Link href="" className="text-white text-[19px]">
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          
        </main>
      );
}

export default Header