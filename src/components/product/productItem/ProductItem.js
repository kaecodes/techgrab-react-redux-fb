import { Link } from "react-router-dom";
import Card from "../../card/Card";
import "../Product.css";

const ProductItem = ({ product, grid, id, name, price, desc, imageURL }) => {
  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };

  return (
    <Card className={grid ? "grid-view" : "list-view"}>
      <Link to={`/product-details/${id}`}>
        <div className="img">
          <img src={imageURL} alt={name} />
        </div>
      </Link>
      <div className="content">
        <div className="details">
          <p>{`$${price}`}</p>
          {!grid ? <h4>{name}</h4> : <h4>{shortenText(name, 18)}</h4>}
        </div>
        {!grid && <p className="desc">{shortenText(desc, 200)}</p>}
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </Card>
  );
};

export default ProductItem;
