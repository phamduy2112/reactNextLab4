
'use client'
import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import { getdonHangChiTiet } from '../../api/fetchApi';

import '/public/css/information.css'

function DonHangChiTiet({params}:any) {
  const [data,setData]=useState([]);
  let id=params.id
  let user:any={}
 

 
if (typeof window !== 'undefined' && window.localStorage) {
  const userJSON = localStorage.getItem('user');
  if (userJSON) {
      user = JSON.parse(userJSON);
  }
}
  const [value,setValue]=useState<any>({});
 
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await getdonHangChiTiet(id);
            if(response.message=='Thành công !'){
              setData(response.content);
            }
           
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    fetchData(); 

}, [id]);
console.log(data);

  const columns = [
    {
      title: 'STT',
      dataIndex: '1',
      render:()=>{
        return <>
       <div>1</div>
        </>
      }
    },
    {
      title: 'Tên',
      dataIndex: 'name',
    },
    {
      title: 'Giá',
      dataIndex: 'price',
    },
    {
      title: 'Số Lượng',
      dataIndex: 'soLuong',
    },
    {
      title: 'Giảm Giá',
      dataIndex: 'discount',
    },

    {
      title: 'Tổng tiền',
      dataIndex: 'trangThai',
      render:(text:any,record:any)=>{
        return <>
       {record.discount > 0 ?<span className="price-product text-red-600">
                    
                
                    {(record.price-(record.price * (record.discount / 100))).toLocaleString()} 
               đ </span> :<span className="price-product text-red-600">
                  
              
                  {(record.price).toLocaleString()}đ
                </span>}
        </>
      }
    },
   
    
   
  ];

  return (
    <div>
        <main className="container">
  <div className="information">
    <div className="information-box">
      <div className="information-box__left">
        <div className="information-box__top">
          <img src="../src/img/ao/ao1.webp" alt="" />
          <div className="information_item">
            <h3>{user.name}</h3>
            <p>Đăng xuất</p>   
          </div>
        </div>
        <div className="information-box__bottom">
          <ul>
            <li className="active"><button >Thông tin chi tiết</button></li>
            <li><button>Yêu thích</button></li>
            <li><button>Đơn hàng</button></li>
            <li><button>Đăng xuất</button></li>
          </ul>
        </div>
      </div>
     
      <div className="w-[75%]">

      <div className="text-center">
          <h3>Đơn hàng Chi Tiết của bạn</h3>
       
        </div>
        <div>
        <Table columns={columns} dataSource={data} />
          </div>
      </div>
    </div>
  </div>
</main>
        
    </div>
  
  )
}

export default DonHangChiTiet