'use client'
import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { donHangAll } from '../api/fetchApi';
import { useRouter } from "next/navigation";


function DonHang(props:any) {
  // idUser
  const [data,setData]=useState([]);
 
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await donHangAll(props.id);
            if(response.message=='Thành công !'){
              setData(response.content);
            }
           
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    fetchData(); // Gọi hàm fetchData() khi component mount

}, [props.id]);
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
      dataIndex: 'tenKhachHang',
    },
    {
      title: 'Số Lượng',
      dataIndex: 'soLuong',
    },
    {
      title: 'Trạng Thái',
      dataIndex: 'trangThai',
    },
    {
      title: 'Ngày Tháng',
      dataIndex: 'ngayThang',
    },
    {
      title: 'Chỉnh sửa',
      dataIndex: 'chinhSua',
      render:(text:any, record:any)=>{
        return <>
        <button
        onClick={()=>{
          
      
          
          router.push(`/donHangChiTiet/${record._id}`)
        }}
        >Xem Thêm</button>
        </>
      }
    },
   
  ];

  return (
    <div>
        <Table columns={columns} dataSource={data} />
    </div>
  
  )
}

export default DonHang