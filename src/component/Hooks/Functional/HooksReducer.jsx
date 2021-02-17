import React, { useContext, useReducer } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardImg, Col, Container, Row, Button } from 'reactstrap';
import { keranjangContext } from '../../../Main';


function HooksReducer(props) {

    const countConext = useContext(keranjangContext)

    return (
        <Container>
            <br/>
            <Row>
                <Col xs="6">
                    <Card>
                        <CardImg top width="100%" src="http://placeimg.com/640/480/tech" alt="Card img cap"/>
                    </Card>
                </Col>
                <Col xs="6">
                    <h3>Action Figure Naruto</h3>
                    <p>Harga</p>
                    <h3>Rp. {countConext.keranjangState.hargaSatuan},00</h3>
                    <p>Jumlah</p>
                    <Row>
                        <Col><Button onClick={()=>countConext.keranjangDispatch({type:'tambah'})} color="danger">+</Button></Col>
                        <Col>{countConext.keranjangState.jumlah}</Col>
                        <Col><Button onClick={()=>countConext.keranjangDispatch({type:'kurang'})}>-</Button></Col>
                    </Row>
                    <br/>
                    <Button color="success" size="lg">Total Rp. {countConext.keranjangState.hargaTotal},00</Button>
                    <hr/>
                    <NavLink to="/tagihan">Total Belanja</NavLink>
                </Col>
            </Row>
        </Container>
    );
}

export default HooksReducer;