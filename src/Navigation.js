import { lowerCase } from 'lodash';

function buildLinks(links){
    var i = 0;
    var result = '';
    
    while(i < links.length){
        result += `
            <li>
                <a href="/${lowerCase(links[i])}">${links[i]}</a>
            </li>
        `;

        i++;
    }
    
    return result;
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