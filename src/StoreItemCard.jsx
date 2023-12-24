import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const StoreItemCard = (props) => {
    return (
        <Card style={{ width: '10rem' }}>
            {/* eslint-disable-next-line react/prop-types */}
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                {/* eslint-disable-next-line react/prop-types */}
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {/* eslint-disable-next-line react/prop-types */}
                    {props.text}
                </Card.Text>
                <Button variant="primary">購買</Button>
            </Card.Body>
        </Card>
    )
}
