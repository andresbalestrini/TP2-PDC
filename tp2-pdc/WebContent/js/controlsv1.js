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
			
			/*==================================================================
			[ Cart ]*/
			$('.js-show-cart').on('click',function(){
				console.log("presione el carrito");
			    visualizar_carrito();
				
			});
		});

function crear_productos() {
	console.log("crear_productos...");
	
	if (localStorage.productos == undefined) {
		console.log("no estan los datos");
		var array = [ {
			"id" : 1,
			"nombre" : "Rucula y jamon crudo",
			"desc" : "queso muzzarella, jamon crudo, rucula,  queso parmesado, aceitunas negras.",
			"precio" : 200.00,
			"src_imagen" : "./images/menu/pizza-rucula.jpg"
		}, {
			"id" : 2,
			"nombre" : "Especial",
			"desc" : "queso muzzarella, salsa pimiento rojo, pimiento verde, aceitunas negras.",
			"precio" : 200.00,
			"src_imagen" : "./images/menu/pizza-especial.jpg"
		}, {
			"id" : 3,
			"nombre" : "Hamburguesa completa",
			"desc" : "Pan con semillas, lechuga, tomate, huevo, jamon, carne y queso.",
			"precio" : 190.00,
			"src_imagen" : "./images/menu/hamburguesa-completa.jpg"
		}, {
			"id" : 4,
			"nombre" : "Hamburguesa bacon",
			"desc" : "Pan con semillas, cebolla, tomate, lechuga, 8 tiras de Bacon, carne y queso cheddar.",
			"precio" : 190.00,
			"src_imagen" : "./images/menu/hamburguesa-bacon.png"
		}, {
			"id" : 5,
			"nombre" : "Ipa rubia",
			"desc" : "Cerveza rubia premium de mucho carácter, gracias a la calidad de sus lúpulos.",
			"precio" : 90.00,
			"src_imagen" : "./images/menu/cerveza-ipa.jpg"
		},{
			"id" : 6,
			"nombre" : "Scotch",
			"desc" : "Posee notas de frutos rojos y un contrastado amargo dulzor. Es especial para acompañar picadas y fiambres",
			"precio" : 90.00,
			"src_imagen" : "./images/menu/cerveza-scotch.jpeg"
		}
		];
		localStorage.setItem("productos", JSON.stringify(array));
	}
	var carrito = JSON.parse(localStorage.getItem("carrito"));	
	var data = JSON.parse(localStorage.getItem("productos"));
	var cant = data.length;
	var filtrado;
	var cadena = "<table>";

	var tipoItem;
	console.log("data.length:" + data.length);
	for(var j = 0; j < cant; j++){
		
		if(j == 0 || j == 1) tipoItem = 'hamburguesas';
		if(j == 2 || j == 3) tipoItem = 'pizzas';
		if(j == 4 || j == 5) tipoItem = 'bebidas';
		
		for (var i = 0; i < cant; i++) {
			cadena += "<tr onclick=\"detallesProducto(this)\">";
			cadena += "<input type= \"hidden\" name=\"identificador\" value="
					+ data[i].id + ">";
			if(carrito != null){
				filtrado = carrito.filter(producto => producto.id == data[i].id);
			}
			
	
			if (carrito != null && filtrado.length > 0){
				cadena += "<td>" + data[i].nombre + "</td>";
				cadena += "<td>" + data[i].desc + "</td>";
				cadena += "<td>" + data[i].precio + "</td>";
	//			cadena += "<td><input type=\"number\" name=\"cantidad\" value="
	//					+ filtrado[0].cantidad + "></td>";
				cadena += "<td><a onclick=\"eliminar(this)\">Eliminar</a></td>";
				cadena += "</tr>";
	
	
				var tipo =".items-" + tipoItem; 
				$(tipo).append("" +
						"<div id=\"item-" + data[i].id + "-menu\" class=\"media menu-item\"> " +
						"<input type= \"hidden\" name=\"identificador\" value="+ data[i].id + ">" +
							"<img class=\"mr-3\" src=" + data[i].src_imagen +" class=\"img-fluid\" alt=\"Free Template by colorlib.com\">" +
							"<div class=\"media-body\">" +
								"<h5 class=\"mt-0\">" + data[i].nombre + "</h5>" +
								"<p>" + data[i].desc + "</p>" +
								"<h6 class=\"text-primary menu-price\">$"+ data[i].precio +"</h6>" +
							"</div>" +
							"<button type=\"button\" class=\"close color-red\" aria-label=\"Close\" onclick=eliminar(this)><span aria-hidden=\"true\">&times;</span></button>" +
						"</div>" );
				


				
				
			}	else {
				cadena += "<td>" + data[i].nombre + "</td>";
				cadena += "<td>" + data[i].desc + "</td>";
				cadena += "<td>" + data[i].precio + "</td>";
	//			cadena += "<td><input type=\"number\" name=\"cantidad\" value=\"\"></td>";
	//			cadena += "<td><a >Añadir al carro</a></td>";
				cadena += "</tr>";
	
				
				
				var tipo =".items-" + tipoItem;
				console.log("items:" + tipo);
				$(tipo).append("" +
						"<div id=\"item-" + data[i].id + "-menu\" class=\"media menu-item\" onclick=\"detallesProducto(this)\"> " +
						"<input type= \"hidden\" name=\"identificador\" value="+ data[i].id + ">" +
							"<img class=\"mr-3 src_imagen\" src=" + data[i].src_imagen +" class=\"img-fluid\" alt=\"Free Template by colorlib.com\">" +
							"<div class=\"media-body\">" +
								"<h5 class=\"mt-0 nombre\">" + data[i].nombre + "</h5>" +
								"<p class=\"descripcion\" >" + data[i].desc + "</p>" +
								"<h6 class=\"text-primary menu-price precio\">$"+ data[i].precio +"</h6>" +
							"</div>" + 
						"</div>" );
				
			}
			
		}
	}
	cadena += "</table>";

	//$("#grilla").prepend(cadena);
}

function detallesProducto(tag){
	console.log("detallesProducto(tag)");
	console.log("tag:" + tag);
	
	var nombre = $(tag).find(".nombre").text();
	var descripcion = $(tag).find(".descripcion").html();
	var precio = $(tag).find(".precio").html();
	var src_imagen = $(tag).find(".src_imagen").attr('src');	
	var id = $(tag).find("[name=identificador]").val();
	
	// Los toma bien 
	console.log("det producto:" + nombre + ", " + descripcion + ", " + precio + ", " + id + ", " + src_imagen);
	console.log("det producto:{ nombre:" + nombre + "\n, descripcion:" + descripcion + "\n, valor:" + precio + "\n, id:" + id + "\n, src:" + src_imagen + "}");
	
	
	$.ajax({
		url : "http://localhost:8080/tp2-pdc/InfoProductoServlet",
		type : "post",
		data : $.param({
			"id":id,
			"nombre" : nombre,
			"precio" : precio,
			"descripcion" : descripcion,
			"src_imagen" : src_imagen
		}),
		datatype : "html",
		error : function(hr) {
			//$("#resumen").html(hr.responseText);
		},
		success : function(html) {
			console.log("seccess");
			
			
			$(".section-slide").hide();
			$(".section-menu").hide();
			$(".footer").hide();	
			
			
			//$("#grilla").hide();
			//$("#resumen").show();
			$("#iproducto").show();
			$("#iproducto").html(html);
			
		}
	});
}

function add(id) {
	console.log("add");
	console.log("id:" + id);
	var selector = '#item-' + id;
	console.log("selector:" + selector);
	
/*//	var nombre = $(tag).closest("tr").find("td:eq(0)").html();
//	var descripcion = $(tag).closest("tr").find("td:eq(1)").html();
//	var precio = $(tag).closest("tr").find("td:eq(2)").html();
//	var id = $(tag).closest("tr").find("[name=identificador]").val();
	var nombre = $("[name=nombre]").html();
	var descripcion= $("[name=descripcion]").html();
	var valor= $("[name=valor]").html();
	var id = $("[name=idInfo]").val();
	var cant = $("[name=cantidad]").val();*/
	
	
	
	var id = $(selector).find("[name=identificador]").val();
	var nombre = $(selector).find(".nombre").html();
	var descripcion = $(selector).find(".descripcion").html();
	var valor = $(selector).find(".precio").html();
	valor = valor.replace('$', '');
	var src_imagen = $(selector).find(".src_imagen").attr('src');
	var cant = Number($("[name=num-product]").val());
	
	
	// Los toma bien 
	console.log("det producto:{ nombre:" + nombre + ",\n descripcion:" + descripcion + ",\n valor:" + valor + ",\n id:" + id + ",\n src:" + src_imagen + ",\n cantidad:" + cant + "}");
	
	
	
	sessionStorage.setItem(id, cant);

	if (localStorage.getItem("carrito") == null) {
		console.log("IF");

		var producto = [ {
			id : id,
			cantidad : cant,
			nombre : nombre,
			precio: valor,
			descripcion: descripcion,
			src_imagen:src_imagen
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
			cantidad: cant,
			src_imagen:src_imagen
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
			"cantidad" : cant,
			"src_imagen" : src_imagen
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
			
			//$("#resumen").hide();
			//$("#grilla").show();
			/*$("#grilla").find("[name=identificador]").each(function( identificador ) {
			  if( $( this ).val() == id ){
				  $( this ).closest("tr").append("<td> <a onclick=\"eliminar(this)\">Eliminar</a> </td>");
				  $( this ).closest("tr").attr("onclick","");
				  return false;
			  }	
			});*/
			
			$(".section-slide").show();
			$(".section-menu").show();
			$(".footer").show();	
			
			$("#iproducto").hide();
			
			var selectorItem = "#item-"+ id + "-menu";
			$(selectorItem).attr("onclick","");
			$(selectorItem).append("<button type=\"button\" class=\"close color-red\" aria-label=\"Close\" onclick=eliminar(this)><span aria-hidden=\"true\">&times;</span></button>");
		}
	});
	
	
	console.log("id add:" + id);
	
	
	
}

function eliminar(tag) {
	console.log("eliminar");
	var id = $(tag).closest("div").find("[name=identificador]").val();
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
			//console.log("cuerpo: " + $(tag).closest("div").html());
			$(tag).closest("div").attr("onclick","detallesProducto(this)")
			$(tag).remove();
		}
	});
}

function visualizar_carrito() {
	console.log("visualizar_carrito");
	$.ajax({
		url : "http://localhost:8080/tp2-pdc/ResumenSessionServlet",
		type : "get",
		datatype : "html",
		error : function(hr) {
			console.log("error");
			console.log(hr.responseText);
			//$("#grilla").prop("hidden", true);
			//$("#resumen").html(hr.responseText);
		},
		success : function(html) {
			console.log("seccess");
			// console.log(html);
			//$("#grilla").prop("hidden", true);
			//$("#resumen").show();
			//$("#resumen").html(html);
			$(".section-slide").hide();
			$(".section-menu").hide();
			$(".footer").hide();
			
			$("#carrito").html(html);
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
					//valor = valor.replace('$', '');
				var selectorTotalProducto = "#total-producto-"+id;
				var total_producto = $(tag).closest("tr").find(selectorTotalProducto).html();
				total_producto = parseFloat(total_producto.replace('$', ''));
				var total = parseFloat($("#total").html());
				console.log("total_producto: " + total_producto);
				console.log("total: " + total);
				$("#total").html(total - total_producto);
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
			$("#carrito").html(html);
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


function restar(){
	console.log("btn-num-product-down");
	
    var numProduct = Number($("[name=num-product]").val());
    if(numProduct > 0) $("[name=num-product]").val(numProduct - 1);
}

function sumar(){
	console.log("btn-num-product-up");
	
    var numProduct = Number($("[name=num-product]").val());
    $("[name=num-product]").val(numProduct + 1);
}
