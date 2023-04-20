import { Link } from "react-router-dom";
import Card from "../../card/Card";

const ProductItem = ({ product, grid, id, name, price, desc, imageURL }) => {
  return (
    <Card className={grid ? "grid-view" : "list-view"}>
      <Link to={`/product-details`}>
        <div className="img">
          <img src={imageURL} alt={name} />
          {console.log(imageURL)}
        </div>
      </Link>
      <div className="content">
        <div className="details">
          <p>{`$${price}`}</p>
          <h4>{name}</h4>
        </div>
      </div>
    </Card>
  );
};

export default ProductItem;
