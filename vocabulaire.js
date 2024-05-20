document.addEventListener("DOMContentLoaded", function(){
  let nombres = document.getElementById("Nombres");
  let pronoms = document.getElementById("Pronoms");
  let quotidiens = document.getElementById("Quotidiens");

  nombres.style.display ="block";
  pronoms.style.display = "none";
  quotidiens.style.display = "none";

  document.getElementById("choix").addEventListener("change", function(){
    let selectedValue = this.value;

    if(selectedValue === "Nombres"){
      nombres.style.display = "block";
      pronoms.style.display = "none";
      quotidiens.style.display = "none";
    }
    else if(selectedValue === "Pronoms"){
      nombres.style.display = "none";
      pronoms.style.display = "block";
      quotidiens.style.display = "none";
    }
    else if(selectedValue === "Quotidiens"){
      nombres.style.display = "none";
      pronoms.style.display = "none";
      quotidiens.style.display = "block"
    }
  });
});