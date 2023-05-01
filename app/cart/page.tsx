import React from "react";

export default function Cart() {
    return (
        <div>
            <h4 className="text-center">Cart</h4>
            <div className="flex justify-around border-b-gray-500 leading-[0] p-2">
                <p>상품명</p>
                <p>$40</p>
                <p>1개</p>
            </div>
            <div className="flex justify-around border-b-gray-500 leading-[0] p-2">
                <p>상품명</p>
                <p>$40</p>
                <p>1개</p>
            </div>
        </div>
    );
}
