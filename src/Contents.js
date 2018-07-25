import * as Pages from './Pages';

export default function Content(state, posts){
    return `
        <div id="contents">
            <div class="container">
                ${Pages[state.body](posts)}
            </div>
        </div>
    `;
}