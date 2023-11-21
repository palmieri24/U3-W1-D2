class SonAccount {
  balanceInit: number = 0;
  constructor(firstdep: number, firstdraw: number) {
    this.balanceInit = 0;
    this.oneDeposit(firstdep);
    this.oneDrow(firstdraw);
  }

  oneDeposit(deposito: number) {
    this.balanceInit = this.balanceInit + deposito;

    return this.balanceInit;
  }

  oneDrow(prelievo: number) {
    this.balanceInit = this.balanceInit - prelievo;
    console.log("Prelievo: " + prelievo);

    return this.balanceInit;
  }
}

class MotherAccount extends SonAccount {
  balanceInit: number = 0;
  constructor(firstdep: number, firstdraw: number) {
    super(firstdep, firstdraw);
    this.balanceInit = 0;
    this.oneDeposit(firstdep);
    this.oneDrow(firstdraw);
    this.addinterest();
  }

  addinterest() {
    this.balanceInit -= this.balanceInit * 0.1;
  }
}

let saldoSon = new SonAccount(0, 0);
console.log(saldoSon);
console.log("Deposito:+" + saldoSon.oneDeposit(1000));
console.log("totalBalance:" + saldoSon.oneDrow(200));

let saldoMother = new MotherAccount(0, 0);
console.log(saldoMother);
console.log("Deposito:+" + saldoMother.oneDeposit(1000));
console.log("totalBalance:" + saldoMother.oneDrow(200));
