export default function List() {
    let products = ["Tomatoes", "Pasta", "Coconut"];

    return (
        <div>
            <h4 className="text-center mt-[50vh]">상품목록</h4>
            {products.map((item, index) => (
                <div
                    key={item}
                    className="w-48 p-5 mx-auto mt-5 text-black bg-white rounded-md"
                >
                    <h4>{`${item} ${index + 1}`}만원</h4>
                </div>
            ))}
        </div>
    );
}
