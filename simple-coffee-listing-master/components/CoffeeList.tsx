import { useFetchData } from "../hooks/useFetchData";
import Card from "../components/Card";
import Loading from "../components/Loading";

const CoffeeList = ({ isAvailable }: { isAvailable: boolean }) => {
  const { coffees, loading, error } = useFetchData();

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  const filteredCoffees = isAvailable
    ? coffees
    : coffees.filter((coffee) => coffee.available);

  return (
    <div className="coffee-list">
      {filteredCoffees.map(
        ({ id, available, image, name, popular, price, rating, votes }) => (
          <Card
            key={id}
            available={available}
            image={image}
            name={name}
            popular={popular}
            price={price}
            rating={rating}
            votes={votes}
          />
        )
      )}
    </div>
  );
};

export default CoffeeList;
