import React/*, { Component }*/ from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";


/*class Menu extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    };


  render()*/ 

    function RenderMenuItem({dish, onClick}) {
      return(
        <Card onClick={() => onClick(dish.id)}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle> {dish.name}</CardTitle>
        </CardImgOverlay>
        
        </Card>
        
      );
    } 

    const Menu = (props) =>{
      const menu = props.dishes.map((dish) => {
        return (
          <div key={dish.id} className="col-12 col-md-5 m-1">
            <RenderMenuItem dish={dish} onClick={props.onClick}/>  
          </div>
          
        );
      });

      return (
        <div className="container">
          <div className="row">{menu}</div>
        </div>
      );
    }




    


  

  /*componentDidMount() {
    console.log("Menu component componentDidMounbt is invoked");
  }
//}*/

export default Menu;