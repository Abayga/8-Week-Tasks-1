//! 1 Task
//     class Worker{
//         constructor(name,surname,rate,days){
//             this.name= name
//             this.surname = surname
//             this.rate = rate
//             this.days = days
//         }
//         getSalary(){
//             return `Ваша зарплата составляет ${this.rate*this.days}`
//           }
      
//     }

// var worker = new Worker('Иван','Иванов', 10, 31);
// console.log(worker.name); //выведет Иван
// console.log(worker.surname); //выведет Иванов
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31


//! 2 Task


// class Worker{
//     constructor(name,surname,rate,days){
//         this._name= name
//         this._surname = surname
//         this._rate = rate
//         this._days = days
//     }
//     get name(){
//         return this._name
//     }
//     get surname(){
//         return this._surname
//     }
//     get rate(){
//         return this._rate
//     }
//     get days(){
//         return this._days
//     }
//     getSalary(){
//     return `Ваша зарплата составляет ${this.rate*this.days}`
//     }
  
  
// }

// var worker = new Worker('Иван', 'Иванов', 10, 31);
// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31




//! 3 Task 

class Worker{
    constructor(name,surname,rate,days){
        this._name= name
        this._surname = surname
        this._rate = rate
        this._days = days
    }
    get name(){
        return this._name
    }
    get surname(){
        return this._surname
    }
    get rate(){
        return this._rate
    }
    get days(){
        return this._days
    }
    set rateSet(value){
        this._rate = value
    }
    set daysSet(value){
        this._days = value
    }
    getSalary(){
    return `Ваша зарплата составляет ${this.rate*this.days}`
    }
  
  
}

var worker = new Worker('Иван', 'Иванов', 10, 31);
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31



//Теперь используем сеттер:
worker.rateSet=20; //увеличим ставку
worker.daysSet=10; //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10