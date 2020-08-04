import React, { useState, useEffect } from 'react';
import {Input, Container, FormGroup, div, Row, Col, Button, CardBody, Card} from 'reactstrap'

const OrderForm = () => {

  const [sumberPesanan, setSumberPesanan] = useState('whatsapp')
  const [name, setName] = useState({
    first: '',
    last: ''
  })
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState({
    areaCode: '+62',
    number: ''
  })
  const [jumlahRoti, setJumalahRoti] = useState('')
  const [catatan, setCatatan] = useState('')

  return (
    <>
    <div className='order-form__header-img'>
    <h2 className='text-center'>
      <strong>
        FORM PESANAN ROTI
      </strong>
    </h2>
    </div>

    <Card 
      className='order-form__card px-2 py-3 border-0'
    >
      <CardBody>
      <Container>
      <FormGroup>
        <div className='text-left'>
          <strong>
            Sumber Pesanan
          </strong>
        </div>
        <Input
          type='select'
          onChange={(e) => setSumberPesanan(e.target.value)}
        >
          <option value='whatsapp'>Whatsapp</option>
          <option value='telepon'>Telepon</option>
          <option value='email'>Email</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <div className='text-left'>
          <strong>
            Name
          </strong>
          <span className='float-right text-danger'>
            *required
          </span>
        </div>
        <Row>
          <Col>
            <Input
              type='text'
              placeholder='first name'
              onChange={(e)=>{
                name.first = e.target.value
                setName({...name})
              }} 
            />
          </Col>
          <Col>
            <Input
              type='text'
              placeholder='last name'
              onChange={(e)=>{
                name.last = e.target.value
                setName({...name})
              }} 
            />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <div className='text-left'>
          <strong>
            Email
          </strong>
        </div>
        <Input 
          type='email' 
          name='email'
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <div className='text-left'>
          <strong>
            Phone Number
          </strong>
          <span className='float-right text-danger'>
            *required
          </span>
        </div>
        <Row>
          <Col>
            <Input 
              type='select' 
              name='area-code'
              onChange={(e) =>{
                phoneNumber.areaCode = e.target.value
                setPhoneNumber({...phoneNumber})
              }}
            >
              <option value='+62'>(+62) Indonesia</option>
              <option value='+61'>(+61) Australia</option>
              <option value='+86'>(+86) China</option>
            </Input>
          </Col>
          <Col>
            <Input 
              type='number' 
              onChange={(e) =>{
                phoneNumber.number = e.target.value
                setPhoneNumber({...phoneNumber})
              }}
            />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <div className='text-left'>
          <strong>
            Jumlah Roti
          </strong>
          <span className='float-right text-danger'>
            *required
          </span>
        </div>
        <Input
          type='number'
          onChange={(e) => setJumalahRoti(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <div className='text-left'>
          <strong>
            Catatan
          </strong>
        </div>
        <Input 
          type='text-area'
          onChange={(e) => setCatatan(e.target.value)}
        />
      </FormGroup>
      <Button 
        disabled={!(Object.keys(name)[0] && Object.keys(phoneNumber)[1] && jumlahRoti)}
        color='primary w-100 mt-5'
        onClick={()=>{
          alert(
              `sumber pesanan: ${sumberPesanan}
              nama: ${Object.values(name).join (' ')}
              email : ${email}
              telepon: ${Object.values(phoneNumber).join('')}
              jumlah roti: ${jumlahRoti}
              catatan: ${catatan}
              `
          )
        }}
      >
        <strong>
          Submit
        </strong>
      </Button>
      </Container>
      </CardBody>
    </Card>
  </>
  )
}

export default OrderForm