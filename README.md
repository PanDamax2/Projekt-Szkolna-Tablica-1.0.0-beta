
```
  _____        _                    _  _ _____                     _
 / ____|      | |                  | || |___  \                   | |
| (___    ___ | |__    ___    ___  | || |___) |____,_  _ __   ___ | |
 \___ \  / __|| '_ \  / _ \  / _ \ | || |'___// _  | || '_ \ / _ \| |
 ____) || (__ | | | || (_) || (_) || || |    | (_| | || | | ||___/| |
|_____/  \___||_| |_| \___/  \___/ |_||_|     \__,_|_||_| |_|\___ |_|
```                                    
 
<br>
<details>
  <summary>Spis treści</summary>
  <ol>
    <li><a href="#🚀-wprowadzenie">Wprowadzenie</a></li>
    <li><a href="#💎-architektura">Architektura</a></li>
    <li><a href="#wymagania">Wymagania</a></li>
    <li><a href="#instalacja">Instalacja</a></li>
    <li><a href="#konfiguracja">Konfiguracja</a></li>
    <li><a href="#uruchomienie">Uruchomienie</a></li>
    <li><a href="#komponenty">Komponenty</a></li>
    <li><a href="#list-of-routes">Lista routów</a></li>
    <li><a href="#baza-danych">Baza danych</a></li>
    <li><a href="#screens">Screens</a></li>
    <li><a href="#💳-licencja">Licencja</a></li>
    <li><a href="#📬-prosimy-o-zgłoszenie-problemu">Problemy</a></li>
  </ol>
</details>


## 🚀 Wprowadzenie

-   **Cel projektu:** 
Stworzenie aplikacji do szkolnej tablicy ogłoszeń, która pozwala nauczycielom na łatwe przesyłanie wiadomości przez panel administracyjny, a następnie automatyczne wyświetlanie ich na tablicy dla uczniów.

-   **Zakres projektu:**
Aplikacja zawiera frontend do obsługi panelu administracyjnego oraz samej tablicy, backend do zarządzania danymi, a także bazę danych do przechowywania wszystkich informacji.

-   **Kluczowe funkcje:**
    -   Logowanie i autoryzacja nauczycieli.
    -   Intuicyjny interfejs dla nauczycieli, gdzie mogą tworzyć, edytować, usuwać i zarządzać ogłoszeniami.
    -   Wyświetlanie ogłoszeń na tablicy w czasie rzeczywistym.

<br>

## 💎 Architektura


### 1. **Panel Admina:**

[![React][React.js]][React-url] 
[![TypeScript][TypeScript]][TypeScript-url]
[![Tailwind CSS][TailwindCSS]][TailwindCSS-url]
[![React DOM][ReactDOM]][ReactDOM-url]


### 2. **Tablica Ogłoszeń:**

[![React][React.js]][React-url] 
[![TypeScript][TypeScript]][TypeScript-url]
[![Tailwind CSS][TailwindCSS]][TailwindCSS-url]
[![React DOM][ReactDOM]][ReactDOM-url]

### 3. **Backend:**

[![Node.js][Node.js]][Node.js-url]
[![Express.js][Express.js]][Express.js-url]
[![TypeScript][TypeScript]][TypeScript-url]
[![JWT][JWT]][JWT-url]
[![Jest][Jest]][Jest-url]
[![Joi][Joi]][Joi-url]
[![Sequelize][Sequelize]][Sequelize-url]
[![Multer][Multer]][Multer-url]

### 3. **Baza danych:**

[![MySQL][MySQL]][MySQL-url]

<br>

## Wymagania

-   dopisze pózniej

## Instalacja

-   dopisze pózniej

### Klonowanie repozytorium

-   dopisze pózniej


## Konfiguracja

-   dopisze pózniej


## Uruchomienie

-   dopisze pózniej

<br>

## List of Routes

```sh
# Auth:
+--------+------------------------------+
  Method | URI
+--------+------------------------------+
  GET    | /auth/check-auth
  POST   | /auth/veryfi-email
  POST   | /auth/logout
  POST   | /auth/login
  POST   | /auth/reset-password/:token
  POST   | /auth/forgot-password
+--------+------------------------------+

# Replacements:
+--------+------------------------------+
  Method | URI
+--------+------------------------------+
  GET    | /api/replacements 
  POST   | /api/replacements
  PUT    | /api/replacements/:id
  DELETE | /api/replacements/:id
+--------+------------------------------+

# Classrooms:
+--------+------------------------------+
  Method | URI
+--------+------------------------------+
  GET    | /api/classrooms 
  POST   | /api/classrooms
  PUT    | /api/classrooms/:id
  DELETE | /api/classrooms/:id
+--------+------------------------------+

# Announcements:
+--------+------------------------------+
  Method | URI
+--------+------------------------------+
  GET    | /api/announcements 
  POST   | /api/announcements
  PUT    | /api/announcements/:id
  DELETE | /api/announcements/:id
+--------+------------------------------+

# Views:
+--------+------------------------------+
  Method | URI
+--------+------------------------------+
  GET    | /api/views/:id 
  PUT    | /api/views/:id
+--------+------------------------------+

# Slider:
+--------+------------------------------+
  Method | URI
+--------+------------------------------+
  GET    | /api/slider 
  POST   | /api/slider
  PUT    | /api/slider/:id
  DELETE | /api/slider/:id
+--------+------------------------------+

# Users:
+--------+------------------------------+
  Method | URI
+--------+------------------------------+
  GET    | /api/users 
  GET    | /api/users/:id
  POST   | /api/users
  PUT    | /api/users/:id
  DELETE | /api/users/:id
+--------+------------------------------+
```

<br>

## Baza danych

### Tabela: `classroom`

| Nazwa        | Typ        | Null | Domyślnie | Dodatkowe      |
|--------------|------------|------|-----------|----------------|
| id           | int(11)    | Nie  | Brak      | AUTO_INCREMENT |
| html         | text       | Nie  | Brak      |                |
| title        | text       | Nie  | Brak      |                |

### Tabela: `views`

| Nazwa            | Typ           | Null | Domyślnie | Dodatkowe      |
|------------------|---------------|------|-----------|----------------|
| id               | int(11)       | Nie  | Brak      | AUTO_INCREMENT |
| schoolLogo       | varchar(255)  | Nie  | Brak      |                |
| viewMode         | enum('school', 'event', 'slider', 'alarm', 'assembly')  | Nie  | school    |                |


### Tabela: `announcements`

| Nazwa            | Typ          | Null | Domyślnie | Dodatkowe      |
|------------------|--------------|------|-----------|----------------|
| id               | int(11)      | Nie  | Brak      | AUTO_INCREMENT |
| text             | varchar(255) | Nie  | Brak      |                |
| img_information  | varchar(255) | Nie  | Brak      |                |

### Tabela: `replacements`

| Nazwa             | Typ          | Null | Domyślnie | Dodatkowe      |
|-------------------|--------------|------|-----------|----------------|
| id                | int(11)      | Nie  | Brak      | AUTO_INCREMENT |
| lesson            | varchar(255) | Nie  | Brak      |                |
| teacher           | varchar(255) | Nie  | Brak      |                |
| branch            | varchar(255) | Nie  | Brak      |                |
| subject           | varchar(255) | Nie  | Brak      |                |
| room              | varchar(255) | Nie  | Brak      |                |
| date              | varchar(255) | Nie  | Brak      |                |
| deputy            | varchar(255) | Nie  | Brak      |                |

### Tabela: `slider`

| Nazwa         | Typ          | Null | Domyślnie | Dodatkowe      |
|---------------|--------------|------|-----------|----------------|
| id            | int(11)      | Nie  | Brak      | AUTO_INCREMENT |
| file          | varchar(255) | Nie  | Brak      |                |

### Tabela: `users`

| Nazwa          | Typ           | Null | Domyślnie | Dodatkowe      |
|----------------|---------------|------|-----------|----------------|
| id             | int(11)       | Nie  | Brak      | AUTO_INCREMENT |
| name           | varchar(255)  | Nie  | Brak      |     			     |
| lastname       | varchar(255)  | Nie  | Brak      |     			     |
| avatar         | varchar(255)  | Tak  | NULL      |     			     |
| login          | varchar(255)  | Nie  | Brak      |     			     |
| email          | varchar(255)  | Nie  | Brak      |     			     |
| password       | varchar(255)  | Nie  | Brak      |     			     |
| isVerified     | tinyint(1)    | Tak  | false     |                |
| lastLogin      | 	datetime     | Tak  | current_timestamp()|     	 |
| resetPasswordToken| varchar(255)  | Tak  | NULL   |     			     |
| resetPasswordExpireAt| datetime  | Tak  | NULL  |     			    |
| verificationToken| varchar(255)  | Tak  | NULL   |     			     |
| verificationTokenExpireAt| datetime  | Tak  | NULL  |     			    |
| isAdmin          | tinyint(1)    | Nie  | false     |                |

## Screens



## 💳 Licencja

Licencja MIT pozwala na dowolne użycie, modyfikację i dystrybucję oprogramowania, pod warunkiem zachowania informacji o autorze i licencji w dostarczonych plikach. Oznacza to, że możesz korzystać z kodu w swoich projektach, zarówno komercyjnych, jak i niekomercyjnych, bez obaw o naruszenie praw autorskich.

Szczegółowe informacje można znaleźć w [MIT License](https://opensource.org/licenses/MIT).

## 📬 Prosimy o zgłoszenie problemu

Proszę o pozostawienie pytania lub wątpliwości jako sprawy.

Dołożę wszelkich starań, aby odpowiedzieć i zastanowić się.

Dziękuję za zainteresowanie.




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[ReactDOM]: https://img.shields.io/badge/React%20DOM-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[ReactDOM-url]: https://reactjs.org/docs/react-dom.html

[TypeScript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/

[TailwindCSS]: https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/

[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node.js-url]: https://nodejs.org/

[Express.js]: https://img.shields.io/badge/Express.js-red?style=for-the-badge&logo=express&logoColor=white
[Express.js-url]: https://expressjs.com/

[JWT]: https://img.shields.io/badge/JWT-2B037A?style=for-the-badge&logo=json-web-tokens&logoColor=white
[JWT-url]: https://jwt.io/

[MySQL]: https://img.shields.io/badge/MySQL-00758F?style=for-the-badge&logo=mysql&logoColor=white
[MySQL-url]: https://www.mysql.com/

[Jest]: https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white
[Jest-url]: https://jestjs.io/

[Joi]: https://img.shields.io/badge/Joi-2A6EB6?style=for-the-badge&logo=joi&logoColor=white
[Joi-url]: https://joi.dev/

[Sequelize]: https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white
[Sequelize-url]: https://sequelize.org/

[Multer]: https://img.shields.io/badge/Multer-0078D4?style=for-the-badge&logo=multer&logoColor=white
[Multer-url]: https://www.npmjs.com/package/multer
