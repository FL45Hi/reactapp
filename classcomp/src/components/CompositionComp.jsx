import React from "react";

const TypesOfFruit = () => {
  return (
    <div>
      <h3>Fruits:</h3>
      <ul>
        <li>Apples</li>
        <li>Grapes</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      {/* Nested Components */}
      <TypesOfFruit />
    </div>
  );
};

const TypesOfVegis = () => {
  return (
    <div>
      <h3>Vegetables:</h3>
      <ul>
        <li>Tomato</li>
        <li>Onion</li>
        <li>Spinach</li>
        <li>Broccoli</li>
        <li>Squash</li>
        <li>Lemon</li>

      </ul>
    </div>
  );
};

const Vegetables = () => {
  return (
    <div>
      {/* Nested Components */}
      <TypesOfVegis />
    </div>
  );
};

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class CompositionComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flag: false}
  }
  render() {
    return (
      <div>
        {/* we can compose multiple React components together.  */}

        <h3>I am the parent</h3>

        <ChildComponent />

        <div>
          <h3>Types of Food:</h3>

          <Fruits />

          <Vegetables />
          
        </div>
      </div>
    );
  }
}

export default CompositionComp;
