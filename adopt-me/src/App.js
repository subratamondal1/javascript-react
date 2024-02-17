const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Lua"),
    React.createElement("h1", {}, "Johnny"),
    React.createElement("h1", {}, "Entertainment"),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet),
  ]);
};

const container = document.getElementById(("root"));
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
