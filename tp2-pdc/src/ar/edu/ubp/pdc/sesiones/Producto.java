package ar.edu.ubp.pdc.sesiones;

public class Producto {
	private String nombre;
	private String descripcion;
	private int precio;

	public Producto(String nom, String desc, int valor) {
		super();
		this.nombre = nom;
		this.descripcion = desc;
		this.precio = valor;
	}

	public Producto() {
		super();
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public int getPrecio() {
		return precio;
	}

	public void setPrecio(int precio) {
		this.precio = precio;
	}

}
