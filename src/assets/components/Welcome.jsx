import Alert from "react-bootstrap/Alert";

const Welcome = () => {
    return (
        <>
            {["success"].map((variant) => (
                <Alert
                    key={variant}
                    variant={variant}
                    className="mt-3 text-center">
                    Welcome to the wonderful{" "}
                    <Alert.Link href="#">EpiBook Shop</Alert.Link>.
                </Alert>
            ))}
        </>
    );
};
export default Welcome;
