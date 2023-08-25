package com.chobichokro.api.repo;

import com.chobichokro.api.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, Integer> {
}
