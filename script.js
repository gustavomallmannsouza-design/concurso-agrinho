// script.js

document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // RELÓGIO DIGITAL
    // =========================
    const clock = document.getElementById("clock");

    function updateClock() {
        const now = new Date();

        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");

        if (clock) {
            clock.textContent = `${hours}:${minutes}:${seconds}`;
        }
    }

    setInterval(updateClock, 1000);
    updateClock();

    // =========================
    // SAUDAÇÃO AUTOMÁTICA
    // =========================
    const greeting = document.getElementById("greeting");

    function setGreeting() {
        const hour = new Date().getHours();

        let message = "";

        if (hour < 12) {
            message = "Bom dia!";
        } else if (hour < 18) {
            message = "Boa tarde!";
        } else {
            message = "Boa noite!";
        }

        if (greeting) {
            greeting.textContent = message;
        }
    }

    setGreeting();

    // =========================
    // CONTADOR
    // =========================
    let count = 0;

    const counterDisplay = document.getElementById("counter");
    const increaseBtn = document.getElementById("increase");
    const decreaseBtn = document.getElementById("decrease");
    const resetBtn = document.getElementById("reset");

    function updateCounter() {
        if (counterDisplay) {
            counterDisplay.textContent = count;
        }
    }

    if (increaseBtn) {
        increaseBtn.addEventListener("click", () => {
            count++;
            updateCounter();
        });
    }

    if (decreaseBtn) {
        decreaseBtn.addEventListener("click", () => {
            count--;
            updateCounter();
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            count = 0;
            updateCounter();
        });
    }

    updateCounter();

    // =========================
    // LISTA DE TAREFAS
    // =========================
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function renderTasks() {
        if (!taskList) return;

        taskList.innerHTML = "";

        tasks.forEach((task, index) => {
            const li = document.createElement("li");

            li.textContent = task;

            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Excluir";

            removeBtn.addEventListener("click", () => {
                tasks.splice(index, 1);
                saveTasks();
                renderTasks();
            });

            li.appendChild(removeBtn);
            taskList.appendChild(li);
        });
    }

    if (addTaskBtn) {
        addTaskBtn.addEventListener("click", () => {

            const value = taskInput.value.trim();

            if (value === "") {
                alert("Digite uma tarefa!");
                return;
            }

            tasks.push(value);

            saveTasks();
            renderTasks();

            taskInput.value = "";
        });
    }

    renderTasks();

    // =========================
    // MODO ESCURO
    // =========================
    const darkModeBtn = document.getElementById("darkMode");

    function applyTheme(theme) {
        document.body.className = theme;
    }

    const savedTheme =
        localStorage.getItem("theme") || "light";

    applyTheme(savedTheme);

    if (darkModeBtn) {
        darkModeBtn.addEventListener("click", () => {

            let currentTheme =
                document.body.classList.contains("dark")
                    ? "dark"
                    : "light";

            const newTheme =
                currentTheme === "dark"
                    ? "light"
                    : "dark";

            applyTheme(newTheme);

            localStorage.setItem("theme", newTheme);
        });
    }

    // =========================
    // GERADOR DE NÚMEROS
    // =========================
    const randomBtn = document.getElementById("randomBtn");
    const randomResult = document.getElementById("randomResult");

    if (randomBtn) {
        randomBtn.addEventListener("click", () => {

            const randomNumber =
                Math.floor(Math.random() * 1000) + 1;

            randomResult.textContent =
                `Número sorteado: ${randomNumber}`;
        });
    }

    // =========================
    // INFORMAÇÕES DO NAVEGADOR
    // =========================
    const browserInfo =
        document.getElementById("browserInfo");

    if (browserInfo) {
        browserInfo.innerHTML = `
            <strong>Navegador:</strong> ${navigator.userAgent}<br>
            <strong>Idioma:</strong> ${navigator.language}<br>
            <strong>Online:</strong> ${navigator.onLine}
        `;
    }

    // =========================
    // MONITOR DE CONEXÃO
    // =========================
    function updateConnectionStatus() {

        const status =
            document.getElementById("connectionStatus");

        if (!status) return;

        if (navigator.onLine) {
            status.textContent = "🟢 Online";
        } else {
            status.textContent = "🔴 Offline";
        }
    }

    window.addEventListener("online", updateConnectionStatus);
    window.addEventListener("offline", updateConnectionStatus);

    updateConnectionStatus();

    // =========================
    // MENSAGEM FINAL
    // =========================
    console.log("Sistema carregado com sucesso!");
});
