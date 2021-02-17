import React from 'react';
import { Container, Row } from 'reactstrap';
import RowProduct from './RowProduct';

function ProductComp(props) {
    return (
       <Container>
           <hr/>
           <h2>Produk</h2>
           <Row>
               <RowProduct/>
               <RowProduct/>
               <RowProduct/>
           </Row>
       </Container>
    );
}

export default ProductComp;