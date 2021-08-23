import { Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import { Welcome } from './components/Welcome';
import { AddLogin } from './components/Login';
import { AddSignup } from './components/Signup';
import { Home } from './components/Home';
import { AddStudent } from './components/AddStudent';
import { EditStudent } from './components/EditStudent';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Switch>
          <Route path="/" component={Welcome} exact />
          <Route path="/login" component={AddLogin} exact />
          <Route path="/signup" component={AddSignup} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/add" component={AddStudent} exact />
          <Route path="/edit/:id" component={EditStudent} exact />
        </Switch>
      </div>
    </GlobalProvider>
  );
}

export default App;