import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() userCard;
  @Output() userBeenSelected: EventEmitter<any> = new  EventEmitter();

  onUserCardClick() {
    this.userBeenSelected.emit();
  };

  constructor() {
  }

  ngOnInit() {
  }

}
