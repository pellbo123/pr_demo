// let player1 = new Object();

// player1.name = '니키타'
// player1.job = '개발자'
// player1.rece = 'Suka'
// player1.stats = {
//     STR: 8,    // 힘
//     DEX: 5,    // 민첩
//     CON: 20,   // 체력
//     INT: -140, // 지능
//     WIS: -140, // 지혜
//     CHA: -999  // 매력
// }


// let player2 = {
//     name: '니키타',
//     job: '개발자',
//     rece: 'Suka',
//     stats: {
//         STR: 8,    // 힘
//         DEX: 5,    // 민첩
//         CON: 20,   // 체력
//         INT: -140, // 지능
//         WIS: -140, // 지혜
//         CHA: -999  // 매력
//     }
// }

// console.log(player2)


// function playerFunc(name, job, race, stats) {
//     this.name = name;
//     this.job = job;
//     this.race = race;
//     this.stats = stats;
// }

let player3 = new playerFunc(
    "니키타",
    "개발자",
    "Suka",
    {
        STR: 8,    // 힘
        DEX: 5,    // 민첩
        CON: 20,   // 체력
        INT: -140, // 지능
        WIS: -140, // 지혜
        CHA: -999  // 매력
    }
)

// console.log(player3)

// let stu1 = new Map();

// // set
// stu1.set('id', 0);
// stu1.set('이름', '제임스');
// stu1.set('전공', '컴공');
// // 배열
// let stu2 = new Map([
//     ['id', 0],
//     ['이름', '제임스'],
//     ['전공', '컴공']
// ]);
// // get
// console.log(stu1)
// console.log(stu1.get('id'))
// console.log(stu1.get('이름'))
// console.log(stu1.get('전공'))
// //delete
// stu1.delete('전공');
// console.log(stu1);

// // clear
// stu1.clear();
// console.log(stu1);


// player1 : Object 생성자
// player2 : 객체 리터럴
// player3 : 객체 생성자

// // 프로퍼티 추가
// player1.age = 200
// player2.age = 200
// player3.age = 200

// console.log(player1.age)
// console.log(player2.age)
// console.log(player3.age)

// // 프로퍼티 수정
// player1.age = 100
// player2.age = 100
// player3.age = 100

// console.log(player1.age)
// console.log(player2.age)
// console.log(player3.age)

// // 프로퍼티 삭제
// delete player1.age;
// delete player2.age;
// delete player3.age;

// console.log(player1.age)
// console.log(player2.age)
// console.log(player3.age)


// //메소드추가
// player1.sayHello = function() {
//     console.log("hello")
// }
// player2.sayHello = function() {
//     console.log("hello")
// }
// player3.sayHello = function() {
//     console.log("hello")
// }

// //메소드 사용
// player1.sayHello()
// player2.sayHello()
// player3.sayHello()


// get, set 메소드
function playerFunc(name, job, race, stats) {
    this.name = name;
    this.job = job;
    this.race = race;
    this.stats = stats;

    this.getName = function() { return this.name; }
    this.getJob = function() { return this.job; }
    this.getRace = function() { return this.race; }
    this.setName = function(name) { return this.name = name; }
    this.setJob = function(job) { return this.job = job; }
    this.setRace = function(race) { return this.race = race; }
}

console.log(player3.getName())


// 반복문으로 객체 순회하기
let person = {
    name: "John Doe",
    age: 18,
    city: "Chung-Ju"
}

for (let key in person) {
    console.log(key + ":" + person[key])
}

for (let stat in player3.stats) {
    console.log(stat)
}


// 동적 접근
function show(obj, key) {
    console.log(obj[key])
}
show(player3, "job")


// 객체 배열
let cars = [
    { brand: "페라리", model: "911" },
    { brand: "포드", model: "머스탱" },
    { brand: "닷지", model: "차저" }
]

for(let i=0; i>cars.length; i++) {
    console.log(cars[i].model)
}