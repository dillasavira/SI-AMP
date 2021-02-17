import React, { useContext } from 'react';
import { Button, Container, Jumbotron } from 'reactstrap';
import { keranjangContext } from '../../../Main';

function Tagihan(props) {
    const countConext = useContext(keranjangContext)
    return (
        <Container>
            <Jumbotron>
                <h1 className="display-3"> Tagihan</h1>
                <p className="lead">({countConext.keranjangState.jumlah}x)Action Figure Naruto</p>
                <hr className="my-2" />
                <p> Harga Total Rp. {countConext.keranjangState.hargaTotal} </p>
                <p className="lead">
                    <Button color="primary"> Lanjut Pembayaran</Button>
                </p>
            </Jumbotron>
        </Container>
    );
}

export default Tagihan;