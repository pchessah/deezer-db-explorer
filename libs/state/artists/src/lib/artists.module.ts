import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({
  declarations: [ ],
  imports: [HttpClientModule],
  exports: [
  ]
})
export class ArtistsModule { 
  static forRoot(environment: any): ModuleWithProviders<any> {
    return {
      ngModule: ArtistsModule,
      providers: [{ provide: "ENV", useValue: environment }]
    }
  }
}
