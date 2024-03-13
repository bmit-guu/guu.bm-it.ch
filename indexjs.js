function uebermich() {
    var contentContainer = document.getElementById("GridR");
  
    var contentHTML = `
    <h1 class="inhaltsTitel">Über mich<h1><br>
    <img style="min-width: 14%; max-width: 50%; height: auto;" src="./portfolio.svg">
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

      <div style="color: #000000; font-size: 24px;">
      <h2>Gaming</h2><br>
      Ich interessiere mich für verschiedene Spielarten und für die Gaming-Industrie. Vorzugsweise spiele ich Games,<br>
      die eigenartiges Spieldesign und komplexe Spielmechaniken haben. Ich interessiere mich auch für die Softwareseite <br>
      der Spielen. Mit den Codes der Spielen exprementiere ich sehr gerne und lerne dabei die Funktionsweise verschiedener <br>
      Spielmechaniken.<br><br>
      <h2>Spazieren</h2><br>
      Ich gehe gerne in Wäldern und an Ufern spazieren.<br><br>
      <h2>Im Internet surfen</h2><br>
      Im Internet kann ich viele unterhaltende Sachen finden. Meine Lieblingswebseiten sind YouTube und Wikipedia.
      </div>

    `;
  
    contentContainer.innerHTML = contentHTML;
  }

  function zertifikate() {
    var contentContainer = document.getElementById("GridR");

    var contentHTML = `
      <h1 style="font-size:54px; color: #000000">Zertifikate<h1><br><br>

      <p style="color: #000000; font-size: 24px;">
      <a href="./sololearn_python.pdf">Sololearn-Introduction to Python (PDF)</a><br>
      <a href="./sololearn_csharp.pdf">Sololearn-Introduction to C# (PDF)</a>
      </p>
    `;
  
    contentContainer.innerHTML = contentHTML;
  }

  function impressum() {
    var contentContainer = document.getElementById("GridR");

    var contentHTML = `
      <p style="color: #000000; font-size: 14px; font-weight: bold;">
      Ulas Güvenc<br>
      E-Mail:ulasguevenc@gmail.com<br>
      Tel.: +41 76 671 12 23<br>
      </p>
    `;
  
    contentContainer.innerHTML = contentHTML;
  }