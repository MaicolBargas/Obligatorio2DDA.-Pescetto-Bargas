package com.obligatorio.PescettoBargas.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "planes")
public class Plan implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 20)
    private String destino;

    @Column
    private String fecha;

    @Column
    private char modalidad;

    @Column
    private int precio;

    @ManyToMany(mappedBy = "clientesViajes")
    /*@JoinTable(
            name = "clienteViaje",
            joinColumns = @JoinColumn(name = "id"),
            inverseJoinColumns = @JoinColumn(name = "ci")
    )*/
    private List<Cliente> clientesViajes = new ArrayList<>();

    public List<Cliente> getClientesViajes() {
        return clientesViajes;
    }

    public void setClientesViajes(List<Cliente> clientesViajes) {
        this.clientesViajes = clientesViajes;
    }

    public Plan() {
    }

    @Override
    public String toString() {
        return "Plan{" +
                "id=" + id +
                ", destino='" + destino + '\'' +
                ", fecha='" + fecha + '\'' +
                ", modalidad=" + modalidad +
                ", precio=" + precio +
                '}';
    }

    public Plan(int id, String destino, String fecha, char modalidad, int precio) {
        this.id = id;
        this.destino = destino;
        this.fecha = fecha;
        this.modalidad = modalidad;
        this.precio = precio;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDestino() {
        return destino;
    }

    public void setDestino(String destino) {
        this.destino = destino;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public char getModalidad() {
        return modalidad;
    }

    public void setModalidad(char modalidad) {
        this.modalidad = modalidad;
    }

    public int getPrecio() {
        return precio;
    }

    public void setPrecio(int precio) {
        this.precio = precio;
    }
}
