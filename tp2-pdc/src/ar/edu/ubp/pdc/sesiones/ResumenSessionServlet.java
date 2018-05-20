package ar.edu.ubp.pdc.sesiones;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class ResumenSessionServlet
 */
@WebServlet("/ResumenSessionServlet")
public class ResumenSessionServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public ResumenSessionServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		PrintWriter out = response.getWriter();

		HttpSession session = request.getSession(true);

		out.println("<div class=\"wrap-table-shopping-cart\">\n" + "    <table class=\"table-shopping-cart\">\n"
				+ "        <tr class=\"table_head\">\n" + "            <th class=\"column-1\">Product</th>\n"
				+ "            <th class=\"column-2\"></th>\n" + "            <th class=\"column-3\">Price</th>\n"
				+ "            <th class=\"column-4\">Quantity</th>\n"
				+ "            <th class=\"column-5\">Total</th>\n" + "            <th class=\"column-6\"></th>\n"
				+ "        </tr>");
		float total = 0;
		String attrName;
		Enumeration<String> attrNames = session.getAttributeNames();
		while (attrNames.hasMoreElements()) {
			attrName = attrNames.nextElement();
			Producto miproducto = (Producto) session.getAttribute(attrName);

			out.println("        <tr class=\"table_row\">\n" + "            <td class=\"column-1\">\n"
					+ "<input type=\"hidden\" name=\"hAttrName\" value=" + miproducto.getId() + ">"
					+ "                <div class=\"how-itemcart1\">\n" + "                    <img src="
					+ miproducto.getSrc_imagen() + " alt=\"IMG\">\n" + "                </div>\n"
					+ "            </td>\n" + "            <td class=\"column-2\">" + miproducto.getNombre() + "</td>\n"
					+ "            <td class=\"column-3\">$" + miproducto.getPrecio() + "</td>\n"
					+ "            <td class=\"column-4\">" + miproducto.getCantidad() + "</td>\n"
					+ "            <td class=\"column-5\" id=\"total-producto-" + miproducto.getId() + "\">$"
					+ miproducto.getCantidad() * miproducto.getPrecio() + "</td>\n"
					+ "<td class=\"column-6\"><button type=\"button\" class=\"close color-red\" aria-label=\"Close\" onclick=eliminar_product_carrito(this)><span aria-hidden=\"true\">&times;</span></button></td></tr>");

			/*
			 * out.println("<tr>"); out.println("<td>");
			 * out.println(miproducto.getNombre());
			 * out.println("<input type=\"hidden\" name=\"hAttrName\" value=\"" +
			 * miproducto.getId() + "\">"); out.println("</td>"); out.println("<td>" +
			 * miproducto.getDescripcion() + "</td>"); out.println("<td>" +
			 * miproducto.getCantidad() + "</td>"); out.println("<td>" +
			 * miproducto.getPrecio() + "</td>"); out.
			 * println("<td><a onclick=\"eliminar_product_carrito(this)\">Eliminar</a></td>"
			 * ); out.println("</tr>"); total += miproducto.getPrecio() *
			 * miproducto.getCantidad();
			 */
			total += miproducto.getPrecio() * miproducto.getCantidad();
		}
		out.println("</table>");
		out.println("</div>");
		out.println("<h1>Total: <h1 id=\"total\">" + total + "</h1></h1>");
		out.println("<a href=\"index.jsp\">Volver a comprar</a>");

		out.println("<button onclick=\"confirmarCompra()\">Finalizar compra</button>");

		out.close();
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

	}

}
