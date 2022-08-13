// assets/controllers/say-hello-controller.js
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["name", "output"];

  greet() {
    this.outputTarget.textContent = `Test, ${this.nameTarget.value}!`;
  }
}
