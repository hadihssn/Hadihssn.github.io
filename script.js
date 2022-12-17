let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (abc) => {
    abc.preventDefault();
    console.log("clicked");
    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
        console.log("failure");
        msg.innerHTML = "Post cannot be blank";
    }
    else {
        console.log("success");
        msg.innerHTML = "";
        acceptData();
        
    }
}

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
};

let createPost = () => {
    posts.innerHTML += `
        <div>
            <p>${data.text}</p>
            <span class="options">
                <i onClick = "editPost(this)" class="fa-solid fa-pen-to-square"></i>
                <i onClick = "deletePost(this)" class="fa-sharp fa-solid fa-trash"></i>
            </span>
        </div>
    `;

    input.value = "";
};

let deletePost = (deletepostt) => {
    deletepostt.parentElement.parentElement.remove();
}

let editPost = (edittpost) => {
    input.value = edittpost.parentElement.previousElementSibling.innerHTML;
    edittpost.parentElement.parentElement.remove();
};