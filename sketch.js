let count;
let gameState = "on";
let winEl;
let loosing;
let playAgainButton;
let win;
let quantity = 2;

function setup(){
  noCanvas()
  res()
  playAgainButton = document.getElementById("playAgainButton")
  win = document.getElementById("Win")
  
}


function res(){
   
    count= 0;
    gameState = "on";
    winEl = []
    loosing= []

    qt = quantity-1
    
    winning = Math.round(Math.random(0)*qt)
    
    if (winning== -1){
      winning = Math.round(Math.random(0)*qt)
      //alert(winning)
    }
    cont = document.getElementById("divsContainer")

    amount = Math.round(100/29)
    cont.style.gridTemplateColumns = `repeat(${amount},27vw)`
    cont.style.gridGap = `40px`
  
    for(let num=0; num<quantity; num++){
      if(num==winning){
        l = createDiv("")
        value= "🏆"
        winEl[winEl.length] = `${num}choice`
        
        
      } else{
        l = createDiv("")
        value = ("🐐")
        loosing[loosing.length] = `${num}choice`
        
        
      }
      
      
      l.parent(cont)
      l.class("choiceDivs")
      l.id(`${num}choice`)
      //console.log(l.id)
      l = document.getElementById(`${num}choice`)
      idc = l.getAttribute("id")
    
      
      l.setAttribute("onclick", `showValue(ids="${idc}", val="${value}")`)
    }
  
}



function showValue(ids="None", val="None"){
  if(gameState=="on"){
  
    el = document.getElementById(ids)
    
  
    el.innerHTML = `<h1 class="choiceText">${val}</h1>`

    if(val=="🏆"){
    
      win.innerText = "YOU WON"
      win.style.color = "green"
      
      el.style.background = "linear-gradient(blue,green)"
      gameState = "off"
      for(let ind=0; ind<loosing.length; ind++){
        id = loosing[ind]
        wrong = document.getElementById(id)
        wrong.innerHTML = `<h1 class="choiceText">🐐</h1>`
        wrong.style.background = "linear-gradient(blue,red)"
        playAgainButton.style.display = "unset"
      }
     
      


    } else {
      count++
      el.style.background = "linear-gradient(blue,red)"
      if(count>=loosing.length){
        //alert(loosing)
        win.innerText = "YOU LOST"
        win.style.color = "red"
        
        winner = winEl[0]
        winner = document.getElementById(winner)
        //alert(winner.getAttribute("id"))
        winner.innerHTML = `<h1 class="choiceText">🏆</h1>`
        winner.style.background = "linear-gradient(blue,green)"
        
        gameState = "off"
        playAgainButton.style.display = "unset"
        
      } 
    }
  

    el.setAttribute("onclick", null)

  }
  
}
  


function redo(){
  
  win.innerText = ""
  cont.innerHTML = ""
  res()
  //document.location.reload()
  //res()
}


function next(){
  quantity++
  win.innerText = ""
  cont.innerHTML = ""
  res()
}

function back(){
  if(quantity<=2){
    quantity=3
  }
    quantity--
    win.innerText = ""
    cont.innerHTML = ""
    res()
  
  
}