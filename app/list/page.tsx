"use client";

import Image from "next/image";

export default function List() {
    let products = ["Tomatoes", "Pasta", "Coconut"];

    return (
        <div>
            <h4 className="mt-20 text-center">상품목록</h4>
            {products.map((item, index) => (
                <div
                    key={item}
                    className="relative w-48 p-5 mx-auto mt-5 text-black bg-white rounded-md"
                >
                    <Image
                        src={`/food${index}.png`}
                        width={50}
                        height={50}
                        className="w-full h-auto"
                        alt=""
                    />
                    <h4>{`${item} ${index + 1}`}만원</h4>
                </div>
            ))}
        </div>
    );
}
