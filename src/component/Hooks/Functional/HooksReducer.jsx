import React, { useReducer } from 'react';
import { Card, CardImg, Col, Container, Row, Button } from 'reactstrap';

const initialState={
    jumlah :1,
    hargaSatuan:10000,
    hargaTotal:10000
}
const reducer =(state, action)=>{
    switch(action. type){
        case 'tambah': return {
            ...state,
            jumlah: state.jumlah +1,
            hargaTotal: state.hargaSatuan + (state.hargaSatuan *state.jumlah)
        }
        case 'kurang': return {
            ...state,
            jumlah: state.jumlah -1,
            hargaTotal:  (state.hargaSatuan *state.jumlah)- state.hargaSatuan
        }
        default:
            return state
    }
}

function HooksReducer(props) {

    const[count, dispatch] = useReducer(reducer, initialState)
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
                    <h3>Rp. {count.hargaSatuan},00</h3>
                    <p>Jumlah</p>
                    <Row>
                        <Col><Button onClick={()=>dispatch({type:'tambah'})} color="danger">+</Button></Col>
                        <Col>{count.jumlah}</Col>
                        <Col><Button onClick={()=>dispatch({type:'kurang'})}>-</Button></Col>
                    </Row>
                    <br/>
                    <Button color="success" size="lg">Total Rp. {count.hargaTotal},00</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default HooksReducer;