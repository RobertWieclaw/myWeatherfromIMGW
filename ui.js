class UI {
  constructor() {
    this.stacja = document.getElementById('w-stacja');
    this.dataPomiaru = document.getElementById('w-data_pomiaru');
    this.godzina = document.getElementById('w-godzina_pomiaru');
    this.numer = document.getElementById('w-id_stacji');
    this.temperatura = document.getElementById('w-temperatura');
    this.wiatrPr = document.getElementById('w-predkosc_wiatru');
    this.wiatrKier = document.getElementById('w-kierunek_wiatru');
    this.wilgotnosc = document.getElementById('w-wilgotnosc_wzgledna');
    this.opad= document.getElementById('w-suma_opadu');
    this.cisnienie = document.getElementById('w-cisnienie');
   }

  paint(imgwhttp) {
    this.stacja.textContent = imgwhttp.stacja;
    this.dataPomiaru.textContent = imgwhttp.data_pomiaru;
    this.godzina.textContent = `godzina: ${imgwhttp.godzina_pomiaru}`;
    this.numer.textContent = `nr stacji: ${imgwhttp.id_stacji}`;
    this.temperatura.textContent = `* temperatura: ${imgwhttp.temperatura} st. C *`;
    this.wiatrPr.textContent = `* Prędkość Wiatru: ${imgwhttp.predkosc_wiatru} m/s*`;
    this.wiatrKier.textContent = `* Kierunek Wiatru: ${imgwhttp.kierunek_wiatru} stopni *`;
    this.wilgotnosc.textContent = `*Wilgotność Względna: ${imgwhttp.wilgotnosc_wzgledna} % *`;
    this.opad.textContent = `* Suma Opadu: ${imgwhttp.suma_opadu} mm *`;
    this.cisnienie.textContent = `* Ciśnienie: ${imgwhttp.cisnienie} hPa *`;
  }
}