import React, { Component } from "react";
import './styles.css';
class List extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        currencies: [
            { ticker: 'btc', name: 'bitok' },
            { ticker: 'storm', name: 'storm' },
            { ticker: 'atom', name: 'atom' },
        ],
        currentIndex: 0,

    }

    handleLog = () => {
        console.log('logged');
    }

    handleListKeyPress = (event) => {
        // 13 - enter, 38 - up, 40 - down
        const { currencies } = this.state;
        const maxItems = currencies.length - 1;

        console.log('event keycode', event.keyCode)

        switch (event.keyCode) {
            case 13:

                break;
            case 38:

                if (this.state.currentIndex > 0) {
                    console.log()
                    this.setState(state => ({ currentIndex: state.currentIndex - 1 }));
                }
                console.log(this.state.currentIndex)
                console.log('key up')
                break;

            case 40:
                if (this.state.currentIndex < maxItems) {
                    console.log('maxItems', maxItems)
                    this.setState(state => ({ currentIndex: state.currentIndex + 1 }));
                }

                console.log(this.state.currentIndex)
                break;

            default:
                break;

        }
    }


    render() {

        const listCurrency = this.state.currencies.map((el, i) => {
            let activeEl = this.state.currentIndex === i ? 'active' : ''
            return (
                <li key={el.name} className={`list__item ${activeEl}`}>
                    {el.ticker}
                </li>
            );
        }
        )

        return (
            <div
                className="list"
                onKeyDown={this.handleListKeyPress}
                tabIndex="0"
            >
                <ul className="list__menu">
                    {listCurrency}
                </ul>
            </div>
        );
    }
}

export default List;
