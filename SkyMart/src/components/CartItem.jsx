import { Minus, Plus, Trash2 } from "lucide-react";
import { useContext } from "react";
import { MyStore } from "../context/MyContext";

function CartItem(items) {
  let item = items.items;
  const { cartItems, setCartItems } = useContext(MyStore);

  const reduceQuantity = () => {
    if (item.quantity===1){
      setCartItems((prev) => {
        let data = prev.filter((elm) => elm.id !== item.id)
        let stringCartarr = JSON.stringify(data);
        localStorage.setItem("cartItem",stringCartarr);
        return data;
      });
    }
    else{
      setCartItems((prev) => {
        let data = prev.map((elm) =>
          elm.id === item.id
            ? {...elm,quantity: Math.max(1, Number(elm.quantity) - 1),}
            : elm
        )
        let stringCartarr = JSON.stringify(data);
        localStorage.setItem("cartItem",stringCartarr);
        return data;
      } 
      );
    }
  };

  const increaseQuantity = () => {
    setCartItems((prev) => {
      let data = prev.map((elm) =>
        elm.id === item.id
          ? { ...elm, quantity: Number(elm.quantity) + 1 }
          : elm
      )
      let stringCartarr = JSON.stringify(data);
      localStorage.setItem("cartItem",stringCartarr);
      return data;
    }
      
    );
  };

  const deleteCartItem = () => {
    setCartItems((prev) => {
      let data = prev.filter((elm) => elm.id !== item.id)
      let stringCartarr = JSON.stringify(data);
      localStorage.setItem("cartItem",stringCartarr);
      return data;
    });
  };


  return (
    <div className="flex items-center gap-4 rounded-2xl border border-zinc-700 bg-zinc-900 p-4">

      {/* Product Image */}
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-white">
        <img
          src={item.image}
          alt="Product"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col">
        <h2 className="text-sm font-light text-white">
          {item.title}
        </h2>

        <p className="mt-1 text-base font-bold text-lime-400">
          ${item.price}
        </p>

        <p className="text-xs text-zinc-500">
          ${item.price} each
        </p>

        {/* Quantity */}
        <div className="mt-1 flex items-center gap-4">
          <button 
            className="flex h-6 w-6 items-center justify-center rounded-sm border border-zinc-700 hover:bg-zinc-600"
            onClick={reduceQuantity}
          >
            <Minus size={18} className="text-white" />
          </button>

          <span className="text-base font-semibold text-white">
            {item.quantity}
          </span>

          <button 
            className="flex h-6 w-6 items-center justify-center rounded-sm border border-zinc-700 hover:bg-zinc-600"
            onClick={increaseQuantity}
          >
            <Plus size={18} className="text-white" />
          </button>
        </div>
      </div>

      {/* Delete Button */}
      <button 
        className="self-end text-red-500 transition hover:text-red-400"
        onClick={deleteCartItem}
      >
        <Trash2 size={20} />
      </button>

    </div>
  );
}

export default CartItem;