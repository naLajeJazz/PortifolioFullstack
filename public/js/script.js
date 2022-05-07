

 ///Manipulando elementos atraves da rota
const url_atual = window.location.pathname

//rota home
if (url_atual == '/home' || url_atual == "/"){

    document.getElementById('menuHome').className="border-warning border-bottom   border-4 rounded nav-link text-warning fs-5 active"
    document.getElementById('header').className="bgImg  fonte bg-white   container-fluid  static-top"
    document.getElementById('headerDiv').className="pt-3  bck  animate__slow animate__animated animate__fadeInDown "
    
}
// rota dev
else if(url_atual == '/dev'){

//indica borda inferior no botao "Dev"  
document.
getElementById('menuDev').className=' border-warning border-bottom border-4  rounded nav-link text-warning fs-5 active'


}
// rota arte
else if(url_atual == '/arte'){

//indica borda inferior no botao "Arte"    
document.getElementById('menuArte').className='border-warning border-bottom border-4  rounded nav-link text-warning fs-5 active'

}
// rota sobre
else if(url_atual == '/sobre'){

 //indica borda inferior no botao "Sobre"
document.getElementById('menuSobre').className='border-warning border-bottom border-4  rounded nav-link text-warning fs-5 active'

}
//rota contato
else if(url_atual == '/contato'){

//indica borda inferior no botao "Contato"
document.getElementById('menuContato').className='border-warning border-bottom border-4  rounded nav-link text-warning fs-5 active'

//anima o botao
setTimeout(disparaBtnAtencao, 1000)
function disparaBtnAtencao() {
                      
        document.getElementById("btnAtencao").className="mt-4 shadow  btn btn-warning animate__animated animate__bounce  animate__repeat-3 animate__slower"
                                               
    }
    
}
// rota admin
else if(url_atual == '/admin'){
document.getElementById('menuAdmin').className='border-warning border-bottom border-4  rounded nav-link text-warning fs-5 active'


}else if (url_atual == '/contatosubmit'){
    document.getElementById('alertaMsg').addEventListener('click',()=>{alert('sua mensagem foi enviada para nosso banco de dados')})
}else if (url_atual == '/projeto1'){

    document.getElementById('myCanvas').className="bck mx-auto d-block my-3 poit"

   function Game(){

        const info= document.querySelector(".info");
        const info2= document.querySelector(".info2");
        const info3= document.querySelector(".info3");
        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");
        canvas.width=700;
        canvas.height=500;
        canvas.style.backgroundColor='black';
        let mouse = {};
        
                
                
                function loop(){
                    requestAnimationFrame(loop,canvas);
        
                    canvas.addEventListener('mousemove',mMove)
        
                    function mMove(){
        
                   
                    ctx.clearRect(0,0,canvas.width,canvas.height);
                    ctx.save();
                    // var img = document.getElementById("ship");
                    //ctx.drawImage(img, 10, 10);
                    // let caixa=new Objeto(16,16,mouse.x-16,mouse.y-96,'red');
        
                    
        
                    ctx.beginPath();
                    ctx.strokeStyle='gray';
                    ctx.moveTo(mouse.x-16,Math.abs(mouse.y-76)*1.1);
                    ctx.lineTo(0,100);
                    ctx.moveTo(mouse.x-16,Math.abs(mouse.y-76)*1.1);
                    ctx.lineTo(0,canvas.height);
                    ctx.moveTo(mouse.x-16,Math.abs(mouse.y-76)*1.1);
                    ctx.lineTo(canvas.width,100);
                    ctx.moveTo(mouse.x-16,Math.abs(mouse.y-76)*1.1);
                    ctx.lineTo(canvas.width,canvas.height);
                    
                    //ctx.moveTo(0,mouse.y-64);
                    //ctx.lineTo(600,mouse.y-64);
                    //ctx.moveTo(mouse.x-16,mouse.y-96);
                    //ctx.lineTo(200,400);
                    //ctx.moveTo(mouse.x-16,mouse.y-96);
                    //ctx.lineTo(canvas.width,mouse.y+10);
                    //ctx.moveTo(mouse.x-16,mouse.y-96);
                    //ctx.lineTo(200,0);
                    
                    ctx.stroke();
        
                    var img = document.getElementById("ship");
                    ctx.drawImage(img,mouse.x-96,mouse.y-120, 164,164);
        
        
                    ctx.restore()
                }
                    
                    
                    
                }loop()
        
        
        
                
        
                canvas.addEventListener('mousemove',function(e){
                    mouse.x = e.screenX - canvas.offsetLeft;
                    mouse.y = e.screenY - canvas.offsetTop;
                    mouse.move=true;
                   
                    info.innerHTML= `mouse.x ${mouse.x}`
                    info2.innerHTML= `mouse.y ${mouse.y}`
                    info3.innerHTML= `info ${Math.abs(mouse.y-76)*1.1} `
        
        
                    
                },false);
              
               
                
                function Objeto(w,h,x,y,cor){
                    this.w=w;
                    this.h=h;
                    this.x=x;
                    this.y=y;
                    
                    ctx.fillStyle = cor;
                    ctx.fillRect(this.x, this.y, this.w, this.h);
        
                };
        
                
               
            }Game()


    }else if(url_atual == "/projeto2"){

        document.getElementById('myCanvas').className="bck mx-auto d-block my-3 poit"

        function Game(){
     
             const info= document.querySelector(".info");
             const info2= document.querySelector(".info2");
             const info3= document.querySelector(".info3");
             const canvas = document.getElementById("myCanvas");
             const ctx = canvas.getContext("2d");
             canvas.width=640;
             canvas.height=320;
             canvas.style.backgroundColor='black';
             let mouse = {};
             
             function Objeto(w,h,x,y,cor){
                this.w=w;
                this.h=h;
                this.x=x;
                this.y=y;
                
                ctx.fillStyle = cor;
                ctx.fillRect(this.x, this.y, this.w, this.h);
    
            };



                      
                     
                        
                    
                        let boxX=0;
                        let boxY=160;
                        let balX=320;
                        let balY=160;
                        let balDir="direita"
                        let spd =8
                     
                        window.addEventListener("keyup",()=>{k='p'})
                        window.addEventListener("keydown",function(event){
                       
                            let k= event.key
                            
                           
                                
                                if (k == "s" && boxY+64 < 320){
                                    
                                    boxY+=spd
                                
                                }else if(k =="w" && boxY > 0){
                                   
                                    boxY-=spd
                                
                                }
                                
                                


                 
                           
                             
                         },false);

                         
            
            
                     function loop(){
                         requestAnimationFrame(loop,canvas);
                         info3.innerHTML= `balDir ${balDir} balX ${balX} balY ${balY} `
                         info2.innerHTML= `boxY ${boxY} boxY lim ${boxY+64}`
                               // y1-=spd/3
                                //y2-=spd/3
                                if (balX >= 608 && balY+16>=boxY && balY<boxY+64){

                                    balDir="esquerda"
                                    
                                }
                                if (balX <= 16){
                                    
                                    balDir="direita"
                                }


                                if (balDir =="direita"){

                                    balX+=spd/2
                                    
                                }else if (balDir == "esquerda"){

                                    balX-=spd/2
                                }
                       
                        
                         ctx.clearRect(0,0,canvas.width,canvas.height);
                         ctx.save();
                         
             
                      let sprite=new Objeto(16,64,boxX,boxY,'white')
                      let sprite2=new Objeto(16,64,624,boxY,'white')
                      let sprite3=new Objeto(16,16,balX,balY,'red')

                       /* ctx.beginPath();
                        ctx.lineWidth = 1;
                        ctx.strokeStyle='green'
                        ctx.moveTo(x1, y1);
                        ctx.lineTo(x2, y2);
                        
                     
                        
                        ctx.stroke();
             */



                         ctx.restore()
                    
                         //info.innerHTML= `ponto a x1= ${x1} y1= ${y1} `
                        // info2.innerHTML= `ponto b x2= ${x2} y2= ${y2}`
                        
                         
                     }loop()
             
             
             
                     
             
                    
                   
                    
                     
                  
             
                     
                    
                 }Game()
     
    }