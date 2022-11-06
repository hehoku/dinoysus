import Image from "next/image";

interface ItemCardPropsType {
  title: string;
  score: number;
  description: string;
  type: string[];
  cover: string;
}

const ItemCard = (props: ItemCardPropsType) => {
  return (
    <div className="flex max-w-sm flex-col gap-2">
      <div className="relative h-52 w-80">
        <Image
          src={props.cover}
          alt="img"
          width={300}
          height={200}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <p>{props.title}</p>
      <div className="rating">
        <form action="">
          {[0, 1, 2, 3, 4].map((item, index) => {
            if (index === props.score - 1) {
              return (
                <input
                  key={item}
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
              );
            } else {
              return (
                <input
                  key={item}
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              );
            }
          })}
        </form>
      </div>
      <p>{props.description}</p>
      <div className="flex flex-row gap-2">
        <div className="badge badge-secondary badge-lg">{props.type}</div>
      </div>
    </div>
  );
};

export default ItemCard;
