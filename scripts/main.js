import { series } from "./data.js";
var tablaserie = document.getElementById("tablaseries");
mostrartablaseries(series);
function mostrartablaseries(listaseries) {
    var tbodyseries = document.createElement("tbody");
    for (var _i = 0, listaseries_1 = listaseries; _i < listaseries_1.length; _i++) {
        var se = listaseries_1[_i];
        var trseries = document.createElement("tr");
        trseries.innerHTML = "<td class=\"col\"> ".concat(se.numero, "</td><td class=\"col\"><a href=").concat(se.linkpagina, "> <pre class=\"cal\"> ").concat(se.nombre, "</pre> </a></td><td class=\"col\"> ").concat(se.productora, "</td><td class=\"col\"> ").concat(se.temportadas, "</td></tr>");
        tbodyseries.appendChild(trseries);
    }
    var trpromedio = document.createElement("tr");
    trpromedio.innerHTML = "<td colspan=2 id=\"prom\"><pre>Seasons average: ".concat(listaseries[0].darPromedioTemporadas(listaseries), "</pre></td>");
    tbodyseries.appendChild(trpromedio);
    tablaserie.appendChild(tbodyseries);
}
