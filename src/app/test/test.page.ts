import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Route, Router } from '@angular/router';
interface Item {
  id:number,
  titre: string,
  type:string,
  etat:string
};

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage {
rcs:any=[]
  constructor(private fire:AngularFirestore, private route:Router) { 
    this.getRecs();
  }

  
  getRecs(){
    this.fire.collection("reclamations").snapshotChanges()
      .subscribe (
        data => {
        this.rcs = data.map(
          r=> {
            return {
              id:r.payload.doc.id,
              data:r.payload.doc.data()
            }
          }
        )
      }
    )
    
}
del(item:any){
  this.fire.doc("recalamtions/"+item.id).delete();

}
      
    
        allerAjout(){
          this.route.navigateByUrl("ajout");
          
        }
      }
