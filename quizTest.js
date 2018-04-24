const workers = [
    { name: "Yair Massri", rate: 27.40, hours: 80 },
    { name: "George Brulo", rate: 13.55, hours: 20 },
    { name: "Olga Privyota", rate: 11.85, hours: 55 },
]

class Payroll {
    constructor(workers){
    this.workers = workers;
    this.names = this.getNames();
    this.time = this.getFullTime();
    // this.labor = this.getTotalLabor();
    // this.total = workers[i][1]*workers[i][2];

    }
    getNames(){
        var newNames = this.workers.map(function(nana) {
            return nana.name
        })
        return newNames.sort()
    }
    getFullTime() {
        return this.workers.filter(function (hou) {
            return ((hou.hours) > 60) ? 1 : 0
        })
    }
    getTotalLabor(){
        return this.total.reduce( (acc,curr,index)=> {
            return (index === this.total.length - 1) ? ((acc + curr)/(index+1)) : acc + curr
        },0)
    }
}

const payroll = new Payroll(workers)

console.log(payroll.names)
console.log(payroll.time)
// console.log(payroll.labor)