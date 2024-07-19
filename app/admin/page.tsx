import React from 'react'
import '/public/css/admin.css'
import Link from 'next/link'

function Admin() {
  return (
    <div className='' >
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
            <Link href="/admin/khachHang">
              <i className="bx bx-home icon" />
              <span className="text nav-text">Khách hàng</span>
            </Link>
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
  <section className="home" id="homeImdex">
    <div className="header__home">
      asdasd
    </div>
    <div className="text body" > 
      <div className="home-one">
        <div className="border-home">
          <div className="border-home__bg orange">
            <p>Loai: <span>${'{'}numLoai{'}'}</span></p>
          </div>
        </div>
        <div className="border-home">
          <div className="border-home__bg pink">
            <p>San Pham: <span>${'{'}numSP{'}'}</span></p>
          </div>
        </div>
        <div className="border-home">
          <div className="border-home__bg green">
            <p>Khách hàng: <span>${'{'}numKhachHang{'}'}</span></p>
          </div>
        </div>
        <div className="border-home">
          <div className="border-home__bg purpe">
            <p>Đơn hàng: <span>${'{'}numDonHang{'}'}</span></p>
          </div>
        </div>
      </div>
      <div className="home-two " >
        <div className="home-box">
          <div className="home-item">
            <h3>Khách hàng</h3>
            <div className="home-item__b">
              <div className="home-item-left">
                <p>Số lượng khách hàng đăng kí :<span>38</span></p>
                <p>Số lượng khách hàng đã mua hàng :<span>38</span></p>
              </div>
              <i className="bx bx-user" />        
            </div>
          </div>
          <div className="home-item" id="spHot">
            <h3>Những sản phẩm hot</h3>
            <div className="item_sp">
              <img src="https://product.hstatic.net/1000096703/product/1_d4c95fe0dc8a47e28b0b3d3083498997_master.jpg" alt width="50px" />
              <div className="title_sp">
                <p>${'{'}item.ten_sp{'}'}
                </p>
                <p>${'{'}(item.gia){'}'}</p>
              </div>
              <div className="soluong">
                <p>${'{'}item.hot{'}'}</p>
                <p>Người mua</p>
              </div>
            </div>
          </div>
          <div className="home-item">
            <canvas id="myChart" style={{width: '100%', maxWidth: 600}} />
          </div>
        </div>
      </div>
      <div className="home-two">
        <div className="home-flex">
          <div className="home-table w-[50%]">
            <div className="table">
              <div className="text_Table">
                <p>Khách hàng đăng kí</p>
              </div>
              <div className="table_section">
                <div className="table___title">
                  <h4>Thông tin chi tiết</h4>
                  <a href="./themdm.html" className="add">Xem chi tiết</a>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Mã</th>
                      <th>Tên</th>
                      <th>Email</th>
                      <th>Ngày</th>
                    </tr>
                  </thead>
                  <tbody id="khachhang">
                    <tr>
                      <td>1</td>
                      <td>${'{'}item.fullName{'}'}</td>
                      <td>${'{'}item.email{'}'}</td>
                      <td>${'{'}item.ngay{'}'}</td> 
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="home-table  w-[50%]">
            <div className="table">
              <div className="text_Table">
                <p>Quản lí Đơn Hàng</p>
              </div>
              <div className="table_section">
                <div className="table___title">
                  <h4>Thông tin chi tiết</h4>
                  <a href="./themdm.html" className="add">Xem chi tiết</a>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Mã</th>
                      <th>Trạng Thái</th>
                      <th>Ngày</th>
                      <th>Chỉnh sữa</th>
                    </tr>
                  </thead>
                  <tbody id="donHangMoi">
                  </tbody>
                </table>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default Admin