class ImgwHTTP{
  constructor(stacja) {
    this.stacja = stacja;
  }
  //weź zapytanie  z API 
  async getImgwHTTP() {
    const response = await fetch(`https://danepubliczne.imgw.pl/api/data/synop/station/${this.stacja}`);
   

    const responseData = await response.json();
    
    //return responseData.id_stacji;
    return responseData;
   

  }
  //Change weather location
  changeLocation(stacja) {
    this.stacja =stacja;


  }


    
  


}

    
