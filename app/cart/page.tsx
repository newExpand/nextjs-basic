"use client";

import React from "react";
import Product from "./data";
import Hello from "./Hello";

export default function Cart() {
    return (
        <div>
            <h4 className="text-center">Cart</h4>
            <CartItem />
            <CartItem />
        </div>
    );
}

function CartItem() {
    return (
        <div className="flex justify-around border-b leading-[0] p-6">
            <Hello />
            <p>상품명 : {Product}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    );
}
