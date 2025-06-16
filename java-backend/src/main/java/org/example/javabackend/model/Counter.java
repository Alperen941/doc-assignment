package org.example.javabackend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.persistence.*;

@JsonPropertyOrder(
    {
        "id", "counter_value"
    })

@Entity
public class Counter
{
  @JsonProperty("id")
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  @JsonProperty("counter_value")
  @Column(name = "counter_value")
  private int counterValue;

  public int getId()
  {
    return id;
  }

  public void setId(int id)
  {
    this.id = id;
  }

  public int getCounterValue()
  {
    return counterValue;
  }

  public void setCounterValue(int counterValue)
  {
    this.counterValue = counterValue;
  }
}
