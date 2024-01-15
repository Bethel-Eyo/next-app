import {
  Body,
  Container,
  Html,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import React, { CSSProperties } from "react";

type StylesType = {
  [key: string]: CSSProperties;
};

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!🤙🏾</Preview>
      <Body style={styles.body}>
        <Container>
          <Text style={styles.heading}>Hello {name}</Text>
          <Link href="https://codewithmosh.com">www.codewithmosh.com</Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTemplate;

const styles: StylesType = {
  body: {
    background: "#fff",
  },
  heading: {
    fontSize: "32px",
  },
};
