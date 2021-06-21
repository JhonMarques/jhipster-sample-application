import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
import * as duration from 'dayjs/plugin/duration';
import * as relativeTime from 'dayjs/plugin/relativeTime';

// jhipster-needle-i18n-language-dayjs-imports - JHipster will import languages from dayjs here
import 'dayjs/locale/pt-br';
import 'dayjs/locale/sq';
import 'dayjs/locale/ar-ly';
import 'dayjs/locale/hy-am';
import 'dayjs/locale/be';
import 'dayjs/locale/bn';
import 'dayjs/locale/ca';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/zh-tw';
import 'dayjs/locale/cs';
import 'dayjs/locale/da';
import 'dayjs/locale/nl';
import 'dayjs/locale/en';
import 'dayjs/locale/et';

// DAYJS CONFIGURATION
dayjs.extend(customParseFormat);
dayjs.extend(duration);
dayjs.extend(relativeTime);
