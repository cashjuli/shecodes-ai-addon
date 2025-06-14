function generateTango(event) {
  event.preventDefault();

  new Typewriter("#tango-song", {
    strings:
      "Si supieras que aun dentro de mi alma Conservo aquel cariño que tuve",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let tangoFormElement = document.querySelector("#tango-generator-form");
tangoFormElement.addEventListener("submit", generateTango);
