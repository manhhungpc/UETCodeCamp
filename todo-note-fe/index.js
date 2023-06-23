let data = "";
document.addEventListener("DOMContentLoaded", () => {
    getNote();
    const input = document.getElementById("input-note");
    // console.log(input);
    input.addEventListener("change", (e) => submit(e));
});

//2. viết hàm getNote() để lấy data và hiển thị
function getNote() {}

function submit(event) {
    console.log(event.target.value);
    const submitBtn = document.getElementById("submit");
    submitBtn.addEventListener("click", async (e) => {
        const response = await fetch("http://localhost:3000/notes", {
            method: "POST",
            body: JSON.stringify({
                name: event.target.value,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const todo = document.getElementById("todo");
        const { notes } = await response.json();
        console.log(notes);
        for (let list of notes) {
            var li = document.createElement("li");
            li.innerHTML = `<p>${list.name}</p>`;
            todo.appendChild(li);
            // todo.appendChild(`<li>${list.name}</li>`);
            // todo.innerHTML = `<li>${list.name}</li>`;
        }
    });
}
