package com.chobichokro.api.configaration;

import com.chobichokro.api.sequrity.JwtAuthenticationEntryPoint;
import com.chobichokro.api.sequrity.JwtAuthenticationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConfig {


    @Autowired
    private JwtAuthenticationEntryPoint point;
    @Autowired
    private JwtAuthenticationFilter filter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http.csrf(AbstractHttpConfigurer::disable)
                        .cors(AbstractHttpConfigurer::disable)
                                .authorizeHttpRequests(
                                        auth -> auth.requestMatchers("/api/**").authenticated()
                                                .requestMatchers("auth/**").permitAll().anyRequest()
                                                .authenticated())
                                                .exceptionHandling(
                                                        e -> e.authenticationEntryPoint(this.point))
                                                        .sessionManagement(
                                                                s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                                                                .addFilterBefore(this.filter, UsernamePasswordAuthenticationFilter.class);

        http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }


}