import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
//import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Subscriber } from 'rxjs';

interface Item {
  id:number,
  titre: string,
  prix:string,
  qte:string
};


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lvs:any=[]

  
  constructor(private fire:AngularFirestore, private route:Router) {

    this.getLivres();
    console.log(this.lvs)
    
  }

  

  getLivres(){
    
    this.fire.collection("livre").snapshotChanges()
      .subscribe (
        data => {
          this.lvs = data.map(
            l=> {
              return {
                id:l.payload.doc.id,
                data:l.payload.doc.data()
                
              }
            }
          )
        }
      )
      
  }

  delLiv(item:any){
    console.log(this.lvs)
    this.fire.doc("livre/"+item.id).delete();

  }

  allerAjout(){
    this.route.navigateByUrl("ajout");
    
  }
}
