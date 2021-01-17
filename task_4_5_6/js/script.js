// --------------- task-1 ---------------
// function printTriangle(num) {
//     let a = '# '
//     let b = ' '
//     let space = num - 1
//     let center = 1

//     for(let i = 0; i < num; i++) {
//         console.log(b.repeat(space) + a.repeat(center) + b.repeat(space))
//         center++
//         space--
//     }

// }
// printTriangle(5)

// -------------------- task-2 ------------------

// let arr1 = []
// let arr2 = []
// let arr3 = []

// function fillArray(min, max) {
// 	for(let i = min; i <= max; i++) {
//         arr1.push(i)
//     }
//     console.log(arr1)
// }


// function replaceFromArray () {
//     arr2 = arr1.map(item => {
//         if(item < 0) {
//             return 0
//         } else {
//             return item
//         }
//     })

//         console.log(arr2)
// }



// function addToArray() {
//     arr2.forEach((item,index) =>{
//         if(item == 0 && index % 2 == 0) {
//             arr3.push(item)
//             arr3.push(-1)
//         } else {
//             arr3.push(item)
//         }
//     })
//     console.log(arr3)

// }



// fillArray(-10, 10)
// replaceFromArray()
// addToArray()

// ---------------- task-3 ---------------

let model = [
    {
        id: 0,
        title: 'Title text 1',
        text: 'Some text 1',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 1,
        title: 'Title text 2',
        text: 'Some text 2',
        user: {
            id: 1,
            name: 'user 2',
        },
    }, {
        id: 2,
        title: 'Title text 3',
        text: 'Some text 3',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 3,
        title: 'Title text 4',
        text: 'Some text 4',
        user: {
            id: 2,
            name: 'user 3',
        },
    }, {
        id: 4,
        title: 'Title text 5',
        text: 'Some text 5',
        user: {
            id: 0,
            name: 'user 1',
        },
    }
]



let users = model.map(item => {  // получаем список юзеров
    return item.user.name
})


let UniquUsers = [...new Set(users)] // получаем уникальных список юзеров



let result = []                       // сортируем по юзерам
UniquUsers.forEach(item => {
    model.forEach(obj => {
        if(obj.user.name == item) {
            result.push(obj)
        }
    })
})


console.log(result)