//REGISTER
const registerForm = document.querySelector(".register-form");
if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.querySelector("#reg-username").value.trim();
        const email = document.querySelector("#reg-email").value.trim();
        const password = document.querySelector("#reg-password").value;
        const confirmPassword = document.querySelector("#reg-confirm").value;

        if (password !== confirmPassword) {
            alert("Паролі не співпадають ");
            return;
        }

        const user = { username, email, password };
        localStorage.setItem("spaceUser", JSON.stringify(user));

        alert("Реєстрація успішна 🚀");
        window.location.href = "../index.html";
    });
}

//LOGIN
const loginForm = document.querySelector(".login-form");
if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.querySelector("#login-username").value.trim();
        const password = document.querySelector("#login-password").value;

        const savedUser = JSON.parse(localStorage.getItem("spaceUser"));

        if (!savedUser) {
            alert("Користувач не знайдений");
            return;
        }

        if (username === savedUser.username && password === savedUser.password) {
            alert("Вхід успішний 🚀");
            window.location.href = "../index.html";
        } else {
            alert("Неправильний логін або пароль ");
        }
    });
}