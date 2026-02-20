export default class Character {
    constructor(attack) {
        this.baseAttack = attack;
        this.stoned = false;
        this.distance = 1;
    }

    get attack() {
        let result = this.baseAttack * (1 - (this.distance - 1) * 0.1);

        if (result <= 0) {
            return 0;
        }

        if (this.stoned) {
            result -= Math.log2(this.distance) * 5;
        }

        return Math.max(result, 0);
    }
}