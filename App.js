import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
        {/* <Navbar title= "My Page" about="About Us"/> */}

        <Navbar title="TextUtils"/>
        <div className="container my-8">
          <TextForm heading="Enter text here" />
        </div>
        
    </>
  );
}

export default App;
