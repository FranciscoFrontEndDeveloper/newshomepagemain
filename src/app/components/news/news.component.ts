import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass'],
})
export class NewsComponent {
  newsArray: any = [
    {
      titlenew: 'Hydrogen VS Electric Cars',
      paragraphnew: 'Will hydrogen-fueled cars ever catch up to EVs?',
    },
    {
      titlenew: 'The Downsides of AI Artistry',
      paragraphnew:
        'What are the possible adverse effects of on-demand AI image generation?',
    },
    {
      titlenew: 'Is VC Funding Drying Up?',
      paragraphnew:
        'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
    },
  ];
  titleNews: boolean = true;
  paragraphNews: string = 'parrafo noticia';
  
}
