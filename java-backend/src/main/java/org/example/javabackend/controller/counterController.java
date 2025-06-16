package org.example.javabackend.controller;

import org.example.javabackend.model.Counter;
import org.example.javabackend.service.CounterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class counterController
{

  private final CounterService counterService;

  @Autowired
  public counterController(CounterService counterService)
  {
    this.counterService = counterService;
  }

  @GetMapping("/counter") public int getCounter()
  {
    return counterService.getCounter().getCounterValue();
  }

  @PutMapping("/counter") public ResponseEntity<?> update(@RequestBody int value)
  {
    Counter saved = counterService.saveCounter(value);
    return ResponseEntity.status(HttpStatus.CREATED).body(saved);
  }
}
