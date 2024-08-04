import { siteConfig } from "@/config/site";
import { getGreeting } from "@/lib/utilities/greeting";
// import { getGreeting } from "@/lib/utilities/greeting";
import { type ContactFormSchema } from "@/lib/validations/contact-form";
import {
  Body,
  Column,
  Container,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import config from "tailwind.config";

interface EmailProps extends ContactFormSchema {
  pathname: string;
}

export function Email({ name, email, subject, message, pathname }: EmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Preview>👋 {name} wants to talk. </Preview>
      <Tailwind config={config}>
        <Body className="m-auto bg-background px-2 font-serif text-copy">
          <Container className="mx-auto pb-12 pt-5">
            <Section>
              <Row>
                <Column align="right" style={{ marginRight: "13px" }}>
                  <Img
                    src={`${siteConfig.url}/logo.png`}
                    width="40"
                    height="40"
                    alt={siteConfig.name}
                  />
                </Column>
                <Column align="left" className="px-3.5">
                  <Text className="font-title text-2xl font-bold">
                    {siteConfig.name}
                  </Text>
                </Column>
              </Row>
            </Section>
            <Section className="mt-7">
              <Text>
                {getGreeting()} This form was sent from: {pathname}
              </Text>
            </Section>
            <Section>
              <Row>
                <Column className="h-12 px-5">
                  <Text className="text-xs uppercase">Name</Text>
                  <Text className="font-bold leading-relaxed">{name}</Text>
                </Column>
                <Column className="h-12 px-5">
                  <Text className="text-xs uppercase">email</Text>
                  <Text className="font-bold leading-relaxed">{email}</Text>
                </Column>
              </Row>
              <Row>
                <Column className="h-12 px-5">
                  <Text className="text-xs uppercase">Subject</Text>
                  <Text className="font-bold leading-relaxed">{subject}</Text>
                </Column>
              </Row>
              <Row>
                <Column className="h-12 px-5">
                  <Text className="text-xs uppercase">message</Text>
                  <Text className="font-bold leading-relaxed">{message}</Text>
                </Column>
              </Row>
            </Section>
            <Section className="mx-auto my-14 max-w-[580px]">
              <Row>
                <Text style={{ textAlign: "center", color: "#706a7b" }}>
                  © 2022 {siteConfig.name}, All Rights Reserved <br />
                </Text>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
