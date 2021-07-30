package com.tts.TTSTwitterAVD.repository;


import com.tts.TTSTwitterAVD.model.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepo extends CrudRepository<Role, Long> {
    Role findByRole(String role);
}
