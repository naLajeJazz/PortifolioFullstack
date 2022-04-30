

  


///Manipulando elementos atraves da rota
const url_atual = window.location.pathname
//rota home
if (url_atual == '/home'){
document.getElementById('menuHome').className='border-dark border-bottom shadow-sm  border-4 rounded nav-link text-dark fs-5 active'

/*
//////anima o elemento h1 titulo do home quando mouseover

document.getElementById("alerta").addEventListener("mouseover", mouseOver);
document.getElementById("alerta").addEventListener("mouseout", mouseOut);

function mouseOver() {
document.getElementById("alerta").className='bg-warning  animate__animated animate__bounce p-3 my-5 mx-5 rounded  shadow-sm'


};

function mouseOut() { 
document.getElementById("alerta").className=' p-3 my-5 mx-5 rounded  shadow-sm'


};

*/



}
// rota dev
else if(url_atual == '/dev'){
document.getElementById('menuDev').className=' border-info border-bottom border-4 shadow-sm rounded nav-link text-dark fs-5 active'
}
// rota arte
else if(url_atual == '/arte'){
document.getElementById('menuArte').className='border-dark border-bottom border-4 shadow-sm rounded nav-link text-dark fs-5 active'
}
// rota sobre
else if(url_atual == '/sobre'){
document.getElementById('menuSobre').className='border-dark border-bottom border-4 shadow-sm rounded nav-link text-dark fs-5 active'
}
//rota contato
else if(url_atual == '/contato'){
//
document.getElementById('menuContato').className='border-warning border-bottom border-4 shadow-sm rounded nav-link text-dark fs-5 active'
//anima o botao
    setTimeout(disparaBtnAtencao, 1000)
   
    function disparaBtnAtencao() {
                      
        document.getElementById("btnAtencao").className=
        "mt-4 shadow  btn btn-warning animate__animated animate__bounce  animate__repeat-3 animate__slower"
                                               
    }
    
}
// rota admin
else if(url_atual == '/admin'){
document.getElementById('menuAdmin').className='border-dark border-bottom border-4 shadow-sm rounded nav-link text-dark fs-5 active'
}else if (url_atual == '/contatosubmit'){
    document.getElementById('alertaMsg').addEventListener('click',()=>{alert('sua mensagem foi enviada para nosso banco de dados')})
}



console.log(url_atual)
