import { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import Button from "../components/Button";
import Card from "../components/Card";
import VinylCard from "../components/VinylCard";
import TestimonialCard from "../components/TestimonialCard";
import ContactForm from "../components/ContactForm";
import LoginModal from "../components/LoginModal";
import Footer from "../components/Footer";
import Curation from "../assets/curation.svg";
import Vinyl from "../assets/vinyl.svg";
import Package from "../assets/package.svg";
import Check from "../assets/check.svg";
import AvatarEduardo from "../assets/images/eduardo.png";
import AvatarSkrillex from "../assets/images/skrillex.webp";
import AvatarVitor from "../assets/images/vitor.jpg";
import AvatarChewbacca from "../assets/images/chewbacca.webp";
import PopularOkc from "../assets/images/popular-okc.png";
import PopularInterpol from "../assets/images/popular-interpol.png";
import PopularDeftones from "../assets/images/popular-deftones.png";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/solution.css";
import "../styles/popular.css";
import "../styles/testimonials.css";
import "../styles/pricing.css";
import "../styles/utility.css";

const testimonials = [
    {
        image: AvatarEduardo,
        testimony: "Pedi um disco raro e chegou impecável, embalado como joia. O som ficou perfeito, sem nenhum chiado.",
        name: "Eduardo Golin",
        role: "Audiófilo",
        stars: 5,
    },
    {
        image: AvatarSkrillex,
        testimony: "A curadoria é absolutely insane, bro! Sempre find uma prensagem original aqui que eu don't encontro em no other lugar. Simplesmente next level, you know?",
        name: "Skrillex Da Silva",
        role: "DJ e produtor",
        stars: 4,
    },
    {
        image: AvatarVitor,
        testimony: "Atendimento humano de verdade e entrega rápida. Virei cliente fiel da Sulco depois da primeira compra.",
        name: "Vitor Civa",
        role: "Audiófilo",
        stars: 5,
    },
    {
        image: AvatarChewbacca,
        testimony: "RAAAWGHHH! GRRRWWWAAARGH! UUUR UUUR AAARRGHHHWWW! WWWAAARRGH!!!",
        name: "Chewbacca",
        role: "Copiloto da Millennium Falcon",
        stars: 5,
    },
];

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo Sulco Records" width={220} height={80} />

                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#popular">Populares</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="#" onClick={(event) => { event.preventDefault(); setShowLogin(true); }}>Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#">Home</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#popular">Populares</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#contact">Contato</a>
                                        </li>
                                        <li>
                                            <a onClick={(event) => { event.preventDefault(); setShowMobileMenu(false); setShowLogin(true); }} className="reverse-color" href="#">Login</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>
                </nav>
            </header>

            <section id="hero">
                <div className="container content">
                    <img className="hero-art-mobile" src={HeroRectangleTwo} alt="Disco de vinil Sulco Records" />

                    <div className="hero-text">
                        <p className="desktop-only">
                            Bem-vindo à Sulco Records
                        </p>
                        <h1>O calor analógico dos vinis, direto na sua vitrola.</h1>
                        <p>
                            A gente garimpa discos originais, do rock clássico ao indie
                            brasileiro. Cada prensagem é escolhida com cuidado e chega na
                            sua casa bem protegida.
                        </p>
                        <div className="flex gap-1">
                            <span><Button text="Cadastre-se" /></span>
                            <span className="desktop-only">
                                <Button text="Veja a coleção" secondary />
                            </span>
                        </div>
                    </div>

                    <div className="hero-art-desktop desktop-only">
                        <img src={HeroRectangleOne} alt="Disco de vinil saindo da capa" />
                    </div>
                </div>
            </section>

            <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Soluções</h2>
                        <span className="desktop-only">
                            <h2>
                                Feitas para quem ama vinil
                            </h2>
                        </span>
                    </span>
                    <p>
                        A curadoria é com a gente. A <strong>Sulco Records </strong>
                        já matou a saudade de muito colecionador por aí, e a gente
                        adoraria ter você junto. Dá uma olhada no que você ganha
                        comprando com a gente.
                    </p>
                </header>

                <section className="even-columns">
                    <Card
                        icon={Curation}
                        title="Curadoria autoral"
                        description="Cada disco que entra no nosso catálogo passa pelo ouvido da equipe antes de chegar até você. Nada de prateleira no automático."
                    />
                    <Card
                        icon={Vinyl}
                        title="Prensagens originais"
                        description="Trabalhamos só com prensagens originais e edições especiais, do jeitinho que o artista pensou o som. Sem reedição feita às pressas."
                    />
                    <Card
                        icon={Package}
                        title="Embalagem anti-impacto"
                        description="Seu disco viaja numa caixa rígida com proteção dupla e chega inteiro, pronto para a primeira agulhada."
                    />
                </section>
            </section>

            <section className="container" id="popular">
                <header>
                    <h2>Populares Essa Semana</h2>
                    <p>
                        Os discos que mais saíram da nossa loja nos últimos dias.
                        Se bobear, acaba o estoque antes de você decidir.
                    </p>
                </header>

                <section className="even-columns">
                    <VinylCard
                        image={PopularOkc}
                        album="OK Computer"
                        artist="Radiohead"
                        price="R$ 519,90"
                    />
                    <VinylCard
                        image={PopularInterpol}
                        album="Turn On the Bright Lights"
                        artist="Interpol"
                        price="R$ 649,90"
                    />
                    <VinylCard
                        image={PopularDeftones}
                        album="Private Music"
                        artist="Deftones"
                        price="R$ 399,90"
                    />
                </section>
            </section>

            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">
                            Conselho de quem conhece
                        </p>
                        <h2>Cada colecionador importa!</h2>
                    </span>
                    <p>
                        Quem já comprou sabe do cuidado com cada disco. A gente leva a
                        sério a curadoria, o estado da prensagem e a viagem até a sua casa.
                        Veja o que dizem quem já agulhou um vinil da Sulco.
                    </p>
                </header>

                <section className="carousel">
                    <div className="carousel-content">
                        {testimonials.map((item) => (
                            <TestimonialCard
                                key={item.name}
                                image={item.image}
                                testimony={item.testimony}
                                name={item.name}
                                role={item.role}
                                stars={item.stars}
                            />
                        ))}
                    </div>
                    <div className="carousel-content">
                        {testimonials.map((item) => (
                            <TestimonialCard
                                key={`${item.name}-clone`}
                                image={item.image}
                                testimony={item.testimony}
                                name={item.name}
                                role={item.role}
                                stars={item.stars}
                            />
                        ))}
                    </div>
                </section>
            </section>

            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e assinatura</p>
                    <h2>Nossos planos</h2>
                </header>

                <section className="even-columns gap-1.5">
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Ouvinte</h3>
                            <p>Para quem quer ficar por dentro das novidades sem gastar nada.</p>
                        </span>
                        <h2>Grátis</h2>
                        <Button text="Começar agora" secondary key="free" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Newsletter semanal de lançamentos</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Alertas de pré-venda e raridades</p>
                        </span>
                    </div>

                    <div className="pricing-card premium">
                        <span className="bonus">
                            <p>1º MÊS COM DESCONTO</p>
                        </span>
                        <span className="plan">
                            <h3>Clube do Sulco</h3>
                            <p>Um disco selecionado por mês, escolhido a dedo para o seu gosto.</p>
                        </span>
                        <span className="price">
                            <h2>R$ 199,90</h2>
                            <p>/mês</p>
                        </span>
                        <Button text="Assinar agora" key="premium" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>1 vinil por mês na sua casa</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Frete grátis em todo o Brasil</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>10% de desconto no catálogo</p>
                        </span>
                    </div>
                </section>
            </section>

            <section className="container" id="contact">
                <header>
                    <h2>Fale com a gente</h2>
                    <p>
                        Procura um disco específico, quer vender sua coleção ou só
                        bater um papo sobre vinil? Manda uma mensagem que a gente responde.
                    </p>
                </header>
                <ContactForm />
            </section>

            <Footer />

            {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
        </>
    )
}
