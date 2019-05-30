import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="nav">
      <img className="logo" src={logo} alt="logo"/>
      <p className="logo-name">Cộng Đồng Việt</p>
      <ul>
        <li>Shopping</li>
        <li>Tìm Nhà/Phòng</li>
        <li>Tìm Việc</li>
        <li>Đăng Nhập</li>
      </ul>
      <input type="text"/>
      </div>

      <div className="container">
        <div className="hero"></div>
        <h1>Tìm Phòng/Nhà</h1>
        
        <div class="item">
            <h2>VACATION GUEST HOUSE</h2>
            <p><b>Ngày đăng</b>: 5/1/2019</p>
            <p><b>Liên hệ</b>: 714-369-9777</p>
            <p>Tuyệt đẹp 5-STARS. MỚI KHAI TRƯƠNG. 40% off. FUNITURED. Sang Trọng, Yên Tĩnh. Little Saigon, P.L.Tho, Disneyland. Vườn đẹp, Patio. Đi riêng</p>
            <p><b>Giá/ngày</b>: $89/day</p>
            <p><b>Deposit</b>: $1,790</p>
        </div>

        <div class="item">
            <h2>VACATION GUEST HOUSE</h2>
            <p><b>Ngày đăng</b>: 5/1/2019</p>
            <p><b>Liên hệ</b>: 714-369-9777</p>
            <p>Tuyệt đẹp 5-STARS. MỚI KHAI TRƯƠNG. 40% off. FUNITURED. Sang Trọng, Yên Tĩnh. Little Saigon, P.L.Tho, Disneyland. Vườn đẹp, Patio. Đi riêng</p>
            <p><b>Giá/ngày</b>: $89/day</p>
            <p><b>Deposit</b>: $1,790</p>
        </div>
      </div>
    </div>
  );
}

export default App;
