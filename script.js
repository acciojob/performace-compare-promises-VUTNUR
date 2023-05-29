// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
function fetchUrl(url){
  let response=fetch(url);
  let response1= response.then((data)=>{
    data.json.then((info)=>{
      return info
    })
  })
  return response1;
}
function displayTimeTaken(method, timeTaken) {
  const outputElement = document.getElementById(`output-${method}`);
  outputElement.textContent = timeTaken;
}
const startTimeAll= performance.now();
Promise.all(apiUrls.map(fetchUrl)).then(()=>{
  const endTimeAll=performance.now();
  const diff= endTimeAll-startTimeAll;
   displayTimeTaken(all, diff)
})
const startTimeAny=performance.now();
Promise.any(apiUrls.map(fetchUrl)).then(()=>{
  const endTimeAny=performance.now();
  const diff2= endTimeAny-startTimeAny;
  displayTimeTaken(any, diff2)
})