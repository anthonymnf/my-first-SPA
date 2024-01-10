import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import "./styles/layout.css";
export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <hr />
        <Outlet />
      </main>
      <hr />
      <footer>
        <p>Feito com React Router DOM fazendo atualização ^_^</p>
      </footer>
    </>
  );
}
