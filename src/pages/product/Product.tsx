import { Single } from "../../components/single/Single";
import { singleProduct } from "../../data";
import "./product.scss";

export const Product = () => {
  //fetch data and send to Single Component
  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  );
};
