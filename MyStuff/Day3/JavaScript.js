const inputs = document.querySelectorAll(".controls input"); //Gives us a node list

function handleUpdate(){
    const suffix = this.dataset.sizing || ''; //Either this or blank
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));