import { Row } from "react-bootstrap";
import FantasyBooks from "../json/fantasy.json";
import SingleBook from "./SingleBook";
// import GenresChoice from "./GenresChoice";

let bookType = FantasyBooks;

const BookList = () => {
    return (
        <>
            {" "}
            {/* <GenresChoice /> */}
            <Row className="h-100 ">
                {bookType.map((book) => {
                    return <SingleBook key={book.asin} book={book} />;
                })}
            </Row>
        </>
    );
};
export default BookList;
