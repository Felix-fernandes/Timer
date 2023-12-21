let hora=document.querySelector(".horas")
let minutos=document.querySelector(".minutos")
let segundos=document.querySelector(".segundos")
let hora2=document.querySelector(".hora2")
let minutos2=document.querySelector(".minuto2")
let segundos2=document.querySelector(".segundos2")
let date=document.querySelector(".data")
let ativar=document.querySelector("#btn_ativar")
let parar=document.querySelector("#btn_parar")
let input=document.querySelector("#inum")
let horaDoAlarme=document.querySelector("#hora_alarme")
let container=document.querySelector(".container")

let ativo=false
let tocando=false
let tempo_atual=undefined
let tempo_do_alarme=undefined

let audio=new Audio('C:/Users/FELIX FERNANDES.DESKTOP-6BAI4FU/Desktop/Alarme cbf cursos/[MP3DOWNLOAD.TO] Black Clover - Opening 7 (HD)-320k.mp3')

audio.loop=-1

setInterval(()=>{

    let data = new Date()

    date.innerHTML=`${data.getDate()} / ${data.getMonth()} / ${data.getFullYear()}`
    
    data.getHours() > 9 ? hora.innerHTML=data.getHours() : hora.innerHTML= "0" + data.getHours()

    data.getMinutes() > 9 ? minutos.innerHTML=data.getMinutes() : minutos.innerHTML= "0" + data.getMinutes()

    data.getSeconds() > 9 ? segundos.innerHTML=data.getSeconds() : segundos.innerHTML= "0" + data.getSeconds()
       
},1000)

ativar.addEventListener("click",()=>{
    ativo=true
    tempo_atual=Date.now()
    tempo_do_alarme=tempo_atual+(input.value*1000)
    let data2=new Date(tempo_do_alarme)

    horaDoAlarme.innerHTML=`Hora do alarme : ${data2.getHours() > 9 ? hora2.innerHTML=data2.getHours() : hora2.innerHTML= "0" + data2.getHours()}
    :${data2.getMinutes() > 9 ? minutos2.innerHTML=data2.getMinutes() : minutos2.innerHTML= "0" + data2.getMinutes()}
    :${ data2.getSeconds() > 9 ? segundos2.innerHTML=data2.getSeconds() : segundos2.innerHTML= "0" + data2.getSeconds()}`

    setInterval(()=>{
      if(tocando==false)
        if(Date.now()>=tempo_do_alarme && ativo==true){
            audio.play()
            container.classList.add("tocando")
        }
        
    },1000)

})

parar.addEventListener("click",()=>{

    ativo=false
    container.classList.remove("tocando")
    horaDoAlarme.innerHTML="Hora do alarme"
    input.value=""
    audio.pause()
    audio.currentTime=0
})
