
/**
 * <div id="parent">
 *        <div id="child">
 *         <h1> Hi there i am an H1 tag </h1>
 *         <h2>Hi there this is an h2 tag</h2>
 *         </div>
 *         <div id="child2">
 *         <h1> Hi there i am an H1 tag </h1>
 *         <h2>Hi there this is an h2 tag</h2>
 *         </div>
 * </div>
 * 
 * 
 * 
 */


   const parent=React.createElement("div",{id: "parent"},[
    React.createElement("div", {id: "child"}, [
    React.createElement("h1",{},"I am H1 Tag"),
    React.createElement("h2",{},"I am H2 Tag"),
 ]),
  React.createElement("div", {id: "child2"},[
 React.createElement("h1",{},"I am H1 Tag"),
 React.createElement("h2",{},"I am H2 Tag"),
]),
   ]);


// const heading=React.createElement(
// "h1",
// {id:"heading", xyz: "abc"},
// "Hello world from react"
// );

console.log(parent);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); 