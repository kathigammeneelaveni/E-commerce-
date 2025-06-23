package com.example.Ecommerce.service;

import java.util.List;

import com.example.Ecommerce.model.Product;

public interface ProductService {
    Product addProduct(Product product);
    List<Product> getAllProducts();
    Product getProductById(Long id);
    void deleteProduct(Long id);
	Product addProduct1(Product product);
}