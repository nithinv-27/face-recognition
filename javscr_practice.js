const myRequest = new Request("http://127.0.0.1:8000/image");

function fetch_json(){
  fetch(myRequest)
  .then((response) => {
    console.log("yoo")
    console.log("sed:: ", response);
  })
  const new_text = document.createTextNode("jkjbnkjn")
};

const e1 = document.getElementById("button1");
e1.addEventListener("click", fetch_json);