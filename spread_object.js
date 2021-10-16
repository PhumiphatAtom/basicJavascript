// const profile = {
//     name: 'Phumiphat',
//     music: 'คุยไม่เก่ง',
// }

// const newProfile = {
//     ...profile,
//     age: 26,
//     music: 'ถ้าหาก'
// } 

// console.log('newProfile', newProfile)

// #2
const profile = {
    name: 'Phumiphat',
    music: 'อะไรก็ได้',
}

const newProfile = { ...profile }

newProfile.age = 26

console.log('newProfile', newProfile)
console.log('profile', profile)