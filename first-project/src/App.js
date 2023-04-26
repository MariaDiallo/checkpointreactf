import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div class="conteiner">
        <form>
        <h1>Formulaire d'inscription</h1>
        <label for="">Nom</label>
        <input type="text"/>
        <br/><br/>
        <label for="">Prenom</label>
        <input type="text"/>
        <br/><br/>
        <label for="">Date de naissance</label>
        <input id="date" type="date"/>
        <br/><br/>
        <label for="">Sexe</label>
        <input type="text"/>
        <br/><br/>
        <label for="">ville</label>
        <input type="text"/>
        <br/><br/>
        <label for="">E-mail</label>
        <input type="email"/>
        <br/><br/>
        <label for="">Telephone</label>
        <input type="text"/>
        <br/><br/>
        Quels sont vos sport favoris? <br/>
        <input type="checkbox" name="course" id="sport"/>
        <label for="course">Course à pied</label><br/>
        <input type="checkbox" name="natation" id="sport"/>
        <label for="natation">Natation</label><br/>
        <input type="checkbox" name="cyclisme" id="sport"/>
        <label for="cyclisme">Cyclisme</label>
        <br/><br/>
        <input type="submit" class="buttum"/>
        </form>
        </div>
        
      </header>
    </div>
    
  );
  
}


export default App;
