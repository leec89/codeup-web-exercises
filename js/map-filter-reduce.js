const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

/*** Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array. */

let numbers = [1,2,3,4,5,6]
let findOdds = numbers.filter((element, index, array) => {
    // console.log('element is', element)
    // console.log('index is', index)
    // console.log('array is', array)
    element % 2 === 1
})
console.log(findOdds)

let usersThreeLangs = users.filter(user => user.languages.length >= 3)
console.log(usersThreeLangs)

/*** Use .map to create an array of strings where each element is a user's email address */

let usersEmail = users.map(user => user.email)
console.log(usersEmail)

/*** Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average. */

let usersYrsExp = users.reduce((prevYrsExp, currYrsExp) => {
  return prevYrsExp += currYrsExp.yearsOfExperience
}, 0)
console.log(usersYrsExp)

let usersYrsExpAvg = usersYrsExp / users.length
console.log(usersYrsExpAvg)

/*** Use .reduce to get the longest email from the list of users. */

let findLongestEmail = users.reduce((bucket, person) => {
    if (bucket.length < person.email.length) {
        bucket = person.email
    }
    return bucket
}, '')
console.log(findLongestEmail)

/*** Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin. */

let usersNames = users.reduce((bucket, user) => {
    bucket.push(user.name)
//    console.log(bucket)
    return bucket

},[])
console.log('Your instructors are:',usersNames.join(', '))
