
```
  _____        _                    _  _ _____                     _
 / ____|      | |                  | || |___  \ 	   	          | |
| (___    ___ | |__    ___    ___  | || |___) |____,_  _ __   ___ | |
 \___ \  / __|| '_ \  / _ \  / _ \ | || |'___// _  | || '_ \ / _ \| |
 ____) || (__ | | | || (_) || (_) || || |    | (_| | || | | ||___/| |
|_____/  \___||_| |_| \___/  \___/ |_||_|     \__,_|_||_| |_|\___ |_|
```                                    
 
<br>
<details>
  <summary>Spis treści</summary>
  <ol>
    <li><a href="#wprowadzenie">Wprowadzenie</a></li>
    <li><a href="#architektura">Architektura</a></li>
    <li><a href="#wymagania">Wymagania</a></li>
    <li><a href="#instalacja">Instalacja</a></li>
    <li><a href="#konfiguracja">Konfiguracja</a></li>
    <li><a href="#uruchomienie">Uruchomienie</a></li>
    <li><a href="#komponenty">Komponenty</a></li>
    <li><a href="#api">API</a></li>
    <li><a href="#baza-danych">Baza danych</a></li>
    <li><a href="#współtworzenie">Współtworzenie</a></li>
    <li><a href="#problemy">Problemy</a></li>
    <li><a href="#licencja">Licencja</a></li>
  </ol>
</details>


## Wprowadzenie

-   **Cel projektu:** 
Stworzenie aplikacji do szkolnej tablicy ogłoszeń, która pozwala nauczycielom na łatwe przesyłanie wiadomości przez panel administracyjny, a następnie automatyczne wyświetlanie ich na tablicy dla uczniów.

-   **Zakres projektu:**
Aplikacja zawiera frontend do obsługi panelu administracyjnego oraz samej tablicy, backend do zarządzania danymi, a także bazę danych do przechowywania wszystkich informacji.

-   **Kluczowe funkcje:**
    -   Logowanie i autoryzacja nauczycieli.
    -   Intuicyjny interfejs dla nauczycieli, gdzie mogą tworzyć, edytować, usuwać i zarządzać ogłoszeniami.
    -   Wyświetlanie ogłoszeń na tablicy w czasie rzeczywistym.

<br>

## Architektura


### 1. **Panel Admina**

[![React][React.js]][React-url] 
[![TypeScript][TypeScript]][TypeScript-url]
[![Tailwind CSS][TailwindCSS]][TailwindCSS-url]
[![React DOM][ReactDOM]][ReactDOM-url]


### 2. **Tablica Ogłoszeń**

[![React][React.js]][React-url] 
[![TypeScript][TypeScript]][TypeScript-url]
[![Tailwind CSS][TailwindCSS]][TailwindCSS-url]
[![React DOM][ReactDOM]][ReactDOM-url]

### 3. **Backend**

[![Node.js][Node.js]][Node.js-url]
[![Express.js][Express.js]][Express.js-url]
[![TypeScript][TypeScript]][TypeScript-url]
[![JWT][JWT]][JWT-url]
[![Helmet][Helmet]][Helmet-url]

### 3. **Baza**

[![MongoDB][MongoDB]][MongoDB-url]
[![MySQL][MySQL]][MySQL-url]

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

## Endpointy API

### `Auth`

| Method | URL                  | Description                                                                                           |
|--------|----------------------|-------------------------------------------------------------------------------------------------------|
| POST   | /auth/login          | Przesyła dane logowania (nazwę użytkownika i hasło). |

### `Replacements`

| Method | URL                 | Description                            |
|--------|---------------------|----------------------------------------|
| GET    | /replacements       | Pobiera listę zastępstw.             |
| GET    | /replacements/:id   | Pobiera konkretne zastępstwo według ID. |
| POST   | /replacements       | Tworzy nowy zastępstwo.                 |
| PUT    | /replacements/:id   | Aktualizuje konkretne zastępstwo według ID. |
| DELETE | /replacements/:id   | Usuwa konkretne zastępstwo według ID.   |

### `Classrooms`

| Method | URL              | Description                            |
|--------|------------------|----------------------------------------|
| GET    | /classrooms      | Pobiera listę sal lekcyjnych.          |
| GET    | /classrooms/:id  | Pobiera konkretną salę lekcyjną według ID. |
| POST   | /classrooms      | Tworzy nową salę lekcyjną.             |
| PUT    | /classrooms/:id  | Aktualizuje konkretną salę lekcyjną według ID. |
| DELETE | /classrooms/:id  | Usuwa konkretną salę lekcyjną według ID. |

### `Informations`

| Method | URL                | Description                            |
|--------|--------------------|----------------------------------------|
| GET    | /informations      | Pobiera listę elementów informacyjnych.|
| GET    | /informations/:id  | Pobiera konkretne element informacyjny według ID. |
| PUT    | /informations/:id  | Aktualizuje konkretne element informacyjny według ID. |

### `Header`

| Method | URL              | Description                       |
|--------|------------------|-----------------------------------|
| GET    | /header          | Pobiera informacje nagłówka.       |
| GET    | /header/:id      | Pobiera konkretny nagłówek według ID. |
| PUT    | /header/:id      | Aktualizuje konkretny nagłówek według ID. |

### Slider

| Method | URL                  | Description                                    |
|--------|----------------------|------------------------------------------------|
| GET    | /slider              | Pobiera listę elementów suwaka.               |
| GET    | /slider/:id          | Pobiera konkretny element suwaka według ID.   |
| POST   | /slider              | Tworzy nowy element suwaka.                   |
| PUT    | /slider/:id          | Aktualizuje konkretny element suwaka według ID.|
| DELETE | /slider/:id          | Usuwa konkretny element suwaka według ID.    |

### Hidden-sections

| Method | URL                        | Description                                    |
|--------|----------------------------|------------------------------------------------|
| GET    | /hidden-sections           | Pobiera listę ukrytych sekcji.                 |
| GET    | /hidden-sections/:id       | Pobiera konkretną ukrytą sekcję według ID.     |
| PUT    | /hidden-sections/:id       | Aktualizuje konkretną ukrytą sekcję według ID. |

### Users

| Method | URL                  | Description                                    |
|--------|----------------------|------------------------------------------------|
| GET    | /users               | Pobiera listę użytkowników.                   |
| GET    | /users/:id           | Pobiera konkretnego użytkownika według ID.    |
| POST   | /users               | Tworzy nowego użytkownika.                    |
| PUT    | /users/:id           | Aktualizuje konkretnego użytkownika według ID.|
| DELETE | /users/:id           | Usuwa konkretnego użytkownika według ID.     |
           |






<br>

## Baza danych

### Tabela: `classroom`

| Nazwa        | Typ        | Null | Domyślnie | Dodatkowe      |
|--------------|------------|------|-----------|----------------|
| classroom_id | int(11)    | Nie  | Brak      | AUTO_INCREMENT |
| html         | text       | Tak  | NULL      |                |
| manual_plan  | text       | Tak  | NULL      |                |
| show_manual  | tinyint(1) | Tak  | true      |                |

### Tabela: `header`

| Nazwa            | Typ           | Null | Domyślnie | Dodatkowe      |
|------------------|---------------|------|-----------|----------------|
| header_id        | int(11)       | Nie  | Brak      | AUTO_INCREMENT |
| bell             | varchar(255)  | Tak  | NULL      |                |
| img_school_logo  | varchar(255)  | Tak  | NULL      |                |

### Tabela: `hidden_sections`

| Nazwa             | Typ        | Null | Domyślnie | Dodatkowe      |
|-------------------|------------|------|-----------|----------------|
| hidden_sections_id| int(11)    | Nie  | Brak      | AUTO_INCREMENT |
| classrooms        | tinyint(1) | Tak  | true      |                |
| information       | tinyint(1) | Tak  | true      |                |
| replacements      | tinyint(1) | Tak  | true      |                |
| slider            | tinyint(1) | Tak  | true      |                |


### Tabela: `information`

| Nazwa            | Typ          | Null | Domyślnie | Dodatkowe      |
|------------------|--------------|------|-----------|----------------|
| information_id   | int(11)      | Nie  | Brak      | AUTO_INCREMENT |
| text             | text         | Tak  | NULL      |                |
| img_information  | varchar(255) | Tak  | NULL      |                |
| show_img         | tinyint(1)   | Tak  | NULL      |                |

### Tabela: `replacements`

| Nazwa             | Typ          | Null | Domyślnie | Dodatkowe      |
|-------------------|--------------|------|-----------|----------------|
| replacements_id   | int(11)      | Nie  | Brak      | AUTO_INCREMENT |
| lesson            | varchar(255) | Tak  | NULL      |                |
| teacher           | varchar(255) | Tak  | NULL      |                |
| branch            | varchar(255) | Tak  | NULL      |                |
| subject           | varchar(255) | Tak  | NULL      |                |
| room              | varchar(255) | Tak  | NULL      |                |
| date              | varchar(255) | Tak  | NULL      |                |
| deputy            | varchar(255) | Tak  | NULL      |                |

### Tabela: `slider`

| Nazwa         | Typ          | Null | Domyślnie | Dodatkowe      |
|---------------|--------------|------|-----------|----------------|
| slider_id     | int(11)      | Nie  | Brak      | AUTO_INCREMENT |
| img_slider    | varchar(255) | Tak  | NULL      |                |

### Tabela: `users`

| Nazwa          | Typ           | Null | Domyślnie | Dodatkowe      |
|----------------|---------------|------|-----------|----------------|
| user_id        | int(11)       | Nie  | Brak      | AUTO_INCREMENT |
| admin          | tinyint(1)    | Tak  | false     |                |
| user_name      | varchar(255)  | Tak  | NULL      |     			 |
| user_lastname  | varchar(255)  | Tak  | NULL      |  				 |
| login          | varchar(255)  | Tak  | NULL      |  				 |
| email          | varchar(255)  | Tak  | NULL      |  				 |
| password       | varchar(255)  | Tak  | NULL      |  				 |
| avatar         | varchar(255)  | Tak  | NULL      |  				 |


## Problemy

-   dopisze pózniej

## Licencja

Ten projekt jest objęty licencją MIT. Szczegóły dotyczące licencji znajdują się w pliku [LICENSE](./LICENSE).

Licencja MIT pozwala na dowolne użycie, modyfikację i dystrybucję oprogramowania, pod warunkiem zachowania informacji o autorze i licencji w dostarczonych plikach. Oznacza to, że możesz korzystać z kodu w swoich projektach, zarówno komercyjnych, jak i niekomercyjnych, bez obaw o naruszenie praw autorskich.

Szczegółowe informacje można znaleźć w [MIT License](https://opensource.org/licenses/MIT).





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

[Express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express.js-url]: https://expressjs.com/

[JWT]: https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white
[JWT-url]: https://jwt.io/

[Helmet]: https://img.shields.io/badge/Helmet-000000?style=for-the-badge&logo=npm&logoColor=white
[Helmet-url]: https://helmetjs.github.io/

[MongoDB]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/

[MySQL]: https://img.shields.io/badge/MySQL-00758F?style=for-the-badge&logo=mysql&logoColor=white
[MySQL-url]: https://www.mysql.com/
