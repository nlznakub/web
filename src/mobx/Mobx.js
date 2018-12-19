import { action, computed, observable } from "mobx";

class Mobx {

    @observable name = 'hello, mobx';
    @observable count = 0;

    @action increment() {
        this.count += 1;
    }

    @action setName(name) {
        this.name = name;
    }

    @computed
    get getCount() {
        return this.count;
    }

    @computed
    get getName() {
        return this.name
    }
}

export default new Mobx();