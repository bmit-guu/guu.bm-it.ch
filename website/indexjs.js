function uebermich() {
    var contentContainer = document.getElementById("GridR");
  
    var contentHTML = `
      <h1>Über mich<h1><br>
      
      <p style="color: #000000;">
      <b>Name Nachname: </b>Ulas Güvenç<br>
      <b>Geburtsdatum: </b>8. Juli 2003<br>

      </p>
    `;
  
    contentContainer.innerHTML = contentHTML;
    console.log("viewing 'Über mich");
  }
  