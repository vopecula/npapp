import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  lines = [
    {
      'name': 'Jerry',
      'series': [
        {
          'name': 2011,
          'value': 3563
        },
        {
          'name': 2012,
          'value': 1808
        },
        {
          'name': 2013,
          'value': 3489
        },
        {
          'name': 2014,
          'value': 1965
        },
        {
          'name': 2015,
          'value': 2724
        },
        {
          'name': 2016,
          'value': 2147
        },
        {
          'name': 2017,
          'value': 1937
        },
        {
          'name': 2018,
          'value': 1607
        },
        {
          'name': 2019,
          'value': 847
        },
        {
          'name': 2020,
          'value': 1929
        }
      ]
    },
    {
      'name': 'Nellie',
      'series': [
        {
          'name': 2011,
          'value': 3794
        },
        {
          'name': 2012,
          'value': 1794
        },
        {
          'name': 2013,
          'value': 582
        },
        {
          'name': 2014,
          'value': 2243
        },
        {
          'name': 2015,
          'value': 968
        },
        {
          'name': 2016,
          'value': 2445
        },
        {
          'name': 2017,
          'value': 3742
        },
        {
          'name': 2018,
          'value': 3251
        },
        {
          'name': 2019,
          'value': 137
        },
        {
          'name': 2020,
          'value': 3885
        }
      ]
    },
    {
      'name': 'Vivian',
      'series': [
        {
          'name': 2011,
          'value': 1807
        },
        {
          'name': 2012,
          'value': 1125
        },
        {
          'name': 2013,
          'value': 825
        },
        {
          'name': 2014,
          'value': 1109
        },
        {
          'name': 2015,
          'value': 2615
        },
        {
          'name': 2016,
          'value': 1529
        },
        {
          'name': 2017,
          'value': 3372
        },
        {
          'name': 2018,
          'value': 1206
        },
        {
          'name': 2019,
          'value': 2605
        },
        {
          'name': 2020,
          'value': 1698
        }
      ]
    },
    {
      'name': 'Herman',
      'series': [
        {
          'name': 2011,
          'value': 1246
        },
        {
          'name': 2012,
          'value': 503
        },
        {
          'name': 2013,
          'value': 961
        },
        {
          'name': 2014,
          'value': 1479
        },
        {
          'name': 2015,
          'value': 2011
        },
        {
          'name': 2016,
          'value': 2932
        },
        {
          'name': 2017,
          'value': 3367
        },
        {
          'name': 2018,
          'value': 3731
        },
        {
          'name': 2019,
          'value': 2368
        },
        {
          'name': 2020,
          'value': 1021
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

  siteLinks = [
    {path: '../', name: 'Dashboard'},
    {path: '../report/machine-usage', name: 'Machine usages'},
    {path: '../report/customer-stat', name: 'Customer statictics'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
