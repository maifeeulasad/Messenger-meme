import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Messenger from "./component/Messenger";

ReactDOM.render(
  <React.StrictMode>
      <Messenger displayImage={"https://avatars3.githubusercontent.com/u/29339330?s=460&u=adb4c9845d1c063c9d71843bc0d56cebf7f46e5b&v=4"}/>
  </React.StrictMode>,
  document.getElementById('root')
);
