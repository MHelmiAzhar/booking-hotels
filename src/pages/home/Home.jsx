import { Container } from 'react-bootstrap'
import Featured from '../../components/featured/Featured'
import Header from '../../components/header/Header'
import NavbarComponent from '../../components/navbar/NavbarComponent'
import PropertyList from '../../components/propertyList/PropertyList'

const Home = () => {
  return (
    <div>
      <NavbarComponent />
      <Header />
      <Featured />
      <Container className="fw-semibold fs-5 my-3">
        Browse by property type
      </Container>
      <PropertyList />
      <Container className="fw-semibold fs-5 my-3">Homes guest love</Container>
    </div>
  )
}

export default Home
