jQuery(document).ready(
		function() {
			if (typeof (Storage) !== undefined) {
				// $("#global").html(localStorage.clickcount ?
				// localStorage.clickcount : "");
				// $("#tmp").html(sessionStorage.clickcount ?
				// sessionStorage.clickcount : "");
			} else {
				$(document.body).html(
						"<p>Su navegador no soporta almacenamiento Web</p>");
			}
		});

function crear_productos() {

	if (localStorage.productos == undefined) {
		console.log("no estan los datos");
		var array = [ {
			"nombre" : "medias",
			"desc" : "Medias de boca juniors",
			"precio" : "33"
		}, {
			"nombre" : "buzo",
			"desc" : "Buzo de boca juniors",
			"precio" : "100"
		}, {
			"nombre" : "Remera",
			"desc" : "Remera de boca juniors",
			"precio" : "500"
		}, {
			"nombre" : "pantalones",
			"desc" : "pantalones de boca juniors",
			"precio" : "200"
		}, {
			"nombre" : "botines",
			"desc" : "botines de boca juniors",
			"precio" : "1200"
		} ];
		localStorage.setItem("productos", JSON.stringify(array));
	}

	var data = JSON.parse(localStorage.getItem("productos"));
	var cant = data.length;
	var cadena = "<table>";

	for (var i = 0; i < cant; i++) {
		cadena += "<tr>"
		if (sessionStorage.getItem(data[i].nombre) != null) {
			cadena += "<td>" + data[i].nombre + "</td>";
			cadena += "<td>" + data[i].desc + "</td>";
			cadena += "<td>" + data[i].precio + "</td>";
			cadena += "<td><input type=\"number\" name=\"cantidad\" value="
					+ sessionStorage.getItem(data[i].nombre) + "></td>";
			cadena += "<td><a onclick=\"eliminar(this)\">Eliminar</a></td>";
			cadena += "</tr>";
		} else {
			cadena += "<td>" + data[i].nombre + "</td>";
			cadena += "<td>" + data[i].desc + "</td>";
			cadena += "<td>" + data[i].precio + "</td>";
			cadena += "<td><input type=\"number\" name=\"cantidad\" value=\"\"></td>";
			cadena += "<td><a onclick=\"add(this)\">Añadir al carro</a></td>";
			cadena += "</tr>";
		}
	}
	cadena += "</table>";

	$("#grilla").prepend(cadena);
}

function add(tag) {
	console.log("add");
	var nombre = $(tag).closest("tr").find("td:eq(0)").html();
	var descripcion = $(tag).closest("tr").find("td:eq(1)").html();
	var precio = $(tag).closest("tr").find("td:eq(2)").html();
	var cant = $(tag).closest("tr").find("td:eq(3) [name=cantidad]").val();
	sessionStorage.setItem(nombre, cant);
	$.ajax({
		url : "http://localhost:8080/tp2-pdc/ProductosSessionServlet",
		type : "post",
		data : $.param({
			"nombre" : nombre,
			"precio" : precio,
			"descripcion" : descripcion
		}),
		datatype : "html",
		error : function(hr) {
			console.log("error");
			console.log(hr.responseText);
		},
		success : function(html) {
			console.log("seccess");
			console.log(html);
			window.location.href = "index.jsp";
		}
	});
}

function eliminar(tag) {
	console.log("eliminar");
	var nombre = $(tag).closest("tr").find("td:eq(0)").html();
	sessionStorage.removeItem(nombre);
	$.ajax({
		url : "http://localhost:8080/tp2-pdc/ProductosSessionServlet",
		type : "post",
		data : $.param({
			"delAttrName" : nombre
		}),
		datatype : "html",
		error : function(hr) {
			console.log("error");
			console.log(hr.responseText);
		},
		success : function(html) {
			console.log("success");
			console.log(html);
			$(tag).closest("tr").find("td:eq(3) [name=cantidad]").val("");
			$(tag).closest("tr").find("td:eq(4)").html("Añadir al carro");
			$(tag).closest("tr").find("td:eq(4)").attr("onclick","add(this)");
		}
	});
}

function resumen() {
	console.log("resumen");
	$.ajax({
		url : "http://localhost:8080/tp2-pdc/ResumenSessionServlet",
		type : "get",
		datatype : "html",
		error : function(hr) {
			console.log("error");
			console.log(hr.responseText);
			$("#grilla").prop("hidden", true);
			$("#resumen").html(hr.responseText);
		},
		success : function(html) {
			console.log("seccess");
			console.log(html);
			$("#grilla").prop("hidden", true);
			$("#resumen").html(html);
		}
	});
}
