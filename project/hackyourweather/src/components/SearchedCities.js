import City from "./City";

const SearchedCities = (props) => {
  if (props.cities.length === 0) {
    return <h4>Type a city name and submit!</h4>;
  } else {
    return (
      <ul>
        {props.cities.map((item) => (
          <City onRemove={props.onRemove} city={item} key={item.id} />
        ))}
      </ul>
    );
  }
};

export default SearchedCities;
