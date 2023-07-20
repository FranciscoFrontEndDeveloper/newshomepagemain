import { Component } from '@angular/core';

@Component({
  selector: 'app-tops',
  templateUrl: './tops.component.html',
  styleUrls: ['./tops.component.sass']
})
export class TopsComponent {
  topsArray: any = [
    {
      imgTop: 'assets/image-retro-pcs.jpg',
      titletop: 'Reviving Retro PCs',
      paragraphtop: 'What happens when old PCs are given modern upgrades?',
    },
    {
      imgTop: 'assets/image-top-laptops.jpg',
      titletop: 'Top 10 Laptops of 2022',
      paragraphtop:
        'Our best picks for various needs and budgets.',
    },
    {
      imgTop: 'assets/image-gaming-growth.jpg',
      titletop: 'The Growth of Gaming',
      paragraphtop:
        'How the pandemic has sparked fresh opportunities.',
    },
  ];
  titleTops: string = 'titulo noticia';
  paragraphTops: string = 'parrafo noticia';
}
