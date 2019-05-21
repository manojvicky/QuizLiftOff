import React from "react";

const QuestionLayout = props => {
  const { question } = props;
  const options = question.options.map((option, index) => (
    <option key={index} className="optionValue" value={option}>
      {option}
    </option>
  ));
  return (
    <div className="layoutOuter">
      <div className="questionDiv">
        {props.no}. {question.question}
      </div>
      <div className="optionsDiv">
        <select
          className="questionSelect"
          style={{
            border: props.error ? "1px solid red" : "1px solid #d7d7d7"
          }}
          value={props.value}
          onChange={event =>
            props.onChangeHandler({
              id: question.question,
              value: event.target.value
            })
          }
        >
          <option value="Please Select">Please Select</option>
          {options}
        </select>
        {props.error ? <span className="errorDiv">Required Field</span> : null}
      </div>
    </div>
  );
};

export default QuestionLayout;
