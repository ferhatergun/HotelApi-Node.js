## Hotel Api



<details>
<summary>Auth Operations</summary>

- /auth/login (POST) (Kullanıcının giriş yapabilmesini sağlayan endpoint)
- /auth/register (POST) (Kullanıcının kayıt olabilmesini sağlayan endpoint)

</details>

<details>
<summary>User Operations</summary>

- /user/:userId (GET) (Kullanıcının tüm bilgilerini getiren endpoint)
- /user/:userId (PUT) (Kullanıcı bilgilerini güncellemesini sağlayan endpoint)
- /user/:userId (DELETE) (Kullanıcıyı veritabanından silen endpoint)

</details>
<details>
<summary>Hotel Operations</summary>

- /hotel/createHotel (POST) (Yeni bir otel oluşturmayı sağlayan endpoint)
- /hotel/:hotelId (GET) (Otel bilgilerini getiren endpoint)
- /hotel/deleteHotel/:hotelId (DELETE) (Oteli veritabanından silen endpoint)
- /hotel/updateHotel/:hotelId (PUT) (Otel bilgilerinin güncellenmesini sağlayan endpoint)

</details>

<details>
<summary>Room Operations</summary>

- /room/:roomId (GET) (Oda bilgilerini getiren endpoint)
- /room/createRoom/:hotelId (POST) (Otele yeni bir oda ekleyen endpoint)
- /room/deleteRoom/:hotelId/:roomId (DELETE) (Otelin içindeki odayı veritabanından silen endpoint)
- /room/updateRoom/:roomId (PUT) (Oda bilgilerinin güncellenmesini sağlayan endpoint)

</details>



### İmport Postman
````
https://api.postman.com/collections/29460021-07555d37-39c4-4ae9-b2be-c9b46b073a87
?access_key=PMAT-01HP3YBJS3QFDB2W9C9EV6JX8M
````

### Projeyi Çalıştırma
````
git clone https://github.com/ferhatergun/HotelApi-Node.js.git

cd HotelApi-Node.js

npm install

npm start
````

### .env dosyası
````
PORT=5000
DB_URL="YOUR_DB_URL"
JWT_SECRET_KEY="YOUR_JWT_SECRET_KEY"
````
