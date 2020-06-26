import { Component, OnInit } from '@angular/core';
import {travels} from "../travels"
import {CartService} from "../cart.service";

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
travels=travels;
  constructor(private cartService: CartService) { }

  addToCart(trip) {
    window.alert('This trip has been added to the cart. Thanks for booking!');
    this.cartService.addToCart(trip);
  }

  ngOnInit(): void {
    
  }

}
