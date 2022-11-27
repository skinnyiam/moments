import {useDispatch} from "react-redux"
import {useEffect} from "react"
import {getPost} from "./actions/post"
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";


function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
   dispatch(getPost());
  },[dispatch])
  return (
    <div className="App">
      {/* <h1 className="text-4xl text-blue-600">hii</h1> */}
      <Posts />
      <Form />

    </div>
  );
}

export default App;
