import { Component } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// const SingleBook = (props) => {
//     const { book } = props;
//     return (
//         <Col sm="6" md="4" lg="3" xxl="2" key={book.asin} className="mb-3">
//             <Card className="my-card ">
//                 <Card.Img
//                     variant="top"
//                     src={book.img}
//                     className="change-ratio"
//                 />
//                 <Card.Body className="d-flex flex-column justify-content-between">
//                     <Card.Title>{book.title}</Card.Title>
//                     <Button variant="primary">Buy for {book.price} € </Button>
//                 </Card.Body>
//             </Card>
//         </Col>
//     );
// };
// export default SingleBook;

class SingleBook extends Component {
    state = {
        selected: false,
    };

    render() {
        const { book } = this.props;
        return (
            <Col sm="6" md="4" lg="3" xxl="2" className="mb-3">
                <Card
                    className={`my-card ${this.state.selected ? "bg-warning" : ""}`}
                    // style={{ backgroundColor: sel ? "#ffe8a1" : "white" }}
                >
                    <Card.Img
                        variant="top"
                        src={book.img}
                        className="change-ratio"
                        onClick={() => {
                            this.setState({
                                selected: !this.state.selected,
                            });

                            console.log(this.state.selected);
                        }}
                    />
                    <Card.Body className="d-flex flex-column justify-content-between">
                        <Card.Title>{book.title}</Card.Title>
                        <Button variant="primary">
                            Buy for {book.price} €{" "}
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}
export default SingleBook;
