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
		out.println("<table>");
		out.println("<colgroup>");
		out.println("<col width=\"220px\"/>");
		out.println("<col width=\"220px\"/>");
		out.println("<col width=\"100px\"/>");
		out.println("</colgroup>");
		out.println("<thead>");
		out.println("<tr>");
		out.println("<td>Nombre</td><td>Descripcion</td><td>valor</td><td></td>");
		out.println("</tr>");
		out.println("</thead>");
		out.println("<tbody>");

		String attrName;
		Enumeration<String> attrNames = session.getAttributeNames();
		while (attrNames.hasMoreElements()) {
			attrName = attrNames.nextElement();
			Producto miproducto = (Producto) session.getAttribute(attrName);
			out.println("<tr>");
			out.println("<td>");
			out.println(miproducto.getNombre());
			out.println("<input type=\"hidden\" name=\"hAttrName\" value=\"" + miproducto.getNombre() + "\">");
			out.println("</td>");
			out.println("<td>" + miproducto.getDescripcion() + "</td>");
			out.println("<td>" + miproducto.getPrecio() + "</td>");
			out.println("<td><a>Eliminar</a></td>");
			out.println("</tr>");
		}
		out.println("</tbody>");
		out.println("</table>");
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
