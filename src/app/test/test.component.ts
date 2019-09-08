import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<div>
  <h2>{{"hii " + parentData}}</h2>

 <div *ngIf = "val; then ifpart; else elsepart"></div>
  <ng-template #ifpart>
  <h2 [ngStyle]= "styleClasses">hello wassup !</h2>
  </ng-template>
  <ng-template #elsepart>
  <h2 [ngStyle]= "styleClasses">i'm fineeeeeeee</h2>
  </ng-template>
  <div [ngSwitch] = "color">
<div *ngSwitchCase = "'red'">red color</div>
<div *ngSwitchCase = "'blue'">blue color</div>
<div *ngSwitchDefault>pick again</div>

<div *ngFor = "let color of colors; first as o">
{{o}}{{color}}
</div>
  </div>
   <h1>wazzup {{name}} !!</h1>
   how u doin?
   <input #refVar type = "text">
  <button (click) = "onClick(refVar.value)">click me</button>
  {{click}}
  <input [(ngModel)]="myname" type="text">
  {{myname}}

   <h2>{{3+5}}</h2>
   <h2>{{"welcome " + name}}</h2>
   <h2>{{user()}}</h2>
   <h2>{{url}}</h2>
   <input type [id]="myId" type = "text" value = "sooooo">
  <h1 [class]= "failure">pragatiiiiiiiiii</h1>
  <h1 [class.text-failure]= "hasError">pragggggg</h1>
  <h1 [ngClass]= "messageClasses">praggggg</h1>
  <h1 [ngStyle]= "styleClasses">hiiiiiiiiiiiiiii</h1>
  <h1 [style.color]= "hasError ? 'pink' : 'blue'">pragggggggggggg</h1>




</div>`,
  styles: [`
.text-success{
  color:green;
}
.text-failure{
  color:red;
}
.text-italic{
  font-style:italic;
}
  `]
})
export class TestComponent implements OnInit {
  public colors = ["red","blue","green","yellow"];
  public color = "pink";
  public val = true;
  @Input() public parentData; 
public myname = '';
public name = "pragati";
public url = window.location.href;
public myId = "testId";
public click = "";
public success = 'text-success';
public failure = 'text-failure';
public hasError = true;
public isSpecial = true;
public messageClasses = {
  "text-success" : this.hasError,
  "text-failure" : !this.isSpecial,
  "text-italic" : !this.hasError,
}
public styleClasses = {
color : "blue",
fontStyle : "italic",
}

  constructor() { }

  ngOnInit() {
  }
user(){
  return "hello " + this.name;
}
onClick(value){
  console.log(value);
  this.click = 'welcome angular';

}
}
