const students = [
    { name: "Yair Massri", score: 100 },
    { name: "George Brulo", score: 78 },
    { name: "Olga Privyota", score: 35 },
]

class FinalExam {
    constructor(students) {
        this.students = students
        this.extra = this.giveExtraCredit()
        this.passers = this.getPassers()
        this.average = this.getAverage()
    }
    giveExtraCredit() {
        return this.students.map(function (stud) {
            return stud.score + 15
        })
    }
    getPassers() {
        return this.students.filter(function (pass) {
            return ((pass.score + 15) > 59) ? 1 : 0
        })
    }
    getAverage() {

        // return (this.extra[0] + this.extra[1] + this.extra[2]) / 3

        return this.extra.reduce( (acc,curr,index)=> {
            return (index === this.extra.length - 1) ? ((acc + curr)/(index+1)) : acc + curr
        },0)
    }
}

const final = new FinalExam(students)
console.log(final.extra)
// console.log(final.passers)
// console.log(final.average)