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

function modal(){
    $('.modal').modal('show');
    setTimeout(function () {
    	console.log('hejsan');
    	$('.modal').modal('hide');
    }, 1000);
 }

function crear_productos() {
	console.log("crear_productos...");
	
	if (localStorage.productos == undefined) {
		console.log("no estan los datos");
		
		var bebidas = [{

	        "id" : 1,
	        "nombre" : "CocaCola clasic",
	        "desc" : "Cocacola siente el sabor de tu bebida favorita.",
	        "precio" : 37.00,
	        "src_imagen" : "./images/menu/cocacola.jpeg"

	    },{
	        "id" : 2,
	        "nombre" : "Sprite",
	        "desc" : "Una de las bebidad nacidas para refrescar desde hace mucho tiempo.",
	        "precio" : 40.00,
	        "src_imagen" : "./images/menu/sprite.jpeg"
	    
	    },{
	        "id" : 3,
	        "nombre" : "Vino Tinto",
	        "desc" : "El vino tinto​ es un tipo de vino procedente mayormente de mostos de uvas tintas. El cual le da su color",
	        "precio" : 80.00,
	        "src_imagen" : "./images/menu/vinotinto.jpeg"

	    },{
	        "id" : 4,
	        "nombre" : "Vino Blanco",
	        "desc" : "Las uvas blancas que producen principalmente vinos blancos son de color verde o amarillo, una variedad muy extendida en el mundo.",
	        "precio" : 87.00,
	        "src_imagen" : "./images/menu/vinoblanco.jpg"

	    },{

	        "id" : 5,
	        "nombre" : "Ipa rubia",
	        "desc" : "Cerveza rubia premium de mucho carácter, gracias a la calidad de sus lúpulos.",
	        "precio" : 90.00,
	        "src_imagen" : "./images/menu/cerveza-ipa.jpg"
	    },{

	        "id" : 6,
	        "nombre" : "Scotch",
	        "desc" : "Posee notas de frutos rojos y un contrastado amargo dulzor. Es especial para acompañar picadas y fiambres",
	        "precio" : 96.00,
	        "src_imagen" : "./images/menu/cerveza-scotch.jpeg"
	    }];

		var pizzas = [{

	        "id" : 7,
	        "nombre" : "Rucula y jamon crudo",
	        "desc" : "queso muzzarella, jamon crudo, rucula, queso parmesado, aceitunas negras.",
	        "precio" : 225.00,
	        "src_imagen" : "./images/menu/pizza-rucula.jpg"
	    },{
	            
	        "id" : 8,
	        "nombre" : "Especial",
	        "desc" : "queso muzzarella, salsa pimiento rojo, pimiento verde, aceitunas negras.",
	        "precio" : 185.00,
	        "src_imagen" : "./images/menu/pizza-especial.jpg"
	    },{

	        "id" : 9,
	        "nombre" : "Queso y pepperoni",
	        "desc" : "Rebanadas picantes del pepperoni y capa de queso derretido a la que nadie puede negarse.",
	        "precio" : 190.00,
	        "src_imagen" : "./images/menu/quesopepperoni.jpeg"
	    },{

	        "id" : 10,
	        "nombre" : "Pizza de pollo",
	        "desc" : "Seguro que a muchos les encantará este sabor con pollo y salsa barbacoa",
	        "precio" : 200.00,
	        "src_imagen" : "./images/menu/pizzapollo.jpeg"
	    },{

	        "id" : 11,
	        "nombre" : "Napolitana",
	        "desc" : "La pizza napolitana puede contener anchoas, orégano, alcaparras y ajo, entre otros ingredientes.",
	        "precio" : 96.00,
	        "src_imagen" : "./images/menu/napolitana.jpeg"
	    },{

	        "id" : 12,
	        "nombre" : "Pizza cuatro quesos",
	        "desc" : "Si te gustan las recetas con queso, ¡imagínate esta que lleva cuatro!",
	        "precio" : 96.00,
	        "src_imagen" : "./images/menu/pizzacuatroquesos.jpeg"
	    }
	    ];

		var hamburguesas = [{

	        "id" : 13,
	        "nombre" : "Hamburguesa completa",
	        "desc" : "Pan con semillas, lechuga, tomate, huevo, jamon, carne y queso.",
	        "precio" : 190.00,
	        "src_imagen" : "./images/menu/hamburguesa-completa.jpg"
	    }, {

	        "id" : 14,
	        "nombre" : "Hamburguesa bacon",
	        "desc" : "Pan con semillas, cebolla, tomate, lechuga, 8 tiras de Bacon, carne y queso cheddar.",
	        "precio" : 190.00,
	        "src_imagen" : "./images/menu/hamburguesa-bacon.png"
	    },{

	        "id" : 15,
	        "nombre" : "Latin Macho Burger",
	        "desc" : "¿Chorizo o hamburguesa? Con esta hamburguesa no tiene que elegir una sola opción.",
	        "precio" : 155.00,
	        "src_imagen" : "./images/menu/machoburger.jpg"
	    },{

	        "id" : 16,
	        "nombre" : "Jalapeno Bacon Cheeseburger",
	        "desc" : "Medio kilo de carne, queso derretido, jalapeños, tomates, lechuga y tocino empanizado y frito.",
	        "precio" : 175.00,
	        "src_imagen" : "./images/menu/baconcheeseburger.jpg"
	    },{

	        "id" : 17,
	        "nombre" : "Kuma Burger",
	        "desc" : "Este plato lleva cebolla roja, tomate, lechuga, tocino y queso cheddar picante",
	        "precio" : 160.00,
	        "src_imagen" : "./images/menu/kumaburger.jpg"
	    },{

	        "id" : 18,
	        "nombre" : "Tostón Burger",
	        "desc" : "Colocada entre dos tostones calientes, viene con lechuga, tomate, queso americano y mayonesa hecha con cilantro.",
	        "precio" : 96.00,
	        "src_imagen" : "./images/menu/tostonburger.jpg"
	    }
	    ];
		
		var array = {"bebidas":bebidas,"pizzas": pizzas,"hamburguesas":hamburguesas};
		
		localStorage.setItem("productos", JSON.stringify(array));
	}
	var carrito = JSON.parse(localStorage.getItem("carrito"));	
	var data = JSON.parse(localStorage.getItem("productos"));
	var cant = data.length;
	var filtrado;

	var tipoItem;
	
	var categoria;
	for(var j = 0; j < 3; j++){
		
		if(j == 0){
			categoria = data["bebidas"];
			tipoItem = 'bebidas';
		}
		if(j == 1) {
			categoria = data["pizzas"]
			tipoItem = 'pizzas';
		}
		if(j == 2){
			categoria = data["hamburguesas"]
			tipoItem = 'hamburguesas';
		}
		
		for (var i = 0; i < categoria.length; i++) {
			if(carrito != null){
				//filtrado = carrito.filter(producto => producto.id == data[i].id);
				filtrado = carrito.filter(producto => producto.id == categoria[i].id);
			}
			
			var tipo =".items-" + tipoItem;
	
			if (carrito != null && filtrado.length > 0){
				if(i == ((categoria.length)/2)){ 
					tipoItem = tipoItem+"-1";
				}
	
				var tipo =".items-" + tipoItem; //tengo que modificar estas cosas
				$(tipo).append("" +
						"<div id=\"item-" + categoria[i].id + "-menu\" class=\"media menu-item\"> " +
						"<input type= \"hidden\" name=\"identificador\" value="+ categoria[i].id + ">" +
							"<img class=\"mr-3 src_imagen\" src=" + categoria[i].src_imagen +" class=\"img-fluid\" alt=\"Free Template by colorlib.com\">" +
							"<div class=\"media-body\">" +
								"<h5 class=\"mt-0 nombre\">" + categoria[i].nombre + "</h5>" +
								"<p class=\"descripcion\">" + categoria[i].desc + "</p>" +
								"<h6 class=\"text-primary menu-price precio\">$"+ categoria[i].precio +"</h6>" +
							"</div>" +
							"<button type=\"button\" class=\"close color-red\" aria-label=\"Close\" onclick=eliminar(this)><span aria-hidden=\"true\">&times;</span></button>" +
						"</div>" );
				


				
				
			}	else {
				
				if(i == ((categoria.length)/2)){ //va a cambiar de columna cuandp vaya la mitad de los productos
					tipoItem = tipoItem+"-1";
				}
				
				var tipo =".items-" + tipoItem;
				$(tipo).append("" +
						"<div id=\"item-" + categoria[i].id + "-menu\" class=\"media menu-item\" onclick=\"detallesProducto(this)\"> " +
						"<input type= \"hidden\" name=\"identificador\" value="+ categoria[i].id + ">" +
							"<img class=\"mr-3 src_imagen\" src=" + categoria[i].src_imagen +" class=\"img-fluid\" alt=\"Free Template by colorlib.com\">" +
							"<div class=\"media-body\">" +
								"<h5 class=\"mt-0 nombre\">" + categoria[i].nombre + "</h5>" +
								"<p class=\"descripcion\" >" + categoria[i].desc + "</p>" +
								"<h6 class=\"text-primary menu-price precio\">$"+ categoria[i].precio +"</h6>" +
							"</div>" + 
						"</div>" );
			}
			
		}
	}
}


function detallesProducto(tag){
	console.log("detallesProducto(tag)");
	console.log("tag:" + tag);
	modal();
	$('#isection-producto').focus();
	
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
			$(".section-slide").hide();
			$(".section-menu").hide();
			$(".footer").hide();
			$("#iproducto").hide();
			$("#carrito").hide();
			$("#formulario").hide();
			$("#error").show();
			$("#error").html(hr.responseText);
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
	modal();
	
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
			$(".section-slide").hide();
			$(".section-menu").hide();
			$(".footer").hide();
			$("#iproducto").hide();
			$("#carrito").hide();
			$("#formulario").hide();
			$("#error").show();
			$("#error").html(hr.responseText);
		},
		success : function(html) {
			console.log("success");
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
	modal();

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
			$(".section-slide").hide();
			$(".section-menu").hide();
			$(".footer").hide();
			$("#iproducto").hide();
			$("#carrito").hide();
			$("#formulario").hide();
			$("#error").show();
			$("#error").html(hr.responseText);
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

function volver_carrito(){
	$("#formulario").hide();
	$("#carrito").show();
}

function visualizar_carrito() {
	console.log("visualizar_carrito");
	
	$.ajax({
		url : "http://localhost:8080/tp2-pdc/ResumenSessionServlet",
		type : "get",
		datatype : "html",
		error : function(hr) {
			console.log("error");
			$(".section-slide").hide();
			$(".section-menu").hide();
			$(".footer").hide();
			$("#iproducto").hide();
			$("#carrito").hide();
			$("#formulario").hide();
			$("#error").show();
			$("#error").html(hr.responseText);
		},
		success : function(html) {
			console.log("seccess");
			$(".section-slide").hide();
			$(".section-menu").hide();
			$(".footer").hide();
			$("#iproducto").hide();
			$("#formulario").hide();
			$("#carrito").show();
			$("#carrito").html(html);
			
			console.log('JSON.parse(localStorage.getItem("carrito")).length:' + JSON.parse(localStorage.getItem("carrito")).length);
			
			if (localStorage.getItem("carrito") == null || JSON.parse(localStorage.getItem("carrito")).length == 0) {
				console.log('visualizar if');
				$('#ifinalizar-compra').prop('disabled', true);
				$('#ifinalizar-compra').removeClass('btn-primary');
				$('#ifinalizar-compra').addClass('button-disabled');

			}else{
				console.log('visualizar else');
			$('#ifinalizar-compra').addClass('btn-primary');
			$('#ifinalizar-compra').removeClass('button-disabled');
			$('#ifinalizar-compra').prop('disabled', false);
			}
			
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
					$(".section-slide").hide();
					$(".section-menu").hide();
					$(".footer").hide();
					$("#iproducto").hide();
					$("#carrito").hide();
					$("#formulario").hide();
					$("#error").show();
					$("#error").html(hr.responseText);
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
					
					console.log('JSON.parse(localStorage.getItem("carrito")).length:' + JSON.parse(localStorage.getItem("carrito")).length);
					
					if (localStorage.getItem("carrito") == null || JSON.parse(localStorage.getItem("carrito")).length == 0) {
						console.log('eliminar_product_carrito IF');
						$('#ifinalizar-compra').prop('disabled', true);
						$('#ifinalizar-compra').removeClass('btn-primary');
						$('#ifinalizar-compra').addClass('button-disabled');
					}
				
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
			$(".section-slide").hide();
			$(".section-menu").hide();
			$(".footer").hide();
			$("#iproducto").hide();
			$("#carrito").hide();
			$("#formulario").hide();
			$("#error").show();
			$("#error").html(hr.responseText);
		},
		success : function(html) {
			console.log("success");
			// console.log(html);
			$("#carrito").hide();
			$("#formulario").show();
			$("#formulario").html(html);
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
	var dirPostal = $("#idirPostal").val();

	if ($("[name=recordar]:checked").length > 0) {
		$.ajax({
			url : "http://localhost:8080/tp2-pdc/FinalizarCompraServlet",
			type : "post",
			data : $.param({
				"nombre" : nombre,
				"apellido" : apellido,
				"mail" : mail,
				"dirPostal":dirPostal
			}),
			datatype : "html",
			error : function(hr) {
				console.log("error");
				$(".section-slide").hide();
				$(".section-menu").hide();
				$(".footer").hide();
				$("#iproducto").hide();
				$("#carrito").hide();
				$("#formulario").hide();
				$("#error").show();
				$("#error").html(hr.responseText);
			},
			success : function(html) {
				console.log("success");
				// console.log(html);
				localStorage.removeItem("carrito");
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
				$(".section-slide").hide();
				$(".section-menu").hide();
				$(".footer").hide();
				$("#iproducto").hide();
				$("#carrito").hide();
				$("#formulario").hide();
				$("#error").show();
				$("#error").html(hr.responseText);
			},
			success : function(html) {
				console.log("success");
				// console.log(html);
				localStorage.removeItem("carrito");
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

function buscarProducto(){
	console.log("buscarProducto()");
	//console.log("$(#i-search).val():" + $("#i-search").val());
	modal();
	
	
	var buscar = $("#i-search").val().toLowerCase();
	console.log("buscar:" + buscar);
	
	var bebidas = [{

        "id" : 1,
        "nombre" : "CocaCola clasic",
        "desc" : "Cocacola siente el sabor de tu bebida favorita.",
        "precio" : 37.00,
        "src_imagen" : "./images/menu/cocacola.jpeg"

    },{
        "id" : 2,
        "nombre" : "Sprite",
        "desc" : "Una de las bebidad nacidas para refrescar desde hace mucho tiempo.",
        "precio" : 40.00,
        "src_imagen" : "./images/menu/sprite.jpeg"
    
    },{
        "id" : 3,
        "nombre" : "Vino Tinto",
        "desc" : "El vino tinto​ es un tipo de vino procedente mayormente de mostos de uvas tintas. El cual le da su color",
        "precio" : 80.00,
        "src_imagen" : "./images/menu/vinotinto.jpeg"

    },{
        "id" : 4,
        "nombre" : "Vino Blanco",
        "desc" : "Las uvas blancas que producen principalmente vinos blancos son de color verde o amarillo, una variedad muy extendida en el mundo.",
        "precio" : 87.00,
        "src_imagen" : "./images/menu/vinoblanco.jpg"

    },{

        "id" : 5,
        "nombre" : "Ipa rubia",
        "desc" : "Cerveza rubia premium de mucho carácter, gracias a la calidad de sus lúpulos.",
        "precio" : 90.00,
        "src_imagen" : "./images/menu/cerveza-ipa.jpg"
    },{

        "id" : 6,
        "nombre" : "Scotch",
        "desc" : "Posee notas de frutos rojos y un contrastado amargo dulzor. Es especial para acompañar picadas y fiambres",
        "precio" : 96.00,
        "src_imagen" : "./images/menu/cerveza-scotch.jpeg"
    }];

	var pizzas = [{

        "id" : 7,
        "nombre" : "Rucula y jamon crudo",
        "desc" : "queso muzzarella, jamon crudo, rucula, queso parmesado, aceitunas negras.",
        "precio" : 225.00,
        "src_imagen" : "./images/menu/pizza-rucula.jpg"
    },{
            
        "id" : 8,
        "nombre" : "Especial",
        "desc" : "queso muzzarella, salsa pimiento rojo, pimiento verde, aceitunas negras.",
        "precio" : 185.00,
        "src_imagen" : "./images/menu/pizza-especial.jpg"
    },{

        "id" : 9,
        "nombre" : "Queso y pepperoni",
        "desc" : "Por encima de las rebanadas picantes del pepperoni, lleva una capa de queso derretido a la que nadie puede negarse.",
        "precio" : 190.00,
        "src_imagen" : "./images/menu/quesopepperoni.jpeg"
    },{

        "id" : 10,
        "nombre" : "Pizza de pollo",
        "desc" : "No es tan conocida como otras pizzas. Seguro que a muchos les encantará este sabor con pollo y salsa barbacoa",
        "precio" : 200.00,
        "src_imagen" : "./images/menu/pizzapollo.jpeg"
    },{

        "id" : 11,
        "nombre" : "Napolitana",
        "desc" : "La pizza napolitana puede contener anchoas, orégano, alcaparras y ajo, entre otros ingredientes.",
        "precio" : 96.00,
        "src_imagen" : "./images/menu/napolitana.jpeg"
    },{

        "id" : 12,
        "nombre" : "Pizza cuatro quesos",
        "desc" : "Si te gustan las recetas con queso, ¡imagínate esta que lleva cuatro!",
        "precio" : 96.00,
        "src_imagen" : "./images/menu/pizzacuatroquesos.jpeg"
    }
    ];

	var hamburguesas = [{

        "id" : 13,
        "nombre" : "Hamburguesa completa",
        "desc" : "Pan con semillas, lechuga, tomate, huevo, jamon, carne y queso.",
        "precio" : 190.00,
        "src_imagen" : "./images/menu/hamburguesa-completa.jpg"
    }, {

        "id" : 14,
        "nombre" : "Hamburguesa bacon",
        "desc" : "Pan con semillas, cebolla, tomate, lechuga, 8 tiras de Bacon, carne y queso cheddar.",
        "precio" : 190.00,
        "src_imagen" : "./images/menu/hamburguesa-bacon.png"
    },{

        "id" : 15,
        "nombre" : "Latin Macho Burger",
        "desc" : "¿Chorizo o hamburguesa? Con esta hamburguesa no tiene que elegir una sola opción.",
        "precio" : 155.00,
        "src_imagen" : "./images/menu/machoburger.jpg"
    },{

        "id" : 16,
        "nombre" : "Jalapeno Bacon Cheeseburger",
        "desc" : "Esta hamburguesa combina medio kilo de carne, queso derretido, jalapeños, tomates, lechuga y tocino empanizado y frito hasta que quede dorado.",
        "precio" : 175.00,
        "src_imagen" : "./images/menu/baconcheeseburger.jpg"
    },{

        "id" : 17,
        "nombre" : "Kuma Burger",
        "desc" : "Este plato lleva cebolla roja, tomate, lechuga, tocino y queso cheddar picante",
        "precio" : 160.00,
        "src_imagen" : "./images/menu/kumaburger.jpg"
    },{

        "id" : 18,
        "nombre" : "Tostón Burger",
        "desc" : "Colocada entre dos tostones calientes, viene con lechuga, tomate, queso americano y mayonesa hecha con cilantro.",
        "precio" : 96.00,
        "src_imagen" : "./images/menu/tostonburger.jpg"
    }
    ];
		
	var elementos_encontrados = "<h2>Resultados de busqueda</h2>";
	var contador = 0;
	var filtrado;

	var array = {"bebidas":bebidas,"pizzas": pizzas,"hamburguesas":hamburguesas};
	console.log('typeof array:' + typeof array);
	
	var count = ObjectLength(array);
	console.log('count:' + count);
	
	var coincidencias = [];
    for( var key in array ) {
    	
    	console.log('key:' + key);
    	var arrayProductos = array[key];
		
		console.log('arrayProductos.length:' + arrayProductos.length);
		
		for(var j = 0; j < arrayProductos.length; j++){
			console.log('arrayProductos[j].nombre:' + arrayProductos[j].nombre);
			var nombre = arrayProductos[j].nombre.toLowerCase();
			console.log('nombre:' + nombre);
			var n = nombre.search(buscar);
			if(n != -1){
				contador++;
				coincidencias.push(arrayProductos[j].id);
				console.log('ENCONTRADO');
				console.log('ENCONTRADO');
				var carrito = JSON.parse(localStorage.getItem("carrito"));	
				if(carrito != null){
					filtrado = carrito.filter(producto => producto.id == arrayProductos[j].id);
				}
				
		
				if (carrito != null && filtrado.length > 0){
					elementos_encontrados += "<div id=\"item-" + arrayProductos[j].id + "-menu\" class=\"media menu-item\"> " +
					"<input type= \"hidden\" name=\"identificador\" value="+ arrayProductos[j].id + ">" +
						"<img class=\"mr-3\" src=" + arrayProductos[j].src_imagen +" class=\"img-fluid\" alt=\"Free Template by colorlib.com\">" +
						"<div class=\"media-body\">" +
							"<h5 class=\"mt-0\">" + arrayProductos[j].nombre + "</h5>" +
							"<p>" + arrayProductos[j].desc + "</p>" +
							"<h6 class=\"text-primary menu-price\">$"+ arrayProductos[j].precio +"</h6>" +
						"</div>" +
						"<button type=\"button\" class=\"close color-red\" aria-label=\"Close\" onclick=eliminar(this)><span aria-hidden=\"true\">&times;</span></button>" +
					"</div>";
				}else{
					elementos_encontrados += "<div id=\"item-" + arrayProductos[j].id + "-menu\" class=\"media menu-item\" onclick=\"detallesProducto(this)\"> " +
					"<input type= \"hidden\" name=\"identificador\" value="+ arrayProductos[j].id + ">" +
						"<img class=\"mr-3 src_imagen\" src=" + arrayProductos[j].src_imagen +" class=\"img-fluid\" alt=\"Free Template by colorlib.com\">" +
						"<div class=\"media-body\">" +
							"<h5 class=\"mt-0 nombre\">" + arrayProductos[j].nombre + "</h5>" +
							"<p class=\"descripcion\" >" + arrayProductos[j].desc + "</p>" +
							"<h6 class=\"text-primary menu-price precio\">$"+ arrayProductos[j].precio +"</h6>" +
						"</div>" + 
					"</div>";
				}
			}
		}
	}
    if (!contador) elementos_encontrados = "<h2>No se encontraron resultados de su busqueda</h2>";
    $('.modal-search-header').removeClass('show-modal-search');
    $('.js-show-modal-search').css('opacity','1');
	//console.log("coincidencias length: "+coincidencias.length);
	//console.log("coincidencias[0].id: "+coincidencias);
	//console.log("elementos_encontrados: " + elementos_encontrados);
	$(".section-menu").html(elementos_encontrados);
	$("section #isection-menu").focus();
	
	setTimeout(function() { $('#isection-menu').focus() }, 3000);
}

function ObjectLength( object ) {
    var length = 0;
    for( var key in object ) {
    	console.log('key:' + key);
        if( object.hasOwnProperty(key) ) {
            ++length;
        }
    }
    return length;
};




function sleep(milliseconds) {
	  var start = new Date().getTime();
	  for (var i = 0; i < 1e7; i++) {
	    if ((new Date().getTime() - start) > milliseconds){
	      break;
	    }
	  }
}














