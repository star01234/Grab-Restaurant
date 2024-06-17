import { useState } from "react";
import Category from "./components/Category";
import Menu from "./components/Menu";
import data from "./data";

function App() {
  ;
  return (
    <div>
      <h2>Grab Restaurabt</h2>
      <div className="Search">
        <input type="text" placeholder="Search"></input>
      </div>
      <div className="menu">
        <div class="card">
          <img src="https://food-cms.grab.com/compressed_webp/merchants/3-CZMTKBDTT2XJAJ/hero/65641d0fcdc14d4a8961f56f0ead6fa5_1598847900883974941.webp"></img>
          <div class="title">
            <h3>ตี๋เย็นตาโฟรสเด็ด - ศาลาว่าการกรุงเทพฯ</h3>
            <h4>Tom Yum Noodle Soup with Red Bean Curd Sauce</h4>
          </div>
          <button>Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default App;
