import "./App.scss";
import { Container } from "./components/Container";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Navbar } from "./components/Navbar";


import { Wrapper } from "./components/wrapper";

const App = () => {
    return (
        <>


        <Navbar></Navbar>
            <Header />


            <Wrapper>
                <h1>dav dav</h1>
                <p>dette er en paragraf</p>
            </Wrapper>

            <Container
                color="red"
                width="500px"
                padding="2rem"
                margin="1rem"
            />

     

            <Main>
                <h1>hello</h1>
                <p>dette er en paragraf</p>
            </Main>
                      <Footer />
        </>
    );
};

export default App;