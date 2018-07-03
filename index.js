var title = document.querySelector('h1');

var greetUser = function(){
    var userName = prompt('What is your name?');

    if(userName !== ''){
        title.textContent += ' ' + userName + '!';
    }
    else{
        prompt('No... really. What is your name?');
        greetUser();
    }
};

greetUser();