import { IEvent } from '../shared/index';
import { Component, Input} from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styleUrls: ['./event-thumbnail.component.css']
})

export class EventThumbnailComponent {
    @Input() event!: IEvent;
    // outputString: any = 'Output String from Child Component';
    // @Output() eventClick = new EventEmitter();

    // handleClickBtn(): void{
    //     this.eventClick.emit(this.event.name);
    // }

    // logFoo() {
    //     console.log('Foo')
    // }

    getStartTimeClass() {
        const isEarlyStart = this.event && this.event.time === '8:00 am'
        return { blue: isEarlyStart, bold: isEarlyStart }
    }

    getStartTimeStyle() {
        if (this.event && this.event.time === '8:00 am') {
            return { color: 'deepskyblue', 'font-weight': 'bold' }
        }
        return { color: 'red', 'font-weight': 'normal' }
    }
}
