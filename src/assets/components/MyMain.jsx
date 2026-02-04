import BookList from "./BookList";
import Welcome from "./Welcome";
import FantasyBooks from "../json/fantasy.json";

let bookType = FantasyBooks;

const MyMain = () => {
    return (
        <main className="">
            <Welcome></Welcome>
            <BookList list={bookType} />
        </main>
    );
};
export default MyMain;
