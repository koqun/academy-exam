import { Component } from "react";

class ListClass extends Component {
  constructor(props) {
    super(props);
    this.numbers = [];
    this.listItems = this.numbers.map((number, index) => <li key={index}>{number}</li>);

    this.state = {
      season: [
        { id: 1, text: "내용1" },
        { id: 2, text: "내용2" },
        { id: 3, text: "내용3" },
        { id: 4, text: "내용4" },
      ],
      inputId: 5,
      inputText: ""
    };
  }
  deleteSeason = (id) => {
    const nextSeason = this.state.season.filter((s) => s.id !== id);
    this.setState({ season: nextSeason });
  };

  changeText = (e) => this.setState({ [e.target.name]: e.target.value });

  // 배열에 값을 넣는 함수
  getText = () => {
    const nextSeason = this.state.season.concat({
      id: this.state.inputId,
      text: this.state.inputText,
    });

    this.setState({ season: nextSeason });
    this.setState((prevState) => ({ inputId: prevState.inputId + 1 }));
  };

  render() {
    const { season } = this.state;

    return (
      <div>
        <input type="text" name="inputText" onChange={this.changeText}></input>
        <button onClick={this.getText}>추가</button>
        <ul>
          {season.map((s) => (
            <li>
              {s.text}
              <button 
              key={s.id} 
              onClick={() => {
                this.deleteSeason(s.id);
                }}>X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default ListClass;