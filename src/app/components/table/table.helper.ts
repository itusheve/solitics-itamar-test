import { IDataType } from 'src/app/types/data-type.interface';

export function adjustDate(data: IDataType[]) {
  return data.map((data: IDataType) => {
    const itemDate = data.course.date;
    const dateFormat = itemDate.split('/').map((i) => i.trim());
    const year = dateFormat[2].split(' ')[0];
    const date = dateFormat[0].trim() + '/' + dateFormat[1].trim() + '/' + year;
    const time = dateFormat[2].split(' ')[1] + dateFormat[2].split(' ')[2];
    return {
      ...data,
      course: { name: data.course.name, date: time + ' - ' + date },
    };
  });
}
