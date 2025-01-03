# Node.js Enterprise Boilerplate

## 🚀 Proje Açıklaması
Modern, modüler ve genişletilebilir Node.js uygulama mimarisi. Bu boilerplate, güçlü bir backend altyapısı kurarak uygulama geliştirme sürecini hızlandırmanıza yardımcı olur. SOLID prensiplerine dayalı, çok katmanlı mimarisi ve modüler yapısı ile projelerinizi güvenli ve ölçeklenebilir bir şekilde geliştirebilirsiniz.

## ✨ Özellikler
- Çok Katmanlı Mimari
- SOLID Prensipleri
- Güvenli Authentication
- Modüler Yapı

## 🛠 Teknolojiler
- Node.js
- Express.js
- Sequelize ORM
- JWT Authentication

## 📦 Gereksinimler
- Node.js (v16+)
- npm
- PostgreSQL/MySQL

## 🔧 Kurulum


### Gerekli paketlerin yüklenmesi
npm install

### Veritabanı migrationlarını çalıştırma
npm run db:migrate

### Geliştirme sunucusunu başlatma
npm run dev

### 2. Ortam Değişkenleri,

```env
APP_PORT=3000               # Uygulamanın çalışacağı port
DB_NAME=your_database       # Veritabanı adı
DB_USER=your_username       # Veritabanı kullanıcı adı
DB_PASS=your_password       # Veritabanı şifresi
DB_HOST=localhost           # Veritabanı host adresi
DB_PORT=5432                # Veritabanı portu (PostgreSQL için genellikle 5432)
PASSWORD_HASH=your_hash_key # Şifreleme anahtarı
ACCESS_TOKEN_SECRET_KEY=your_access_token_secret_key  # JWT access token anahtarı
REFRESH_TOKEN_SECRET_KEY=your_refresh_token_secret_key  # JWT refresh token anahtarı
EPOSTA_HOST=smtp.example.com  # E-posta server adresi
EPOSTA_PORT=587             # E-posta server portu
EPOSTA_USER=your_email@example.com  # E-posta kullanıcı adı
EPOSTA_PASSWORD=your_email_password # E-posta şifresi
EPOSTA_FROM=your_email@example.com # E-posta gönderici adresi
```

## 🤝 Katkıda Bulunma,

Bu projeye katkı sağlamak için aşağıdaki adımları takip edebilirsiniz:

1. Projeyi fork edin.
2. Yeni bir branch oluşturun (git checkout -b feature/feature-name).
3. Yapacağınız değişiklikleri commit edin (git commit -am 'Add new feature').
4. Pull request açın.

## 📄 Lisans,
MIT Lisansı - Bu proje Apache lisansı altında lisanslanmıştır. Detaylar için LICENSE dosyasına bakabilirsiniz.


## 📞 İletişim,
E-posta: [ktuncerr[at]gmail.com](mailto:ktuncerr@gmail.com)
