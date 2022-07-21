import React from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../contexts/cartContext";
import Loader from "../Loader/Loader";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";

import "./cart.css";
import { Input } from "@mui/material";

function Cart() {
  const navigate = useNavigate();
  const { getCart, cart, deleteFromCart, changeCount } =
    React.useContext(cartContext);

  React.useEffect(() => {
    getCart();
  }, []);
  console.log(cart);
  return cart ? (
    <>
      <section
        className="containe"
        style={{ marginTop: "80px", color: "black" }}>
        <ul className="products">
          {cart.shoes.map(product => {
            return (
              <li className="rowq" key={product.item.id}>
                <div className="colq left">
                  <div className="thumbnailq">
                    <img
                      width={"250px"}
                      height={"200px"}
                      src={product.item.image}
                    />
                  </div>
                  <div className="detailq">
                    <div className="nameq">
                      <p>{product.item.title}</p>
                    </div>
                    <div className="descriptionq">
                      {product.item.description}
                    </div>
                    <div className="priceq">{product.item.price} KGS</div>
                  </div>
                </div>

                <div className="colq right">
                  <div className="quantityq">
                    <RemoveCircleOutlineRoundedIcon
                      onClick={e =>
                        changeCount(product.count - 1, product.item.id)
                      }
                    />
                    <Input
                      id="in"
                      type="text"
                      className="quantityq"
                      step="1"
                      // value={counter}
                      value={product.count}
                      // onChange={e => setCounter(counter + 1)}
                    />

                    <AddCircleOutlineTwoToneIcon
                      onClick={() =>
                        changeCount(product.count + 1, product.item.id)
                      }
                    />
                  </div>
                  <div className="removeq">
                    <svg
                      onClick={() => deleteFromCart(product.item.id)}
                      version="1.1"
                      className="closeq"
                      x="0px"
                      y="0px"
                      viewBox="0 0 60 60"
                      enableBackground="new 0 0 60 60">
                      <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                    </svg>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <>
        <section
          className="conta"
          style={{ marginTop: "80px", color: "black" }}>
          <div className="promotionq">
            <label style={{ marginLeft: "57px" }} htmlFor="promo-code">
              Have A Promo Code?
            </label>
            <input type="text" />
            <button className="bt" type="button" />
          </div>

          <div className="summaryq">
            <ul>
              <li className="total">Total: {cart.totalPrice} KGS</li>
            </ul>
          </div>

          <div className="chec">
            <button
              className="bt"
              onClick={() => navigate("/order-form")}
              type="button">
              Check Out
            </button>
          </div>
        </section>
      </>
    </>
  ) : (
    <Loader />
  );
}

export default Cart;
