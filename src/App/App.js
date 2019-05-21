import React from "react";
import Spinner from "react-bootstrap/Spinner";
import _ from "lodash";
import QuestionLayout from "./Component/QuestionLayout";
class App extends React.Component {
  dataApi = async () => {
    await this.props.dataAction();
  };
  onChangeHandler = info => {
    this.props.changeField(info);
  };
  clearAll = () => {
    this.props.clearAll();
  };
  handleSubmit = () => {
    if (!this.props.answers.some(option => option.value === "Please Select")) {
      let { data, answers, result } = this.props;
      let correctCount = 0;
      for (let i = 0; i < data.length; i++) {
        if (
          data[i].question === answers[i].id &&
          data[i].correct === answers[i].value
        ) {
          correctCount++;
        }
      }
      result({ correct: correctCount, incorrect: data.length - correctCount });
      this.props.history.push("/result");
    } else {
      const unFilledValues = this.props.answers.filter(
        option => option.value === "Please Select"
      );
      unFilledValues.forEach(option => {
        this.props.requiredField(option);
      });
    }
  };
  componentDidMount() {
    if (this.props.data.length === 0) {
      this.dataApi();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(this.props.data, nextProps.data)) {
      const { registerField } = this.props;
      if (nextProps.data.length > 0) {
        nextProps.data.forEach(field => {
          registerField(field.question);
        });
      }
    }
  }
  render() {
    const { data, answers } = this.props;
    const questions = data.map((ques, index) => {
      return (
        <QuestionLayout
          key={index}
          no={index + 1}
          question={ques}
          value={answers.length > 0 ? answers[index].value : "Please Select"}
          onChangeHandler={this.onChangeHandler}
          error={answers.length > 0 ? answers[index].error : false}
        />
      );
    });
    return (
      <div className="App">
        {this.props.loading ? (
          <Spinner animation="border" />
        ) : (
          <div className="quizApp">
            <h1 className="quizHeader">Quiz</h1>
            <div className="quizBody">{questions}</div>
            <div className="quizFooter">
              <div className="buttonsDiv">
                <button className="buttons sub" onClick={this.handleSubmit}>
                  Submit
                </button>
                <button className="buttons clear" onClick={this.clearAll}>
                  Clear All
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default App;
