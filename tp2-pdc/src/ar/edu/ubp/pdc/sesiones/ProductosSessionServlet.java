package ar.edu.ubp.pdc.sesiones;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class ProductosSessionServlet
 */
@WebServlet("/ProductosSessionServlet")
public class ProductosSessionServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public ProductosSessionServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		HttpSession session = request.getSession(true);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		HttpSession session = request.getSession(true);
		if (request.getParameter("delAttrName") != null && request.getParameter("delAttrName") != "") {
			session.removeAttribute(request.getParameter("delAttrName"));
		} else {
			String id = request.getParameter("id");
			String nom = request.getParameter("nombre");
			String desc = request.getParameter("descripcion");
			String valor = request.getParameter("precio");
			String cantidad = request.getParameter("cantidad");
			String src_imagen = request.getParameter("src_imagen");
			System.out.println("src_imagen: " + src_imagen);
			Producto a = new Producto(Integer.parseInt(id), nom, desc, Float.parseFloat(valor.trim()),
					Integer.parseInt(cantidad), src_imagen);
			session.setAttribute(id, a);
		}
		response.sendRedirect("./index.jsp");
	}

}
