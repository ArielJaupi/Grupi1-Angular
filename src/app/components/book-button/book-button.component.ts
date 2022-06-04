import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/bookService/book.service";

@Component({
  selector: 'app-book-button',
  templateUrl: './book-button.component.html',
  styleUrls: ['./book-button.component.scss']
})
export class BookButtonComponent implements OnInit {

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }

  handleClick($event: MouseEvent) {

  }
}
