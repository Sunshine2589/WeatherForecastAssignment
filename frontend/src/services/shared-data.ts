

export default class SharedDataService {
 sharedData:any;
  
 constructor() {}
 
 
  setData(data: any) {
    this.sharedData = data;
  }

  getData() {
    return this.sharedData;
  }

}