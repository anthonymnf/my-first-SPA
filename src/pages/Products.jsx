import products from "../database.json";
import Header from "../components/Header";

export default function Products() {
  return (
    <section>
      <Header />
      <h2>Todos os produtos</h2>
      <p>Confira todas as nossas ofertas.</p>
      <section className="products">
        <h3>Processadores</h3>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h4>{product.name}</h4>
              <p>R$ {product.price}</p>
              <button>Ver</button>
              <button>Comprar</button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
