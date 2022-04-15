
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes';
import {Navbar, NavbarBrand} from 'reactstrap';
import { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  render() {
          return (
            <div className="App">
              <Navbar dark color='primary'>
                <div className='container'>
                  <NavbarBrand href='/'>Ristorante con fusion</NavbarBrand>
                </div>
              </Navbar>
              <Menu dishes={this.state.dishes}/>
            </div>
          );
  }
}

export default App;
