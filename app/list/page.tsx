"use client";

import Image from "next/image";
import { useState, useCallback } from "react";

export default function List() {
    let products = ["Tomatoes", "Pasta", "Coconut"];
    let [count, setCount] = useState([0, 0, 0]);

    const countUpHandler = useCallback((index: number) => {
        setCount((value: number[]) => {
            const newCount = [...value];
            newCount[index]++;
            return newCount;
        });
    }, []);

    const countDownHandler = useCallback(
        (index: number) => {
            if (count[index] > 0) {
                setCount((value: number[]) => {
                    let newCount = [...value];
                    newCount[index]--;
                    return newCount;
                });
            }
        },
        [count]
    );

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
                    <button
                        type="button"
                        className="inline-block w-5 px-1 bg-blue-500 rounded-lg shadow-lg shadow-neutral-500/40"
                        onClick={countDownHandler.bind(null, index)}
                    >
                        -
                    </button>
                    <span className="mx-3">{count[index]}</span>
                    <button
                        type="button"
                        className="inline-block w-5 px-1 bg-blue-500 rounded-lg shadow-lg shadow-neutral-500/40"
                        onClick={countUpHandler.bind(null, index)}
                    >
                        +
                    </button>
                </div>
            ))}
        </div>
    );
}
