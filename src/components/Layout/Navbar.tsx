import { Col, Container, Link, Row, Spacer, Text } from "@nextui-org/react";
import NextLink from "next/link";
import { Github } from "./icons/Github";
import { Twitter } from "./icons/Twitter";
import { StyledNavContainer } from "./styles";

type NavbarProps = {
  links: {
    name: string;
    url: string;
  }[];
};

export const Navbar = ({ links = [] }: NavbarProps) => (
  <StyledNavContainer detached showBlur>
    <Container as="nav" lg={true} fluid display="flex">
      <Row justify="flex-start" align="center" gap={2}>
        <Col>
          <Text h3>Sean Norwood</Text>
        </Col>

        <Row align="center" justify="flex-end">
          <Link block target="_blank" rel="noreferrer">
            <NextLink href="https://twitter.com/stiforr" passHref>
              <Twitter size={24} />
            </NextLink>
          </Link>

          <Link block target="_blank" rel="noreferrer">
            <NextLink href="https://github.com/insuusvenerati" passHref>
              <Github size={24} />
            </NextLink>
          </Link>

          <Spacer />

          {links.map((link) => (
            <NextLink passHref href={link.url} key={link.name}>
              <Link block>{link.name}</Link>
            </NextLink>
          ))}
        </Row>
      </Row>
    </Container>
  </StyledNavContainer>
);
