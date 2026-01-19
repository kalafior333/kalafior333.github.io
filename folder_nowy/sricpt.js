function greet() {
    const terminal = document.getElementById('terminal');
    const input = document.getElementById("commandInput");
    
    const prompt = document.createElement("div");

    prompt.textContent = "Neuronik> Witaj w Neuroniku!";
    terminal.insertBefore(prompt, input);
    input.value = "Nazwa_usera>";
}

const input = document.querySelector('#commandInput');

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        answer();
    }
});


function answer() {
    const terminal = document.getElementById('terminal');
    const input = document.getElementById("commandInput");
    editImput();
    const userCommand = input.value;
    const response = document.createElement("div");
    response.textContent = `Neuronik> Otrzymałem twoje polecenie: ${userCommand}`;
    terminal.appendChild(response);
    newInput();
}
function editImput() {
    const input = document.getElementById("commandInput");
    const terminal = document.getElementById('terminal');
    const prompt = input.value;
    input.remove();
    const textPrompt = document.createElement("div");
    textPrompt.textContent = "Nazwa_usera>" + prompt;
    terminal.appendChild(textPrompt);
}
function newInput() {
    
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.id = "commandInput";
    newInput.value = "Nazwa_usera>";
    terminal.appendChild(newInput);
    newInput.focus();


    newInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        answer();
    }
});
}