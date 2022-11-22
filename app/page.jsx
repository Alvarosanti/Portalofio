import '../styles/portafolio.css';
import HeaderPage from '../components/Header';
import NavBar from '../components/NavBar';
import About from '../components/About';
import Resume from '../components/Resume';
import Portafolio from '../components/Portafolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function PortafolioPage() {
	return (
		<body data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
			<HeaderPage />
			<NavBar />
			<About />
			<Resume />
			<section className="section bg-dark py-1" />
			<Portafolio />
			<Contact />
			<Footer />
		</body>
	);
}
