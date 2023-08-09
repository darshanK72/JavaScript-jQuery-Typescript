let jsonData = `{
    "name":"Darshan Khairnar",
    "age": 22
}`;

let jsonObject = JSON.parse(jsonData);
console.log(jsonObject);

console.log(JSON.stringify(jsonObject));