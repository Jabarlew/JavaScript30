const inputs = document.querySelectorAll('.controls input');

function handles() {
    const sufix = this.dataset.sizing || '';
    console.log(sufix);
}

inputs.forEach(input => input.addEventListener('change', handles));
inputs.forEach(input => input.addEventListener('mousemove', handles));