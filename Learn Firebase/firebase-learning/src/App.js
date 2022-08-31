import './App.css';
import {db} from './config/firebase';

function App() {
  const ctaUploadHandler = async() => {
    let dataToFirebase = {
      id: 123,
      name: "ALi",
      company: "Cyber Hawk",
      class: "Saylani Web & Mobile Development",
      active: true
    }
    // console.log(dataToFirebase);
    try {
      let res = await db.collection("students").add(dataToFirebase);
      console.log("Response is: ", res);
    } catch(err) {
      console.log("Exception is: ", err);
    }
  }

  const ctaFetchHandler = async() => {
    try {
      let data = await db.collection("students").get();
      let students = [];
      data.forEach((doc) => {
        console.log("ID", doc.id);
        // console.log("Fetch Data from Firebase: ", doc.data());
        // students.push(doc.data());
        students.push({...doc.data(), docID: doc.id});
      });
      console.log("Fetch Data from Firebase: ", students);
    } catch(err) {
      console.log("Exception is: ", err);
    }
  }

  const ctaDeleteHandler = async() => {
    try {
      // let res = await db.collection("students").doc("id").delete();
      let res = await db.collection("students").doc("zXV6cThoaxl8WjGCzF18").delete();
      console.log("Record is Deleted");
    } catch(err) {
      console.log("Exception is: ", err);
    }
  }

  const ctaUpdateHandler = async() => {
    let dataToFirebase = {
      id: 123,
      name: "New Name",
      company: "Cyber Hawk reg"
    }
    // console.log(dataToFirebase);
    try {
      let res = await db.collection("students").doc("pBURIMhj0dgdQ0iTS4bu").update(dataToFirebase);
      console.log("Date is Updated");
    } catch(err) {
      console.log("Exception is: ", err);
    }
  }

  return (
    <div className="App">
      <button onClick={ctaUploadHandler}>Upload Data to Firebase</button> <br/><br/>
      <button onClick={ctaFetchHandler}>Fetch Data from Firebase</button> <br/><br/>
      <button onClick={ctaDeleteHandler}>Delete Data from Firebase</button> <br/><br/>
      <button onClick={ctaUpdateHandler}>Update Data in Firebase</button>
    </div>
  );
}

export default App;