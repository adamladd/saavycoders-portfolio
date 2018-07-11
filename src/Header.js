export default function Header(state){
    return `
        <div id="header">
            <div class="container">
                <h1>Welcome to ${state.title}</h1>
                <h2>You've arrived at Adam Ladd's Project Page</h2>
                <h2>*Please excuse my progress*</h2>
                <img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/11203080_10155475254680654_5675002008967500668_n.jpg?_nc_cat=0&oh=baf3984ef8c23ff17704f8bc170e30f8&oe=5BBA6FAF" alt="This is what my face looks like">
                <div id="greeting"></div>
                <input type="text"/>
            </div>
        </div>
    `;
}