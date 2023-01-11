import { CAMPSITES } from '../../app/shared/CAMPSITES';
import {Col, Row} from 'reactstrap';
import CampsiteCard from "./CampsiteCard";

const FilteredCampsites = (props) => {
    return (
        <>
        <h2>Hiking Campsites</h2>
        <Row className='ms-auto'>
            {CAMPSITES.map((campsite) => {
                if(campsite.activity == props.activity) {
                return (
                    <Col md='5' className='m-4' key={campsite.id}>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                )};
            })};
        
        </Row>
        </>
    );
}

export default FilteredCampsites;