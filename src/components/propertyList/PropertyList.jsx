import { Col, Container, Row, Card } from 'react-bootstrap'
import { villa, cabin, resort, hotel, apart } from '../../assets'

const PropertyList = () => {
  return (
    <div style={{ margin: '0 0 0 2%' }}>
      <Container className=" p-0 ">
        <Row>
          <Col>
            <Card style={{ width: '14rem' }} className="border-0">
              <Card.Img variant="top" src={hotel} />
              <Card.Body className="p-0">
                <Card.Title className="mt-2 mb-0">Hotels</Card.Title>
                <Card.Text>234 Hotels</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '14rem' }} className="border-0">
              <Card.Img variant="top" src={apart} />
              <Card.Body className="p-0">
                <Card.Title className="mt-2 mb-0">Apartments</Card.Title>
                <Card.Text>234 Apartents</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '14rem' }} className="border-0">
              <Card.Img variant="top" src={cabin} height={'100%'} />
              <Card.Body className="p-0">
                <Card.Title className="mt-2 mb-0">Cabins</Card.Title>
                <Card.Text>234 Cabins</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '14rem' }} className="border-0">
              <Card.Img variant="top" src={villa} />
              <Card.Body className="p-0">
                <Card.Title className="mt-2 mb-0">Villas</Card.Title>
                <Card.Text>234 Villas</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pe-0">
            <Card style={{ width: '14rem' }} className="border-0">
              <Card.Img variant="top" src={resort} />
              <Card.Body className="p-0">
                <Card.Title className="mt-2 mb-0">Resorts</Card.Title>
                <Card.Text>234 Resorts</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PropertyList
