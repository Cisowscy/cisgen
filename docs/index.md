(opis projektu)

[TOC]

## Ustawienia Podstawowe: Serwery, Projekty, Użytkownicy, Repozytoria
![Tekst alt](ustawienia_serwer-projekt-repozytorium.png "CISGEN: Ustawienia Podstawowe: Serwery, Projekty, Użytkownicy, Repozytoria")

### Lokalizacje serwerów danych
Serwer Danych - jest to miejsce przechowywania bazy danych, docelowo baza powinna się mieścić w chmurze aby zapewnić dostęp każdemu uprawnionemu z dowolnego miejsca, dodatkowo można też posiadać lokalną kopię, na dysku, w 1 bazie danych może znajdować się wiele projektów.

### Lista Projektów
Lista Projektów - Wyświetla listę projektów znajdujących się w podanych lokalizacjach, klawisz `+` pozwala utworzyć nowy projekt, należy w oknie hosta wybrać dostępną bazę (z zbioru wskazanych serwerów) oraz podać jej nazwę i opis, nazwę i opis można później edytować w panelu Użytkownicy i Prywatność.


### Użytkownicy i Prywatność
Użytkownicy i Prywatność -  w tej sekcji możemy ustawić szczegóły projektu, takie jak: logo; wielojęzyczną nazwę, wielojęzyczny opis, oraz dodać użytkowników projektu i przyznać im dostęp do treści i ustawień. Wskazanym jest dodadnie logo projektu.
#### Nazwa i Opis(edycja)
```JSON
{ "pl": { "nazwa": "Twoja_Nazwa", "opis": "Twój_Opis" }, 
  "en": { "nazwa": "Your_Name", "opis": "Your_Description" } }
```
#### Użytkownicy
Każdy nowo utworzony projekt posiada 2 sztywno utworzonych urzytkowników:
- rola: **root**; zezwolenia: **#całość**;
- rola: **gość**; zezwolenia: **#jawne**;
na wstępie powinno się podać rootowi, nazwę, e-mail, hasło, i telefon; dodatkowa można także (niezalecane) wyłączyć gościa; koperta w polu akcji, wysyła na podanego email-a, dane logowania do projektu, istnieje także możliwość dodania dodatkowych użytkowników.

#### ustawienia prywatności i zezwoleń
Niemalże każdy kto kiedykolwiek kożystał z internetowych mechanizmó do budowy drzewa np. MyHeritage, pluł sobie w brodę, rozważając 4 opcje
- prywatne drzewo z możliwością edycji przez każdego z użytkownika **(minusy: nikt bez zalogowania nic nie widzi; inny użytkownik może niechcący usunąc istotne informacje, lub dodać już istniejące po raz kolejny)**
- prywatne drzewo z możliwością edycji przez administratora **(minusy: nikt bez zalogowania nic nie widzi; mniejsze zainteresowanie drzewem z powodu braku możliwości wpływania na treść)**
- publiczne drzewo z możliwością edycji przez każdego z użytkownika **(minusy: każdy może zobaczyć wszytkie zdjęcia i informacje o wszystkich osobach zmarłych; inny użytkownik może niechcący usunąc istotne informacje, lub dodać już istniejące po raz kolejny)**
- publiczne drzewo z możliwością edycji przez administratora **(minusy: każdy może zobaczyć wszytkie zdjęcia i informacje o wszystkich osobach zmarłych; mniejsze zainteresowanie drzewem z powodu braku możliwości wpływania na treść)**

Żadna z powyższych opcji mi nie odpowiada, prponuję zupełnie inny model:

##### Role:
- **root** z dostępem do ustawień projektu: dodawania użytkowników, i innych ustawień
- **administrtor** dostęp do ustawień zezwoleń, i edycji treści
- **redaktor** osoba z dostępem do edycji treści; oraz mająca dostęp do wybranych nie publicznych treści.
- **korespondent** osoba mogąca pozornie edytowoć treść, poprzez dodawanie treści i zgłaszanie korekt, które musi zatwierdzić administrator; oraz mająca dostęp do wybranych nie publicznych treści.
- **widz** osoba mająca dostęp do wybranych nie publicznych treści.
- **gość** osoba nie zalogowana z dostępem tylko do jawnych treści.
na wstępie powinno się podać rootowi, nazwę, e-mail, hasło, i telefon; dodatkowa można także (niezalecane) wyłączyć gościa; koperta w polu akcji, wysyła na podanego email-a, dane logowania do projektu, istnieje także możliwość dodania dodatkowych użytkowników.

##### Zezwolenia:
Dodatkowo każdy z użytkowniów oprócz Roota i Gościa, może zawierać dowolną ilość tagów zezwoleń (atoryzacji) dodtępu do wybranych treści, dzięki temu mogę szczegółuwo kontrolować kto do jakich części ma dostęp, tagi prywatności, można dodawać bezpośrednio z poziomu edycji treści, lub z poziomu ustawień, tworząc nowy tag, i przypisywując do niego (za pomocą przeciągnięcia elementy) oraz określając funkcje **zezwól dostęp do** lub **zabroń dostępu do**.


### Repozytoria Plików
Treść choćby była najlepiej opracowana i zredagowana, zawsze pozostanie suchą treścią, chcąc ją ubogacić niezbędne są skany źródłowych dokumentów historycznych, grafiki, zdjęcia, etc., wszystkie te elementy zajmują dużo miejsca, z drugiej jednak strony warto posiadać kopię (bezpieczeństwa), rozmaitych dokumentów. Stąd mój model plików zewnetrznych - model plików zewnęrznych (repozytoriów):

> - **Utworzenie Repozytorium** polega na utworzeniu wewnątrz bazy dnych w katalogu repozytoiów folderu o losowym niepowtarzalnym ID a w nim pliku **`CISGEN-REPOZYTORIUM.JSON`** po utworzeniu pustego pliku możemy edytować jego szczegóły, aby repozytorium prawidłowo było kategoryzowane w spisie repozytoriów; Oto Przykład:
> ```JSON
> {
>     "repozytorium": {
>         "id": 002345013042,
>         "prawa": "CC-BY-SA-ND",
>         "nazwa": [{
>             "jezk": "pl",
>             "nazwa": "Twoja Nazwa"
>         }, {
>             "jezk": "en",
>             "nazwa": "Your Name"
>         }],
>         "tagi": [{
>             "id": 03456730243,
>         }, {
>             "nazwa": [{
>                 "jezk": "pl",
>                 "nazwa": "nazwa grupy 1"
>             }, {
>                 "jezk": "en",
>                 "nazwa": "name group 1"
>             }]
>         }, {
>             "id": 03454730243,
>         }, {
>             "nazwa": [{
>                 "jezk": "pl",
>                 "nazwa": "nazwa grupy 2"
>             }, {
>                 "jezk": "en",
>                 "nazwa": "name group 2"
>             }]
>         }]
>     },
>     "elementy": [{ }]
> }
```
> 
> - **Dodawanie elementów do Repozytorium** ...i tu sprawa jest troszkę, pozornie, bardziej skąplikowana, ale to tylko dlatego by docelowo usprawnić dodawanie tylko i wyłącznie chcianych elementów, ktoś powie przecież możesz zaznaczyć te które chcesz dodać.. tak 5, 10, 15, tak, ale nie jak dodajemy 1000 elementów z zbioru posiadającego 5000 pozycji :/ 
>  - W pierwszej kolejności należy zbudować lokalną tymczasową tablicę z wszystkich elementów jakie chcemy dodać do repozytorium 
> 