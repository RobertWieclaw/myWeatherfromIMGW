class Storage {
  constructor() {
    this.stacja;
    this.defaultStacja = 'krosno';
    
  }

  getLocationData() {
    if(localStorage.getItem('stacja') === null) {
      this.stacja = this.defaultStacja;
    } else {
      this.stacja = localStorage.getItem('stacja');
    }

    
     return {
      stacja: this.stacja,
    }
      
  }

  setLocationData(stacja) {
    localStorage.setItem('stacja', stacja);
   
  }

}