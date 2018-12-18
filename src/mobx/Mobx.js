import { action, computed, observable } from "mobx";

class Mobx {

    @observable name = 'hello, mobx';
    @observable count = 0;

    @action increment() {

        this.count += 1;
        console.log(this.count);
    }

    @computed
    get getCount() {
        return this.count;
    }
}

export default new Mobx();