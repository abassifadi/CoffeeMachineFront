import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import Command from '../../models/command.model';
import { DrinksService } from 'src/app/services/drinks.service';
import { CommandsService } from 'src/app/services/commands.service';

@Component({
  selector: 'app-create-command',
  templateUrl: './create-command.component.html',
  styleUrls: ['./create-command.component.scss']
})
export class CreateCommandComponent implements OnInit {

  listOfDrinks = [];
  enableSubmit = true ;
  command = new Command();

  constructor(private drinksService: DrinksService,
              private commandService: CommandsService,
              private notifier: NotifierService) { }

  ngOnInit() {
    this.drinksService.getDrinks().subscribe(
      data => {this.listOfDrinks = data.map(o => o.drinkName); },
      error =>  this.notifier.notify('error', error) );
  }

  createCommand() {
      this.enableSubmit = false;
      this.commandService.registerCommand(this.command).subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }

}
