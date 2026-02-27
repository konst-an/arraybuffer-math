export default class Character {
    constructor(attack) {
        this._attack = attack;
        this._stoned = false;
        this._distance = 1;
    }

    get attack() {
        const stonedFactor = this._stoned ? Math.log2(this._distance) * 5 : 0;
        const result = this._attack * (1 - 0.1 * (this._distance - 1)) - stonedFactor;
        return Math.max(result, 0);
    }

    set attack(value) {
        this._attack = Math.max(0, value);
    }

    get stoned() {
        return this._stoned;
    }

    set stoned(value) {
        this._stoned = Boolean(value);
    }

    get distance() {
        return this._distance;
    }

    set distance(value) {
        if (value < 1) {
            this._distance = 1;
        } else {
            this._distance = value;
        }
    }
}