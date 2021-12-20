import { Directive, OnInit, ViewContainerRef, TemplateRef, Input } from '@angular/core';
import { AbTestsService } from './service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[abTestVersion]'
})
export class AbTestVersionDirective implements OnInit {
  private _versions: string[];
  private _scope: string;
  private _forCrawlers = false;

  constructor(
    private _service: AbTestsService,
    private _viewContainer: ViewContainerRef,
    private _templateRef: TemplateRef<any>
  ) {}

  ngOnInit() {
    if (this._service.shouldRender(this._versions, this._scope, this._forCrawlers)) {
      this._viewContainer.createEmbeddedView(this._templateRef);
    }
  }

  @Input()
  set abTestVersion(value: string) {
    this._versions = value.split(',');
  }

  @Input()
  set abTestVersionScope(value: string) {
    this._scope = value;
  }

  @Input()
  set abTestVersionForCrawlers(value: boolean) {
    this._forCrawlers = value;
  }
}
