
  

///Manipulando elementos atraves da rota
const url_atual = window.location.pathname
//rota home
if (url_atual == '/home'){
document.getElementById('menuHome').className='border-warning border-bottom   border-4 rounded nav-link text-warning fs-5 active'
document.getElementById('header').className="bgImg fonte bg-white shadow-sm  container-fluid  static-top"

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
document.getElementById('menuDev').className=' border-warning border-bottom border-4  rounded nav-link text-warning fs-5 active'
}
// rota arte
else if(url_atual == '/arte'){
document.getElementById('menuArte').className='border-warning border-bottom border-4  rounded nav-link text-warning fs-5 active'
}
// rota sobre
else if(url_atual == '/sobre'){
document.getElementById('menuSobre').className='border-warning border-bottom border-4  rounded nav-link text-warning fs-5 active'
}
//rota contato
else if(url_atual == '/contato'){
//
document.getElementById('menuContato').className='border-warning border-bottom border-4  rounded nav-link text-warning fs-5 active'
//anima o botao
    setTimeout(disparaBtnAtencao, 1000)
   
    function disparaBtnAtencao() {
                      
        document.getElementById("btnAtencao").className=
        "mt-4 shadow  btn btn-warning animate__animated animate__bounce  animate__repeat-3 animate__slower"
                                               
    }
    
}
// rota admin
else if(url_atual == '/admin'){
document.getElementById('menuAdmin').className='border-warning border-bottom border-4  rounded nav-link text-warning fs-5 active'
setTimeout(()=>{document.getElementById('textoIntro').className='fonte text-info  animate__animated animate__bounceOutRight'},3000)

}else if (url_atual == '/contatosubmit'){
    document.getElementById('alertaMsg').addEventListener('click',()=>{alert('sua mensagem foi enviada para nosso banco de dados')})
}else if (url_atual == '/projeto1'){

    document.getElementById('myCanvas').className="bck mx-auto d-block my-3 poit"

    function drawCanvas(){
        const info= document.querySelector(".info");
        const info2= document.querySelector(".info2");
        const info3= document.querySelector(".info3");
        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");
        canvas.width=400;
	    canvas.height=400;
        canvas.style.backgroundColor='black';
        let mouse = {};
        
        function loop(){
            requestAnimationFrame(loop,canvas);

            canvas.addEventListener('mousemove',md)

            function md(){

           
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.save();
           // let caixa=new Objeto(16,16,mouse.x,mouse.y,'red');
            ctx.beginPath();
            ctx.strokeStyle='red'
            ctx.moveTo(mouse.x,mouse.y);
            ctx.lineTo(0,0);
            ctx.moveTo(mouse.x,mouse.y);
            ctx.lineTo(0,400);
            ctx.moveTo(mouse.x,mouse.y);
            ctx.lineTo(400,0);
            ctx.moveTo(mouse.x,mouse.y);
            ctx.lineTo(400,400);
            ctx.moveTo(mouse.x,mouse.y);
            ctx.lineTo(0,200);
            ctx.moveTo(mouse.x,mouse.y);
            ctx.lineTo(200,400);
            ctx.moveTo(mouse.x,mouse.y);
            ctx.lineTo(400,200);
            ctx.moveTo(mouse.x,mouse.y);
            ctx.lineTo(200,0);
            
            ctx.stroke();
            ctx.restore()
        }
            
            
            
        }loop()



        

        canvas.addEventListener('mousemove',function(e){
            mouse.x = e.screenX - canvas.offsetLeft;
            mouse.y = e.screenY - canvas.offsetTop;
            mouse.move=true;
           
            info.innerHTML= `mouse.x ${mouse.x}`
            info2.innerHTML= `mouse.y ${mouse.y}`
            info3.innerHTML= `info`


            
        },false);
      
       
        
        function Objeto(w,h,x,y,cor){
            this.w=w;
            this.h=h;
            this.x=x;
            this.y=y;
            
            ctx.fillStyle = cor;
            ctx.fillRect(this.x, this.y, this.w, this.h);

        };

        
       
    };drawCanvas()
    
      
   
    
    }
    
    
    
  
