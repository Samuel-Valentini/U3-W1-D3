import { Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({ list }) => {
    return (
        <>
            <Row className="h-100 ">
                {list.map((book) => {
                    return <SingleBook key={book.asin} book={book} />;
                })}
            </Row>
        </>
    );
};
export default BookList;
