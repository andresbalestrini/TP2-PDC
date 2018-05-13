package ar.edu.ubp.pdc.sesiones;

public class Producto {
	private String nombre;
	private String descripcion;
	private int cantidad;
	private float precio;

	public Producto(String nom, String desc, float valor, int cantidad) {
		super();
		this.nombre = nom;
		this.descripcion = desc;
		this.precio = valor;
		this.cantidad = cantidad;
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

	public float getPrecio() {
		return precio;
	}

	public void setPrecio(float precio) {
		this.precio = precio;
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}

}
