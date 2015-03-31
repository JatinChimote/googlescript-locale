/**
 * This is free and unencumbered software released into the public domain.
 *
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 *
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * For more information, please refer to <http://unlicense.org/>
 */

/**
 * GetActiveUserLocale.gs
 * Standalone web app script. Prints the active user
 * locale and hello world to the browser.
 *
 * @license The Unlicense http://unlicense.org/
 * @version 0.1
 * @updated 2015-03-25
 * @author  The Pffy Authors https://github.com/pffy/
 * @link    https://github.com/pffy/googlescript-locale
 *
 */
function doGet() {
  var locale = Session.getActiveUserLocale();
  return ContentService.createTextOutput(locale +  ' : '
    + ( strings.hasOwnProperty(locale) ? strings[locale].helloworld : strings['en'].helloworld
    + ' (default)') );
}

/* strings.json */
var strings = {

  /**
   * NOTE: double quotes fors JSON string
   */

  /* English (USA) */
  "en" : {
    hello: "hello",
    helloworld: "hello world",
    derp: "derp"
  },

  /* Spanish (EspaÃ±a/Spain) */
  "es" : {
    hello: "hola",
    helloworld: "hola mundo",
    derp: "derp"
  },

  /* Spanish (USA or Chile) */
  "es_419" : {
    hello: "hola",
    helloworld: "hola mundo",
    derp: "que derp"
  },

  /* French (France) */
  "fr" : {
    hello: "bonjour",
    helloworld: "bonjour le monde",
    derp: "derp"
  },

  /* Chinese (Taiwan) */
  "zh_TW" : {
    hello: "ä½ å¥½",
    helloworld: "ä¸–ç•Œä½ å¥½",
    derp: "derp"
  },

  /* Chinese (Hong Kong or Macau) */
  "zh_HK" : {
    hello: "ä½ å¥½",
    helloworld: "ä¸–ç•Œä½ å¥½",
    derp: "derp"
  },

  /* Chinese (China or Singapore) */
  "zh_CN" : {
    hello: "ä½ å¥½",
    helloworld: "ä¸–ç•Œä½ å¥½",
    derp: "derp"
  }
};
