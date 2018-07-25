import { lowerCase } from 'lodash';


function reduceLinkToHTML(links, link){
    var href = '/';

    if(link !== 'Home'){
        href += lowerCase(link);
    }

    return `
        ${links}
        <li>
            <a href="${href}" data-navigo>${link}</a>
        </li>
    `;
}

function buildLinks(links){
    return links.reduce(reduceLinkToHTML, '');
}
    
export default function Navigation(state){
    return `
            <div id="navigation">
                <ul class="container">
                    ${buildLinks(state.links)}
                </ul>
                <p class="container">
                    Photo Credit to <a href="https://morguefile.com/creative/lightfoot/1/all">Lightfoot</a> at Morguefile.com
                </p>
            </div>
        `;
}