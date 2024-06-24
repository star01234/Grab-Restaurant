import React from 'react';
import Card from './Card';

const restaurantData = [
        {
          id: 1,
          img: "https://food-cms.grab.com/compressed_webp/merchants/3-C6NHCJ2BC6XVRT/hero/7849e646b79e433a9957847572b491fa_1718784089986435470.webp",
          alt: "อาหารตามสั่ง",
          title: "ชราเฌอ - ถนนติณสูล",
          description: "อาหารตามสั่ง",
        },
        {
          id: 2,
          img: "https://food-cms.grab.com/compressed_webp/merchants/3-C6NBRJUAR3AGEJ/hero/43289b1828204174a74ea9ea935a6b61_1718268652380264128.webp",
          alt: "อาหารตามสั่ง",
          title: "ฮั้วเจริญรัชกาลที่ - ธ.ตรานาว",
          description: "อาหารตามสั่ง",
        },
        {
          id: 3,
          img: "https://food-cms.grab.com/compressed_webp/merchants/3-C2VFLZKXMFCEG2/hero/de000a8c2e3347d99fa2c400a6aa70ab_1626077626744372587.webp",
          alt: "Bubble tea",
          title: "Kamu Tea (คามุ ที) - ศาลเจ้าพ่อเสือ",
          description: "Bubble tea",
        },
        {
          id: 4,
          img: "https://food-cms.grab.com/compressed_webp/merchants/3-C6MZNKDGJ2X1SA/hero/38de5a25-50f9-48ae-9ec4-c51cf785cbf6__store_cover__2024__06__17__02__35__52.webp",
          alt: "Noodles, Stewed Pork Knuckle Rice, Small Bites/Snacks",
          title: "สีเขียวไพโรจน์เลิศ - ศาลาสุการกรุงเทพฯ",
          description: "Noodles, Stewed Pork Knuckle Rice, Small Bites/Snacks",
        },
        {
          id: 5,
          img: "https://food-cms.grab.com/compressed_webp/merchants/3-C6LWDBVYSFKAHE/hero/cbdae924-33cc-4137-b8bd-8679fff15903__store_cover__2024__05__11__01__44__23.webp",
          alt: "Coffee & tea",
          title: "Cafe@No.60 - ถนนราชดำเนิน",
          description: "Coffee & tea",
        },
        {
          id: 6,
          img: "https://food-cms.grab.com/compressed_webp/merchants/3-C2EWV2XTEBLVWE/hero/f1a4d7b6ef144b4b93dcba479d94ac97_1618914527011530198.webp",
          alt: "Cooked to Order, Coffee & Tea",
          title: "โกปี๊เฮี้ยะไถ่กี่ ณ เสาชิงช้า",
          description: "Cooked to Order, Coffee & Tea",
        },
];

function Restaurant() {
  return (
    <div className="flex flex-wrap justify-center">
      {restaurantData.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
}

export default Restaurant;
