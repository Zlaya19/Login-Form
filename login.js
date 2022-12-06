
const body = document.getElementsByTagName('body')[0];
const container = document.getElementById('container');
const logo = document.getElementById('logo');
const input = document.getElementById('input');
const password = document.getElementById('password');
const fontLogin = document.getElementById('fontLogin');
const btn = document.getElementById('btn');

const themeColor = document.getElementById('btnColorChange');

let statusTheme = true;

themeColor.addEventListener('click', () => {

    if(statusTheme === true) {
        changeTheTheme();
    }else{
        setTheThemeBack();
    }
    
});


function changeTheTheme() {
    
    body.style.background = '#eee';
    themeColor.style.boxShadow = '0 0 5px #888, 0 0 5px #888';
    container.style.background = '#eee';
    container.style.boxShadow = '0 0 35px #999';
    logo.style.boxShadow = '0 0 5px #666, 0 0 5px #666';
    btn.style.boxShadow = '0 0 5px #888, 0 0 5px #888';
    fontLogin.style.color = '#333';
    container.style.borderImage = 'linear-gradient(45deg,#eee, #b33000, #eee, #b33000) 1';
    statusTheme = false;
}


function setTheThemeBack() {

    body.style.background = '#333';
    container.style.background = 'rgb(49, 49, 49';
    container.style.boxShadow = '0 0 35px #111';
    themeColor.style.boxShadow = '0 0 5px #111, 0 0 5px #111';
    logo.style.boxShadow = '0 0 15px #222, 0 0 15px #222';
    btn.style.boxShadow = '0 0 5px #111, 0 0 5px #111';
    fontLogin.style.color = '#eee';
    container.style.borderImage = 'linear-gradient(45deg,#333, dodgerblue, #333, dodgerblue) 1';
    statusTheme = true;
}


