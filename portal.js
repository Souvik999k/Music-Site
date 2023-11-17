const search=document.querySelector('.click');
const btn=document.querySelector('.btn');
const input=document.querySelector('.input');
const icon =btn.children[0];
btn.addEventListener('click', function(){
    search.classList.toggle('active');
    input.focus();
    icon.classList.toggle('fa-magnifying-glass');
    icon.classList.toggle('fa-circle-xmark');
});
const home=document.querySelectorAll('.home');
const body=document.querySelector('body');

home[0].addEventListener('click', function(){

    home[0].classList.add('focus');
    home[1].classList.remove('focus');
    home[2].classList.remove('focus');
});
home[1].addEventListener('click', function(){
    home[1].classList.add('focus');
    home[0].classList.remove('focus');
    home[2].classList.remove('focus');

});
home[2].addEventListener('click', function(){
    home[2].classList.add('focus');
    home[0].classList.remove('focus');
    home[1].classList.remove('focus');
});
const wish=document.querySelectorAll('.wish');
wish[0].addEventListener('click', function(){
    wish[0].style.display="block";
alert("Add to Wishlist");
});
wish[1].addEventListener('click', function(){
    wish[1].style.display="block";
    alert("Add to Wishlist");
    });
    wish[2].addEventListener('click', function(){
        wish[2].style.display="block";
        alert("Add to Wishlist");
        });
        wish[3].addEventListener('click', function(){
            wish[3].style.display="block";
            alert("Add to Wishlist");
            });
            wish[4].addEventListener('click', function(){
                wish[4].style.display="block";
                alert("Add to Wishlist");
                });
                wish[5].addEventListener('click', function(){
                    wish[5].style.display="block";
                    alert("Add to Wishlist");
                    });
                    wish[6].addEventListener('click', function(){
                        wish[6].style.display="block";
                        alert("Add to Wishlist");
                        });
                        wish[7].addEventListener('click', function(){
                            wish[7].style.display="block";
                            alert("Add to Wishlist");
                            });
                            wish[8].addEventListener('click', function(){
                                wish[8].style.display="block";
                                alert("Add to Wishlist");
                                });
                                wish[9].addEventListener('click', function(){
                                    wish[9].style.display="block";
                                    alert("Add to Wishlist");
                                    });
                                    wish[10].addEventListener('click', function(){
                                        wish[10].style.display="block";
                                        alert("Add to Wishlist");
                                        });
                                        wish[11].addEventListener('click', function(){
                                            wish[11].style.display="block";
                                            alert("Add to Wishlist");
                                            });
                                            wish[12].addEventListener('click', function(){
                                                wish[12].style.display="block";
                                                alert("Add to Wishlist");
                                                });
                                                wish[13].addEventListener('click', function(){
                                                    wish[10].style.display="block";
                                                    alert("Add to Wishlist");
                                                    });
                                                    wish[14].addEventListener('click', function(){
                                                        wish[14].style.display="block";
                                                        alert("Add to Wishlist");
                                                        });
                                                        wish[15].addEventListener('click', function(){
                                                            wish[15].style.display="block";
                                                            alert("Add to Wishlist");
                                                            });
                                                            wish[16].addEventListener('click', function(){
                                                                wish[16].style.display="block";
                                                                alert("Add to Wishlist");
                                                                });
                                                                wish[17].addEventListener('click', function(){
                                                                    wish[17].style.display="block";
                                                                    alert("Add to Wishlist");
                                                                    });
                                 
    //    var picture =document.querySelector(".picture");
    //    var image=picture.children[0];
    //    picture.addEventListener('click',function(){
        
    //     var overlay=document.createElement('div');   
    //     overlay.id="overlay "  ;    
 
    //     document.body.append(overlay);
    //     const myOverlay=document.getElementById("#overlay"); 
    //    var pic = documemt.createElement("img");
    //    pic.src="photos/p1.png";
    //    pic.id="pic1";
    // //    pic2=document.getElementById("pic1");
    //    overlay.append(pic);
 
    
    //     picture.style.width=window.innerWidth+'px';
    //    picture.style.height=window.innerHeight+'px';

       
       
        
    //    })

    // document.querySelector(".picture").onclick = function(){
    //     var overlay = document.createElement("div");
    //     overlay.style.width="300px";
    //     overlay.style.height="300px";
    //     overlay.style.backgroundColor = "white";
    //     // overlay.style.position = "absolute";
    //     document.body.appendChild(overlay);
    //     this.querySelector("img").src = 

    // }
    var music=document.querySelectorAll(".card");
    music.forEach(function(card){
        card.addEventListener('click',function(){
            document.querySelectorAll('audio').forEach(function(song){
                song.pause();
            })
          
            // this.querySelector("audio").play();
            document.querySelector('.modal-img').src=this.querySelector("img").src;
            var button=document.querySelector(".play");
            button.addEventListener('click',function(){
            
if(button.innerText=="play"){

                card.querySelector("audio").play();
                button.innerText="Close";
}

else{
          card.querySelector("audio").pause();
                button.innerText="play";
}
                // button.addEventListener('click',function(){
                //     card.querySelector("audio").pause();
                // button.innerText="play";
                // });
             });
        });

    });
function refresh(){
window.addEventListener('click',function(){
       window.location.reload();
    });
}

   
