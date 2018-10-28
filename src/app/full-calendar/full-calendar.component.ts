import { Component } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css']
})
export class FullCalendarComponent {
  title = 'my-angular-app';
  calendarOptions: Options;
  ngOnInit() {
    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      header: {
        // title, prev, next, prevYear, nextYear, today
        left: 'prev,prevYear, nextYear,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay',
      },
      // 週数を表示
      //weekNumbers: true,
      // タイトルの書式
      views: {
        month: { // name of view
          titleFormat: 'YYYY年 M月'
          // other view-specific options here
        },
        week: {
          titleFormat: "YYYY年M月D日 ～ YYYY年M月D日"
        },
        day: {
          titleFormat: "YYYY年 M月 D日"
        }
      },
      buttonText: {
        // prev:     '前月', // <
        // next:     '翌月', // >
        // prevYear: '前年',  // <<
        // nextYear: '翌年',  // >>
        today:    '今日',
        month:    '月',
        week:     '週',
        day:      '日'
      },
      // 月名称
      monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      // 月略称
      monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      // 曜日名称
      dayNames: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
      // 曜日略称
      dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
      // 選択可
      selectable: true,
      // 選択時にプレースホルダーを描画
      selectHelper: true,
      // 自動選択解除
      unselectAuto: true,
      eventSources: [
        {
            events: [
                {
                    title: 'event1',
                    start: '2018-10-01'
                },
                {
                    title: 'event2',
                    start: '2018-10-06',
                    end: '2018-10-15'
                },
                {
                    title: 'event3',
                    start: '2018-10-25 12:30:00',
                    allDay: false // will make the time show
                }
                
            ]
        }
      ]
    };
  }

  eventClick(events){
    console.log("clicked");
  }
}
