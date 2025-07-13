const $ = (id)=> document.getElementById(id);

const luna = $("luna");
const sol = $("sol");
const personajes = $("personajes");

const nombre = $("nombre");
const estado = $("estado");
const especies = $("especies");
const tipo = $("tipo");
const genero = $("genero");

const busqueda = $("personajes-buscar");


async function busquedaPersonajes(event){
  event.preventDefault();

  busqueda.innerHTML ="";

  let querystr ="?";

  if (nombre.value !== "") querystr+=`name=${nombre.value}&`;
  if (estado.value !== "") querystr+=`status=${estado.value}&`;
  if (especies !== "") querystr+=`species=${especies.value}&`;
  if (tipo.value !== "") querystr+=`type=${tipo.value}&`;
  if (genero.value !== "") querystr+=`gender=${genero.value}&`;

  try {
    const req = await fetch("https://rickandmortyapi.com/api/character"+querystr, {
      method: "GET"
    });
    if (req.ok){
      const data = await req.json();
      let lista ="";

      data.results.forEach((x)=>lista+=`<li>${x.name}</li>`);
      busqueda.innerHTML = lista;
      busqueda.removeAttribute("hidden");
    }
  } catch {
    console.log("Fallo al hacer la request para la busqueda");
  }
}

async function obtenerPersonajes() {
  if (!personajes.hasAttribute("hidden")){
    personajes.toggleAttribute("hidden");
    return;
  }

  try {
    let req = await fetch("https://rickandmortyapi.com/api/character", {
      method: "GET"
    });

    if (req.ok) {
      const data = await req.json();

      /** @type {[]object} */
      let lista = "";

      data.results.forEach((x)=>lista+=`<li>${x.name}</li>`);

      personajes.innerHTML = lista;

      personajes.toggleAttribute("hidden");
      return;
    }

  } catch {
    console.log("Fallo al hacer la request para los personajes");
  }
}

function cambiarModo() {
    sol.toggleAttribute("hidden");
    luna.toggleAttribute("hidden");
    document.body.toggleAttribute("dark");
    localStorage.setItem("tema", localStorage.getItem("tema")==="oscuro"?"claro":"oscuro");

}

function ponerTema(){
    var tema = localStorage.getItem("tema")||"claro";
    if (tema === "oscuro"){
        document.body.setAttribute("dark", "");
        sol.toggleAttribute("hidden");
        return;
    }

    luna.toggleAttribute("hidden");
}
ponerTema();
