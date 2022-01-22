
import './App.css';

function App() {
  return (
    <div className="App" >
      .
      <div className="facebookimg">
      <h1>facebook</h1>
      <h2>Facebook helps you connect and share with the people in your life.</h2>
      </div>
      <div className="container">
        <div className="login">
          <input type="email" id = "email" placeholder="Email id or Mobile number"></input>
          <input type="password" id = "password" placeholder="Password"></input>
          <button > 
            <bold>Log In</bold>
          </button>
          <p><a href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0">forget password?</a></p>
          <div className="ctr">
            <button>
            Create a new account 
            </button>
            
          </div>
          
        
       </div>
      </div>

    </div>
    

    
  );
}

export default App;
