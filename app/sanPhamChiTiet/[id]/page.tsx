"use client"
import React, { useEffect, useState } from 'react'
import '/public/css/sanPhamChiTiet.css'
import { FaRegHeart, FaShare, FaStar } from 'react-icons/fa'
import { Rate, Spin } from 'antd'
import { LuMinus } from 'react-icons/lu'
import { FiPlus } from 'react-icons/fi'
import { getDataProductsById, src } from '@/app/api/fetchApi.js'

function SanPhamChiTiet({params}:any) {
  const [productDetail,setProductDetail]=useState<any>({});
  const [loading,setLoading]=useState(true);
  
  // const [dataCategories,setDataCategories]=useState([])
  const id=params.id
  useEffect(
    ()=>{
      const fetchData = async () => {
        try {
          const response = await getDataProductsById(id);
          setTimeout(() => {
          if ((response.message == "Thành công !")) {
            setProductDetail(response.content)
            setLoading(false)
          }
          }, 1000);
        
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };
  
      fetchData(); // Gọi hàm fetchData() khi component mount
    }
    ,[id])
    console.log(productDetail);
  return (
    <main className="container mt-4">
      {loading ? <div className='flex justify-center items-center my-[10rem]'>
          <Spin />
        </div> : (
       <div className="product-chitiet">
    <div className="product-chitiet__top flex ">
      <div className="product-chitiet__left">
        <div className="img-big">
          <img src={`${src}/${productDetail.image}`} alt="" />
        </div>
        <div className="img-small flex gap-3 justify-center">
          <img src="https://product.hstatic.net/1000096703/product/1_d4c95fe0dc8a47e28b0b3d3083498997_master.jpg" alt />
          <img src="https://product.hstatic.net/1000096703/product/1_d4c95fe0dc8a47e28b0b3d3083498997_master.jpg" alt />
          <img src="https://product.hstatic.net/1000096703/product/1_d4c95fe0dc8a47e28b0b3d3083498997_master.jpg" alt />
          <img src="https://product.hstatic.net/1000096703/product/1_d4c95fe0dc8a47e28b0b3d3083498997_master.jpg" alt />
        </div>
      </div>
      <div className="product-chitiet__right">
        <h3 className='font-medium'>{productDetail.name} </h3>

        <div className="product-chitiet__icons">
        <FaStar className='text-yellow-400' />
        <FaStar className='text-yellow-400' />
        <FaStar className='text-yellow-400' />
        <FaStar className='text-yellow-400' />
        <FaStar className='text-yellow-400' />

          <span>(10 người đánh giá)</span>
        </div>
        <div className="price">
          Giá: <span className="priceDeal"> {productDetail.discount > 0 ?
            <span className="price-product text-red-600">
                
            
                {productDetail.price-(productDetail.price * (productDetail.discount / 100))} 
                
                <span className="banDau text-[15px] ml-1"> 
                  
                   {productDetail.price}đ 
                   
                 
                   </span>
                   <span className='text-[17px] ml-2'>-{productDetail.discount}%</span>
              </span> :<span className="price-product text-red-600">
                
            
                {productDetail.price}đ
              </span>} </span>
        </div>
        <p className="mt-2">Loai: <span>Ao</span> </p>  
        <p>Ma: <span>SMD0089MMTA</span> </p>  
        <div className="flex gap-3 mt-3">
          <div className="soluong rounded-lg flex justify-between items-center">
            <div className="tru">
            <LuMinus />

            </div>
            <div className="number">
              1
            </div>
            <div className="cong">
            <FiPlus />
            </div>
          </div> 
          <button className="btn btn-primary-one w-[100%] rounded-lg">Thêm vào giỏ hàng</button>
        </div>
        <button className="btn btn-primary-two w-[100%] mt-2 h-[35px] rounded-lg">Mua ngay</button>
        <div className="product-chitiet-final flex justify-between mt-2">
          <div className="product-chitiet--item flex justify-center items-center gap-1">
          <FaRegHeart />

            Thêm vào yêu thích
          </div>
          <div className="product-chitiet--item flex justify-center items-center gap-1">
          <FaShare />

            Đổi trả lại
          </div>
        </div>
        <div className="mt-2">
          <ul>
            <h4>ĐẶC ĐIỂM NỔI BẬT</h4>
            <li>Nhóm sản phẩm:
              <span>
                Áo Thun  
              </span>
            </li>
            <li>Form dáng:
              <span>
                Regular
              </span>
            </li>
            <li>     Giới tính:
              <span>
                Nam
              </span>
            </li>
            <li> Chất liệu:
              <span>
                100% cotton
              </span>
            </li>
            <li>  Thiết kế:
              <span>
                Trơn
              </span>
            </li><li> Kiểu tay:
              <span>
                Tay ngắn
              </span>
            </li>
          </ul> 
        </div> 
      </div>
    </div>
    <div className="product-chitiet__bottom mt-3">
      <div className="product-chitiet__cha flex gap-5 justify-center">
        <div className="product-chitiet-cha__item active text-[18px]">Thông Tin Chi Tiết</div>
      </div>
      <div className="product-chitiet__con mt-3">
        <div className="product-chitiet-con__item">
          <p>Mô tả</p>
          <div>Sơ mi dài tay với chất vải cotton thoáng khí và mềm mại, thoải mái cả ngày dài. Được hoàn thiện trên công nghệ bền màu tiên tiến, giữ nguyên tone màu sau nhiều lần giặt. Form regular phù hợp với mọi vóc dáng, dễ dàng phối với nhiều trang phục khác nhau. Đường may cao cấp chỉn chu trong từng chi tiết, nhiều màu để bạn lựa chọn. </div>
          <div>Chất liệu: Pure Cotton Oxford </div>
          Đặt giao ngay tại website của Kenta hoặc đến cửa hàng để mua sắm và trải nghiệm! 
          <div>Hướng dẫn bảo quản:</div>
          <li> - Không dùng hóa chất tẩy.</li>
          <li>  - Ủi ở nhiệt độ thích hợp, hạn chế dùng máy sấy.</li>
          <li> - Giặt ở chế độ bình thường, với đồ có màu tương tự.</li>
        </div>
      </div>
      <div className="product-chitiet__cha flex gap-5 justify-center mt-3">
        <div className="product-chitiet-cha__item active text-[18px]">Bình luận</div>
      </div>
      <div className="mt-5">
        <div className='flex gap-3'>
        <div className="w-[50%] product-chitiet__con h-[150px]">
            <div className="danhGiaKhachHang flex gap-3 mt-6">
            <div className="image-khachhang">
                <img src="https://product.hstatic.net/1000096703/product/1_d4c95fe0dc8a47e28b0b3d3083498997_master.jpg" alt="" />
                
            </div>
            <div className="title-khachHang">
                <h5 className='text-[17px]'>Duy Phạm</h5>
                <h6 className='text-[15px]'>21/12/2003</h6>
                <p className='flex '>
        <FaStar className='text-yellow-400 text-[15px]'  />
        <FaStar className='text-yellow-400 text-[15px]'  />
        <FaStar className='text-yellow-400 text-[15px]' />
        <FaStar className='text-yellow-400 text-[15px]' />
        <FaStar className='text-yellow-400 text-[15px]' /></p>
                <p className='mt-2'>Hàng Tốt</p>
            </div>
            </div>
       
        </div>
        <div className="w-[50%] product-chitiet__con">
            asdasd
        </div>
        </div>
        <form action="" className='product-chitiet__con h-[230px]  mt-6 '>
            <div className="flex gap-3 mt-4">
               <div>
               <div className="image-binhLuan">
                <img src="https://product.hstatic.net/1000096703/product/1_d4c95fe0dc8a47e28b0b3d3083498997_master.jpg" alt="" />
             
            </div>  
            <h5 className='flex justify-center text-[18px]'>Phạm Duy</h5>
            <Rate/>
            </div>
          
            <div>
                <textarea name="" id="" className='border border-solid border-black px-[2rem] py-[4px]' cols={100} rows={5}></textarea>
           
            </div>
          
            </div>
            <div className='text-right mr-[4rem]'>
              <button type="submit" className='btn btn-primary-two px-3 text-[19px]'>Đăng</button>    
            </div>
             
           </form>
      </div>
 
      <section className="mt-2">
        <div className="title flex justify-between gap-1 items-center">
          <p>Sản phẩm khác</p>
          <a href="">Xem Them</a>
        </div>
        <div className="mt-3 flex flex-wrap justify-between gap-1">
        <div
                className="w-[19.5%] item-product bg-white"
                style={{ background: "white" }}
              >
                <div className="image-product">
                  <img
                    src="https://product.hstatic.net/1000096703/product/1_d4c95fe0dc8a47e28b0b3d3083498997_master.jpg"
                    alt=""
                  />
                </div>
                <div className="text-product text-center py-3">
                  <h5 className="font-semibold">Sơ Mi Nam Trắng Vải Lụa</h5>
                  <p className="price-product text-center text-red-600">
                    299.999d
                  </p>
                  <div className="flex justify-center">
                    <button className="btn-primary">Mua ngay</button>
                  </div>
                </div>
              </div>
        </div>
      </section>
    </div>
  </div> 
      )}
 
</main>

  )
}

export default SanPhamChiTiet