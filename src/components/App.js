import React from 'react';
import Header from './Header';
import Content from './Content';

export default class App extends React.Component {
    _sayHello() {
        alert("hey")
    }

    render() {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        );
    }
}
