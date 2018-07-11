import Navigation from './src/Navigation';
import Header from './src/Header';
import Contents from './src/Contents';
import Footer from './src/Footer';

var Home = {
    'title': "Adam Ladd's Savvy Coders Project"
};

var About = {
    'title': 'the "About Me" page! `.=.,,,'
};

var Project = {
    'title': 'my projects page'
};

var Blog = {
    'title': 'my blog page!'
};

var Contact = {
    'title': 'the contact page!'
};

var initialHTML = document.body.innerHTML;
var root = document.querySelector('#root');

function render(state){
    var greeting;
    var input;
    var links;

    root.innerHTML = `
        ${Navigation}
        ${Header(state)}
        ${Contents}
        ${Footer}
        ${initialHTML}
        `;

    greeting = document.querySelector('#greeting');
    input = document.querySelector('#header input');
        
    input.addEventListener(
        'keyup',
        (event) => greeting.innerHTML = `
                <div>
                    <h3>Welcome to my home page,</h3>
                    <h4>${event.target.value}</h4>
                </div>
        `
    );

    links = document.querySelectorAll('#navigation a');

    links[0].addEventListener(
        'click',
        (event) => {
            event.preventDefault();

            render(Home);
        }
    );
    links[1].addEventListener(
        'click',
        (event) => {
            event.preventDefault();

            render(About);
        }
    );
    links[2].addEventListener(
        'click',
        (event) => {
            event.preventDefault();

            render(Project);
        }
    );
    links[3].addEventListener(
        'click',
        (event) => {
            event.preventDefault();

            render(Blog);
        }
    );
    links[4].addEventListener(
        'click',
        (event) => {
            event.preventDefault();

            render(Contact);
        }
    );
}

render(Home);