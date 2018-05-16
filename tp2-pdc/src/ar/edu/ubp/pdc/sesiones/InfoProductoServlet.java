package ar.edu.ubp.pdc.sesiones;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class InfoProductoServlet
 */
@WebServlet("/InfoProductoServlet")
public class InfoProductoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public InfoProductoServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		if (request.getParameter("nombre") != null && request.getParameter("nombre") != "") {
			PrintWriter out = response.getWriter();
			String id = request.getParameter("id");
			String nom = request.getParameter("nombre");
			String desc = request.getParameter("descripcion");
			String valor = request.getParameter("precio");

			System.out.println("doPost info id:" + id);

			out.println("<input type=\"hidden\" name=\"idInfo\" value=" + id + ">" + "<h1 name=\"nombre\">" + nom
					+ "</h1>" + "<h1 name=\"descripcion\">" + desc + "</h1>" + "<h1 name=\"valor\">" + valor + "</h1>"
					+ "<input type=\"number\" name=\"cantidad\" value=\"\">"
					+ "<a onclick=\"add()\">Añadir al carrito</a>" + "<a href=\"index.jsp\">Volver</a>");
		}
	}

}
