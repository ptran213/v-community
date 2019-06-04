import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  render() {
    return (
      <div className="item">
        <h2>Ivan's GUEST HOUSE</h2>
        <p><b>Ngày đăng</b>: 5/1/2019</p>
        <p><b>Liên hệ</b>: 714-369-9777</p>
        <p>Tuyệt đẹp 5-STARS. MỚI KHAI TRƯƠNG. 40% off. FUNITURED. Sang Trọng, Yên Tĩnh. Little Saigon, P.L.Tho, Disneyland. Vườn đẹp, Patio. Đi riêng</p>
        <p><b>Giá/ngày</b>: $89/day</p>
        <p><b>Deposit</b>: $1,790</p>
      </div>
    );
  }
}

export default Item;