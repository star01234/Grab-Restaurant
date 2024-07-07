import Card from "./Card";

const Restaurant = ({ restaurants }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {restaurants.map((restaurants) => (
        <Card
          key={restaurants.id}
          id={restaurants.id}
          img={restaurants.img}
          title={restaurants.title}
          type={restaurants.type}
        />
      ))}
    </div>
  );
};

export default Restaurant;