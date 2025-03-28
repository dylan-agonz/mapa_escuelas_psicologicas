const map = L.map("map").setView([20, 0], 2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

const escuelas = [
  {
    nombre: "Psicoanálisis",
    ciudad: "Austria",
    coords: [48.2082, 16.3738],
    imagen: "images/freud.jpg",
    descripcion: "Teoría basada en el inconsciente. <a href='freud.html' target='_blank'>Leer más</a>"
  },
  {
    nombre: "Estructuralismo",
    ciudad: "Alemania",
    coords: [51.3397, 12.3731],
    imagen: "images/wuntit.jpg",
    descripcion: "Primera escuela formal de psicología, enfocada en la estructura de la mente.<a href='estructuralismo.html' target='_blank'>Leer más</a>"
  },
  {
    nombre: "Gestalt",
    ciudad: "Alemania",
    coords: [50.1109, 8.6821],
    imagen: "images/gestalt1.jpg",
    descripcion: "La percepción es mayor que la suma de sus partes. <a href='gestalt.html' target='_blank'>Leer más</a>"
  },
  {
    nombre: "Conductismo",
    ciudad: "EE.UU.",
    coords: [41.8781, -87.6298],
    imagen: "images/watskin.jpg",
    descripcion: "Conducta observable como objeto principal de estudio. <a href='watson.html' target='_blank'>Leer más</a>"
  },
  {
    nombre: "Cognitivismo",
    ciudad: "EE.UU.",
    coords: [42.330556, -83.047500],
    imagen: "images/rogers.jpg",
    descripcion: "Centrado en el crecimiento personal y la autorrealización. <a href='cognitivismo.html' target='_blank'>Leer más</a>"
  },
  {
    nombre: "Reflexología",
    ciudad: "Rusia",
    coords: [61.52401, 105.318756],
    imagen: "images/betpav.jpg",
    descripcion: "Basada en principios fisiologistas.<a href='bejpav.html' target='_blank'>Leer más</a>"
  },
  {
    nombre: "Funcionalismo",
    ciudad: "EE.UU.",
    coords: [40.71427, -74.00597],
    imagen: "images/dewjam.jpg",
    descripcion: "Estudio de la función y propósito de los procesos mentales y el comportamiento<a href='funcionalismo.html' target='_blank'>Leer más</a>"
  },
  {
    nombre: "Humanismo",
    ciudad: "EE.UU.",
    coords: [39.962222222222, -83.000555555556], 
    imagen: "images/masrog.jpg",
    descripcion: "También demoninada la 'Tercera Fuerza.' <a href='humanismo.html' target='_blank'>Leer más</a>"
  },
];
escuelas.forEach(escuela => {
  L.marker(escuela.coords)
    .addTo(map)
    .bindPopup(`
      <div style="text-align: center; max-width: 200px;">
        <img src="${escuela.imagen}" alt="${escuela.nombre}" width="100px"><br>
        <b>${escuela.nombre}</b><br>
        <i>${escuela.ciudad}</i><br>
        ${escuela.descripcion}
      </div>
    `);
});