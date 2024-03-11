function uebermich() {
    var contentContainer = document.getElementById("GridR");
  
    var contentHTML = `
    <h1 class="inhaltsTitel">Über mich<h1><br>
    <img style="max-width: 50%; height: auto;" src="./portfolio.svg">
    <p class="inhalt">
    <b>Name, Vorname: </b>Güvenç Ulas<br><br>
    <b>Geburtsdatum: </b>8. Juli 2003<br><br>
    <b>Ausbildung:</b><br>
    2009-2016: Primar- und Oberstufenschule (Türkei)<br>
    2016-2020: Sekundarschule<br>
    2020-2021: 10. Schuljahr, KSB Aarau<br>
    2021-2021: Praktikum als Konstrukteur EFZ<br>
    2022-2022: Vorlehre ICT-Fachmann EFZ<br>
    2022-2023: Vorlehre Informatiker EFZ<br>
    2023-heute: 1. Lehrjahr als Informatiker EFZ, Applikationsentwicklung<br>
    </p>
    `;
  
    contentContainer.innerHTML = contentHTML;
  }
  
  function hobbys() {
    var contentContainer = document.getElementById("GridR");

    var contentHTML = `
      <h1 style="font-size:54px; color: #000000">Hobbys<h1><br><br>

      <p style="color: #000000; font-size: 24px;">
      Spazieren gehen, Zocken, Im Internet surfen
      </p>

    `;
  
    contentContainer.innerHTML = contentHTML;
  }

  function zertifikate() {
    var contentContainer = document.getElementById("GridR");

    var contentHTML = `
      <h1 style="font-size:54px; color: #000000">Zertifikate<h1><br><br>

      <p style="color: #000000; font-size: 24px;">
      ...
      </p>

    `;
  
    contentContainer.innerHTML = contentHTML;
  }

  function impressum() {
    var contentContainer = document.getElementById("GridR");

    var contentHTML = `
      <p style="color: #000000; font-size: 18px; font-weight: bold;">
      Ulas Güvenc<br>
      E-Mail:ulasguevenc@gmail.com<br>
      Tel.: +41 76 671 12 23<br>
      </p>
    `;
  
    contentContainer.innerHTML = contentHTML;
  }