import { Container, Row, Text } from "@nextui-org/react";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Row>
          <Text h3>Home Page</Text>
        </Row>
      </Container>
    </Layout>
  );
}
