# Projekt zaliczeniowy MegaK - blogApp.
Linko do FE: [https://github.com/PawelZurawka/MegaProjekt_Front](https://github.com/PawelZurawka/MegaProjekt_Front)

## Demo
Jeżeli networkmanager zacznie działać to apka będzie pod adresem:<br> [https://blog.networkmanager.pl](https://blog.networkmanager.pl)<br>
Zdążyłem wrzucić front i serwer padł, więc również możesz tylko odpalić lokalnie BE, a FE przez podany wyżej adres.

## Uruchamianie aplikacji
W przypadku, gdyby network manager nadal nie działał, podaję link do ściągnięcia pliku config, żebyś nie musiał tracić czasu na konfigurację. Wrzuciłem tam również screeny z aplikacji.
[LINK](https://drive.google.com/drive/folders/1C3E3nQTLDfNV024PvFsYDE1DwRIlZvuc?usp=sharing)
- FE `yarn install` ->  `yarn start` - [http://localhost:3000](http://localhost:3000)
- BE `yarn install` ->  `yarn start` - [http://localhost:3001](http://localhost:3001)
- BE - trzeba edytować plik config.example.ts podając dane do lokalnej lub zdalnej bazy Mongo i zmienić nazwę na config.ts

Użyte technologie i paczki:
- BE - Express + TS - bez strict mode więc nie wszystko jest otypowane - jeszcze jestem za cienki w TS.
- FE React bez TS-a.
- DB - MongoDB + Mongoose.
- Axios zamiast fetch.
- Multer do przesyłania plików.
- SASS.
- BEM.

Użycie Axios-a, Multer-a, bazy No-SQL czy brak TS-a w React nie wynika z lenistwa tylko z braku czasu (mam pod opieką miesięczną córeczkę).

Również z powyższego powodu apka ma wiele bolączek i niedoróbek, ale najpierw napiszę co działa :)

- dodawanie wpisów - tytuł, treść, zdjęcie oraz kategoria.
- edycja wpisów - tytuł oraz treść - tylko własne wpisy.
- usuwanie wpisów - tylko własne wpisy.
- filtrowanie po autorze lub kategorii.
- proste logowanie i rejestracja.
- edytowanie użytkownika.
- kasowanie użytkownika.

Czego nie zdążyłem zrobić oraz wady aplikacji (wszystko przez brak czasu o którym wyżej pisałem):
- brak RWD, a że nie lubię podejścia mobile first, to zacząłem od wersji desktopowej.
- brak paginacji w przypadku większej ilości wpisów.
- porządnej obsługi błędów - na FE tylko walidacja formularzy.
- użycie tylko bodajże trzech podstawowych hooków, przez co apka jest średnio wydajna.
- brak loadera.
- brak JWT,
- brak modali z pytaniem, np. czy na pewno chcesz się wylogować.
- chciałem użyć fetch-a, ale jest więcej pisania niż przy axiosie;).
- brak TS-a na FE.
- brak możliwości dodawania kategorii.

Mam nadzieję, że się za bardzo nie rozpisałem;)

Pozdro Kuba💪

PS Jest 23:58 a networkmanager nadal nie działa:(

