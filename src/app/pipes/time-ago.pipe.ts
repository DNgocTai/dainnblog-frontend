import { Pipe, PipeTransform } from '@angular/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/vi';

dayjs.extend(relativeTime);
dayjs.locale('vi');

@Pipe({
  name: 'timeAgo',
  pure: false, // giúp cập nhật theo thời gian
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: Date | string): string {
    return dayjs(value).fromNow();
  }
}
