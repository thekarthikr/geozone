import {
  Html,
  Body,
  Tailwind,
  Preview,
  Text,
  Heading,
} from "@react-email/components";

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <Html>
    <Preview className="text-"> You got a new message from {name} </Preview>
    <Tailwind>
      <Body>
        <Heading>Hi there,</Heading>

        <Text>Email : {email} </Text>

        <Text>Message : {message}</Text>
      </Body>
    </Tailwind>
  </Html>
);

export default ContactFormEmail;
