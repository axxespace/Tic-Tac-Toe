const combinations = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['a', 'd', 'g'], ['b', 'e', 'h'], ['c', 'f', 'i'], ['a', 'e', 'i'], ['c', 'e', 'g']];

const containsCombination = (parent, child) => {
  let amount = 0;
  for (let i = 0; i < child.length; i++) {
    for (let k = 0; k < parent.length; k++) {
      if (child[i] == parent[k]) {
        amount++;
        break;
      }
    }
  }
  if (amount == child.length) return true;else
  return false;
};

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xWins: 0,
      oWins: 0,
      finished: false,
      yourTurn: true,
      you: [],
      opponent: [],
      a: undefined,
      b: undefined,
      c: undefined,
      d: undefined,
      e: undefined,
      f: undefined,
      g: undefined,
      h: undefined,
      i: undefined };

    this.method = this.method.bind(this);
    this.clear = this.clear.bind(this);
    this.setTimeout = this.setTimeout.bind(this);
  }


  method(event) {
    let arg = event.target.attributes.getNamedItem('buttonName').value;
    let state = false;
    let XO = undefined;
    let whoseTurn = undefined;
    let turn = this.state.yourTurn;
    let youOpponent = undefined;
    if (turn == true) {
      XO = 'X';
      youOpponent = this.state.you;
    } else {
      XO = 'O';
      youOpponent = this.state.opponent;
    }
    youOpponent.push(arg);
    for (let i = 0; i < combinations.length; i++) {
      if (containsCombination(youOpponent, combinations[i])) {
        state = true;
        break;
      }
    }
    if (!this.state[arg] && !this.state.finished) {
      this.setState({
        [arg]: XO,
        yourTurn: !turn,
        you: turn ? youOpponent : this.state.you,
        opponent: !turn ? youOpponent : this.state.opponent,
        finished: state ? true : false });

    }
  }

  clear(block) {
    this.setState({
      finished: false,
      yourTurn: true,
      you: [],
      opponent: [],
      a: undefined,
      b: undefined,
      c: undefined,
      d: undefined,
      e: undefined,
      f: undefined,
      g: undefined,
      h: undefined,
      i: undefined });

    clearInterval(this.timerID);
  }

  setTimeout() {
    setTimeout(() => {
      this.clear();
    }, 4500);
  }

  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", { class: "field" },
      React.createElement("div", { id: "first", class: "XO", buttonName: "a", onClick: this.method },
      this.state.a === 'X' ? React.createElement("div", { class: "x" }, React.createElement("div", { class: "x1" }), React.createElement("div", { class: "x2" })) : this.state.a === 'O' ? React.createElement("div", { class: "o1" }, React.createElement("div", { class: "o2" })) : null),

      React.createElement("div", { id: "second", class: "XO", buttonName: "b", onClick: this.method }, this.state.b == 'X' ? React.createElement("div", { class: "x" }, React.createElement("div", { class: "x1" }), React.createElement("div", { class: "x2" })) : this.state.b === 'O' ? React.createElement("div", { class: "o1" }, React.createElement("div", { class: "o2" })) : null),

      React.createElement("div", { id: "third", class: "XO", buttonName: "c", onClick: this.method }, this.state.c === 'X' ? React.createElement("div", { class: "x" }, React.createElement("div", { class: "x1" }), React.createElement("div", { class: "x2" })) : this.state.c === 'O' ? React.createElement("div", { class: "o1" }, React.createElement("div", { class: "o2" })) : null),

      React.createElement("div", { id: "fourth", class: "XO", buttonName: "d", onClick: this.method }, this.state.d === 'X' ? React.createElement("div", { class: "x" }, React.createElement("div", { class: "x1" }), React.createElement("div", { class: "x2" })) : this.state.d === 'O' ? React.createElement("div", { class: "o1" }, React.createElement("div", { class: "o2" })) : null),

      React.createElement("div", { id: "fifth", class: "XO", buttonName: "e", onClick: this.method }, this.state.e === 'X' ? React.createElement("div", { class: "x" }, React.createElement("div", { class: "x1" }), React.createElement("div", { class: "x2" })) : this.state.e === 'O' ? React.createElement("div", { class: "o1" }, React.createElement("div", { class: "o2" })) : null),

      React.createElement("div", { id: "sixth", class: "XO", buttonName: "f", onClick: this.method }, this.state.f === 'X' ? React.createElement("div", { class: "x" }, React.createElement("div", { class: "x1" }), React.createElement("div", { class: "x2" })) : this.state.f === 'O' ? React.createElement("div", { class: "o1" }, React.createElement("div", { class: "o2" })) : null),

      React.createElement("div", { id: "seventh", class: "XO", buttonName: "g", onClick: this.method }, this.state.g === 'X' ? React.createElement("div", { class: "x" }, React.createElement("div", { class: "x1" }), React.createElement("div", { class: "x2" })) : this.state.g === 'O' ? React.createElement("div", { class: "o1" }, React.createElement("div", { class: "o2" })) : null),

      React.createElement("div", { id: "eighth", class: "XO", buttonName: "h", onClick: this.method }, this.state.h === 'X' ? React.createElement("div", { class: "x" }, React.createElement("div", { class: "x1" }), React.createElement("div", { class: "x2" })) : this.state.h === 'O' ? React.createElement("div", { class: "o1" }, React.createElement("div", { class: "o2" })) : null),

      React.createElement("div", { id: "ninth", class: "XO", buttonName: "i", onClick: this.method }, this.state.i === 'X' ? React.createElement("div", { class: "x" }, React.createElement("div", { class: "x1" }), React.createElement("div", { class: "x2" })) : this.state.i === 'O' ? React.createElement("div", { class: "o1" }, React.createElement("div", { class: "o2" })) : null)),


      this.state.finished ? this.setTimeout() : null,
      this.state.a && this.state.b && this.state.c && this.state.d && this.state.e && this.state.f && this.state.g && this.state.h && this.state.i ? this.setTimeout() : null));


  }}


ReactDOM.render(React.createElement(Board, null), document.getElementById("application"));