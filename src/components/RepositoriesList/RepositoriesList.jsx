import { useSelector } from "react-redux";
import { Container, Row, Col } from 'reactstrap';
import './RepositoriesList.scss';
export default function RepositoriesList () {
    const repositories = useSelector(state => state.ajaxCall.repositories);

    const getRepositories = () => {
        const repositoriesArr = [];
        console.log(repositories);
        repositories.forEach(repository => {
            repositoriesArr.push(
                <Row className="no-gutters d-flex">
                    <Col xs="4">{repository.id}</Col>
                    <Col xs="4">{repository.name}</Col>
                    <Col xs="4">{repository.url}</Col>
                </Row>
            );    
        });
        return repositoriesArr;
    };

    return (
        <Container className="repositories-list" fluid>
            {repositories.length > 0 ? <Row className="d-flex repositories-list-title">
                <Col xs="4">id</Col>
                <Col xs="4">name</Col>
                <Col xs="4">url</Col>
            </Row> : <div>No items found</div>}
            {getRepositories()}
        </Container>
    );
}