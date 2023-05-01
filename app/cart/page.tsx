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
            <Button color="blue" />
            <Button color="red" />
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

interface ButtonProps {
    color?: string;
}

function Button({ color }: ButtonProps) {
    return (
        <button
            type="button"
            className={`
                ${color === "red" && "bg-red-500"} 
                ${color === "blue" && "bg-blue-500"}
                p-4 m-4 rounded-lg
            `}
        >
            버튼
        </button>
    );
}
