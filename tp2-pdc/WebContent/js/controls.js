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
			"nombre" : "Medias",
			"desc" : "Medias de boca juniors",
			"precio" : 33.00
		}, {
			"nombre" : "Buzo",
			"desc" : "Buzo de boca juniors",
			"precio" : 100.00
		}, {
			"nombre" : "Remera",
			"desc" : "Remera de boca juniors",
			"precio" : 500.50
		}, {
			"nombre" : "Pantalones",
			"desc" : "pantalones de boca juniors",
			"precio" : 200.00
		}, {
			"nombre" : "Botines",
			"desc" : "botines de boca juniors",
			"precio" : 1200.99
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
			"descripcion" : descripcion,
			"cantidad" : cant
		}),
		datatype : "html",
		error : function(hr) {
			console.log("error");
			console.log(hr.responseText);
		},
		success : function(html) {
			console.log("seccess");
			console.log(html);
			$(tag).closest("tr").find("td:eq(4)").html(
					"<a onclick=\"eliminar(this)\">Eliminar</a>");
			// $(tag).closest("tr").find("td:eq(4)").attr("onclick",
			// "eliminar(this)");
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
			$(tag).closest("tr").find("td:eq(4)").html(
					"<a onclick=\"add(this)\">Añadir al carro</a>");
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

function eliminar_product_carrito(tag) {
	console.log("eliminar_product_carrito(tag)");
	// tengo que obtener el valor del input con nombre [name=hAttrName] porque
	// si
	// obtenemos el valor del nombre del producto a eliminar usando el valor
	// html del <td>
	// de esta forma 'var nombre =
	// $(tag).closest("tr").find("td:eq(0)").html();'
	// viene una cadena de un largo incomprensible
	var nombre = $(tag).closest("tr").find("[name=hAttrName]").val();
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
			var precio = parseFloat($(tag).closest("tr").find("td:eq(2)").html());
			var cant = parseFloat($(tag).closest("tr").find("td:eq(3)").html());			
			var total = parseFloat($("#total").html());									
			$("#total").html(total - (precio * cant));			
			$(tag).closest("tr").remove();
		}
	});
}


function confirmarCompra(){
	console.log("confirmarCompra");
	
	$.ajax({
		url : "http://localhost:8080/tp2-pdc/FinalizarCompraServlet",
		type : "get",
		datatype : "html",
		error : function(hr) {
			console.log("error");
			console.log(hr.responseText);
		},
		success : function(html) {
			console.log("success");
			console.log(html);	
			$("#resumen").html(html);
		}
	});
}

function procesarCompra(evt){
	evt.preventDefault();
	
	// eliminar sessionStorate
	sessionStorage.clear();
	
	
	// hacer post a FinalizarCompra
	
	var nombre = $("#inombre").val();
	var apellido = $("#iapellido").val();
	var mail = $("#imail").val();
	
	if( $("[name=recordar]:checked").val() == "SI"){
		$.ajax({
			url : "http://localhost:8080/tp2-pdc/FinalizarCompraServlet",
			type : "post",
			data : $.param({
				"nombre" : nombre,
				"apellido" : apellido,
				"mail" : mail
			}),
			datatype : "html",
			error : function(hr) {
				console.log("error");
				console.log(hr.responseText);
			},
			success : function(html) {
				console.log("success");
				console.log(html);		
				window.location.href = "index.jsp";
				
			}
		});
	
	} else {
		$.ajax({
			url : "http://localhost:8080/tp2-pdc/FinalizarCompraServlet",
			type : "post",
			datatype : "html",
			error : function(hr) {
				console.log("error");
				console.log(hr.responseText);
			},
			success : function(html) {
				console.log("success");
				console.log(html);			
				window.location.href = "index.jsp";
			}
		});
	}
	
	
}






