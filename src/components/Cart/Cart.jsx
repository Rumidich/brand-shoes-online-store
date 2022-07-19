import React from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../contexts/cartContext";
import Loader from "../Loader/Loader";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";

import "./cart.css";
import { Box, Input } from "@mui/material";

function Cart() {
  const navigate = useNavigate();
  const { getCart, cart, deleteFromCart, changeCount } =
    React.useContext(cartContext);

  React.useEffect(() => {
    getCart();
  }, []);

  return cart ? (
    <>
      <section className="container" style={{ marginTop: "80px" }}>
        <ul className="products">
          {cart.shoes.map(product => {
            return (
              <li className="row" key={product.item.id}>
                <div className="col left">
                  <div className="thumbnail">
                    <img
                      width={"100px"}
                      height={"100px"}
                      src={product.item.image}
                    />
                  </div>
                  <div className="detail">
                    <div className="name">
                      <p>{product.item.title}</p>
                    </div>
                    <div className="description">
                      {product.item.description}
                    </div>
                    <div className="price">{product.item.price} KGS</div>
                  </div>
                </div>

                <div className="col right">
                  <div className="quantity">
                    <RemoveCircleOutlineRoundedIcon
                      onClick={e =>
                        changeCount(product.count - 1, product.item.id)
                      }
                    />
                    <Input
                      id="in"
                      type="text"
                      className="quantity"
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
                  <div className="remove">
                    <svg
                      onClick={() => deleteFromCart(product.item.id)}
                      version="1.1"
                      className="close"
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
        <section className="container">
          <div className="promotion">
            <label htmlFor="promo-code">Have A Promo Code?</label>
            <input type="text" />
            <button className="bt" type="button" />
          </div>

          <div className="summary">
            <ul>
              <li>
                Discount: <span> 0 KGS</span>
              </li>

              <li className="total">
                Total: <span>{cart.totalPrice} KGS</span>
              </li>
            </ul>
          </div>

          <div className="checkout">
            <button
              className="bt"
              onClick={() => navigate("/payment")}
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
