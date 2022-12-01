package com.obligatorio.PescettoBargas.service;


import com.obligatorio.PescettoBargas.model.Cliente;
import com.obligatorio.PescettoBargas.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ClienteServiceImpl implements ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    @Override
    public Cliente guardarCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    @Override
    public List<Cliente> listarCliente() {
        return clienteRepository.findAll();
    }

    @Override
    public void borrarCliente(int id) {
        clienteRepository.deleteById(id);
    }

    @Override
    public Optional<Cliente> buscarCliente(Integer id) {
        return clienteRepository.findById(id);
    }


    @Override
    public Cliente modificarCliente(Cliente cliente) {
        return clienteRepository.saveAndFlush(cliente);
    }
}
