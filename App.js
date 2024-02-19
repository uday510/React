/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *      </div>
 * </div>
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *          <h1></h1>
 *      </div>
 * </div>
 * 
 * ReactElement((Object) => HTML(Browser understands))
 */

// const parent = React.createElement("div",
//     { id: "parent" },
//     React.createElement("div", { id: "child" },
//         React.createElement("h1", null, "Hello World!")
//     )
// );
// const parent = React.createElement("div",
//     { id: "parent" },
//     React.createElement("div", { id: "child" },
//         [React.createElement("h1", null, "h1 tag content"),
//         React.createElement("h2", {}, "h2 tag content"),
//         React.createElement("h3", {}, "h3 tag content"),
//         React.createElement("h4", {}, "h4 tag content"),
//         React.createElement("h5", {}, "h5 tag content"),]
//     )
// );
const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", null, "h1 tag content"),
        React.createElement("h2", {}, "h2 tag content"),
        React.createElement("h3", {}, "h3 tag content"),
        React.createElement("h4", {}, "h4 tag content"),
        React.createElement("h5", {}, "h5 tag content"),
    ]),
    React.createElement("div", { id: "child" }, [
        React.createElement("h4", null, "----------"),
        React.createElement("h1", null, "h1 tag content"),
        React.createElement("h2", {}, "h2 tag content"),
        React.createElement("h3", {}, "h3 tag content"),
        React.createElement("h4", {}, "h4 tag content"),
        React.createElement("h5", {}, "h5 tag content"),
    ]),
]);

// const heading = React.createElement(
//     "h1",
//     { id: "heading", xyz: "abc" },
//     "Hello World!"
// );

// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);