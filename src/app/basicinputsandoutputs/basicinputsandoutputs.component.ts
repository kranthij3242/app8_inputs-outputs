import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-basicinputsandoutputs',
  templateUrl: './basicinputsandoutputs.component.html',
  styleUrls: ['./basicinputsandoutputs.component.css']
})
export class BasicinputsandoutputsComponent implements OnInit {

@Input()valuefromparent:String;
@Output()childeventvalue=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  sendtoparent(childValue:string){
  this.childeventvalue.emit(childValue)
  }
}
