const rootElement = document.getElementById("root");
const root  = ReactDOM.createRoot(rootElement);
// const headingElemnet = React.createElement('h1', {}, 'Hello React!');
// const headingElemnet2 = React.createElement('h2', {}, 'subheading!');
// const headerElemnet = React.createElement('header', {}, headingElemnet, headingElemnet2);
// console.log(JSON.parse(JSON.stringify(headerElemnet)));
// console.log(rootElement);
// root.render(headerElemnet);

const x = 10;

const headerElement = (
    <div className='wrapper'>
        <header>
            <h1>Hello React!</h1>
            <h2>subheading! {x}</h2>
            <p className="someClass">aposdpas dopas dipoasdi paosdi </p>
        </header>
        <button>Click me</button> 
    </div>
    
);

root.render(headerElement)