
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './HomeComponent'
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import DishDetail from './DishdetailComponent'
import About from './AboutComponent';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      
    };
  }

/*  onDishSelect(dishId) {
    this.setState({
      selectedDish: dishId,
    });
  }
*/


//falta actualizar
render() {

const HomePage = () => {
  return(
      <Home 
            dish={this.state.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
            leader={this.state.leaders.filter((leader) => leader.featured)[0]} 
      />
  );

    }


    const ContactPage =()=>{
      return(
        <Contact/>
      );
    }

    const AboutPage =()=>{
      return(
        <About leaders={this.state.leaders}/>
      );
    }

    const DishWithId = (match) => {
      return(
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}/>
      );
    };

          return (
            <div>
              <Header />
              <Routes>
                <Route path='/home' element={<HomePage/>}/>
                <Route path='/contactus' element={<Contact/>}/>
                <Route exact path='/menu' element={<Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>}/>
                <Route path='/menu:dishId' element={<DishWithId />} />
                <Route path='/' element={<Navigate to='/home'/>}/>
                <Route path='/aboutus' element={<AboutPage/>}/>
              </Routes>
              <Footer />
            </div>
          );
  }
}

export default Main;

/*
<Route path='/menu' element={<Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>}/>
                <Route/><Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
              
              <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}></DishDetail>
              */