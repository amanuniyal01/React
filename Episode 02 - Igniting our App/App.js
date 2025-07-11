//    const heading = React.createElement("h1", {id:"abc"}, "Hello World");
//         const root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);


// In html
    // <div id="parent">
    //     <div id="child">
    //         <h1></h1>
    //         <h2></h2>
    //     </div>
    //      <div id="child-2">
    //         <h1></h1>
    //         <h2></h2>
    //     </div>
    // </div>

import React from "react";
import ReactDOM from "react-dom/client"

const parent = React.createElement("div", { id: "parent" },

    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "This is Namaste react🚀🚀"),

        React.createElement("h2", {}, "Ammu Uniyal")]),
    React.createElement("div", { id: "child-2" },
        [React.createElement("h1", {}, "Jai Shree Ram"),

        React.createElement("h2", {}, "I am h2 tag")])
    ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);