import { useContext } from "react";
import { MyStore } from "../context/MyContext";
import CartItem from "./CartItem";
import { toast } from "react-toastify";
import { Package } from "lucide-react";
import { useNavigate } from "react-router";


function CartDrawer() {
  const { cartItems, setCartItems, isCartOpen, setIsCartOpen } = useContext(MyStore);
  const navigate = useNavigate();
  let totalAmount = 0;
  cartItems.map((elem)=>{
    let tempAmount = elem.price * elem.quantity;
    totalAmount+=tempAmount;
  })

  const checkOut = ()=>{
    if (cartItems.length === 0) {
      toast.error("Cart is empty");
      return;
    }
    setCartItems([]);
    setIsCartOpen(false);
    toast.success("Order successfull");
  };

  let isCartEmpty = cartItems.length === 0;

  return (
    <div className="fixed inset-0 z-50 transition-all duration-300">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Cart Drawer */}
      <div className="absolute top-0 right-0 h-screen w-[420px] bg-zinc-900 border-l border-zinc-700 flex flex-col transition-transform duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-zinc-700">
          <h1 className="text-xl font-bold text-white">
            Cart
          </h1>

          <button
            onClick={() => setIsCartOpen(false)}
            className="text-sm text-zinc-400 hover:text-white cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 flex flex-col gap-3 overflow-y-auto p-5">
          {
            isCartEmpty ? (
                  <div className="flex flex-col items-center justify-center h-full px-6 py-16">
                    <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-zinc-700 bg-zinc-900">
                      <Package size={42} className="text-zinc-500" />
                    </div>
                    <h2 className="mt-8 text-3xl font-semibold text-white">
                      Cart is empty
                    </h2>
                    <p className="mt-2 text-center text-lg text-zinc-500">
                      Go shop something cool!
                    </p>
                    <button
                      className="mt-10 w-full rounded-2xl bg-lime-400 py-4 text-lg font-semibold text-black transition hover:bg-lime-300"
                      onClick={()=> {
                        navigate("/shop")
                        setIsCartOpen(false)
                      }}
                    >
                      Browse Products
                    </button>
                  </div>
              ) : (
              cartItems.map( (elem) => {
                return <CartItem key={elem.id} items={elem} />
              })
            )
          }
        </div>


        {/* Footer */}
        <div className="border-t border-zinc-700 p-5">
          <div className="flex justify-between text-white text-xl font-bold">
            <span>Total</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>

          <button 
            className="mt-5 h-12 w-full rounded-xl bg-lime-400 text-black font-bold hover:bg-lime-300"
            onClick={checkOut}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartDrawer;