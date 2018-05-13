package ar.edu.ubp.pdc.sesiones;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class FinalizarCompraServlet
 */
@WebServlet("/FinalizarCompraServlet")
public class FinalizarCompraServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public FinalizarCompraServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub

		HttpSession session = request.getSession(true);
		PrintWriter out = response.getWriter();

		Cookie cookies[] = request.getCookies();
		if (cookies != null) {
			for (Cookie c : cookies) {
				System.out.println("cookie name:" + c.getName());
				System.out.println("cookie value:" + c.getValue());
			}
		}

		out.println("<form action=\"javascript:void(null)\" onsubmit=\"procesarCompra(event)\">");
		out.println("<label>Nombre:<input id=\"inombre\" type=\"text\" name=\"nombre\" ></label>");
		out.println("<label>Apellido:<input id=\"iapellido\" type=\"text\" name=\"apellido\" ></label>");
		out.println("<label>mail:<input id=\"imail\" type=\"text\" name=\"mail\"></label>");
		out.println("<label>recordar datos?</label>");
		out.println(
				"<label> Si<input id=\"irecordar-si\" type=\"radio\" name=\"recordar\" value=\"SI\" checked> </label>");
		out.println("<label> No<input id=\"irecordar-no\" type=\"radio\" name=\"recordar\" value=\"NO\"> </label>");
		out.println("<button type=\"submit\" name=\"button\" id=\"ibutton\"> Confirmar pedido </button>");
		out.println("</form>");
		out.close();

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub

		System.out.println("entro a doPost");
		response.setContentType("text/html;charset=UTF-8");
		HttpSession session = request.getSession(true);
		PrintWriter out = response.getWriter();

		if (request.getParameter("nombre") != null && request.getParameter("nombre") != "") {

			String nombre = request.getParameter("nombre");
			String apellido = request.getParameter("apellido");
			String mail = request.getParameter("mail");

			Cookie cookies[] = request.getCookies();
			if (cookies != null) {
				for (Cookie c : cookies) {
					System.out.println("cookie name:" + c.getName());
					System.out.println("cookie value:" + c.getValue());
					c = new Cookie(c.getName(), "");
					c.setMaxAge(0);
					response.addCookie(c);

				}
			}
			// String value = nombre + apellido + mail;
			// System.out.println(value);
			// Cookie co = new Cookie("JSESSIONID", "");
			// response.addCookie(co);

		} else {

			Cookie cookies[] = request.getCookies();
			if (cookies != null) {
				for (Cookie c : cookies) {
					System.out.println("cookie name:" + c.getName());
					System.out.println("cookie value:" + c.getValue());
					c = new Cookie(c.getName(), "");
					c.setMaxAge(0);
					response.addCookie(c);

				}
			}

		}

		// esto es lo que borra la session realmente
		session.invalidate();
		response.sendRedirect("./index.jsp");
	}

}
