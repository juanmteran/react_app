import React/*, { Component }*/ from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import {Link} from "react-router-dom";


/*class Menu extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    };


  render()*/ 
/*
  function RenderMenuItem({dish, onClick}) {
    return(
      <Card onClick={() => onClick(dish.id)}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle> {dish.name}</CardTitle>
      </CardImgOverlay>
      
      </Card>
      
    );
  } */

    function RenderMenuItem({dish}) {
      return(
        <Card>
        <Link to={`/menu/${dish.id}`}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle> {dish.name}</CardTitle>
          </CardImgOverlay>
        </Link>
        
        </Card>
        
      );
    } 

    const Menu = (props) =>{
      const menu = props.dishes.map((dish) => {
        return (
          <div key={dish.id} className="col-12 col-md-5 m-1">
            <RenderMenuItem dish={dish} />  
          </div>
          
        );
      });

      return (
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem><Link to='/home'></Link></BreadcrumbItem>
              <BreadcrumbItem active>Menu<Link to='/home'></Link></BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>Menu</h3>
              <hr></hr>
            </div>
          </div>
          <div className="row">{menu}</div>
        </div>
      );
    }




    


  

  /*componentDidMount() {
    console.log("Menu component componentDidMounbt is invoked");
  }
//}*/

export default Menu;