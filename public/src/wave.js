const wave = document.getElementById("wave")
const nowave = document.getElementById('nowave')

wave.addEventListener('click',()=>{
   wave.classList.add('changecolor');
   nowave.classList.remove('changecolor');
})

nowave.addEventListener('click',()=>{
    nowave.classList.add('changecolor');
    wave.classList.remove('changecolor');
 })