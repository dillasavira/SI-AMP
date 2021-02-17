import React, { Component } from 'react';
import axios from 'axios'
import qs from'querystring'
import {Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom';

const api = 'http://localhost:3001'

class View extends Component {
    constructor(props){
        super(props)
        
        this.state ={
            mahasiswa:[],
            response: '',
            display: 'none'
        }
    }

    componentDidMount(){
        axios.get(api+'/tampil').then(res=>{
            this.setState({
                mahasiswa: res.data.values
            })
        })
    }

    HapusDosen = (idDosen) =>{
        const{mahasiswa} = this.state
        const data = qs.stringify({
            id : idDosen
        })

        axios.delete(api+'/hapus',{
            data: data,
            headers: {'Content-type': 'application/x-www-form-urlencoded'}
        }).then(json=>{
            if(json.data.state===200){
                this.setState({
                    response: json.data.values,
                    mahasiswa: mahasiswa.filter(mahasiswa => mahasiswa.id != idDosen),
                    display:'block'
                })
            }else{
                this.setState({
                    response: json.data.values,
                    display:'block'
                })
            }
        })
    }

    render() {
        return (
           <Container>
            <h2> Data Mahasiswa</h2>
                <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
            <NavLink href="mahasiswa/tambah"><Button color="success">Tambah Data</Button></NavLink>
            <hr/>
            <Table className="tbale-border">
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Mata Kuliah</th>
                        <th>No Hp</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
            <tbody>
            {this.state.mahasiswa.map(mahasiswa =>
                <tr key={mahasiswa.id}>
                    <td>{mahasiswa.nama}</td>
                    <td>{mahasiswa.matkul}</td>
                    <td>{mahasiswa.no_hp}</td>
                    <td>
                        <Link to ={
                            {
                                pathname: `/mahasiswa/edit`,
                                state:{
                                    id: mahasiswa.id,
                                    nama : mahasiswa.nama,
                                    matkul :  mahasiswa.matkul,
                                    no_hp : mahasiswa.no_hp
                                }
                            }
                        }>
                            <Button>Edit</Button>
                    </Link>                    
                    <span>  </span>
                        <Button onClick={()=>this.HapusDosen(mahasiswa.id)} color="danger">Hapus</Button>
                    </td>
                </tr>
                )}
            </tbody>
            </Table>
           </Container>
        );
    }
}

export default View;