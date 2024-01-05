import { Link } from "react-router-dom";
import "./index.css";

export default function Header() {
  return (
    <header>
      <nav className="divNav">
        <Link to="/">Início</Link>
        <Link to="/products">Produtos</Link>
        <Link to="/cart">Carrinho</Link>
      </nav>
    </header>
  );
}
