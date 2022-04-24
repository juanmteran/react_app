import React from "react";
import { Card} from 'react-bootstrap';





    function RenderCardDish({item}) {

        return(
            <>
            <div className="container">
                <div className="row">
                    <Card>
                        <Card.Img variant="left"  />
                        <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card>
                        <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                        </Card.Body>
                        <Card.Img variant="right" src="holder.js/100px180" />
                    </Card>
                </div>
            </div>
            </>
        );
    
    }    

    /*    function RenderCard({item}) {

        return(
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
    
    }

    
*/    




    function Home(props) {
        return(
            <div className="container">
            <div className="row ">
                <div className="col-12 col-md m-1">
                    <RenderCardDish />
                </div>
                <div className="col-12 col-md m-1">
                    
                </div>
                <div className="col-12 col-md m-1">
                    
                </div>
            </div>
        </div>
        );
    }




export default Home;