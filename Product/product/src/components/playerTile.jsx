// Autor: Liam Benedetti
import Button from 'react-bootstrap/Button';
//import './playerTile.css';
import { Card } from 'react-bootstrap';
import {Stack} from 'react-bootstrap';


const PlayerTile = (props) => {
    const {image, name, Nationality, age, club, jersey } = props;
    return (
        <div className="player-tile">
            <Card style={{paddin: 0 ,margin: "30px"}}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <Stack direction="horizontal" gap={2}>
                        <Stack direction="vertical" gap={1}>
                        
                        <div>
                        <p>{age}</p>
                        </div>
                        <div>
                        <p>{Nationality}</p>
                        </div>
                        
                        
                        
                        </Stack>
                        <div>
                        <p>{jersey}</p>
                        </div>
                        <div>
                        <p>{club}</p>
                        </div>
                        </Stack>
                    </Card.Text>
                    <Button variant="primary">like</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PlayerTile;