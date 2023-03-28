import { useEffect } from "react";
import Product from "./Product";
import "./ProductList.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllShoes } from "../redux/shoe.slice";
export default function ProductList() {
  const dispatch = useDispatch();
  const { shoes, error, loading } = useSelector((state) => state.shoe);
  useEffect(() => {
    dispatch(fetchAllShoes());
  }, []);
  console.log(shoes)
  if (shoes.length != 0) {
    return (
      <div className="card">
        <div className="card__top">
          <img className="card__top__logo" src="./assets/nike.png" alt="..." />
        </div>
        <div className="card__title">Our Products</div>
        <div className="card__body">
          {shoes.map((item, index) => (
            <Product key={index} item={item} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="card">
      <div className="card__top">
        <img className="card__top__logo" src="./assets/nike.png" alt="..." />
      </div>
      <div className="card__title">Our Products</div>
      <div className="card__body">
        <p>Loading...</p>
        <p>Please wait a bit for back-end response! Because of free deployment it will a bit slow</p>
      </div>
    </div>
  );

}