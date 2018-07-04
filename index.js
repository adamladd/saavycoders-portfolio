import Navigation from './src/Navigation';
import Header from './src/Header';
import Contents from './src/Contents';
import Footer from './src/Footer';

var greeting = document.querySelector('#greeting');

var greetUser = function greetUser(){
    var firstName = prompt('What is your first name?');
    var lastName = prompt('What is your last name?');

    if(firstName && lastName){
        greeting.innerHTML = `
            <div>
                <p>
                    Bienvenue ${firstName} ${lastName}, welcome!
                </p>
            </div>
        `;
    }
    else{
        greetUser();
    }
};

var initialHTML = document.body.innerHTML;

document
    .body
    .innerHTML = `
    ${Navigation}
    ${Header}
    ${Contents}
    ${Footer}
    ${initialHTML}
    `;

greetUser();
