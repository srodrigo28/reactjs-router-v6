import { NavBar } from "../../components/NavBar";
import "./Products.css"
import { useEffect, useState } from "react";
export function Products() {
  const url = "http://localhost:3000/products";
  const [product, setProduct] = useState([]);
  const [showOpen, setShowOpen] = useState("showClass");
  const [showClose, setShowClose] = useState("closeClass")

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error:", error));
  }, [product]);

  const handleShowClose = () => {
    if(showOpen == "showClass") {
      setShowOpen("closeClass")
      setShowClose("showClass")
    }else if(showClose == "showClass"){
      setShowOpen("showClass")
      setShowClose("closeClass")
    }
  }

  return (
    <div className="body">
      <header>
        <button onClick={ () => handleShowClose(showOpen) } >
          <i className={`fa-solid fa-bars ${showOpen}`}></i>
        </button>
        <button onClick={ () => handleShowClose(showOpen)} >
          <i className={`fa-solid fa-xmark ${showClose}`}></i>
        </button>
      </header>
      <h1>Lista de Produtos</h1>
      <div className="cards">
        {product.map((item) => (
          <div className="card" key={item.id}>
            <img width={300} src={item.image} alt={item.name} />
            <h2>R$ {item.price}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
