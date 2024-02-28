import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-conteiner">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>Desenvolvido por
                    <a href="http://www.instagram.com/carlosborges9231712/"> @carlosborges</a>
                </p>

            </div>

        </header>
    )
}
export default Header;