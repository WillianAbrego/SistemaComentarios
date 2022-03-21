const commments = [];

const inputContainer = document.createElement("div");
const input = document.createElement("input");
const commmentsConatiner = document.querySelector("#comments-container");

input.classList.add("input");

input.addEventListener("keydown", (e) => {
  handbleEnter(e, null);
});

commmentsConatiner.appendChild(inputContainer);
inputContainer.appendChild(input);

function handbleEnter(e, current) {
  if (e.key === "Enter" && e.target.value === "") {
    const newComment = {
      text: e.target.value,
      likes: 0,
      responses: [],
    };
    if (current === null) {
      commments.unshift(newComment);
    } else {
      current.responses.unshift(newComment);
    }
    e.target.value = "";
    commmentsConatiner.innerHTML = "";
    commmentsConatiner.appendChild(inputContainer);
    console.log(commments);
    renderComments(commments, commmentsConatiner);
  }
}

function renderComments(arr, parent) {}
