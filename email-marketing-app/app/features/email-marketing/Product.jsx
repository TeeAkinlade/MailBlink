import { products } from "@/constants";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  return (
    <section className="mt-28 max-width padding-x padding-y flex flex-col md:h-[80%] h-fit justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className={`flex md:flex-row flex-col items-center gap-5 ${product.position} bottom-5`}>
            {product.variations.map((variation, index) => (
              <ProductCard
                key={index}
                bg={variation.bg}
                top={variation.top}
                src={variation.image}
                title={variation.title}
                details={variation.details}
              />
            ))}
          </div>
        ))}
    </section>
  );
};