package org.example.javabackend.service;

import org.example.javabackend.model.Counter;
import org.example.javabackend.repository.CounterRepository;
import org.springframework.stereotype.Service;

@Service
public class CounterService
{
  private final CounterRepository counterRepository;

  public CounterService(CounterRepository counterRepository)
  {
    this.counterRepository = counterRepository;
  }

  public Counter getCounter()
  {
    return counterRepository.findFirstByOrderByIdDesc();
  }

  public Counter saveCounter(int value)
  {
    Counter counter = new Counter();
    counter.setCounterValue(value);
    Counter savedCounter = counterRepository.save(counter);
    return savedCounter;
  }
}
