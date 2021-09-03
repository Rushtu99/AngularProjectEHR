import { Component, OnInit,ViewChild,Output,EventEmitter } from '@angular/core';
import { FullCalendarComponent,CalendarOptions,formatDate } from '@fullcalendar/angular';
import timeGridPlugin from '@fullcalendar/timegrid';
import { range } from 'rxjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendars.scss','./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  selected : Date = new Date();

  @Output() dispO =new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;
 
  getEndDate() : Date {
    this.selected.setDate(this.selected.getDate() + 1);
    console.log(this.selected);
    return this.selected;
}
  calendarOptions: CalendarOptions = {
    headerToolbar:{
      left:"title",
      right:"prev,next"
    },
    plugins: [ timeGridPlugin ],
    initialView: 'timeGridWeek',
    contentHeight: 700,
    aspectRatio:2,
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', start: '2021-08-25T09:30:00',allDay:false},
      { title: 'event 2', start: '2021-08-26T12:00:00',allDay:false},
      { title: 'event 3', start: '2021-08-26T11:00:00',allDay:false},
      { title: 'event 4', start: '2021-08-27T14:00:00',allDay:false}
    ],
    expandRows:true,
    slotMinTime: '09:00',
    slotMaxTime: '19:00',
    nowIndicator:true,

    eventBackgroundColor: 'rgb(210, 210, 210)',
    eventBorderColor: 'rgb(0,0,0)',
    eventMouseEnter:function(info){
      console.log(info);
    },
    eventTextColor: 'rgb(0,0,0)',
    slotDuration:'00:30:00',
    allDayMaintainDuration:true,
    stickyHeaderDates:true,
    eventClick:function(info){
      console.log(info.event._instance.range);
    },
    
  };

  dateChange(event){
    console.log(event);
    this.selected=event;
    console.log(this.calendarComponent);
    this.calendarComponent.getApi().gotoDate(this.selected);

    
    // this.calendarOptions.validRange.start=this.selected;
    ;
  }
  handle(){
    console.log(this.calendarComponent);
    this.dispO.emit(false);
  }

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }
}
