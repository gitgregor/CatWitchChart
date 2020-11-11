Feature: Funkcjonalność formularza
Scenario: Użycie pola tekstowego i przycisku do wysłania danych
Given Jestem na stronie testu: endpoint /test1
When Kiedy wpisuję frazę "Gherkin i Cypress w React" w polu tekstowym
And i klikam na przycisk Test button
Then  wtedy poniżej przycisku jest wypisywany tekst: "Gherkin i Cypress w React"