
import {persoFull} from "./creation.js";


class Interact {
  constructor(atk,def,all,cible,user){
    this.atk = cible.pv - atk;
    this.def = user.pv + def;
    this.all = cible.pv + all;
    this.cible = cible.name;
    this.user = cible.user;
  }
}
