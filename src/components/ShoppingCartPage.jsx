import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { useStateContext } from "../contexts/ContextProvider";
import { products } from "./products";

const ShoppingCartPage = () => {
  const { items, setItems, addItem, removeItem } = useStateContext();
  return (
    <div>
      <div className="bg-[#f0f5f6]">
      <div>
          <div class="mb-5">
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
              Shopping Cart
            </h2>
          </div>
          <ul>
            {items.map((item) => (
              <li key={item.id} className="border-2 mb-1 rounded-md">
                <div className="h-28 m-2 rounded-md flex justify-between p-4">
                  <div>
                    <img
                      src={item.imgSrc}
                      alt="pic"
                      className="h-24 w-24 rounded-md"
                    />
                  </div>
                  <div>
                    <p className="text-left text-sm">{item.name}</p>
                    <p className="text-left text-sm">
                      ₹
                      {(
                        item.price -
                        (item.discount / 100) * item.price
                      ).toFixed(0)}
                    </p>
                  </div>
                  <div>
                    <p>Quantity</p>
                    <div className="flex border-2 rounded-md p-2 justify-between w-28 mt-2">
                      <button
                        onClick={() => {
                          if (item.quantity > 0) {
                            setItems((prevItems) => {
                              const updatedItems = prevItems.map((prevItem) => {
                                if (prevItem.id === item.id) {
                                  return {
                                    ...prevItem,
                                    quantity: prevItem.quantity - 1,
                                    totalPrice: (
                                      (prevItem.quantity - 1) *
                                      (prevItem.price -
                                        (prevItem.discount / 100) *
                                          prevItem.price)
                                    ).toFixed(0),
                                  };
                                }
                                return prevItem;
                              });

                              return updatedItems;
                            });
                          }
                        }}
                      >
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        onClick={() => {
                          setItems((prevItems) => {
                            const updatedItems = prevItems.map((prevItem) => {
                              if (prevItem.id === item.id) {
                                return {
                                  ...prevItem,
                                  quantity: prevItem.quantity + 1,
                                  totalPrice: (
                                    (prevItem.quantity + 1) *
                                    (prevItem.price -
                                      (prevItem.discount / 100) *
                                        prevItem.price)
                                  ).toFixed(0),
                                };
                              }
                              return prevItem;
                            });

                            return updatedItems;
                          });
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="rounded-md justify-end bg-green-500 px-3.5 py-2.5 h-10 text-center text-sm font-semibold text-white shadow-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-evenly">
            <div className="flex justify-center gap-4 mt-4">
              <p className="font-medium ">
                Total items in Cart: {items.length}
              </p>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <p className="font-medium">
                SubTotal: ₹
                {items.reduce(
                  (total, item) => total + parseInt(item.totalPrice),
                  0
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <div class="mt-20">
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
              All Sample Products
            </h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-4">
            {products.map((product) => (
              <div>
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        <div className="flex">
                          <StarIcon className="h-5 w-5 mr-1" />
                          {product.rating}
                        </div>
                      </p>
                    </div>
                    <div className="text-sm font-medium ">
                      <p>
                        ₹
                        {(
                          product.price -
                          (product.discountPercentage / 100) * product.price
                        ).toFixed(0)}
                      </p>
                      <p className="line-through">₹{product.price}</p>
                    </div>
                  </div>
                </div>
                <div className="flex mt-2">
                  <button
                    onClick={() =>
                      addItem(
                        product.title,
                        product.discountPercentage,
                        product.thumbnail,
                        product.price
                      )
                    }
                    className="rounded-md bg-green-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-600"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShoppingCartPage;
