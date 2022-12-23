import { useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import { getPost } from "./actions/post";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/navbar";
function App() {
  const [currentId,setCurrentId] = useState(null)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, [currentId,dispatch]);
  return (
    <div className="h-auto bg-gradient-to-b from-sky-400 to-sky-800">
      <div className="max-w-[1180px] mx-auto pt-24">

        <div className=" bg-pink-100  rounded-xl flex justify-center h-10 w-72 items-center mx-auto bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 ">
          <Form currentId={currentId} setCurrentId={setCurrentId}/>
        </div>
           <Posts setCurrentId={setCurrentId}/>
      </div>
    
   
    </div>
  );
}
export default App;