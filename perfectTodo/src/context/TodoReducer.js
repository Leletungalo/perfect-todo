import {
  GET_TODO,
  ADD_TODO,
  SET_LOADING,
  SET_COMPLETE,
  REMOVE_TODO,
  SEARCH_TODO,
} from "./Types";

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TODO:
      return {
        data: payload,
        displayData: payload,
        loading: false,
      };

    case ADD_TODO:
      const tempData = [
        {
          _id: 5656868,
          todo: payload,
          completed: false,
          deleted: false,
        },
        ...state.data,
      ];
      return {
        data: tempData,
        displayData: tempData,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_COMPLETE:
      return {
        ...state,
        displayData: state.data.filter((element) => {
          if (element._id === payload) {
            element.completed = !element.completed;
            return element;
          }
          return element;
        }),
        loading: state.loading,
      };

    case SEARCH_TODO:
      return {
        ...state,
        displayData: state.data.filter((element) => {
          if (element.todo.includes(payload)) {
            return element;
          }
        }),
      };

    case REMOVE_TODO:
      const removeData = state.data.filter((element) => {
        if (element._id === payload) {
          element.deleted = true;
          return element;
        }
        return element;
      });
      return {
        data: removeData,
        displayData: removeData,
        loading: state.loading,
      };

    default:
      return state;
  }
};
