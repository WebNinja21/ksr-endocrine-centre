import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Banner from '../Assets/KSR_Banner.jpeg';
import './HeroComponent.css';

function HeroComponent() {
  return (
    <Container fluid className="text-center">
      <Image src={Banner} alt="KSR Banner" fluid className="hero-image" />
    </Container>
  );
}

export default HeroComponent;
