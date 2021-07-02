import './App.css';
import Student from "./components/Student";
import {useSelector, useDispatch} from 'react-redux';
import { addStudent } from './redux/actions/studentAction';
import { fetchFollowers } from './redux/actions/githubAction';

function App() {
  const dispatch = useDispatch();
  const store = useSelector(store => store);
  console.log(store);

  const stdClass = useSelector(store => store.studentReducer.class);
  console.log(stdClass);


  const ctaHandlerGithub = () => {
    let dataPassToAction = "naveed-rana";
    dispatch(fetchFollowers(dataPassToAction))
  }


  const ctaHandler = () => {
    let dataPassToStore = {
      regNo: "2000-uni-12345",
      createdAt: new Date()
    }
    // Pass this Data to Action dataPassToStore
    dispatch(addStudent(dataPassToStore))
  }

  
  return (
    <div className='App'>
      {/* <p>Name from Redux Store {name}</p> */}
      <button onClick={ctaHandlerGithub}>Fetch GitHub Followers</button>
      <button onClick={ctaHandler}>Update it</button>
      <Student />
    </div>
  );
}

export default App;