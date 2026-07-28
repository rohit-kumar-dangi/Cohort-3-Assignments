import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import {ShoppingCart,Star,Truck,ShieldCheck,RotateCcw,Heart, Check, } from "lucide-react";
import { MyStore } from "../context/MyContext";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState();
  const { cartItems, setCartItem, setIsCartOpen, setCartItems } = useContext(MyStore);
  const isAddedInCart = cartItems.some(item => item.id == id);

  const getProductDetail = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );

      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

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

  useEffect(() => {
    getProductDetail();
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center text-white text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <section className="flex-1 bg-[#121212] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left */}

          <div className="bg-white rounded-3xl p-10 flex items-center justify-center relative">

            <span className="absolute top-6 left-6 bg-zinc-200 text-zinc-700 text-sm px-4 py-2 rounded-full capitalize">
              {product.category}
            </span>

            <img
              src={product.image}
              alt={product.title}
              className="h-[450px] object-contain"
            />

          </div>

          {/* Right */}

          <div>

            <p className="text-lime-400 uppercase tracking-widest mb-3">
              {product.category}
            </p>

            <h1 className="text-5xl font-bold leading-tight">
              {product.title}
            </h1>

            {/* Rating */}

            <div className="flex items-center gap-3 mt-6">

              <div className="flex text-yellow-400">

                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={22}
                    fill={
                      index < Math.round(product.rating.rate)
                        ? "currentColor"
                        : "none"
                    }
                  />
                ))}

              </div>

              <span className="text-zinc-400">
                {product.rating.rate} ({product.rating.count} Reviews)
              </span>

            </div>

            {/* Price */}

            <h2 className="text-6xl font-bold text-lime-400 mt-8">
              ${product.price}
            </h2>

            {/* Description */}

            <p className="text-zinc-400 leading-8 mt-8">
              {product.description}
            </p>

            {/* Buttons */}

            <div className="flex gap-5 mt-10">
              {
                isAddedInCart ? (
                  <button 
                    className="flex-1 h-16 rounded-2xl text-black font-bold text-lg flex items-center justify-center gap-3 border border-green-700 bg-green-900/30 px-4 py-2 text-green-400 hover:bg-green-950 transitio cursor-pointer"
                    onClick={()=> setIsCartOpen(true)}
                  >
                    <Check size={16} strokeWidth={3} />
                    <span className="text-lg">Added to Cart</span>
                  </button>
                ) : (
                  <button 
                    className="flex-1 h-16 rounded-2xl bg-lime-400 text-black font-bold text-lg flex items-center justify-center gap-3 hover:bg-lime-300 transition"
                    onClick={addToCart}
                  >

                    <ShoppingCart size={22} />

                    Add to Cart

                  </button>
                )
              }

              

              <button className="h-16 w-16 rounded-2xl border border-zinc-700 hover:bg-zinc-800 transition flex items-center justify-center">

                <Heart />

              </button>

            </div>

            {/* Features */}

            <div className="grid grid-cols-3 gap-5 mt-12">

              <div className="bg-[#181818] border border-zinc-800 rounded-2xl p-5 text-center">

                <Truck className="mx-auto text-lime-400 mb-3" />

                <p className="font-semibold">Free Shipping</p>

              </div>

              <div className="bg-[#181818] border border-zinc-800 rounded-2xl p-5 text-center">

                <ShieldCheck className="mx-auto text-lime-400 mb-3" />

                <p className="font-semibold">Secure Payment</p>

              </div>

              <div className="bg-[#181818] border border-zinc-800 rounded-2xl p-5 text-center">

                <RotateCcw className="mx-auto text-lime-400 mb-3" />
                <p className="font-semibold"> 7 Days Return </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ProductDetail;