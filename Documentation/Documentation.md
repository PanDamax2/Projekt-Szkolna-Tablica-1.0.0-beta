```
  _____        _                    _  _ _____                     _
 / ____|      | |                  | || |___  \ 	   	          | |
| (___    ___ | |__    ___    ___  | || |___) |____,_  _ __   ___ | |
 \___ \  / __|| '_ \  / _ \  / _ \ | || |'___// _  | || '_ \ / _ \| |
 ____) || (__ | | | || (_) || (_) || || |    | (_| | || | | ||___/| |
|_____/  \___||_| |_| \___/  \___/ |_||_|     \__,_|_||_| |_|\___ |_|
```

<details>
  <summary>Spis treści</summary>
  <ol>
    <li><a href="#wprowadzenie">Wprowadzenie</a></li>
    <li><a href="#architektura">Architektura</a></li>
    <li><a href="#wymagania">Wymagania</a></li>
    <li><a href="#instalacja">Instalacja</a></li>
    <li><a href="#konfiguracja">Konfiguracja</a></li>
    <li><a href="#uruchomienie">Uruchomienie</a></li>
    <li><a href="#struktura-katalogów">Struktura katalogów</a></li>
    <li><a href="#komponenty">Komponenty</a></li>
    <li><a href="#api">API</a></li>
    <li><a href="#baza-danych">Baza danych</a></li>
    <li><a href="#współtworzenie">Współtworzenie</a></li>
    <li><a href="#problemy">Problemy</a></li>
    <li><a href="#licencja">Licencja</a></li>
  </ol>
</details>

## Wprowadzenie

- **Cel projektu:**
  Stworzenie aplikacji do szkolnej tablicy ogłoszeń, która pozwala nauczycielom na łatwe przesyłanie wiadomości przez panel administracyjny, a następnie automatyczne wyświetlanie ich na tablicy dla uczniów.

- **Zakres projektu:**
  Aplikacja zawiera frontend do obsługi panelu administracyjnego oraz samej tablicy, backend do zarządzania danymi, a także bazę danych do przechowywania wszystkich informacji.

- **Kluczowe funkcje:**
  - Logowanie i autoryzacja nauczycieli.
  - Intuicyjny interfejs dla nauczycieli, gdzie mogą tworzyć, edytować, usuwać i zarządzać ogłoszeniami.
  - Wyświetlanie ogłoszeń na tablicy w czasie rzeczywistym.

## Architektura

### Frontend

- **React.js**:
  - **Tablica informacyjna**
  - **Panel admina**

### Backend

- **Express.js**

### Baza danyc

- **MongoDB**
- **MySQL**

### Struktura komunikacji

- **Frontend**: Komunikuje się z backendem za pomocą HTTP przy użyciu fetch do wykonywania zapytań API.
- **Backend**: Przetwarza zapytania, wykonuje operacje na bazie danych i zwraca odpowiedzi do frontend’u.

### Diagram architektury

```
admin panel:
                   +---------------+
                   |   Użytkownik  |
                   +------+--------+
                          |
                          v
                   +------+--------+
                   |   Frontend    |
                   | (Admin Panel) |
                   +------+--------+
                          |
                          v
                   +------+--------+
                   |   Backend     |
                   | (Express.js)  |
                   +------+--------+
                          |
                          v
         +----------------+----------------+
         |                                 |
+--------+--------+               +--------+--------+
|    MongoDB      |               |      MySQL      |
+-----------------+               +-----------------+

tablica:
+--------+--------+               +--------+--------+
|    MongoDB      |               |      MySQL      |
+-----------------+               +-----------------+
         |                                 |
         +----------------+----------------+
				          |
				          v
                   +------+--------+
                   |    Szkolny    |
                   |     Panel     |
                   +------+--------+
				          |
				          v
	               +---------------+
                   |   Użytkownik  |
                   +------+--------+
```

## Wymagania

- Node.js (wersja >= 18)
- npm
- MongoDB (jeśli wybierzesz MongoDB jako bazę danych)
- MySQL (jeśli wybierzesz MySQL jako bazę danych)

## Instalacja

### Klonowanie repozytorium

### Instalacja zależności

#### Frontend:

#### Backend:

## Konfiguracja

### Backend

#### MongoDB

#### MySQL

### Frontend

## Uruchomienie

### Backend

### Frontend

## Struktura katalogów

## Komponenty

### Frontend

-

### Backend

## API

### Endpointy

-

## Baza danych

### MongoDB

## Baza danych

Projekt School Panel może korzystać z dwóch typów baz danych: MongoDB (NoSQL) lub MySQL (relacyjna). Poniżej przedstawiono strukturę dla obu tych baz danych.

### MongoDB

MongoDB to baza danych typu NoSQL, która przechowuje dane w formacie dokumentów JSON. W projekcie School Panel używane są następujące kolekcje:

### MySQL

MySQL to relacyjna baza danych, która przechowuje dane w tabelach. W projekcie School Panel używane są następujące tabele:

### Tabela: `classroom`

| Nazwa     | Typ      | Null | Domyślnie         | Dodatkowe   |
| --------- | -------- | ---- | ----------------- | ----------- |
| id        | int(11)  | Nie  | AUTO_INCREMENT    | PRIMARY KEY |
| html      | text     | Nie  | Brak              |             |
| createdAt | datetime | Tak  | CURRENT_TIMESTAMP |             |
| updatedAt | datetime | Tak  | CURRENT_TIMESTAMP |             |

### Tabela: `announcements`

| Nazwa     | Typ          | Null | Domyślnie         | Dodatkowe   |
| --------- | ------------ | ---- | ----------------- | ----------- |
| id        | int(11)      | Nie  | AUTO_INCREMENT    | PRIMARY KEY |
| data      | varchar(255) | Nie  | Brak              |             |
| text      | varchar(255) | Nie  | Brak              |             |
| createdAt | datetime     | Tak  | CURRENT_TIMESTAMP |             |
| updatedAt | datetime     | Tak  | CURRENT_TIMESTAMP |             |

### Tabela: `view`

| Nazwa      | Typ                                                    | Null | Domyślnie         | Dodatkowe   |
| ---------- | ------------------------------------------------------ | ---- | ----------------- | ----------- |
| id         | int(11)                                                | Nie  | AUTO_INCREMENT    | PRIMARY KEY |
| schoolLogo | varchar(255)                                           | Nie  | Brak              |             |
| viewMode   | enum('school', 'event', 'slider', 'alarm', 'assembly') | Nie  | 'school'          |             |
| createdAt  | datetime                                               | Tak  | CURRENT_TIMESTAMP |             |
| updatedAt  | datetime                                               | Tak  | CURRENT_TIMESTAMP |             |

### Tabela: `replacements`

| Nazwa     | Typ          | Null | Domyślnie         | Dodatkowe      |
| --------- | ------------ | ---- | ----------------- | -------------- |
| id        | int(11)      | Nie  | Brak              | AUTO_INCREMENT |
| lesson    | varchar(255) | Nie  | Brak              |                |
| teacher   | varchar(255) | Nie  | Brak              |                |
| branch    | varchar(255) | Nie  | Brak              |                |
| subject   | varchar(255) | Nie  | Brak              |                |
| room      | varchar(255) | Nie  | Brak              |                |
| date      | varchar(255) | Nie  | Brak              |                |
| deputy    | varchar(255) | Nie  | Brak              |                |
| createdAt | datetime     | Nie  | CURRENT_TIMESTAMP |                |
| updatedAt | datetime     | Nie  | CURRENT_TIMESTAMP | ON UPDATE      |

### Tabela: `slider`

| Nazwa     | Typ          | Null | Domyślnie         | Dodatkowe      |
| --------- | ------------ | ---- | ----------------- | -------------- |
| id        | int(11)      | Nie  | Brak              | AUTO_INCREMENT |
| file      | varchar(255) | Nie  | Brak              |                |
| createdAt | datetime     | Nie  | CURRENT_TIMESTAMP |                |
| updatedAt | datetime     | Nie  | CURRENT_TIMESTAMP | ON UPDATE      |

### Tabela: `users`

| Nazwa                   | Typ          | Null | Domyślnie         | Dodatkowe      |
| ----------------------- | ------------ | ---- | ----------------- | -------------- |
| id                      | int(11)      | Nie  | Brak              | AUTO_INCREMENT |
| name                    | varchar(255) | Nie  | Brak              |                |
| lastname                | varchar(255) | Nie  | Brak              |                |
| avatar                  | varchar(255) | Tak  | Brak              |                |
| email                   | varchar(255) | Nie  | Brak              | UNIQUE         |
| login                   | varchar(255) | Nie  | Brak              | UNIQUE         |
| password                | varchar(255) | Nie  | Brak              |                |
| isVerified              | tinyint(1)   | Tak  | false             |                |
| lastLogin               | datetime     | Tak  | CURRENT_TIMESTAMP |                |
| resetPasswordToken      | varchar(255) | Tak  | Brak              |                |
| resetPasswordExpireAt   | datetime     | Tak  | Brak              |                |
| verificationToken       | varchar(255) | Tak  | Brak              |                |
| verificationTokenExpire | datetime     | Tak  | Brak              |                |
| isAdmin                 | tinyint(1)   | Nie  | false             |                |
| createdAt               | datetime     | Nie  | CURRENT_TIMESTAMP |                |
| updatedAt               | datetime     | Nie  | CURRENT_TIMESTAMP | ON UPDATE      |

## Współtworzenie

## Problemy

.

## Licencja
