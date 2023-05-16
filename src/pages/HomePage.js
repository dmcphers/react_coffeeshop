import { Container, Col, Row } from 'reactstrap';
import Products01 from '../app/assets/img/products-01.jpg';

//import DisplayList from '../features/display/DisplayList';
//import SubHeader from '../components/SubHeader';



const HomePage = () => {
    return (
        <Container>
            {/* <SubHeader current='Home' detail={true} />
            <DisplayList /> */}
            <Row>
                <Col>
                <img src={Products01} alt='coffee products' className='float-start' />
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;