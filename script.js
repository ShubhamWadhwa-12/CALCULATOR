let string = "";
let memory = 0;

const input = document.querySelector('input');
const buttons = document.querySelectorAll('.button');
function updateMemoryDisplay() {
    document.getElementById("memory-display").textContent = `M: ${memory}`;
}

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value === '=') {
            try {
                string = eval(string).toString();
            } catch {
                string = "Error";
            }
            input.value = string;
        }

        else if (value === 'AC') {
            string = "";
            input.value = string;
        }

        else if (value === '%') {
            try {
                string = (eval(string) / 100).toString();
            } catch {
                string = "Error";
            }
            input.value = string;
        }

        else if (value === '()') {
            const open = (string.match(/\(/g) || []).length;
            const close = (string.match(/\)/g) || []).length;
            if (open === close || string.endsWith('(')) {
                string += '(';
            } else {
                string += ')';
            }
            input.value = string;
        }

        else if (value === 'M+') {
            try {
                memory += eval(string || "0");
            } catch {
                memory = 0;
            }
            updateMemoryDisplay()
            input.value = string;
        }

        else if (value === 'M-') {
            try {
                memory -= eval(string || "0");
            } catch {
                memory = 0;
            }
            updateMemoryDisplay()
            input.value = string;
        }

        else if (value === 'MC') {
            memory = 0;
            updateMemoryDisplay()
            input.value = string;
        }

        else if (value === 'MR') {
            string += memory.toString();
            updateMemoryDisplay()
            input.value = string;
        }

        else {
            string += value;
            input.value = string;
        }
    });
});
