import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#0066cc",
        padding: "15px 20px",
        display: "flex",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "20px",
          textDecoration: "none",
        }}
      >
        🏠 MyApp
      </Link>

      <div style={{ display: "flex", gap: "15px", marginLeft: "auto" }}>
        {/* NavLink เพิ่ม active class อัตโนมัติ */}
        {/* NavLink คือสามารถรู้ตัวเองได้ว่าในตอนนี้เรา Active อยู่ที่หรือไม่ แต่ถ้าเป็น Link ธรรมดาจะไม่รู้ตัวเอง */}
        <NavLink
          to="/"
          end
          style={({ isActive }) => ({
            color: "white",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "normal",
            borderBottom: isActive ? "2px solid white" : "none",
          })}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: "white",
            // ลบเส้นใต้ของข้อความ
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "normal",
            borderBottom: isActive ? "2px solid white" : "none",
          })}
        >
          About
        </NavLink>

        <NavLink
          to="/products"
          style={({ isActive }) => ({
            color: "white",
            // ลบเส้นใต้ของข้อความ
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "normal",
            borderBottom: isActive ? "2px solid white" : "none",
          })}
        >
          Products
        </NavLink>
      </div>
    </nav>
  );
}
