
import { useEffect, useState } from "react";
import ListProductFive from "./component/trangChu/listProductFive/page";
import { getDataProducts } from "./api/fetchApi";
import ListProductTen from "./component/trangChu/listProductTen/page";


export default async function Home() {
 
  return (
    
    <div>
      <div className="w-[100%] mb-[10px]">
        <img
          className="w-[100%]"
          src="https://salt.tikicdn.com/cache/w1240/ts/brickv2og/00/50/1b/3df549cad6a8174202ebef5c4d2c4870.jpg.webp"
          alt=""
        />
      </div>
      <section className="box container mt-3 mb-3">
        <div className="flex justify-between">
          <div className="box-item flex items-center justify-center gap-2 p-3">
            <div className="box_circle">
              <i className="fa fa-truck" aria-hidden="true" />
            </div>
            <div className="text-box">
              <h4>Thanh toán an toàn</h4>
              <p>Thanh toán an toàn 100%</p>
            </div>
          </div>
          <div className="box-item flex items-center justify-center gap-2">
            <div className="box_circle">
              <i className="fa-solid fa-box-archive" />
            </div>
            <div className="text-box">
              <h4>Đổi hàng tận nhà</h4>
              <p>Trong vòng 7 ngày</p>
            </div>
          </div>
          <div className=" box-item flex items-center justify-center gap-2">
            <div className="box_circle">
              <i className="fa-solid fa-money-bill" />
            </div>
            <div className="text-box">
              <h4>Thanh toán COD</h4>
              <p>Yên tâm mua sắm</p>
            </div>
          </div>
          <div className="box-item flex items-center justify-center gap-2">
            <div className="box_circle">
              <i className="fa-solid fa-phone-volume" />
            </div>
            <div className="text-box">
              <h4>Hotline: 028.73066.060</h4>
              <p>Hỗ trợ bạn từ 8h30-22h00</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="flex justify-between mt-3">
          <div className="w-[33%]">
            <img
              width="100%"
              src="https://file.hstatic.net/1000360022/file/icon105_19cd8f4143364de09302a6c57ecb4c14_grande.png"
              alt=""
            />
          </div>
          <div className="w-[33%]">
            <img
              width="100%"
              src="https://file.hstatic.net/1000360022/file/3_1_0cc7f1a0f156447da13dc91f4f922241_grande.png"
              alt=""
            />
          </div>
          <div className="w-[33%]">
            <img
              width="100%"
              src="https://file.hstatic.net/1000360022/file/4_1_b17903579a8949c9b3a7013c10924fae_grande.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="container ">
        <div className="section_coupons mt-3">
          <div className="flex">
            <div className="img-coupon w-[20%]">
              <div className="coupon_item w-100">
                <div className="tron_container">
                  <p className="tron" />
                  <p className="tron" />
                  <p className="tron" />
                  <p className="tron" />
                  <p className="tron" />
                </div>
                <div className="tron_container1">
                  <p className="tron1" />
                  <p className="tron1" />
                  <p className="tron1" />
                  <p className="tron1" />
                  <p className="tron1" />
                </div>
                <div className="coupon_body">
                  <div className="coupon_head flex justify-between">
                    <h3 className="coupon_title">VOUCHER</h3>
                    <div className="coupon_desc">đơn từ 699K</div>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 30,
                    display: "flex",
                    alignItems: "baseline",
                  }}
                >
                  <h1 className="coupon_h1">50,000 </h1>
                  <p className="coupon_vnd">VND</p>
                </div>
                <div className="coupon_footer">
                  <span className="coupon_ma"> mã: W50</span>
                  <button
                    className="btn btn-main btn-sm coupon_copy"
                    data-ega-coupon="W50"
                  >
                    <span className="btn btn-primary-two px-2 py-1">Sao chép</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <ListProductFive></ListProductFive>
        <section className="banner-box container justify-content-between mt-2">
          <div className="banner-item">
            <img
              src="https://theme.hstatic.net/200000163831/1000713867/14/slider_2.jpg?v=161"
              width="100%"
              alt=""
            />
          </div>
        </section>
      </div>

      {/* san pham */}
      <div className="container">
        <div className="product-top h-[35px] mt-3 flex items-center px-3" style={{background:"white"}}>
          <p>Những sản phẩm khác</p>
        </div>
        <div >
         
     <ListProductTen/>
        </div>
      </div>
    </div>
  );
}
