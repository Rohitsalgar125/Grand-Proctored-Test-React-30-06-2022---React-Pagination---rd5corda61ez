import React, {useState} from 'react'
import '../styles/App.css';
import { PostList } from './PostList';
const App = () => {

  const [pageNo, setPageNo] = useState(1);

  return (
    <div id="main">
      <PostList pageNo={pageNo} setPageNo={setPageNo}/>
    </div>
  )
}


export default App;
