// Creamos una lista  con la clase "ball" y lo llenamos con 18 elementos de lista (<li>)

const ball = document.querySelector(".ball");

for (let i = 0; i < 18; i++) {
  const li = document.createElement("li");
  ball.appendChild(li);
}
