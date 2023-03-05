import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";

type Props = { children: JSX.Element };

const HomeLayout = (props: Props) => {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container className="justify-content-start">
            <Navbar.Brand>My Project</Navbar.Brand>
            <Nav>
              <Link href="/" passHref legacyBehavior>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href="/nav1" passHref legacyBehavior>
                <Nav.Link>Nav 1</Nav.Link>
              </Link>
              <Link href="/nav2" passHref legacyBehavior>
                <Nav.Link>Nav 2</Nav.Link>
              </Link>
              <Link href="/nav3" passHref legacyBehavior>
                <Nav.Link>Nav 3</Nav.Link>
              </Link>
              <Link href="/nav4" passHref legacyBehavior>
                <Nav.Link>Nav 4</Nav.Link>
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>{props.children}</Container>
      </main>
      <footer>
        <Container>Footer</Container>
      </footer>
    </>
  );
};

export default HomeLayout;
