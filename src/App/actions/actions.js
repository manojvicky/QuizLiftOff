import data from "../Data/data";
export function getData() {
  return function(dispatch) {
    dispatch({ type: "LOADING", loading: true });
    let promise = new Promise(resolve => {
      setTimeout(() => resolve(data), 1000);
    });
    promise
      .then(data => {
        dispatch({ type: "LOADING", loading: false });
        dispatch({ type: "DATA_ACTION", data: data });
        dispatch({ type: "ERROR", error: "" });
      })
      .catch(error => {
        dispatch({ type: "LOADING", loading: false });
        dispatch({ type: "ERROR", error: error.message });
        console.log("error", error.message);
      });
  };
}

export function registerField(id) {
  return {
    type: "REGISTER_FIELD",
    id
  };
}
export function changeField(payload) {
  return {
    type: "CHANGE_FIELD_VALUE",
    value: payload.value,
    id: payload.id
  };
}
export function requiredField(payload) {
  return {
    type: "REQUIRED_FIELD_VALUE",
    value: payload.value,
    id: payload.id
  };
}
export function result(payload) {
  return {
    type: "RESULT",
    correct: payload.correct,
    incorrect: payload.incorrect
  };
}

export function clearAll() {
  return {
    type: "CLEAR_ALL"
  };
}
