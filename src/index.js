import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider} from "react-redux";
import { store } from "./redux/store";
import { RouterProvider } from 'react-router-dom';
import { tasksRouter } from './router';
/**
 * rename selectors
 * create selectVisibleTasks
 * create selectTaskCount
 * optimization with createSelector
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={tasksRouter}>
        <App /> 
       </RouterProvider>
    </Provider>
  </React.StrictMode>
);
