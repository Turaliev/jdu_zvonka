document.getElementById('phone').addEventListener('input', function (e) {
  let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});





let timer; 
let x = 30; 
countdown(); 
 function countdown(){
  document.getElementById('timer1').innerHTML = x;
  x--; 
  if (x<0){
    clearTimeout(timer); 
  }
  else {
    timer = setTimeout(countdown, 700);
  }
}




