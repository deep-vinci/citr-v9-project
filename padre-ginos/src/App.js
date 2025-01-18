const Pizza = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.key),
        React.createElement("p", {}, props.description),
    ]);
};

const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "Padre Gino's"),
        React.createElement(Pizza, {
            name: "The Pepperoni Pizzza",
            description: "Mozzarella Cheese, Pepperoni",
        }),
        React.createElement(Pizza, {
            name: "The Hawaiian Pizza",
            description: "Sliced Ham, Pineapple, Mozzarella Cheese",
        }),
        React.createElement(Pizza, {
            name: "The Big Meat Pizza",
            description: "Bacon, Pepperoni, Italian Sausage, Chorizo Sausage",
        })
    );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
