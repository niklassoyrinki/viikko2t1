function jarjesta() {
  var luku1, luku2, luku3;
  luku1 = parseInt(document.getElementById('eka').value);
  luku2 = parseInt(document.getElementById('toka').value);
  luku3 = parseInt(document.getElementById('kolmas').value);
  if (luku1 < luku2) {
    if (luku3 > luku2) {
      vastaa(luku1, luku2, luku3);

    } else if (luku3 > luku1) {
      vastaa(luku1, luku3, luku2);
    } else {
      vastaa(luku3, luku1, luku2);
    }
  } else {
    if (luku3 > luku1) {
      vastaa(luku2, luku1, luku3);

    } else if (luku3 > luku2) {
      vastaa(luku2, luku3, luku1);
    } else {
      vastaa(luku3, luku2, luku1);
    }
  }



}

function vastaa(eka, toka, kolmas) {
  document.write("Lukujen jÃ¤rjestys: " + eka + ' ' + toka + ' ' + kolmas);


}

function asd() {
  var luku1, luku2, luku3, luku4, luku5;
  luku1 = parseInt(document.getElementById('luku1').value);
  luku2 = parseInt(document.getElementById('luku2').value);
  luku3 = parseInt(document.getElementById('luku3').value);
  luku4 = parseInt(document.getElementById('luku4').value);
  luku5 = parseInt(document.getElementById('luku5').value);
  if (luku1 > luku2) {
    if (luku1 > luku3) {
      if (luku1 > luku4) {
        if (luku1 > luku5)
          document.write("Suurin on: " + luku1);
      }
    }
  }

  if (luku2 > luku1) {
    if (luku2 > luku3) {
      if (luku2 > luku4) {
        if (luku2 > luku5)
          document.write("Suurin on: " + luku2);
      }
    }
  }

  if (luku3 > luku1) {
    if (luku3 > luku2) {
      if (luku3 > luku4) {
        if (luku3 > luku5)
          document.write("Suurin on: " + luku3);
      }
    }
  }

  if (luku4 > luku1) {
    if (luku4 > luku2) {
      if (luku4 > luku3) {
        if (luku4 > luku5)
          document.write("Suurin on: " + luku4);
      }
    }
  }
  if (luku5 > luku1) {
    if (luku5 > luku2) {
      if (luku5 > luku3) {
        if (luku5 > luku4)
          document.write("Suurin on:" + luku5);

      }
    }
  }

}



function paritonParillinen() {

  var arvo;
  arvo = parseInt(document.getElementById("luku").value);
  document.write("Antamasi luku: " + arvo);
  if (arvo % 2 == 0) {
    document.write("<br>Antamasi luku on parillinen");
  } else {
    document.write("<br>Antamasi luku on pariton");
  }


}
function ajoneuvo() {

  var ika;
  ika = parseInt(document.getElementById("ika").value);
  document.write("Antamasi luku: " + ika);
  if (ika <16 ) {
    document.write("<br>Saa ajaa polkupyörää");
  } else if (ika <18) {
document.write("<br>Saa ajaa mopoa");
  }
   else {
    document.write("<br>Saa ajaa autoa");
  }


}

function kaanna() {

  var kieli;
  kieli = document.getElementById("kieli").value;
  document.write(kieli);
  if (kieli== "eng" ) {
    document.write("<br>Hello World");
  } else if (kieli== "swe") {
document.write("<br>Hej världen!");
  }
   else {
    document.write("<br>Hola Mundo!");
  }


}
