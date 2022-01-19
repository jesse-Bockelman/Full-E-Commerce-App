package com.luv2code.ecommerce.dto;

import java.util.Set;

import com.luv2code.ecommerce.entities.Address;
import com.luv2code.ecommerce.entities.Customer;
import com.luv2code.ecommerce.entities.Order;
import com.luv2code.ecommerce.entities.OrderItem;

import lombok.Data;

@Data
public class Purchase {
    
    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;
}
