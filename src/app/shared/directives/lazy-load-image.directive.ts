import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[lazyLoad]'
})
export class LazyLoadImageDirective implements AfterViewInit, OnDestroy {
  @Input() lazyLoad!: string;
  private observer!: IntersectionObserver;
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.loadImage();
        this.observer.disconnect();
      }
    });
    this.observer.observe(this.el.nativeElement);
  }

  private loadImage(): void {
    if (this.lazyLoad) {
      this.el.nativeElement.src = this.lazyLoad;
    }
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
