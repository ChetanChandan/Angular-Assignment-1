import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment One Calculator';
  firstVal:number;
  secondVal:number;
  sign:string;
  result:number;

  addFunc(){    
    if(this.firstVal != null && this.secondVal != null)   
     {      
      this.sign = '+';     
      this.result = Number.parseInt(this.firstVal.toString()) + Number.parseInt(this.secondVal.toString());    
    }  
  }
  
  subFunc(){    
    if(this.firstVal != null && this.secondVal != null)    
    {      
      this.sign = '-';      
      this.result = Number.parseInt(this.firstVal.toString()) - Number.parseInt(this.secondVal.toString());    
    }  
  }
  
  multFunc(){    
    if(this.firstVal!= null && this.secondVal != null)    
    {      
      this.sign = '*';      
      this.result = Number.parseInt(this.firstVal.toString()) * Number.parseInt(this.secondVal.toString());    
    }  
  }
  
  divideFunc(){    
    if(this.firstVal != null && this.firstVal != 0 && this.secondVal != null && this.secondVal != 0)    
    {      
      this.sign = '/';      
      this.result = Number.parseInt(this.firstVal.toString()) / Number.parseInt(this.secondVal.toString());    
    }  
  }
  
  reset(){    
    this.firstVal= 0;    
    this.secondVal = 0;    
    this.sign = '';    
    this.result = 0;  
  }
}
