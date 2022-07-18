import React from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../contexts/cartContext";
import Loader from "../Loader/Loader";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";

import "./cart.css";

function Cart() {
  const navigate = useNavigate();
  const { getCart, cart, deleteFromCart, changeCount } =
    React.useContext(cartContext);

  React.useEffect(() => {
    getCart();
  }, []);

  return cart ? (
    <>
      <section className="container">
        <ul className="products">
          {cart.shoes.map(product => {
            return (
              <li className="row" key={product.item.id}>
                <div className="col left">
                  <div className="thumbnail">
                    {/* <img src={product.item.image} alt={product.item.title} />
                     */}
                    <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d5f168f9-f953-4419-ac7a-f0def128176e/renew-run-2-road-running-shoe-jlw8gb.png" />
                  </div>
                  <div className="detail">
                    <div className="name">
                      <p>{product.item.title}</p>
                    </div>
                    <div className="description">
                      {product.item.description}
                    </div>
                    <div className="price">${product.item.price}</div>
                  </div>
                </div>

                <div className="col right">
                  <div className="quantity">
                    <AddCircleOutlineTwoToneIcon
                      onClick={() =>
                        changeCount(product.count + 1, product.item.id)
                      }
                    />
                    <input
                      type="text"
                      className="quantity"
                      step="1"
                      // value={counter}
                      value={product.count}
                      // onChange={e => setCounter(counter + 1)}
                    />
                    <RemoveCircleOutlineRoundedIcon
                      onClick={e =>
                        changeCount(product.count - 1, product.item.id)
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
            <button type="button" />
          </div>

          <div className="summary">
            <ul>
              <li>
                Discount: <span>$0</span>
              </li>

              <li className="total">
                Total: <span>${cart.totalPrice}</span>
              </li>
            </ul>
          </div>

          <div className="checkout">
            <button type="button">Check Out</button>
          </div>
        </section>
      </>
    </>
  ) : (
    <Loader />
  );
}

export default Cart;
