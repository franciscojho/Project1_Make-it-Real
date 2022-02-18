import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.css'

const HomePage = () => {
    return (
        <div className="clx__grid">
            <header className="clx__header">
                <nav className="clx__navbar">
                    <i className="fas fa-user-circle clx__navbar-avatar" />
                    <span className="clx__navbar-nameuser">Carlos Rodriguez</span>
                    <img className="clx__navbar-logo" src="img/logo.png" alt="" />
                </nav>
            </header>
            <section className="clx__section">
                <div className="clx__container">
                    <div className="clx__filters-wrapper">
                        <h2 className="clx__filters-title">Filtrar</h2>
                        <br />
                        <br />
                        <span>Por rango de precio</span>
                        <br />
                        <select className="clx__filters-select">
                            <option hidden selected>
                                Seleccion una opcion
                            </option>
                            <option>Casa Grande</option>
                            <option>Casa Mediana</option>
                            <option>Casa Pequeña</option>
                        </select>
                        <br />
                        <label>
                            <input type="checkbox" /> Arriba de S/.400.00
                        </label>
                        <br />
                        <label>
                            <input type="checkbox" /> De S/.300.00 a S/.400.00
                        </label>
                        <br />
                        <label>
                            <input type="checkbox" /> De S/.200.00 a S/.300.00
                        </label>
                        <br />
                        <label>
                            <input type="checkbox" /> De S/.100.00 a S/.200.00
                        </label>
                        <br />
                        <label>
                            <input type="checkbox" /> De S/.50.00 a S/.100.00
                        </label>
                    </div>
                    <div className="clx__cards-wrapper">
                        <div className="clx__card">
                            <img
                                src="https://i.pravatar.cc/300"
                                alt="avatar"
                                className="clx__card-avatar"
                            />
                            <div className="clx__card-data">
                                <h3 className="clx__card-title">Maria Perez</h3>
                                <div className="clx__rating-wrapper">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <p className="clx__card-desc">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                                    quos dolorem in labore animi sequi accusamus amet minus sed,
                                    quia, recusandae quae similique, eum maiores ullam veritatis
                                    reprehenderit odio aperiam.
                                </p>
                                <button type="submit" className="clx__card-btn-1">
                                    Pedir ayuda
                                </button>
                                <span className="clx__card-btn-2">Ver mas</span>
                            </div>
                        </div>
                        <div className="clx__card">
                            <img
                                src="https://i.pravatar.cc/300"
                                alt="avatar"
                                className="clx__card-avatar"
                            />
                            <div className="clx__card-data">
                                <h3 className="clx__card-title">Maria Perez</h3>
                                <div className="clx__rating-wrapper">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <p className="clx__card-desc">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                                    quos dolorem in labore animi sequi accusamus amet minus sed,
                                    quia, recusandae quae similique, eum maiores ullam veritatis
                                    reprehenderit odio aperiam.
                                </p>
                                <button type="submit" className="clx__card-btn-1">
                                    Pedir ayuda
                                </button>
                                <span className="clx__card-btn-2">Ver mas</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="clx__footer">
                <div className="clx__group">
                    <img className="clx__footer-logo" src="img/logo.png" alt="" />
                    <div className="clx__social-media">
                        <p>
                            <b>Siguenos</b>
                        </p>
                        <a href="/">
                            <FontAwesomeIcon icon={['fab', 'instagram']} />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon icon={['fab', 'facebook']} />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </a>
                    </div>
                </div>
                <div className="clx__rights">&copy; 2022 todos los derechos reservados</div>
            </footer>
        </div>
    )
}

export default HomePage
