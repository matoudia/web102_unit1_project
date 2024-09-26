import './App.css';
import Activities from './components/Activities'
import Header from './components/Header';



const App = () => {

  return (

    
    <div className="App">

    <Header />
    <div class='infos'> {/* both class and className work*/}
      <h1>Welcome Community !</h1>
      <h2>This is our available hangout activities. Hope you will find your self in it and feel free to bring more ideas. </h2>
    </div>
    <Activities />
      
    </div>
  )
}

export default App
