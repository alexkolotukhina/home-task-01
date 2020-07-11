let arr = ["Tom", "StEve", "bill sckot", "Rita", "Pete EvaNs", "Ashley"];
const list = document.getElementById("list");

function sortArray(arr) {
  let newArr = arr.map((item) => item.toLowerCase());

  newArr.sort();

  newArr.forEach((item) => {
    if (list) {
      let li = document.createElement("li");
      li.classList.add("list-group-item");
      let content = item
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
      li.innerText = content.join(" ");
      list.appendChild(li);
    }
  });
}

function map(arr, fn) {
  fn(arr);
}

map(arr, sortArray);
