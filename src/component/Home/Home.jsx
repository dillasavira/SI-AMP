import React, { Component, useContext } from "react";
import { Jumbotron, Button } from "reactstrap";

class Home extends Component {
    render(){
        return(
            <div>
                <Jumbotron>
                    <h1 className="display-3"> Homepage</h1>
                    <p className="lead"> This is a simple hero unit, a simple Jumbotron-style component</p>
                    <hr className="my-2" />
                    <p className="lead">
                        <Button color="primary"> Learn More </Button>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}

export default Home;