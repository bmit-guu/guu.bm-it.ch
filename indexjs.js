function uebermich() {
    var contentContainer = document.getElementById("GridR");
  
    var contentHTML = `
      <h1 style="font-size:54px;">Über mich<h1><br>
      
      <p style="color: #000000; font-size: 24px;">
      <b>Name Nachname: </b>Ulas Güvenç<br><br>
      <b>Geburtsdatum: </b>8. Juli 2003<br><br>
      <b>Ausbildung:</b><br>
      2009-2016: Primar- und Oberstufenschule (Türkei)<br>
      2016-2020: Oberstufenschule<br>
      2020-2021: 10. Schuljahr, KSB Aarau<br>
      2021-2021: Praktikum als Konstrukteur EFZ<br>
      2022-2022: Vorlehre ICT-Fachmann EFZ<br>
      2022-2023: Vorlehre Informatiker EFZ<br>
      2023-heute: 1. Lehrjahr als Informatiker EFZ, Applikationsentwicklung
      </p>
    `;
  
    contentContainer.innerHTML = contentHTML;
  }
  
  function hobbys() {
    var contentContainer = document.getElementById("GridR");

    var contentHTML = `
      <h1 style="font-size:54px;">Hobbys<h1><br><br>

      <p style="color: #000000; font-size: 24px;">
      Spazieren gehen, Zocken, Im Internet surfen
      </p>

    `;
  
    contentContainer.innerHTML = contentHTML;
  }

  function zertifikate() {
    var contentContainer = document.getElementById("GridR");

    var contentHTML = `
      <h1 style="font-size:54px;">Zertifikate<h1><br><br>

      <p style="color: #000000; font-size: 24px;">
      Wird hinzugefügt...
      </p>

    `;
  
    contentContainer.innerHTML = contentHTML;
  }