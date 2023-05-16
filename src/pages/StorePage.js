import { Container, Row, Col } from "reactstrap";
import Products01 from '../app/assets/img/products-01.jpg';



const StorePage = () => {
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

export default StorePage;