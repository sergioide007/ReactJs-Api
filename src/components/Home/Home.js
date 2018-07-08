import React, { Component } from 'react';

class Home extends Component {
    render() {
        
        let heading = "MiBanco con Arquitectura Limpia";
        let subheading = "FrontEnd y BackEnd separados utilizando DDD. Se crean funcionalidades de un banco, como el catálogo de operaciones y el mantenimiento de clientes.";
        
        return (
            <div>
                <section className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">{ heading }</h1>
                            <div className="is-two-thirds column is-paddingless">
                                <h2 className="subtitle is-4">{ subheading }</h2>                                
                            </div>
                            <a className="button is-large is-primary" id="learn">Conozca más</a>
                        </div>
                    </div>
                    <div className="columns pd">
                        <div className="column">
                            <div className="card">
                                <div className="card-content">
                                    <p className="subtitle is-4">"Esta solución es brindada para ayudar a realizar una arquitectura limpia. Vamos con fe!"</p>
                                    <p className="answer">- Sergio Perez</p>
                                </div>
                            </div>                            
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="card-content">
                                    <p className="subtitle is-4">"Nos destruirán a todos!"</p>
                                    <p className="answer">- Bhérring Paucar</p>
                                </div>
                            </div>                            
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="card-content">
                                    <p className="subtitle is-4">"Estoy estresado"</p>
                                    <p className="answer">- Zeus Nunja y Robertson Oré</p>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;

