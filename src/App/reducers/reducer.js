import { combineReducers } from "redux";
const config = (state = { data: [], loading: false, error: "" }, action) => {
  switch (action.type) {
    case "DATA_ACTION":
      return {
        ...state,
        data: action.data
      };
    case "LOADING":
      return {
        ...state,
        loading: action.loading
      };
    case "ERROR":
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

const answers = (state = [], action) => {
  switch (action.type) {
    case "REGISTER_FIELD":
      return [
        ...state,
        { id: action.id, value: "Please Select", error: false }
      ];
    case "CHANGE_FIELD_VALUE":
      return state.map(option => {
        if (option.id === action.id) {
          return {
            ...option,
            value: action.value,
            error: action.value === "Please Select"
          };
        }
        return option;
      });
    case "REQUIRED_FIELD_VALUE":
      return state.map(option => {
        if (option.id === action.id) {
          return {
            ...option,
            error: true
          };
        }
        return option;
      });
    case "CLEAR_ALL":
      return state.map(option => {
        return {
          ...option,
          value: "Please Select",
          error: false
        };
      });
    default:
      return state;
  }
};
const result = (state = { correct: 0, incorrect: 0 }, action) => {
  switch (action.type) {
    case "RESULT":
      return {
        correct: action.correct,
        incorrect: action.incorrect
      };
    case "CLEAR_ALL":
      return state;

    default:
      return state;
  }
};
const reducers = combineReducers({ config, answers, result });
export default reducers;
