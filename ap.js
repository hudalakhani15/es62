// let arr = [1,2,3];
// let arr2 = [4,5];
// let Arr=[2,[3,5,6,[4,8,[1,2,3],6,9],8,9],8,9]
// Arr = [...1,...3];
// console.log(Arr);

// const a=[2,[3,5,6,[4,8,[1,2,3],6,9],8,9],8,9]
// const b=new Array(...a.slice(1))
// // a[1]="abc"
// console.log(b)



const nestedArray = [['1'],['2'],['3']]
const nestedCopyWithSpread = [...nestedArray] 

nestedArray[0][0] = '4' 

console.log(...nestedArray) // 4 2 3
console.log(...nestedCopyWithSpread) // 4 2 3



const huda = {
    name: "Huda",
    hairColor: "Brown",

    mobile: {
        color: "Silver",
        content: [
            "item1",
            "item2",
            "..."
        ]
    }
}

const hl = {...huda, mobile : {...huda.mobile, color : "Red"}}

console.log(hl)