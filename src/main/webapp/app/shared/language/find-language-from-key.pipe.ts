import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'findLanguageFromKey' })
export class FindLanguageFromKeyPipe implements PipeTransform {
  private languages: { [key: string]: { name: string; rtl?: boolean } } = {
    al: { name: 'Shqip' },
    'ar-ly': { name: 'العربية', rtl: true },
    hy: { name: 'Հայերեն' },
    by: { name: 'Беларускі' },
    bn: { name: 'বাংলা' },
    ca: { name: 'Català' },
    'zh-cn': { name: '中文（简体）' },
    'zh-tw': { name: '繁體中文' },
    cs: { name: 'Český' },
    da: { name: 'Dansk' },
    nl: { name: 'Nederlands' },
    en: { name: 'English' },
    et: { name: 'Eesti' },
    'pt-br': { name: 'Português (Brasil)' },
    // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
  };

  transform(lang: string): string {
    return this.languages[lang].name;
  }

  isRTL(lang: string): boolean {
    return Boolean(this.languages[lang].rtl);
  }
}
