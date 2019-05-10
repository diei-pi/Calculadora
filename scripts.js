function divi(){
  let a = document.getElementById("a");
  let b = document.getElementById("b");
  let resultado = document.getElementById("resultado");

  let va = parseInt(a.value);
  let vb = parseInt(b.value);
  if (va<vb) {
    va = parseInt(b.value);
    vb = parseInt(a.value);
  }
  let x=1;
  let i;

  for (i = 2; i <= vb ;i++) {
    if (vb%i == 0)
    {
      if (va%i == 0)
      {
        x = x + " - " + i;
      }
    }
  }
  resultado.textContent = x;

}
