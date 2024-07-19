"use client"

import React, { useEffect, useState } from 'react'

function HookGioHang() {
    const [listCart, setListCart] = useState([]);

    useEffect(() => {
      const fetchData = () => {
        if (typeof window !== 'undefined' && window.localStorage) {
          const cartJson = localStorage.getItem('cart');
          if (cartJson) {
            try {
              const parsedCart = JSON.parse(cartJson);
              setListCart(parsedCart);
            } catch (error) {
              console.error('Error parsing JSON:', error);
            }
          }
        }
      };
  
      fetchData();
    }, []);
    const tangSL=(id: number)=> {
      const updatedList:any = listCart.map((item:any) => {
        if (item._id === id) {
          return { ...item, soLuong: item.soLuong + 1 };
          
        } else {
          return item;
        }
        
      })
      setListCart(updatedList); // Cập nhật state mới
      localStorage.setItem('cart', JSON.stringify(updatedList)); // Lưu vào localStorage
    };
    const giamSL = (id: number) => {
      const updatedList:any = listCart.map((item:any) =>
        item._id === id && item.soLuong > 1 ? { ...item, soLuong: item.soLuong - 1 } : item
      );
      
      setListCart(updatedList);
      localStorage.setItem('cart', JSON.stringify(updatedList));
    };
  
    const handleDelete = (id: number) => {
      const updatedList = listCart.filter((item:any) => item._id !== id);
  
      setListCart(updatedList);
      localStorage.setItem('cart', JSON.stringify(updatedList));
    };

    const handDeleteAll=()=>{
        setListCart([]);
        localStorage.removeItem('cart');


    }
    const tongSoLuong= listCart.reduce((sum, item:any) => sum + item.soLuong, 0)
    const tongThanhTien= listCart.reduce((sum, item:any) => sum+=(item.price-(item.price * (item.discount / 100)))*item.soLuong, 0)
    
    return {listCart,giamSL,tangSL,handDeleteAll,handleDelete,tongSoLuong,tongThanhTien}
}

export default HookGioHang