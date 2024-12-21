
var buttonPressed;
document.addEventListener('keypress', function(event){

       
    makeSound(event.key);
});




for(let i=0; i<document.querySelectorAll(".drum").length; i++){

  
    
    document.querySelectorAll("button")[i].addEventListener('click', function(){

    buttonPressed = this.innerHTML;
     makeSound(buttonPressed);

      
        

    });


        function makeSound(key){
            switch(key){
                case "w":
                    let tom1 = new Audio('sounds/tom-1.mp3');
                    tom1.play();
                    break;
        
                case "a":
                    let tom2 = new Audio('sounds/tom-2.mp3');
                    tom2.play();
                    break;
        
                case "s":
                    let tom3 = new Audio('sounds/tom-3.mp3');
                    tom3.play();
                    break;
        
                case "d":    
                    let tom4 = new Audio('sounds/tom-4.mp3');
                    tom4.play();
                    break;  
                
                case "j":   
                    let snare = new Audio('sounds/snare.mp3');
                    snare.play();
                    break;
        
                case "k":
                    let crash = new Audio('sounds/crash.mp3');
                    crash.play();
                    break;
        
                case "l":   
                    let kick = new Audio('sounds/kick-bass.mp3');
                    kick.play();
                    break;
              }
        }














}

/*
var audio = new Audio('audio_file.mp3');
audio.play();


document.addEventListener('keydown', function(e) {
    if(e.code == "KeyA") {
        console.log('A was pressed');
    }
});



let audio = new Audio('sounds/tom-1.mp3');
for(let i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener('keydown', function(e){

       if(this.innerText == "w"){
            audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        }

    


    });

}
*/