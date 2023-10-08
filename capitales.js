// Listas de datos
let listaCiudades = ["Paris", "Londres", "Roma", "Berlin", "Copenhaguen", "Viena", "Lisboa", "Washington_DC", "Otawa", "L'Havana", "Santiago", "Lima", "Montevideo", "Canberra", "Wellington", "Monròvia", "Abuja", "Dakar", "Tunis", "Tokyo", "Seül", "Beijing", "Taipei"];
let listaPaises = ["França", "UK", "Itàlia", "Alemanya", "Dinamarca", "Àustria", "Portugal", "USA", "Canada", "Cuba", "Xile", "Perú", "Uruguay", "Austràlia", "Nova_Zelanda", "Libèria", "Nigèria", "Senegal", "Tunísia", "Japó", "Corea_Sud", "Xina", "Taiwan"];
let listaContinentes = ["Europa", "Europa", "Europa", "Europa", "Europa", "Europa", "Europa", "Amèrica", "Amèrica", "Amèrica", "Amèrica", "Amèrica", "Amèrica", "Oceania", "Oceania", "Àfrica", "Àfrica", "Àfrica", "Àfrica", "Àsia", "Àsia", "Àsia"];

function generarTabla() {
    let numFilas = parseInt(document.getElementById("numFilas").value);
    let tabla = document.getElementById("tabla");

    // Eliminar filas anteriores
    while (tabla.rows.length > 1) {
        tabla.deleteRow(1);
    }

    for (let i = 0; i < numFilas; i++) {
        let fila = tabla.insertRow();
        let ciudad = listaCiudades[Math.floor(Math.random() * listaCiudades.length)];
        let pais = listaPaises[Math.floor(Math.random() * listaPaises.length)];
        let continente = listaContinentes[Math.floor(Math.random() * listaContinentes.length)];

        let celdaCiudad = fila.insertCell(0);
        let celdaPais = fila.insertCell(1);
        let celdaContinente = fila.insertCell(2);

        celdaCiudad.innerHTML = ciudad;
        celdaPais.innerHTML = pais;
        celdaContinente.innerHTML = continente;
    }
}
function limpiarTabla() {
    document.getElementById("tabla").innerHTML = `
    <tr>
        <th>Capital</th>
        <th>País</th>
        <th>Continente</th>
    </tr>`;
}   