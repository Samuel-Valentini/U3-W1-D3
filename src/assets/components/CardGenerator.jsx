import { Col, Row } from "react-bootstrap";
import FantasyBooks from "../json/fantasy.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import GenresChoice from "./GenresChoice";

let bookList = FantasyBooks;

const CardGenerator = () => {
    return (
        <>
            {" "}
            {/* <GenresChoice /> */}
            <Row className="h-100 ">
                {bookList.map((book) => {
                    return (
                        <Col
                            sm="6"
                            md="4"
                            lg="3"
                            xxl="2"
                            key={book.asin}
                            className="mb-3">
                            <Card className="my-card ">
                                <Card.Img
                                    variant="top"
                                    src={book.img}
                                    className="change-ratio"
                                />
                                <Card.Body className="d-flex flex-column justify-content-between">
                                    <Card.Title>{book.title}</Card.Title>
                                    {/* <Card.Text>
                                Some quick example text to build on the card title and
                                make up the bulk of the card's content.
                            </Card.Text> */}
                                    <Button variant="primary">
                                        Buy for {book.price} €{" "}
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
};
export default CardGenerator;
