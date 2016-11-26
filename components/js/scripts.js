/*You can have as many different javascript files as you like. 
They will all be compiled to ES5, concantenated and linted for the dev build and
minified with comments removed for the dist build.*/

document.onscroll= () =>{ document.querySelector('#navbar').className='navbar visible';};
document.querySelector('.closed').onclick = () => {document.querySelector('#submenu').classList.toggle("slideDown");};