import { useParams, Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
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
  const { addToCart, cartItems } = useCart();

  const product = products.find((p) => p.id === Number(id)); //หาสินค้าที่ตรงกับ id
  const inCart = cartItems.some((item) => item.id === product?.id); //เช็คว่ามีอยู่แล้วหรือไม่

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

      {/* รายละเอียดสินค้า */}
      <h1>{product.name}</h1>
      <p style={{ fontSize: "28px", color: "#e74c3c" }}>
        ฿{product.price.toLocaleString()}
      </p>
      <p>หมวดหมู่: {product.category}</p>
      <p>{product.description}</p>

      <button
        onClick={() => addToCart(product)}
        disabled={inCart} //เมื่อผู้ใช้กดแล้ว ไม่ให้กดซ้ำ
        style={{
          padding: "12px 30px",
          backgroundColor: inCart ? "#ccc" : "#0066cc",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: inCart ? "not-allowed" : "pointer",
          fontSize: "16px",
        }}
      >
        {inCart ? "✅ อยู่ในตะกร้าแล้ว" : "🛒 เพิ่มลงตะกร้า"}
      </button>
    </div>
  );
}
