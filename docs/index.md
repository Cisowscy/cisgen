(opis projektu)

**Konspekt Treści: **

[TOC]

## Ustawienia Podstawowe: Serwery, Projekty, Użytkownicy, Repozytoria
![Tekst alt](ustawienia_serwer-projekt-repozytorium.png "CISGEN: Ustawienia Podstawowe: Serwery, Projekty, Użytkownicy, Repozytoria")

### Lokalizacje serwerów danych
Serwer Danych - jest to miejsce przechowywania bazy danych, docelowo baza powinna się mieścić w chmurze aby zapewnić dostęp każdemu uprawnionemu z dowolnego miejsca, dodatkowo można też posiadać lokalną kopię, na dysku, w 1 bazie danych może znajdować się wiele projektów.

### Lista Projektów
Lista Projektów - Wyświetla listę projektów znajdujących się w podanych lokalizacjach, klawisz `+` pozwala utworzyć nowy projekt, należy w oknie hosta wybrać dostępną bazę (z zbioru wskazanych serwerów) oraz podać jej nazwę i opis, nazwę i opis można później edytować w panelu Użytkownicy i Prywatność.

### (Eksport/Import/Transfer Baz Danych i Projektu)
Chcą zapewnić najwyższą kopatybiność i dostępność taki import i eksport będzie w przyszłości opracowany.


### Użytkownicy i Prywatność
Użytkownicy i Prywatność -  w tej sekcji możemy ustawić szczegóły projektu, takie jak: logo; wielojęzyczną nazwę, wielojęzyczny opis, oraz dodać użytkowników projektu i przyznać im dostęp do treści i ustawień.
**Nazwa** i **Opis** posiada strukturę zbliżoną do JSON, aby zapewnić możliwość wielojęzyczności 
```JSON
{ "pl": { "nazwa": "Twoja_Nazwa", "opis": "Twój_Opis" }, "en": { "nazwa": "Your_Name", "opis": "Your_Description" } }
```

### Repozytoria Plików