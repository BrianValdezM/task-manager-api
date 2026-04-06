package com.brayy.task_manager.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "El título es obligatorio")
    private String title;

    private String description;

    @Enumerated(EnumType.STRING)
    private Status status = Status.PENDING;

    @Enumerated(EnumType.STRING)
    private Priority priority = Priority.MEDIUM;

    private LocalDateTime createdAt = LocalDateTime.now();

    public enum Status { PENDING, IN_PROGRESS, DONE }
    public enum Priority { LOW, MEDIUM, HIGH }
}