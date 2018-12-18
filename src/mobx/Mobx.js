import { computed, observable } from "mobx";

class Mobx {

    @observable name = 'hello, mobx';
    constructor() {
        console.log(this.name)
    }
}

export default new Mobx();