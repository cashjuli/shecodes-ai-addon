function displayTango(response) {
  new Typewriter("#tango-song", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateTango(event) {
  event.preventDefault();
  let userInstructions = document.querySelector("#user-instructions");
  let apiKey = "417t1f0493aa7c713ebf390034156o67";
  let prompt = `Instrucciones: Genera la letra de un tango sobre ${userInstructions.value}, que incluya palabras relacionadas con ${userInstructions}`;
  let context =
    "Eres un generador de tango argentino, creas canciones de tango y de milonga con palabras en lunfardo.  el titulo debe ser el <h3> y separa las estrofas y versos con un <br /> ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let songArea = document.querySelector("#tango-song");

  songArea.classList.remove("hidden");

  new Typewriter(songArea, {
    strings: ["Tu tango se está armando..."],
    autoStart: true,
    delay: 75,
    cursor: "",
  });

  axios.get(apiUrl).then(displayTango);
}

let tangoFormElement = document.querySelector("#tango-generator-form");
tangoFormElement.addEventListener("submit", generateTango);
