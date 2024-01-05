import { combineReducers, legacy_createStore as createStore} from 'redux';
import { devToolsEnhancer } from "@redux-devtools/extension";
import { statusFilters } from './constants';


const objA = {
  a: 5,
  b: 10
}
const objB = {
  a: 15,
  d: 25
}
const objQ = {
  ...objB,
  ...objA
}
// {
//   a:5,
//   b:10,
//   d:25
// }
const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case "tasks/addTask":
      return [...state, action.payload];
    case "tasks/deleteTask":
      return state.filter(task => task.id !== action.payload);
    case "tasks/toggleCompleted":
      return state.map(task => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });
    default:
      return state;
  }
};
const filtersInitialState = {
  status: statusFilters.all,
};

const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case "filters/setStatusFilter":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  filters: filtersReducer,
  tasks: tasksReducer
})

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);