
import React, { useEffect } from 'react';
import { Card, CardBody, Row, Col, Table, Container } from 'reactstrap';
const OrderInfo = () => {

  useEffect(()=> {
    setTimeout(function() { sessionStorage.clear(); }, (10 * 6 * 10))
  }, [])

return(
  <Container className='mt-5 border py-3'>
    <h5 className='text-center mb-5'>
      <strong>
        {/*note: admin should not hardcoded*/}
        Welcome Admin
      </strong>
    </h5>
    <Card>
      <CardBody>
      <h5 className='text-left'>
        Sumber Pesanan
      </h5>
      <Row>
      <Col 
        className='order-info__sumber-pesanan--wa text-center'
      >
        <div className='mb-2'>
        <i className="fab fa-whatsapp fa-lg"></i>
        </div>
        <h4>
          10
        </h4>
        <small className='order-info__sumber-pesanan-text'>
          whatsapp
        </small>
      </Col>
      <Col className='order-info__sumber-pesanan--phone text-center'>
        <div className='mb-2'>
        <i className="fas fa-phone-volume fa-lg"></i>
        </div>
        <h4>
          3
        </h4>
        <small className='order-info__sumber-pesanan-text'>
          telepon
        </small>
      </Col>
      <Col className='text-danger text-center'>
        <div className='mb-2'>
        <i className="fas fa-envelope-open-text fa-lg"></i>
        </div>
        <h4>
          11
        </h4>
        <small className='order-info__sumber-pesanan-text'>
          email
        </small>
      </Col>
      </Row>
      </CardBody>
    </Card>
    <h5 className='mt-4 text-left'>
      Rekap Pesanan
    </h5>
    <Table 
      className=''
      responsive
      striped
    >
      <thead className='order-info__table-header text-center'>
        <tr>
          <th>No.</th>
          <th>Nama</th>
          <th>Email</th>
          <th>No. Telepon</th>
          <th>Jumlah Roti</th>
          <th>Catatan</th>
        </tr>
      </thead>
      <tbody>
        <tr className='text-center'>
          <th scope="row">1</th>
          <td>Tasya Farasya</td>
          <td>tasyafarasya@gmail.com</td>
          <td>081234567811</td>
          <td>10</td>
          <td>-</td>
        </tr>
        <tr className='text-center'>
          <th scope="row">2</th>
          <td>Annissa Farasya</td>
          <td>annissafarasya@gmail.com</td>
          <td>081234567211</td>
          <td>20</td>
          <td>-</td>
        </tr>
        <tr className='text-center'>
          <th scope="row">2</th>
          <td>Nurul Farasya</td>
          <td>nurulfarasya@gmail.com</td>
          <td>081934567811</td>
          <td>100</td>
          <td>roti coklat</td>
        </tr>
      </tbody>
    </Table>
  </Container>
)
}

export default OrderInfo
