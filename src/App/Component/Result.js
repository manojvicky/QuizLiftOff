import React from "react";
import { connect } from "react-redux";
import { clearAll } from "../actions/actions";
import { withRouter } from "react-router-dom";
import { VictoryBar, VictoryChart } from "victory";
const Result = props => {
  const { result } = props;
  return (
    <div className="resultDiv">
      <div className="HomeDiv">
        <button
          className="buttons Home"
          onClick={() => {
            props.clearAll();
            props.history.push("/");
          }}
        >
          Home
        </button>
      </div>
      <div className="chartDiv">
        <VictoryChart domainPadding={30}>
          <VictoryBar
            data={[
              {
                xaxis: "Incorrect",
                result: result && result.incorrect ? result.incorrect : 0
              },
              {
                xaxis: "Correct",
                result: result && result.correct ? result.correct : 0
              }
            ]}
            x="xaxis"
            y="result"
          />
        </VictoryChart>
      </div>
    </div>
  );
};
export default withRouter(
  connect(
    state => {
      return {
        result: state.result
      };
    },
    dispatch => {
      return {
        clearAll: () => dispatch(clearAll())
      };
    }
  )(Result)
);
