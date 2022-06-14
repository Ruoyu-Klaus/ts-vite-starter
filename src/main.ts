import "./style.css";
import {sum} from "./sum";
import {Status} from "./status";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `<h1>Hello World!</h1>`;

console.log(sum(1, 2));
console.log(Status.SUCCESS, Status.FAILED);
