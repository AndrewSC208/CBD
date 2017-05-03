import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit() {
  }

  lander:{} = {
  	slides: [
  		{ 
  		title: 'Camping By Design', 
  		caption: 'hello from the data service, this will all be dynamice', 
  		pic: 
  			{ 
  				src: 'https://source.unsplash.com/random/2100x740', 
  				alt: 'Random first slide'
  			}
  		},
  		{ 
  		title: 'Camping By Design', 
  		caption: 'hello from the data service, this will all be dynamice', 
  		pic: 
  			{ 
  				src: 'https://source.unsplash.com/random/2100x740', 
  				alt: 'Random Second slide'
  			}
  		},
  		{ 
  		title: 'Camping By Design', 
  		caption: 'hello from the data service, this will all be dynamice', 
  		pic: 
  			{ 
  				src: 'https://source.unsplash.com/random/2100x740', 
  				alt: 'Random Third slide'
  			}
  		},

  	]
  }

}


