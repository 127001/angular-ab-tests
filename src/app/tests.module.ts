import { NgModule } from '@angular/core';
import { AbTestsModule, AbTestOptions } from './modules/angular-ab-tests/module';

export const abTestsOptions: AbTestOptions[] = [
  {
    versions: [ 'old', 'new' ],
    versionForCrawlers: 'new',
    weights: { new: 50 }
  },
];

@NgModule({
  imports: [
    AbTestsModule.forRoot(abTestsOptions),
  ],
})
export class TestsModule {}
