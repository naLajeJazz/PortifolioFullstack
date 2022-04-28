

  setTimeout(disparaBtnAtencao, 1500)

function disparaBtnAtencao() {
                  
     document.getElementById("btnAtencao").className=
     "mt-4 btn btn-secondary animate__animated animate__bounce animate__slower "
                                            
}



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



document.getElementById("alerta").addEventListener("mouseover", mouseOver);
document.getElementById("alerta").addEventListener("mouseout", mouseOut);






function mouseOver() {
document.getElementById("alerta").className='animate__animated animate__bounce p-3 my-5 mx-5 rounded  shadow-sm'


};

function mouseOut() { 
document.getElementById("alerta").className=' p-3 my-5 mx-5 rounded  shadow-sm'


};


console.log(url_atual)
