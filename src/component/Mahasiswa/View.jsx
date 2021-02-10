import React, { Component } from 'react';
import axios from 'axios'
import qs from'querystring'
import {Table, Button, Container, NavLink, Alert } from 'reactstrap'

const api = 'http://localhost:3001'

class Mahasiswa extends Component {
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
    render() {
        return (
           <Container>
            <h2> Data Mahasiswa</h2>
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
                <tr key={mahasiswa.id_mahasiswa}>
                <td>{mahasiswa.nama}</td>
                <td>{mahasiswa.matkul}</td>
                <td>{mahasiswa.no_hp}</td>
                <td>Edit | Hapus</td>
                </tr>
                )}
            </tbody>
            </Table>
           </Container>
        );
    }
}

export default Mahasiswa;