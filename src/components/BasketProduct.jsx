import { useSelector } from "react-redux";
import Product from "./Product";

const BasketProduct = () => {
  const { products } = useSelector((store) => store.basket);
  
  console.log(products);
  return (
    <div className="max-w-5xl mx-auto">
      {products.map((item) => {
        const { name, price, image, amount } = item;
          return <Product
              name={name}
              price={price}
              image={image}
              amount={amount}
              key={new Date().getTime() + Math.random()} />;
      })}
    </div>
  );
};

export default BasketProduct;
