import { useSelector } from "react-redux";

const Cart = () => {
  const CartData = useSelector((state) => state.phoneApiData.cartInfo);

  return (
    <div>
      <div>Cart Page</div>
      <div>
        {CartData.map((li) => (
          <>
            <h1>{li.brand}</h1>
          </>
        ))}
      </div>
    </div>
  );
};

export default Cart;
