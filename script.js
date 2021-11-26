const submit = document.querySelector('.sub')
const english=document.querySelector('.eng')
const maths=document.querySelector('.math')
const social=document.querySelector('.soc')
const science=document.querySelector('.sci')
const show =document.querySelector('.show')


submit.addEventListener('click',(e)=>{
  
const  englishVAl=Number(english.value);
const mathsVal=Number(maths.value);
const socialVal=Number(social.value);
const scienceVal=Number(science.value);
const total = englishVAl+mathsVal+socialVal+scienceVal;
const percent=total/4 
 
show.style.display="block";
 
 show.innerHTML=`<h3>you have scored ${total} marks with the percentage of ${percent}</h3>`
 setTimeout(()=>{
   show.style.display="none";
 },5000)
 console.log(show);
console.log(typeof(total));
})