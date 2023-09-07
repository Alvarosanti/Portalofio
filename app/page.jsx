'use client'
import '../styles/portafolio.css';
import HeaderPage from '../components/Header';
import NavBar from '../components/NavBar';
import About from '../components/About';
import Resume from '../components/Resume';
import Portafolio from '../components/Portafolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

export default function PortafolioPage() {
	const [firstRender, setFirstRender] = useState(true);

	useEffect(() => {
		setFirstRender(false);
	}, []);

	if (firstRender) {
		return <></>
	}
	return (
		<main data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
			<HeaderPage />
			<NavBar />
			<About />
			<Resume />
			<section className="section bg-dark py-1" />
			<Portafolio />
			<Contact />
			<Footer />
		</main>
	);
}
