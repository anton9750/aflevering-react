import "./App.css";
import { Container } from "./components/Container";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Circle } from "./components/circle";

const App = () => {
    return (
        <>
            <Header />

            <Container
                color="lightblue"
                width="100px"
                padding="5rem"
                margin="2rem"
            />

            <Circle
                color="red"
                width="10px"
                padding="0"
                margin="2rem"
            />

            <Main />

            <Footer />
        </>
    );
};

export default App;