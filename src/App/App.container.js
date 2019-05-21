import { connect } from "react-redux";
import App from "./App";
import {
  getData,
  registerField,
  changeField,
  requiredField,
  result,
  clearAll
} from "./actions/actions";

export default connect(
  state => {
    return {
      data: state.config.data,
      loading: state.config.loading,
      error: state.config.error,
      answers: state.answers
    };
  },
  dispatch => {
    return {
      dataAction: () => dispatch(getData()),
      registerField: id => dispatch(registerField(id)),
      changeField: info => dispatch(changeField(info)),
      requiredField: info => dispatch(requiredField(info)),
      result: info => dispatch(result(info)),
      clearAll: () => dispatch(clearAll())
    };
  }
)(App);
