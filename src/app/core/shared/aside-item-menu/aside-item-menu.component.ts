import { Component, inject, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-aside-item-menu',
  imports: [RouterModule],
  templateUrl: './aside-item-menu.component.html',
  styleUrl: './aside-item-menu.component.css'
})
export class AsideItemMenuComponent implements OnChanges {
  @Input() link: string = '';
  @Input() path: string = '';
  @Input() icon: string = '';
  safeIcon: SafeHtml = '';
  
  sanitizer = inject(DomSanitizer);

  constructor() { 

  }

  ngOnChanges(){
    this.safeIcon = this.sanitizer.bypassSecurityTrustHtml(this.icon);
  }

}
