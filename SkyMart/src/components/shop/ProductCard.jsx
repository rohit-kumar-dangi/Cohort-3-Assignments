import { ShoppingCart, Star, Check } from "lucide-react";
import { useContext } from "react";
import { MyStore } from "../../context/MyContext";
import { useNavigate } from "react-router";

function ProductCard({ product }) {

  const { cartItems, setCartItems, setIsCartOpen } = useContext(MyStore);
  let navigate = useNavigate();
  const addToCart = (e)=>{
    e.stopPropagation();
    let cartData = {
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      quantity: "1",
    }
    let cartarr=[...cartItems]
    cartarr.push(cartData);
    let stringCartarr = JSON.stringify(cartarr);
    localStorage.setItem("cartItem",stringCartarr);
    setCartItems(cartarr);
    setIsCartOpen(true);
  }

  const isAddedInCart = cartItems.some(item => item.id === product.id);

  return (
    <div 
      className="flex flex-col w-72 rounded-3xl overflow-hidden border border-zinc-700 bg-zinc-900 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
      onClick={()=> navigate(`/detail/${product.id}`)}
    >

      {/* Image Section */}
      <div className="relative h-72 bg-white p-5 flex items-center justify-center">
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-zinc-500 text-white text-[11px] font-medium capitalize">
          {product.category}
        </span>

        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4">

        {/* Category */}
        <p className="text-xs text-zinc-500 capitalize">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="mt-2 text-lg font-semibold text-white line-clamp-2 min-h-[56px]">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={14}
                fill={
                  index < Math.round(product.rating.rate)
                    ? "currentColor"
                    : "none"
                }
                className={
                  index < Math.round(product.rating.rate)
                    ? ""
                    : "text-zinc-600"
                }
              />
            ))}
          </div>

          <span className="text-xs text-zinc-500">
            ({product.rating.count})
          </span>
        </div>

        {/* Divider */}
        <hr className="border-zinc-700 my-4" />

        {/* Bottom */}
        <div className="mt-auto flex items-center justify-between">

          <h3 className="text-2xl font-bold text-lime-400">
            ${product.price}
          </h3>

          {
            isAddedInCart ? (
              <div className="flex items-center gap-2 rounded-full border border-green-700 bg-green-900/30 px-4 py-2 text-green-400 font-medium">
                <Check size={16} strokeWidth={3} />
                <span className="text-xs">Added</span>
              </div>
            ) : (
              <button 
                className="flex items-center gap-2 rounded-full bg-lime-400 px-3 py-2 text-black font-semibold hover:bg-lime-300 transition"
                onClick={addToCart}
              >
                <ShoppingCart size={12} />
                <p className="text-sm" >Add</p>
              </button>
            )
          }

          

          

        </div>

      </div>
    </div>
  );
}

export default ProductCard;