/** @format */
import { MdAdd, MdRemove } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

export const ShopItem = ({
  product,
  lsCartProducts,
  setLsCartProducts,
  handleAmount,
}) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(product.count);
  const size = product.size;
  const stock = product.stockk;
  /* const price = product.pricee */

  useEffect(() => {
    const prodFind = lsCartProducts.find((e) => e.cartId === product.cartId);
    const cartFilter = lsCartProducts.filter(
      (e) => e.cartId !== product.cartId
    );
    prodFind.count = count;
    localStorage.setItem(
      "lsCartProducts",
      JSON.stringify([...cartFilter, prodFind])
    );
  }, [product.cartId, lsCartProducts]);

  const handleClose = (idRemove) => {
    const newCart = lsCartProducts.filter(
      (prod) => prod.idRemove !== product.idRemove
    );
    localStorage.removeItem(idRemove);
    localStorage.setItem("lsCartProducts", JSON.stringify(newCart));
    setLsCartProducts(newCart);
  };

  const handlePlus = () => {
    if (count === stock) return;
    setCount(count + 1);
    handleAmount();
  };

  const handleMin = () => {
    if (count === 1) return;
    setCount(count - 1);
    handleAmount();
  };

  return (
    <div className="mb-auto">
      <div
        className="mb-3-tablet mb-auto columns is-vcentered is-multiline"
        style={{
          borderBottom: "1px solid grey",
        }}
      >
        <div className="column is-6-desktop is-7-tablet mb-0-tablet">
          <div className="columns is-vcentered is-multiline">
            <div className="column is-4 mb-3">
              <div
                className="is-flex has-background-light is-justify-content-center is-align-items-center"
                style={{
                  width: "96px",
                  height: "128px",
                }}
              >
                <div>
                  <img
                    className="image is-fullwidth"
                    style={{
                      objectFit: "cover",
                    }}
                    src={product.image}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="column is-8">
              <h3 className="subtitle  has-text-weight-bold">{product.name}</h3>
              <p className="mb-0 has-text-grey has-text-left">
                {product.categoria}
              </p>
              <p className="mb-0 has-text-grey has-text-left">{product.size}</p>
            </div>
          </div>
        </div>
        <div className="column is-2 is-hidden-touch">
          <p className="subtitle has-text-info mb-2 has-text-weight-bold">
            ${product.price}
          </p>
        </div>
        <div className="column is-2-desktop is-3-tablet pl-0">
          <div
            className="is-inline-flex is-align-items-center has-text-weight-bold pl-1"
            style={{
              border: "1px solid #DBDDE1",
              borderRadius: "8px",
            }}
          >
            <button
              onClick={handleMin}
              className="button has-text-black is-ghost "
            >
              <MdRemove />
            </button>
            <button className="input has-text-centered">{count}</button>

            <button
              onClick={handlePlus}
              className="button has-text-black is-ghost"
            >
              <MdAdd />
            </button>
          </div>
        </div>
        <div className="column ">
          <p className="subtitle has-text-info has-text-weight-bold pl-4 pb-2">
            ${product.price * count}
          </p>
        </div>
        <div className="columns pb-6">
          <section className="column pb-6 pr-5">
            <section className="column pb-4 ">
              <button className="button is-danger" onClick={handleClose}>
                X
              </button>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};
