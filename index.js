import Navigation from './src/Navigation';
import Header from './src/Header';
import Contents from './src/Contents';
import Footer from './src/Footer';

var State = {
    'Home': {
        'title': "Adam Ladd's Savvy Coders Project"
    },
    'About': {
        'title': 'the "About Me" page! `.=.,,,'
    },
    'Projects': {
        'title': 'my projects page'
    },
    'Blog': {
        'title': 'my blog page!'
    },
    'Contact': {
        'title': 'the contact page!'
    },
};

var initialHTML = document.body.innerHTML;
var root = document.querySelector('#root');

function render(state){
    var greeting;
    var input;
    var links;
    var i = 0;

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

    while(i < links.length){
        links[i].addEventListener(
            'click',
            (event) => {
                var page = event.target.textContent;

                event.preventDefault();

                console.log(page);

                render(State[page]);
            }
        );
        i++;
    }
}

render(State['Home']);