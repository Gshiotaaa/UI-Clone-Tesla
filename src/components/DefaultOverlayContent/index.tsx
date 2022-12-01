import { Buttons, Container, Heading } from "./styles";

interface props {
  label: string;
  description: string;
}

const DefaultOverlayContent: React.FC<props> = ({ label, description }) => {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>
      <Buttons>
        <button>Custom Order</button>
        <button className="white">Existing Inventory</button>
      </Buttons>
    </Container>
  );
};

export default DefaultOverlayContent;
