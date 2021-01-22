import React, { Component } from 'react';
import './App.css';
import Minimal from './components/Minimal/Minimal';
import Home from './components/Home/Home';
import Bandw from './components/Bandw/Bandw';
import Transparent from './components/Transparent/Transparent';
import Animated from './components/Animated/Animated';
import Gradient from './components/Gradient/Gradient';
import Contact from './components/Contact/Contact';
import Image from "./components/Image/Image";
import MakeUp from "./components/MakeUp/MakeUp";
import {DelayedRenderer} from 'react-delayed-renderer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aditya from "./components/Aditya/Aditya";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetched: false,
            cards: []
        };
    }
    componentDidMount() {
            if(window.location.pathname === '/') {
            } else if(window.location.pathname === '/contact') {
            } else if(window.location.pathname === 'contact') {
            } else {
                fetch('https://itestapi.herokuapp.com/')
                    .then((res) => res.json().then(mycard => {
                        this.setState({ cards: mycard });
                    })).then(() => {
                    this.setState({ fetched: true })
                })
            }
    }

    renderSwitch(param, card) {
        switch(param) {
            case 'minimal':
                return <Minimal card={card} />;
            case 'cool':
                return <Bandw card={card} />;
            case 'trans':
                return <Transparent card={card} />;
            case 'animate':
                return <Animated card={card} />;
            case 'gradient':
                return <Gradient card={card} />
            case 'image':
                return <Image card={card} />
            case 'makeup':
                return <MakeUp card={card}/>
            case 'aditya':
                return <Aditya card={card}/>
            default:
                return <Transparent card={card} />;
        }
    }

    render() {
        return this.state.cards.map((card, i) => {
            if(window.location.pathname === `${card.id}-${card.firstname}-${card.lastname}`) {
                return (
                    <div>
                        {
                            this.renderSwitch(card.theme, card)
                        }
                    </div>
                )
            }
        })
    }
}

export default App;
