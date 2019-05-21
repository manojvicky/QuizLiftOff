import React from "react";
import { connect } from "react-redux";
import { clearAll } from "../actions/actions";
import { withRouter } from "react-router-dom";
class F0F extends React.Component {
  render(props) {
    return (
      <div className="errorPage">
        <div className="HomeDiv">
          <button
            className="buttons Home"
            onClick={() => {
              this.props.dispatch(clearAll());
              this.props.history.push("/");
            }}
          >
            Home
          </button>
        </div>
        <div>
          <h2>Error: 404: Page Not Found</h2>
        </div>
      </div>
    );
  }
}
export default withRouter(connect()(F0F));
