const heading=document.querySelector('.maintext')
let text='I am Sam\nA Full Stack Developer'
let endvaal=1
let bool=1
let id=setInterval(() => {
    heading.textContent=text.substring(0,endvaal)
    if(bool){
        endvaal++
    }
    else{
        endvaal--
    }
    if(endvaal>text.length+10){
        bool=0
       
    }
    else if(endvaal<1){
        bool=1
    }
}, 150);