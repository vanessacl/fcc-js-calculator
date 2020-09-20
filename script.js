function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const ops = ['/', '|', '*', '-', '+'];

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      calculation: '0',
      operation: undefined,
      lastEntered: undefined });_defineProperty(this, "handleClick",


    e => {
      const { calculation, lastEntered } = this.state;
      const { innerText } = e.target;

      switch (innerText) {
        case 'AC':{
            this.setState({
              calculation: '0' });

            break;
          }
        case '=':{
            const evaluated = eval(calculation);
            this.setState({
              calculation: evaluated });

            break;
          }
        case '.':{
            const splitted = calculation.split(/[\+\-\*\/]/);
            const last = splitted.slice(-1)[0];

            if (!last.includes('.')) {
              this.setState({
                calculation: calculation + '.' });

            }
            break;
          }
        default:{
            let e = undefined;
            if (ops.includes(innerText)) {
              if (ops.includes(lastEntered) && innerText !== '-') {
                const lastNumberIdx = calculation.split('').reverse().findIndex(char => char !== ' ' && nums.includes(+char));
                e = calculation.slice(0, calculation.length - lastNumberIdx) + ` ${innerText} `;
              } else {
                e = `${calculation} ${innerText} `;
              }
            } else {
              e = calculation === '0' ? innerText : calculation + innerText;
            }

            this.setState({
              calculation: e });

          }}


      this.setState({
        lastEntered: innerText });


    });}

  render() {
    const { calculation } = this.state;

    return (
      React.createElement("div", { className: "calculator" },
      React.createElement("div", { id: "display", className: "display" },
      calculation),

      React.createElement("button", { id: "clear", className: "light-gray h-long", onClick: this.handleClick }, "AC"),
      React.createElement("button", { id: "divide", className: "orange", onClick: this.handleClick, value: "/" }, "/"),
      React.createElement("button", { id: "multiply", className: "orange", onClick: this.handleClick }, "*"),
      React.createElement("button", { id: "seven", className: "gray", onClick: this.handleClick }, "7"),
      React.createElement("button", { id: "eight", className: "gray", onClick: this.handleClick }, "8"),
      React.createElement("button", { id: "nine", className: "gray", onClick: this.handleClick }, "9"),
      React.createElement("button", { id: "subtract", className: "orange", onClick: this.handleClick }, "-"),
      React.createElement("button", { id: "four", className: "gray", onClick: this.handleClick }, "4"),
      React.createElement("button", { id: "five", className: "gray", onClick: this.handleClick }, "5"),
      React.createElement("button", { id: "six", className: "gray", onClick: this.handleClick }, "6"),
      React.createElement("button", { id: "add", className: "orange", onClick: this.handleClick }, "+"),
      React.createElement("button", { id: "one", className: "gray", onClick: this.handleClick }, "1"),
      React.createElement("button", { id: "two", className: "gray", onClick: this.handleClick }, "2"),
      React.createElement("button", { id: "three", className: "gray", onClick: this.handleClick }, "3"),
      React.createElement("button", { id: "zero", className: "gray h-long", onClick: this.handleClick }, "0"),
      React.createElement("button", { id: "decimal", className: "gray", onClick: this.handleClick }, "."),
      React.createElement("button", { id: "equals", className: "orange v-long", onClick: this.handleClick }, "=")));


  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));