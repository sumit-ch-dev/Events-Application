import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const Item = () => {
    return (
        <div>
            <Card
                style={{
                    width: '18rem'
                }}
            >
                <img
                    alt="Sample"
                    src="assets/images/party1.jpg"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Card title
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Card subtitle
                    </CardSubtitle>
                    <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card‘s content.
                    </CardText>
                    <Button>
                        Button
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default Item;
