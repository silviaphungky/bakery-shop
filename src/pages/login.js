import React, { useState } from 'react';
import { CardBody, FormGroup, Input, Button, Card, Container, Row, Col } from 'reactstrap';
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  return(
     <Container className='mt-5'>
     <Card>
        <CardBody>
          <Row>
            <Col lg='8'>
              <h4 className='text-center'>
                <strong>
                  Bakery Dashboard
                </strong>
              </h4>
              <img src= '/login-logo.jpg' alt='logo' width='100%'/>
            </Col>
            <Col lg='4'>
            <h4 className='my-4'>
            Sign In
          </h4>
            <FormGroup>
            <div>
              <strong>
                Email
              </strong>
            </div>
            <Input
              type='email'
              onChange={(e)=> setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <div>
              <strong>
                Password
              </strong>
            </div>
            <Input
              type='password'
              onChange={(e)=> setPassword(e.target.value)}
            />
          </FormGroup>
          <Button
            color='primary w-100 mb-4'
            onClick={()=> 
              {
                alert('successfully login')
                sessionStorage.setItem('email', email)
                sessionStorage.setItem('password', password)
            }
            }
          >
            Login
          </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
     </Container>
  )
}

export default Login
