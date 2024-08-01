const cursor = document.querySelector(".cursor");
var timeout;
document.addEventListener("mousemove", (e) => 
{ 
    let x = e.pageX; 
    let y = e.pageY; 
    cursor.style.top = y + "px";
     cursor.style.left = x + "px"; 
     cursor.style.dispaly="block";
     function mouseStopped(){
        cursor.style.dispaly="none";
     }
     clearTimeout(timeout);
     timeout = setTimeout(mouseStopped ,1000);
    });
    document.addEventListener("mouseout",() =>{
         cursor.style.dispaly="none";

    })
    const click=document.querySelector('.click');
    const giftBox=document.querySelector('.gift-box');
    const giftCcontainer=document.querySelector('.gift-container');
    const text=document.querySelector('.text');

  const shadow=document.querySelector('.shadow');
    click.addEventListener('click',()=>{
        if(click.className ==="click"){
            click.classList.add('active')
            giftBox.classList.add('active')
            shadow.classList.add('active')
            giftCcontainer.classList.add('active')
            text.classList.add('active')
            text.classList.add('active2')
            
        }
        else{
            click.classList.remove('active')
            giftBox.classList.remove('active')
            shadow.classList.remove('active')
            giftCcontainer.classList.remove('active')
            text.classList.remove('active')
            text.classList.remove('active2')
        }
        })
     
        