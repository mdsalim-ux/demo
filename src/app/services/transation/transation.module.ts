import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http,"./assets/i18n/" , ".json")
}
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: false
    })
  ],
  exports:[TranslateModule]
})
export class TransationModule {
  constructor(translate: TranslateService, private Translatelang: TranslateService) {
    translate.addLangs(['en', 'hn']);
    const browserlang = translate.getBrowserLang();
    translate.use(browserlang?.match(/en|hn/) ? browserlang : 'en')
  }

  getTranslatelang(key: string) {
    let lang = this.Translatelang.currentLang
    return this.Translatelang.translations[lang][key]
  }
}
