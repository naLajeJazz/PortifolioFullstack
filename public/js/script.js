



const url_atual = window.location.pathname

if (url_atual == '/home'){
document.getElementById('menuHome').className=' border-bottom shadow-sm  border-4 rounded nav-link text-dark fs-5 active'
}else if(url_atual == '/dev'){
document.getElementById('menuDev').className=' border-bottom border-4 shadow-sm rounded nav-link text-dark fs-5 active'
}else if(url_atual == '/arte'){
document.getElementById('menuArte').className=' border-bottom border-4 shadow-sm rounded nav-link text-dark fs-5 active'
}else if(url_atual == '/sobre'){
document.getElementById('menuSobre').className=' border-bottom border-4 shadow-sm rounded nav-link text-dark fs-5 active'
}else if(url_atual == '/contato'){
document.getElementById('menuContato').className=' border-bottom border-4 shadow-sm rounded nav-link text-dark fs-5 active'
}else if(url_atual == '/admin'){
document.getElementById('menuAdmin').className=' border-bottom border-4 shadow-sm rounded nav-link text-dark fs-5 active'
}


/*
document.getElementById("alerta").addEventListener("mouseover", mouseOver);
document.getElementById("alerta").addEventListener("mouseout", mouseOut);
*/
/*
 setTimeout(mouseOver, 1000);

function mouseOver() {
document.getElementById("alerta").className='bg-dark text-info p-3 my-5 mx-5 rounded  shadow-sm'
document.getElementById("alertatxt").className='text-white text-center fonte'
 setTimeout(mouseOut, 1000);
};
function mouseOut() { 
document.getElementById("alerta").className='bg-white  p-3 my-5 mx-5 rounded  shadow-sm'
document.getElementById("alertatxt").className='text-dark text-center fonte'
setTimeout(mouseOver, 1000);
};

*/


console.log(url_atual)
