<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Mercado Velociraptor</title>
<script type="text/javascript" src="./js/jquery.js"></script>
<script type="text/javascript" src="./js/controls.js"></script>
</head>
<body>	  
	<div id="grilla">
		<button onclick="resumen()">Finalizar compra</button>
	</div>
	<script type="text/javascript">
		crear_productos()
	</script>
	<div id="resumen"></div>
</body>
</html>