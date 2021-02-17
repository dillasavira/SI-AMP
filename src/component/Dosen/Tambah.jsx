import React, { PureComponent } from 'react';
import axios from 'axios';
import {Container, Row, Col, FormGroup, Alert, Input, Button, Label, Form} from 'reactstrap'

const api ='http://localhost:3001'

class Tambah extends PureComponent {

    constructor(props){
        super(props)
        
        this.state ={
            nama:'',
            matkul:'',
            no_hp:'',
            response: '',
            display: 'none'
        }
    }

    handleChange =(e)=>{
        this.setState({[e.target.name] : e.target.value})
    }

    AddDosen = () =>{
        axios.post(api+'/tambah',{
            nama: this.state.nama,
            matkul: this.state.matkul,
            no_hp: this.state.no_hp
        }).then(json=>{
            if (json.data.status === 200){
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }else{
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }
        })
    }

    render() {
        return (
            <Container>
                <h4>Form Tambah Data</h4>
                <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                    <Label>Nama</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Input type="text" name="nama" value={this.state.nama} onChange={this.handleChange} placeholder="Masukkan Nama Dosen"></Input>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Mata Kuliah</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Input type="text" name="matkul" value={this.state.matkul} onChange={this.handleChange} placeholder="Masukkan Nama Mata Kuliah"></Input>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>No HP</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Input type="text" name="no_hp" value={this.state.no_hp} onChange={this.handleChange} placeholder="Masukkan No HP"></Input>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Button type="button" onClick={this.AddDosen}>Submit</Button>
                            </Col>
                        </Row>
                    </FormGroup>
                    </Col>
                </Form>
            </Container>
        );
    }
}

export default Tambah;