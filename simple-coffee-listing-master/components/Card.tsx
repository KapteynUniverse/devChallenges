import { EmptyStarIcon, FilledStarIcon } from "./StarIcon";
import type { CoffeeCardProps } from "../types/type";

const Card = ({
  image,
  popular,
  name,
  price,
  rating,
  votes,
  available,
}: CoffeeCardProps) => {
  return (
    <article className="coffee-list__card">
      <img
        src={image}
        alt={name}
        width={260}
        height={160}
        className="coffee-list__img"
      />
      {popular && <p className="coffee-list__popular">Popular</p>}
      <div className="coffee-list__info">
        <p className="coffee-list__name">{name}</p>
        <p className="coffee-list__price">{price}</p>
      </div>
      <div className="coffee-list__bottom">
        <div>
          {rating !== null ? <FilledStarIcon /> : <EmptyStarIcon />}
          {rating !== null ? (
            <p className="coffee-list__rating">{rating}</p>
          ) : (
            <p className="coffee-list__noRating">No rating</p>
          )}
          {votes !== 0 ? (
            <p className="coffee-list__votes">({votes} votes)</p>
          ) : null}
        </div>
        {!available && <p className="coffee-list__isAvailable">Sold Out</p>}
      </div>
    </article>
  );
};

export default Card;
