const Test = (props) => {
  return (
    <div>
      Hello {props.name}. How old are you? My age is {props.age}! My favorite
      food is {props.favoriteFood.join(",")}. My block number is{" "}
      {props.address.blockNum}
    </div>
  );
};

export default Test;
