import Image from "next/image";

const ItemCard = () => {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <div className="w-full">
        <Image
          src="https://picsum.photos/seed/picsum/300/200"
          alt="img"
          width={300}
          height={200}
        />
      </div>
      <p>Product Title</p>
      <div className="rating">
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          defaultChecked
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
      </div>
      <p>Description about the product: quis nostrud exercitation ullamco </p>
      <div className="flex flex-row gap-2">
        <div className="badge badge-secondary badge-lg">secondary</div>
        <div className="badge badge-accent badge-lg">ghost</div>
      </div>
    </div>
  );
};

export default ItemCard;
