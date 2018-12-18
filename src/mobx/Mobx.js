import { computed, observable } from "mobx";

class Mobx {

    @observable name = '';
    constructor() {
        console.log(this.name)
    }
}

export default new Mobx();