import React, { Component } from 'react';
import './Faq.css'
import axios from 'axios';

class Faq extends Component {
    
    
    constructor(props){
        super(props);

        this.state = {
            faqs: []  
        };

    }


    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const faqs = res.data.slice(0,10);
                this.setState({ faqs });
            })

    }


    render() {
        return (
            <div>
                <div className="container">
                    <section className="section">
                        <h1 className="title">Preguntas</h1>
                        <h2 className="subtitle is-4">Preguntas frecuentes de nuestros clientes.</h2>
                    </section>

                    <div className="columns">
                        {this.state.faqs.map(faq => 
                            <div className="column is-one-third" v-for="faq of faqs">
                                <div className="card">
                                    <div className="card-content">
                                        <p className="title">{ faq.title }</p>
                                        <p className="answer">{ faq.title }</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Faq;
