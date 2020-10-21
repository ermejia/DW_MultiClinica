import { Component, OnInit } from '@angular/core';
import {DataService} from '../../Service/data.service';
import {Room} from 'src/app/Model/Room'
@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.css']
})
export class ListRoomComponent implements OnInit {
  rooms:Room[];

  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.getRoom().subscribe((roomsFromApi: Room[]) =>{
      this.rooms = roomsFromApi
      console.log(this.rooms);
    }, error => console.error(error));
  }

}
