package com.obligatorio.PescettoBargas.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "clientes")
public class Cliente implements Serializable {

    @Id
    private int ci;

    @Column(length = 30)
    private String nombre;

    @Column(length = 30)
    private String apellido;

    @Column(length = 30)
    private String email;

    @Column
    private boolean premium;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
        name = "clienteViaje",
        joinColumns = @JoinColumn(name = "ci"),
        inverseJoinColumns = @JoinColumn(name = "id")
)
    private List<Plan> clientesViajes = new ArrayList<>();

    public List<Plan> getclientesViajes() {
        return clientesViajes;
    }

    public void setclientesViajes(List<Plan> clientesViajes) {
        this.clientesViajes = clientesViajes;
    }

    @Override
    public String toString() {
        return "Cliente{" +
                "ci=" + ci +
                ", nombre='" + nombre + '\'' +
                ", apellido='" + apellido + '\'' +
                ", email='" + email + '\'' +
                '}';
    }

    public Cliente(){}
    public Cliente(int ci, String nombre, String apellido, String email) {
        this.ci = ci;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }

    public int getCi() {
        return ci;
    }

    public void setCi(int ci) {
        this.ci = ci;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isPremium() {
        return premium;
    }

    public void setPremium(boolean premium) {
        this.premium = premium;
    }

    public boolean VerificarPremium()
    {
        if (this.clientesViajes.size() > 3)
        {
            setPremium(true);
            return true;
        }
        else {
            return false;
        }
    }
}
