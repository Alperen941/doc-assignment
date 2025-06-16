package org.example.javabackend.repository;

import org.example.javabackend.model.Counter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CounterRepository extends JpaRepository<Counter, Integer>
{
  Counter findFirstByOrderByIdDesc();
}
