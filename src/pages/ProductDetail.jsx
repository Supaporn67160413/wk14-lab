import { useParams, Link, useNavigate } from "react-router-dom";
// useParams ไว้อ่านค่าพารามิเตอร์ของ URL
// Link ใช้สำหรับการเปลี่ยนหน้าไปหน้าถัดไปโดยที่ไม่โหลดใหม่
// useNavigate บังคับการเปลี่ยนหน้า อย่างเช่น ในตอนที่เราเข้าสู่ระบบสำเร็จแล้ว เราต้องเปลี่ยนไปหน้าหลัก มันก็คือเหมือนกัน

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 35000,
    category: "Electronics",
    description: "โน้ตบุ๊คประสิทธิภาพสูง",
  },
  {
    id: 2,
    name: "Phone",
    price: 15000,
    category: "Electronics",
    description: "สมาร์ทโฟนรุ่นล่าสุด",
  },
  {
    id: 3,
    name: "Shirt",
    price: 500,
    category: "Clothing",
    description: "เสื้อผ้าคุณภาพดี",
  },
  {
    id: 4,
    name: "Pants",
    price: 800,
    category: "Clothing",
    description: "กางเกงใส่สบาย",
  },
];

export default function ProductDetail() {
  const { id } = useParams(); //ดึง :id มาจาก URL
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id)); //หาสินค้าที่ตรงกับ id

  //   ถ้าไม่มีสินค้าจะขึ้นว่าไม่พบสินค้า และจะมีปุ่มกลับ
  if (!product) {
    return (
      <div style={{ padding: "40px" }}>
        <p>ไม่พบสินค้า</p>
        <Link to="/product">กลับ</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", maxWidth: "600px" }}>
      {/* ปุ่มย้อนกลับไปยังหน้าก่อนหน้า  */}
      <button onClick={() => navigate(-1)}>← ย้อนกลับ</button>

      <h1>{product.name}</h1>
      <p style={{ fontSize: "28px", color: "#e74c3c" }}>
        ฿{product.price.toLocaleString()}
      </p>
      <p>หมวดหมู่: {product.category}</p>
      <p>{product.description}</p>
      <button
        style={{
          padding: "12px 30px",
          backgroundColor: "#0066cc",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        🛒 เพิ่มลงตะกร้า
      </button>
    </div>
  );
}
