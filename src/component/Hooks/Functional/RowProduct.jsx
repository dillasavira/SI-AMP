import React, { useContext } from 'react';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col } from 'reactstrap';
import { CartContext } from '../../../CartContext';

function RowProduct(props) {

    const {value,setValue} = useContext(CartContext)

    return (
        <Col>
        <Card>
            <CardImg top width="100%" src="http://placeimg.com/640/480/tech" alt="Card image cap" />
            <CardBody>
                <CardTitle>Asus</CardTitle>
                <CardSubtitle>Rp 12.000.000</CardSubtitle>
                <CardText>Some quick example text to build on the cart title and make up the bulk of the card's content.</CardText>
                <Button onClick={()=>setValue(value+1)}>Tambah Keranjang</Button>
            </CardBody>
        </Card>
        </Col>
    );
}

export default RowProduct;