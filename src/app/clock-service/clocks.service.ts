import { Injectable } from '@angular/core';
import { Clock }  from '../clocks-interface/clock.interface';

@Injectable({
  providedIn: 'root'
})
export class ClocksService {

  clocks: Clock[] = [
    {
      index: 0,
      timeZone: 'UTC',
      timeZoneName: 'Coordinated Universal Time',
      utcOffset: 0,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 1,
      timeZone: 'Etc/GMT',
      timeZoneName: 'Greenwich Mean Time',
      utcOffset: 0,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 2,
      timeZone: 'Europe/London',
      timeZoneName: 'British Summer Time',
      utcOffset: 1,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 3,
      timeZone: 'Europe/Berlin',
      timeZoneName: 'Central European Time',
      utcOffset: 1,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 4,
      timeZone: 'Europe/Kiev',
      timeZoneName: 'Eastern European Time',
      utcOffset: 2,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 5,
      timeZone: 'Europe/Moscow',
      timeZoneName: 'Moscow Standard Time',
      utcOffset: 3,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 6,
      timeZone: 'Asia/Kolkata',
      timeZoneName: 'Indian Standard Time',
      utcOffset: 5.5,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 7,
      timeZone: 'Australia/Perth',
      timeZoneName: 'Australian Western Standard Time',
      utcOffset: 8,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 8,
      timeZone: 'Australia/Adelaide',
      timeZoneName: 'Australian Central Standard Time',
      utcOffset: 9.5,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 9,
      timeZone: 'Australia/Sydney',
      timeZoneName: 'Australian Eastern Standard Time',
      utcOffset: 10,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 10,
      timeZone: 'Pacific/Auckland',
      timeZoneName: 'New Zealand Standard Time',
      utcOffset: 12,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 11,
      timeZone: 'Pacific/Honolulu',
      timeZoneName: 'Hawaii Standard Time',
      utcOffset: -10,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 12,
      timeZone: 'America/Anchorage',
      timeZoneName: 'Alaska Standard Time',
      utcOffset: -9,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 13,
      timeZone: 'America/Los_Angeles',
      timeZoneName: 'Pacific Standard Time',
      utcOffset: -8,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: true
    },
    {
      index: 14,
      timeZone: 'America/Denver',
      timeZoneName: 'Mountain Standard Time',
      utcOffset: -7,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: true
    },
    {
      index: 15,
      timeZone: 'America/Chicago',
      timeZoneName: 'Central Standard Time',
      utcOffset: -6,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: true
    },
    {
      index: 16,
      timeZone: 'America/New_York',
      timeZoneName: 'Eastern Standard Time',
      utcOffset: -5,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: true
    },
    {
      index: 17,
      timeZone: 'America/Halifax',
      timeZoneName: 'Atlantic Standard Time',
      utcOffset: -4,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 18,
      timeZone: 'America/St_Johns',
      timeZoneName: 'Newfoundland Standard Time',
      utcOffset: -3.5,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 19,
      timeZone: 'America/Sao_Paulo',
      timeZoneName: 'Brasília Summer Time',
      utcOffset: -2,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    }
  ]; 
  constructor() { }

  getClocks(): Clock[] {
    return this.clocks;
  }

  editCLock(index: number, updateClock: Partial<Clock>) {
    const clock = this.clocks[index];
    if (clock) {
      this.clocks[index] = { ...clock, ...updateClock };
    }
  }
  
}