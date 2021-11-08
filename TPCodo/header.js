//var $txtheader = "todo el HTML con el header que quiero unificar";

var $txtheader = `
<header>

<nav>
      <img src="logo.PNG"
      alt="logo"
      loading="lazy"
      class="logo-img"/>
      <h1>EL BARÓN DE LA CERVEZA</h1>
      <ul class="navigation">
        <li><a href="index.html" class="nav-link">Inicio</a></li>
        <li><a href="club.html" class="nav-link">Ingresa o Registrate en El Club</a></li>
        <li><a href="venta.html" class="nav-link">Compra tus Cervezas</a></li>
        <li><a href="contacto.html" class="nav-link">Contactanos</a></li>
      </ul>
      

      
    </nav> 

   


</header>`;

document.getElementById("header").innerHTML = $txtheader;


