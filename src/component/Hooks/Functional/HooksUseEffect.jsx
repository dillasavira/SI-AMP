import React, { useEffect, useState } from 'react';
import axios from 'axios'
import qs from'querystring'
import {Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom';

const api = 'http://localhost:3001'

function HooksUseEffect(props) {

    const[dosen, setDosen]= useState([])

    useEffect(()=>{
        console.log("Memanggil useEffect")
        axios.get(api+'/tampil').then(res=>{
                setDosen(res.data.values)
        })
    },[])

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
         {dosen.map(mahasiswa =>
             <tr key={mahasiswa.id}>
                 <td>{mahasiswa.nama}</td>
                 <td>{mahasiswa.matkul}</td>
                 <td>{mahasiswa.no_hp}</td>
                 <td><Button>Edit</Button>   
                 <span>  </span>
                     <Button color="danger">Hapus</Button>
                 </td>
             </tr>
             )}
         </tbody>
         </Table>
        </Container>
    );
}

export default HooksUseEffect;