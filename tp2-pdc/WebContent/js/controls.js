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
			"id" : 1,
			"nombre" : "Medias",
			"desc" : "Medias de boca juniors",
			"precio" : 33.00
		}, {
			"id" : 2,
			"nombre" : "Buzo",
			"desc" : "Buzo de boca juniors",
			"precio" : 100.00
		}, {
			"id" : 3,
			"nombre" : "Remera",
			"desc" : "Remera de boca juniors",
			"precio" : 500.50
		}, {
			"id" : 4,
			"nombre" : "Pantalones",
			"desc" : "pantalones de boca juniors",
			"precio" : 200.00
		}, {
			"id" : 5,
			"nombre" : "Botines",
			"desc" : "botines de boca juniors",
			"precio" : 1200.99
		} ];
		localStorage.setItem("productos", JSON.stringify(array));
	}
	var carrito = JSON.parse(localStorage.getItem("carrito"));	
	var data = JSON.parse(localStorage.getItem("productos"));
	var cant = data.length;
	var filtrado;
	var cadena = "<table>";

	for (var i = 0; i < cant; i++) {
		cadena += "<tr onclick=\"detallesProducto(this)\">";
		cadena += "<input type= \"hidden\" name=\"identificador\" value="
				+ data[i].id + ">";
		if(carrito != null)
			filtrado = carrito.filter(producto => producto.id == data[i].id);
		if (carrito != null && filtrado.length > 0){
			cadena += "<td>" + data[i].nombre + "</td>";
			cadena += "<td>" + data[i].desc + "</td>";
			cadena += "<td>" + data[i].precio + "</td>";
//			cadena += "<td><input type=\"number\" name=\"cantidad\" value="
//					+ filtrado[0].cantidad + "></td>";
			cadena += "<td><a onclick=\"eliminar(this)\">Eliminar</a></td>";
			cadena += "</tr>";
		}			
		
//		if (sessionStorage.getItem(data[i].id) != null) {
//			cadena += "<td>" + data[i].nombre + "</td>";
//			cadena += "<td>" + data[i].desc + "</td>";
//			cadena += "<td>" + data[i].precio + "</td>";
//			cadena += "<td><input type=\"number\" name=\"cantidad\" value="
//					+ sessionStorage.getItem(data[i].id) + "></td>";
//			cadena += "<td><a onclick=\"eliminar(this)\">Eliminar</a></td>";
//			cadena += "</tr>";
//		} else {
		else {
			cadena += "<td>" + data[i].nombre + "</td>";
			cadena += "<td>" + data[i].desc + "</td>";
			cadena += "<td>" + data[i].precio + "</td>";
//			cadena += "<td><input type=\"number\" name=\"cantidad\" value=\"\"></td>";
//			cadena += "<td><a >Añadir al carro</a></td>";
			cadena += "</tr>";
		}
	}
	cadena += "</table>";

	$("#grilla").prepend(cadena);
}

function detallesProducto(tag){
	var nombre = $(tag).find("td:eq(0)").html();
	var descripcion = $(tag).find("td:eq(1)").html();
	var precio = $(tag).find("td:eq(2)").html();	
	var id = $(tag).find("[name=identificador]").val();
	
	$.ajax({
		url : "http://localhost:8080/tp2-pdc/InfoProductoServlet",
		type : "post",
		data : $.param({
			"id":id,
			"nombre" : nombre,
			"precio" : precio,
			"descripcion" : descripcion
		}),
		datatype : "html",
		error : function(hr) {
			$("#resumen").html(hr.responseText);
		},
		success : function(html) {
			console.log("seccess");
			$("#grilla").hide();
			$("#resumen").show();
			$("#resumen").html(html);
			
		}
	});
}

function add() {
	console.log("add");
//	var nombre = $(tag).closest("tr").find("td:eq(0)").html();
//	var descripcion = $(tag).closest("tr").find("td:eq(1)").html();
//	var precio = $(tag).closest("tr").find("td:eq(2)").html();
//	var id = $(tag).closest("tr").find("[name=identificador]").val();
	var nombre = $("[name=nombre]").html();
	var descripcion= $("[name=descripcion]").html();
	var valor= $("[name=valor]").html();
	var id = $("[name=idInfo]").val();
	var cant = $("[name=cantidad]").val();
	console.log(cant);
	console.log(id);
	console.log(nombre);
	console.log(descripcion);
	console.log(valor);
	sessionStorage.setItem(id, cant);

	if (localStorage.getItem("carrito") == null) {
		console.log("IF");

		var producto = [ {
			id : id,
			cantidad : cant,
			nombre : nombre,
			precio: valor,
			descripcion: descripcion
		} ];
		console.log("producto:" + producto);

		localStorage.setItem("carrito", JSON.stringify(producto));

	} else {
		console.log("ELSE");
		console.log("localStorage.getItem('carrito'):"
				+ localStorage.getItem("carrito"));

		var jsonCarrito = JSON.parse(localStorage.getItem("carrito"));
		jsonCarrito.push({
			id : id,
			cantidad : cant,
			nombre : nombre,
			precio: valor,
			cantidad: cant
		});
		console.log("jsonCarrito:" + jsonCarrito);

		localStorage.setItem("carrito", JSON.stringify(jsonCarrito));
	}

	$.ajax({
		url : "http://localhost:8080/tp2-pdc/ProductosSessionServlet",
		type : "post",
		data : $.param({
			"id":id,
			"nombre" : nombre,
			"precio" : valor,
			"descripcion" : descripcion,
			"cantidad" : cant
		}),
		datatype : "html",
		error : function(hr) {
			console.log("error");
			console.log(hr.responseText);
		},
		success : function(html) {
			console.log("success");
			// console.log(html);
//			$(tag).closest("tr").find("td:eq(4)").html(
//					"<a onclick=\"eliminar(this)\">Eliminar</a>");
			// $(tag).closest("tr").find("td:eq(4)").attr("onclick",
			// "eliminar(this)");
			
			$("#resumen").hide();
			$("#grilla").show();
			$("#grilla").find("[name=identificador]").each(function( identificador ) {
			  if( $( this ).val() == id ){
				  $( this ).closest("tr").append("<td> <a onclick=\"eliminar(this)\">Eliminar</a> </td>");
				  $( this ).closest("tr").attr("onclick","");
				  return false;
			  }	
			});
		}
	});
	
	
	console.log("id add:" + id);
	
	
	
}

function eliminar(tag) {
	console.log("eliminar");
	var id = $(tag).closest("tr").find("[name=identificador]").val();
	console.log("eliminar por id: "+ id);
	sessionStorage.removeItem(id);

	var jsonCarrito = JSON.parse(localStorage.getItem("carrito"));
	var nuevoCarrito = jsonCarrito.filter(function(el) {
		return el.id != id;
	});
	
	localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
	
	$.ajax({
		url : "http://localhost:8080/tp2-pdc/ProductosSessionServlet",
		type : "post",
		data : $.param({
			"delAttrName" : id
		}),
		datatype : "html",
		error : function(hr) {
			console.log("error");
			console.log(hr.responseText);
		},
		success : function(html) {
			console.log("success");
			// console.log(html);

			$(tag).closest("tr").find("td:eq(3)").remove();

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
			// console.log(html);
			$("#grilla").prop("hidden", true);
			$("#resumen").show();
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
	var id = $(tag).closest("tr").find("[name=hAttrName]").val();
	sessionStorage.removeItem(id);
	
	var jsonCarrito = JSON.parse(localStorage.getItem("carrito"));
	var nuevoCarrito = jsonCarrito.filter(function(el) {
		return el.id != id;
	});
	
	localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
	
	$.ajax({
				url : "http://localhost:8080/tp2-pdc/ProductosSessionServlet",
				type : "post",
				data : $.param({
					"delAttrName" : id
				}),
				datatype : "html",
				error : function(hr) {
					console.log("error");
					console.log(hr.responseText);
				},
				success : function(html) {
					console.log("success");
					// console.log(html);
					var precio = parseFloat($(tag).closest("tr").find(
							"td:eq(2)").html());
					var cant = parseFloat($(tag).closest("tr").find("td:eq(3)")
							.html());
					var total = parseFloat($("#total").html());
					$("#total").html(total - (precio * cant));
					$(tag).closest("tr").remove();
				}
			});
}

function confirmarCompra() {
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
			// console.log(html);
			$("#resumen").html(html);
		}
	});
}

function procesarCompra(evt) {
	evt.preventDefault();

	// eliminar sessionStorate
	sessionStorage.clear();

	// hacer post a FinalizarCompra

	var nombre = $("#inombre").val();
	var apellido = $("#iapellido").val();
	var mail = $("#imail").val();

	if ($("[name=recordar]:checked").length > 0) {
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
				// console.log(html);
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
				// console.log(html);
				window.location.href = "index.jsp";
			}
		});
	}

}
