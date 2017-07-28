// initialize i18n cache
import * as i18n from 'i18next';
const en = '../public/locales/en.json';
const es = '../public/locales/es.json';

// put the locale into the correct namespace for the i18n cache.
// Because we are adding it to the cache manually, we have to give it the hierarchy manually
const namespacedLocaleObject = {
    'en': {
        'translation': en
    },
    'es': {
        'translation': es
    }
};

const options = {
    // turn on this flag to see if you're localization keys are not correct.  It will log a message
    'debug': false,
    // the localized data, adding directly to the cache
    'resources': namespacedLocaleObject,
    // the language we're using for all of the regular tests.
    'lng': 'en',
    // if an unsupported locale is selected, it will fall back to this locale
    'fallbackLng': 'en'
};

// initialize the i18n cache
const instance = i18n.init(options);

export default instance;