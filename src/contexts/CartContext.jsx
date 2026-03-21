import { createContext, useContext, useState } from "react";
// createContext เหมือนกับการสร้างข้อมูลไว้ตรงกลาง
// useContext นำข้อมูลตรงกลางมาใช้

const CartContext = createContext(null); //กล่องพัสดุ

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev; //ถ้ามีอยู่แล้วจะไม่เพิ่มซ้ำ
      return [...prev, product]; //แต่ถ้ายังไม่มีจะเพิ่มเข้าไปด้านหลัง
    });
  }

  function removeFromCart(id) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    // เป็นการบรรจุว่า ใครที่จะใช้ สามารถเรียกใช้ข้อมูลเหล่านี้ได้
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {/* เวลาเรียกใช้ฟังก์ชันอะไรต้องครอบ */}
      {children}
    </CartContext.Provider>
  );
}

// เหมือนกับ ShotCut
export function useCart() {
  return useContext(CartContext);
}
