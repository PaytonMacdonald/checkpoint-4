import TodoController from "./Controllers/TodoController.js";
import ImageController from "./Controllers/ImageController.js"
import QuoteController from "./Controllers/QuoteController.js"
import WeatherController from "./Controllers/WeatherController.js"
import ClockController from "./Controllers/ClockController.js"

class App {
  todoController = new TodoController();
  imageController = new ImageController();
  quoteController = new QuoteController();
  weatherController = new WeatherController();
  clockController = new ClockController();

}

window["app"] = new App();



// window.onload = displayClock();
// function displayClock() {
//   var display = new Date().toLocaleTimeString();
//   document.body.innerHTML = display;
//   setTimeout(displayClock, 1000);
// }