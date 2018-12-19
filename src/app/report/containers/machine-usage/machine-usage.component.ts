import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-machine-usage',
  templateUrl: './machine-usage.component.html',
  styleUrls: ['./machine-usage.component.scss']
})
export class MachineUsageComponent implements OnInit {

  lines = [
    {
      'name': 'Incomes',
      'series': [
        {
          'name': '2010',
          'value': 7300000
        },
        {
          'name': '2011',
          'value': 2511250
        },
        {
          'name': '2012',
          'value': 1140000
        },
        {
          'name': '2013',
          'value': 9020000
        },
        {
          'name': '2014',
          'value': 8940000
        },
        {
          'name': '2015',
          'value': 3940000
        },
        {
          'name': '2016',
          'value': 2940000
        },
        {
          'name': '2017',
          'value': 940000
        }
      ]
    }
  ];

  machines: any[] = [
    {
      'name': 'Indiana Jones Adventure',
      'value': 8940000
    },
    {
      'name': 'Temple Tempoe',
      'value': 5000000
    },
    {
      'name': 'Driveline Racing',
      'value': 204000
    },
    {
      'name': 'Rocketeer Madness',
      'value': 2200000
    },
    {
      'name': 'Tekken 3',
      'value': 1200000
    }
  ];
  single: any[] = [
    {
      'name': 'Germany',
      'value': 8940000
    },
    {
      'name': 'USA',
      'value': 5000000
    },
    {
      'name': 'France',
      'value': 7200000
    }
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#FF00AA']
  };


  siteLinks = [
    {path: '/dashboard', name: 'Dashboard'},
    {path: '/report/machine-usage', name: 'Machine usages'},
    {
      path: '/report/custom' +
        'er-stat', name: 'Customer statictics'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
