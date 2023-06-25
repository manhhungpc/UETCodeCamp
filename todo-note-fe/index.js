let data = "";
document.addEventListener("DOMContentLoaded", () => {
    getNote();
    const input = document.getElementById("input-note");
    const submitBtn = document.getElementById("submit");
    // console.log(input);

    submitBtn.addEventListener("click", async () => {
        await submit(input.value);
    });
});

//2. viết hàm getNote() để lấy data và hiển thị
async function getNote() {
    const response = await fetch("http://localhost:3000/notes", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const noteList = await response.json();
    console.log(noteList);

    const todo = document.getElementById("todo");
    for (let note of noteList) {
        let li = document.createElement("li");
        li.innerHTML = `<p>${note.name}</p>`;
        todo.appendChild(li);
    }

    // console.log(await response.json());
}

async function submit(data) {
    const response = await fetch("http://localhost:3000/notes", {
        method: "POST",
        body: JSON.stringify({
            name: data,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    // {notes: [...]}
    const { notes } = await response.json();
    // console.log(notes);

    const todo = document.getElementById("todo");
    todo.innerHTML = "";
    for (let list of notes) {
        let li = document.createElement("li");
        li.innerHTML = `<p>${list.name}</p>`;
        todo.appendChild(li);
    }
}
