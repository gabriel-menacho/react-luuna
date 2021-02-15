import { useSelector } from "react-redux";
import { Container, Row, Col } from 'reactstrap';
import './UsersList.scss';
export default function UsersList () {
    const users = useSelector(state => state.ajaxCall.users);

    const getUsers = () => {
        const usersArr = [];
        users.forEach(user => {
            usersArr.push(
                <Row>
                    <Col xs="4">{user.id}</Col>
                    <Col xs="4">{user.login}</Col>
                    <Col xs="4">{user.url}</Col>
                </Row>
            );    
        });
        return usersArr;
    };

    return (
        <Container className="users-list" fluid={true}>
            {users.length > 0 ? <Row className="users-list-title">
                <Col xs="4">id</Col>
                <Col xs="4">login</Col>
                <Col xs="4">url</Col>
            </Row> : <div>No items found</div>}
            {getUsers()}
        </Container>
    );
}