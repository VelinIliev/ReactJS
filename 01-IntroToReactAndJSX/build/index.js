var rootElement = document.getElementById("root");
var root = ReactDOM.createRoot(rootElement);
// const headingElemnet = React.createElement('h1', {}, 'Hello React!');
// const headingElemnet2 = React.createElement('h2', {}, 'subheading!');
// const headerElemnet = React.createElement('header', {}, headingElemnet, headingElemnet2);
// console.log(JSON.parse(JSON.stringify(headerElemnet)));
// console.log(rootElement);
// root.render(headerElemnet)
var x = 10;

var headerElement = React.createElement(
    "div",
    { className: "wrapper" },
    React.createElement(
        "header",
        null,
        React.createElement(
            "h1",
            null,
            "Hello React!"
        ),
        React.createElement(
            "h2",
            null,
            "subheading! ",
            x
        ),
        React.createElement(
            "p",
            { className: "someClass" },
            "aposdpas dopas dipoasdi paosdi "
        )
    ),
    React.createElement(
        "button",
        null,
        "Click me"
    )
);

root.render(headerElement);