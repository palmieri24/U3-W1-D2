"use strict";
class SonAccount {
    constructor(firstdep, firstdraw) {
        this.balanceInit = 0;
        this.balanceInit = 0;
        this.oneDeposit(firstdep);
        this.oneDrow(firstdraw);
    }
    oneDeposit(deposito) {
        this.balanceInit = this.balanceInit + deposito;
        return this.balanceInit;
    }
    oneDrow(prelievo) {
        this.balanceInit = this.balanceInit - prelievo;
        return this.balanceInit;
    }
}
class MotherAccount extends SonAccount {
    constructor(firstdep, firstdraw) {
        super(firstdep, firstdraw);
        this.balanceInit = 0;
        this.balanceInit = 0;
        this.oneDeposit(firstdep);
        this.oneDrow(firstdraw);
        this.addinterest();
    }
    addinterest() {
        this.balanceInit += this.balanceInit * 0.1;
    }
}
let saldoSon = new SonAccount(0, 0);
console.log(saldoSon);
console.log('Deposito:' + saldoSon.oneDeposit(+1000));
console.log('totalBalance:' + saldoSon.oneDrow(-200));
console.log(());
let saldoMother = new MotherAccount(0, 0);
console.log(saldoMother);
