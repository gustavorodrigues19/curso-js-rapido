import Button from "../../components/Button";
import CartProduct from "../../components/CartProduct";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    quantity: 1,
    image: "https://dummyimage.com/420x260",
  },
  {
    id: 2,
    name: "Bluetooth Speaker",
    price: 49.99,
    quantity: 2,
    image: "https://dummyimage.com/420x260",
  },
];

export default function CartPage() {
  const total = products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-3 gap-8 min-h-[80vh]">
      <div className="md:col-span-2 space-y-6">
        <h2 className="text-2xl font-bold">Carrinho de compras</h2>
        {products.map((product) => (
          <CartProduct key={product.id} product={product} />
        ))}
      </div>
      <div>
        <div className="p-6">
          <div className="space-y-4 p-0">
            <h3 className="text-xl font-bold mb-2">Resumo</h3>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Sub Total</span>
              <span>€{total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Entrega</span>
              <span>€0.00</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>IVA</span>
              <span>€0.00</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>€{total.toFixed(2)}</span>
            </div>
            <Button text="Finalizar a compra" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
