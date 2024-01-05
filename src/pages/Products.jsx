import { Link } from "react-router-dom";
import products from "../database.json";
export default function Products() {
  return (
    <section>
      <h2>Todos os produtos</h2>
      <p>Confira todas as nossas ofertas.</p>
      <section className="products">
        {products.map((product) => (
          <div key={product.id}>
            <h4>{product.name}</h4>
            <img src={product.img} alt="" />
            <p>R$ {product.price}</p>
            <Link to={`/products/${product.id}`}>
              <button>Ver</button>
            </Link>
            <button>Comprar</button>
          </div>
        ))}
      </section>
    </section>
  );
}
