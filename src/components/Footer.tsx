import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";
import Youtube from "../assets/youtube.svg";
import "../styles/footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="container footer-content">
                <div className="footer-brand">
                    <span className="footer-logo">Sulco Records</span>
                    <p>O calor analógico dos vinis, direto na sua vitrola.</p>
                    <div className="footer-social">
                        <a href="#" aria-label="Instagram">
                            <img src={Instagram} alt="Instagram" width={24} height={24} />
                        </a>
                        <a href="#" aria-label="Facebook">
                            <img src={Facebook} alt="Facebook" width={24} height={24} />
                        </a>
                        <a href="#" aria-label="YouTube">
                            <img src={Youtube} alt="YouTube" width={24} height={24} />
                        </a>
                    </div>
                </div>

                <div className="footer-columns">
                    <div className="footer-col">
                        <h4>Loja</h4>
                        <ul>
                            <li><a href="#">Sobre nós</a></li>
                            <li><a href="#">Trabalhe conosco</a></li>
                            <li><a href="#">Nosso blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Catálogo</h4>
                        <ul>
                            <li><a href="#popular">Lançamentos</a></li>
                            <li><a href="#popular">Mais ouvidos</a></li>
                            <li><a href="#pricing">Clube do Sulco</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Ajuda</h4>
                        <ul>
                            <li><a href="#">Frete e entrega</a></li>
                            <li><a href="#">Trocas e devoluções</a></li>
                            <li><a href="#contact">Fale conosco</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <p className="footer-bottom">
                Feito na aula de Programação Web · © 2026 Sulco Records · Todos os direitos reservados.
            </p>
        </footer>
    );
}
