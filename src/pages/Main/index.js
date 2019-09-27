import React from "react";
import { FaUserCircle, FaPlus } from "react-icons/fa";

import { Container, Form, SubmitButton } from "./styles";

export default function Main() {
  return (
    <Container>
      <h1>
        <FaUserCircle />
        Fala Brother!
      </h1>

      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Seu nome..." />
        <SubmitButton>
          <FaPlus color="#fff" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
}
