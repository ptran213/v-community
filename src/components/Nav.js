import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <a href="/" className="logo-name">Cộng Đồng Việt</a>
        <ul>
          <li>Shopping</li>
          <li>Tìm Nhà/Phòng</li>
          <li>Tìm Việc</li>
          <li>Đăng Nhập</li>
        </ul>
      </div>
    );
  }
}

export default Nav;