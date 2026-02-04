import BookList from "./BookList";
import CardGenerator from "./CardGenerator";
import Welcome from "./Welcome";

const MyMain = () => {
    return (
        <main className="">
            <Welcome></Welcome>
            <BookList />
        </main>
    );
};
export default MyMain;
