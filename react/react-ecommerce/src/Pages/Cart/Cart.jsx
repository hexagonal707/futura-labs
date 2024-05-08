import { useSelector } from "react-redux";

const Cart = () => {
  const CartData = useSelector((state) => state.phoneApiData.cartInfo);

  return (
    <div>
      <div>Cart Page</div>
      <div>
        {CartData.map((li) => (
          <>
            <h1>
              {li.brand} {li.model}
            </h1>{" "}
            <span>quantity: {li.quantity}</span>
          </>
        ))}
      </div>
    </div>
  );
};

export default Cart;
