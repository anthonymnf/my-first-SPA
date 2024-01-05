import { Link } from "react-router-dom";
import products from "../database.json";
import "./styles/products.css";
export default function Products() {
  return (
    <section>
      <h2>Todos os produtos</h2>
      <h3>Confira todas as nossas ofertas!</h3>
      <section className="products">
        {products.map((product) => (
          <div className="container" key={product.id}>
            <h4>{product.name}</h4>
            <img src={product.img} alt="" />
            <p>R$ {product.price}</p>
            <div className="containerBtn">
              <Link to={`/products/${product.id}`}>
                <button>Ver</button>
              </Link>
              <button>Comprar</button>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
