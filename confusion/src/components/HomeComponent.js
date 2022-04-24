import React from "react";
import { Card,} from 'react-bootstrap';





    function RenderCardDish({item}) {

        return(
            <>
            <div className="container">
                <div className="row">
                    <Card>
                        <Card.Img variant="left" src={item.image} />
                        <Card.Body>
                        <Card.Text>{item.name}</Card.Text>
                        {item.designation ? <Card.Subtitle>{item.designation}</Card.Subtitle> : null }
                        <Card.Text>{item.description}</Card.Text>
                        </Card.Body>
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
                    <RenderCardDish item={props.dish}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCardDish item={props.promotion}/>    
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCardDish item={props.leader}/>
                </div>
                
            </div>
        </div>
        );
    }




export default Home;