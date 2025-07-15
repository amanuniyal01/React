import React from "react";
import ReactDOM from "react-dom/client";


// // React Element  CreateElement  =>  Object
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React🚀");
// console.log(heading);


// JSX(Transpiled before it reaches the JS) => PARCEL => Babel
// React Element
const jsxHeading = (<h1 className="heading">Namaste React using JSX🚀</h1>);

// React component
const Title=()=>(<h1>I am 2nd React component</h1>)

// Component Composition.
const HeadingComponent = () => (
    <div id="container">
        <Title/>
        {jsxHeading}
        <h1 className="heading">React Functional Component</h1>
    </div>);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);