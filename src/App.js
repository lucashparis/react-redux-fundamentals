import { Provider } from 'react-redux'
import store from './store/index'

import Sidebar from "./components/Sidebar/Sidebar";
import Video from "./components/Video/Video";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Video />      
        <Sidebar />      
      </Provider>
    </div>
  );
}

export default App;
