import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
    selector: 'app-ngbd-carousel',
    templateUrl: './carousel.component.html',
    encapsulation: ViewEncapsulation.None,
    styles: [`
      .carousel-item {
        display: block;
        opacity: 0;
        transition: opacity 2s;
      }

      .carousel-item.active {
        display: block;
        opacity: 1;
        transition: opacity 2s;

      }

      .carousel-control-next-icon {

        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 24 24'%3e%3cpath d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.568 18.005l-1.414-1.415 4.574-4.59-4.574-4.579 1.414-1.416 5.988 5.995-5.988 6.005z'/%3e%3c/svg%3e");

      }

      .carousel-control-prev-icon {

        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 24 24'%3e%3cpath d='M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm7.58 0l5.988-5.995 1.414 1.416-4.574 4.579 4.574 4.59-1.414 1.416-5.988-6.006z'/%3e%3c/svg%3e");

      }
    `]
  }
)
export class NgbdCarouselBasic {
  images = ["https://picsum.photos/900/500?random&t=1",
    "https://picsum.photos/900/500?random&t=2",
    "https://picsum.photos/900/500?random&t=3"]

}
