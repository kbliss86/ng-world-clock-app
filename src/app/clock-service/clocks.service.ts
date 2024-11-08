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
      timeZone: 'GMT',
      timeZoneName: 'Greenwich Mean Time',
      utcOffset: 0,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 2,
      timeZone: 'BST',
      timeZoneName: 'British Summer Time',
      utcOffset: 1,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 3,
      timeZone: 'CET',
      timeZoneName: 'Central European Time',
      utcOffset: 1,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 4,
      timeZone: 'EET',
      timeZoneName: 'Eastern European Time',
      utcOffset: 2,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 5,
      timeZone: 'MSK',
      timeZoneName: 'Moscow Standard Time',
      utcOffset: 3,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 6,
      timeZone: 'IST',
      timeZoneName: 'Indian Standard Time',
      utcOffset: 5.5,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 7,
      timeZone: 'AWST',
      timeZoneName: 'Australian Western Standard Time',
      utcOffset: 8,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 8,
      timeZone: 'ACST',
      timeZoneName: 'Australian Central Standard Time',
      utcOffset: 9.5,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 9,
      timeZone: 'AEST',
      timeZoneName: 'Australian Eastern Standard Time',
      utcOffset: 10,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 10,
      timeZone: 'NZST',
      timeZoneName: 'New Zealand Standard Time',
      utcOffset: 12,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 11,
      timeZone: 'HST',
      timeZoneName: 'Hawaii Standard Time',
      utcOffset: -10,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: true
    },
    {
      index: 12,
      timeZone: 'AKST',
      timeZoneName: 'Alaska Standard Time',
      utcOffset: -9,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 13,
      timeZone: 'PST',
      timeZoneName: 'Pacific Standard Time',
      utcOffset: -8,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 14,
      timeZone: 'MST',
      timeZoneName: 'Mountain Standard Time',
      utcOffset: -7,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: true
    },
    {
      index: 15,
      timeZone: 'CST',
      timeZoneName: 'Central Standard Time',
      utcOffset: -6,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: true
    },
    {
      index: 16,
      timeZone: 'EST',
      timeZoneName: 'Eastern Standard Time',
      utcOffset: -5,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 17,
      timeZone: 'AST',
      timeZoneName: 'Atlantic Standard Time',
      utcOffset: -4,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 18,
      timeZone: 'NST',
      timeZoneName: 'Newfoundland Standard Time',
      utcOffset: -3.5,
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 19,
      timeZone: 'BRST',
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