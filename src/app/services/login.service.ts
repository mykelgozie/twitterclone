export class loginstatus {

  
     
    status:string = JSON.parse(JSON.stringify(localStorage.getItem('stats'))) ;
  

    checkstatus ():string{

        return this.status;
    }


}