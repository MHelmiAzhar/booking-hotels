import { Col, Container, Row, Card } from 'react-bootstrap'
import { jakarta, yogya, malang } from '../../assets'

const Featured = () => {
  return (
    <div style={{ margin: '90px 0 0 2%' }}>
      <Container className="p-0 z-2">
        <Row>
          <Col className="pe-5">
            <Card className=" text-white border-0">
              <Card.Img src={jakarta} alt="jakarta" />
              <Card.ImgOverlay>
                <Card.Title
                  className="fw-semibold fs-2 "
                  style={{ position: 'absolute', bottom: '40px' }}
                >
                  Jakarta
                </Card.Title>

                <Card.Text className="position-absolute bottom-0 pb-3 fs-5">
                  123 Properties
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col className="pe-5">
            <Card className=" text-white border-0">
              <Card.Img src={yogya} alt="yogya" />
              <Card.ImgOverlay>
                <Card.Title
                  className="fw-semibold fs-2 "
                  style={{ position: 'absolute', bottom: '40px' }}
                >
                  Yogyakarta
                </Card.Title>

                <Card.Text className="position-absolute bottom-0 pb-3 fs-5">
                  123 Properties
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card className=" text-white border-0">
              <Card.Img src={malang} alt="malang" />
              <Card.ImgOverlay>
                <Card.Title
                  className="fw-semibold fs-2 "
                  style={{ position: 'absolute', bottom: '40px' }}
                >
                  Malang
                </Card.Title>

                <Card.Text className="position-absolute bottom-0 pb-3 fs-5">
                  123 Properties
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Featured
