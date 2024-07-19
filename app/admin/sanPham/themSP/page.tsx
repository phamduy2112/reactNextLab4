import React from 'react'
import '/public/css/admin.css'
import '/public/css/Input.css'
import { Select } from 'antd'
function ThemSP() {
  return (
    <div>

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
    <div className="text body w-75">     
      <div className="table_section">
        <div className="table___title">
          <h4>Thêm Sản Phẩm</h4>
          {/* <a href="themSP.html" class="add">Thêm Sản Phẩm</a> */}
        </div>
        <form action method="post">
          <div className="group-form__two flex gap-2">
            <div className="group-form__one w-[50%]">
              <label htmlFor className="label">Tên Sản Phẩm*</label> 
              <input type="text" placeholder="Họ Tên" id="hoTen" className="form-input" />
            </div> 
            <div className="group-form__one w-[50%]">
              <label htmlFor className="label">Giá Sản Phẩm*</label> 
              <input type="number" placeholder="vidu@gmail.com" id="sdt" className="form-input" />
            </div>
          </div>
          <div className="group-form__two  flex gap-2">
            <div className="group-form__one w-[50%]">
              <label htmlFor className="label">Loại</label>  <br />
              <Select
    showSearch
    style={{
      width: 580,
      height:40
    }}
    placeholder="Search to Select"
    optionFilterProp="label"
    
    options={[
      {
        value: '1',
        label: 'Not Identified',
      },
      {
        value: '2',
        label: 'Closed',
      },
      {
        value: '3',
        label: 'Communicated',
      },
      {
        value: '4',
        label: 'Identified',
      },
      {
        value: '5',
        label: 'Resolved',
      },
      {
        value: '6',
        label: 'Cancelled',
      },
    ]}
  />
            </div> 
            <div className="group-form__one w-[50%]">
              <label htmlFor className="label">Hình*</label> 
              <br />
              <input type="file" name id />
            </div>
          </div>
          <div className="flex gap-3">
            <a href className="btn btn-primary-one">Quay Lại</a>
            <a href className="btn btn-primary-two">Xác Nhận</a>
          </div>
        </form>
      </div> 
    </div>
  </section>
</div>

    </div>
  )
}

export default ThemSP