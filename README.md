NOT: Test senaryolarını text dosyası olarak hazırlarken detay kısımların üzerinden geçmedim. Görüşme gerçekleştiereceğimiz durumda test senaryolarında nasıl detaylardan bahsedilebileceği hakkında konuşmayı çok isterim. Vaktinizi ve emeğiniz ayırdığınız için çok teşekkür ederim. Sağlıklı günler dilerim.



Bu proje, web uygulamalarının uçtan uca testlerini gerçekleştirmek için Playwright kullanarak otomatik testler içermektedir.
Aşağıda, testleri kurup çalıştırmak için gerekli adımlar yer almaktadır.
--------------
Gereksinimler

Başlamadan önce aşağıdaki yazılımların bilgisayarınızda kurulu olduğundan emin olun:

Visual Studio

Visual Studio içinden Playwright uzantısı 

Node.js (v16 veya üstü)

npm (Node.js ile birlikte gelir)
----------------
Kurulum

Node.js indirin

İndirdiğiniz sürümü CMD veya Powershell üzerinden "node -v" ve "npm -v" yazarak kontrol edin

Visual Stüdyo üzerinden boş bir proje açın

Açtığınız projenin terminalinde "npm init playwright@latest" komutunu çalıştırın

Terminalde çıkan "Javascript" veya "Typescript" seçeneklerinden "Javascript" olanı seçin

Ardından çıkan seçenekte bir dosya ismi belirleyin

GitHub workflow bağlantısına onay veya red verin

Ardından çıkan Playwrigth internet sağlayıcılarını indirin.

Playwright için kurulum tamamlanmıştır. Son olarak kullandığınız IDE'ye uzantı olarak IDE'nin kendi kütüphanesinden "Test: Playwright" indirin ve
kurulum aşamasında Javascript seçeneğini işaretleyin.
-----------------
Uygulama

-Projedeki tüm testleri çalıştırmak için şu komutu kullanın: "npx playwright test"
Bu komut, tests klasöründeki tüm test dosyalarını çalıştıracaktır.

-Belirli bir testi çalıştırmak için aşağıdaki komutu kullanın (örneğin test-file.spec.ts dosyasının adı ile): "npx playwright test tests/test-file.spec.ts"


-Testleri başlıksız modda çalıştırma: npx playwright test --headed


-Testleri belirli konfigürasyonlarla çalıştırma. Örneğin: "npx playwright test --project=firefox"


-Test Raporu

Testleri çalıştırdıktan sonra, oluşturulan raporları test-results klasöründe bulabilirsiniz. Veya "npx playwright test --reporter=html" ve "npx playwright show-report" 
gibi komutlarla raporu görebilirsiniz

Bu, tarayıcınızda açabileceğiniz bir HTML raporu oluşturacaktır.




