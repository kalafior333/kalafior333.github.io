const quizPytania = [
    // KATEGORIA: GEOGRAFIA
    {
        id: 1,
        kategoria: "Geografia",
        pytanie: "Jaki jest najwyższy szczyt na świecie?",
        odpowiedzi: ["K2", "Mont Blanc", "Mount Everest", "Aconcagua"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 2,
        kategoria: "Geografia",
        pytanie: "Które z wymienionych państw leży na półkuli południowej?",
        odpowiedzi: ["Kanada", "Rosja", "Brazylia", "Niemcy"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 3,
        kategoria: "Geografia",
        pytanie: "Przez ile stref czasowych rozciąga się Rosja?",
        odpowiedzi: ["9", "11", "13", "7"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 4,
        kategoria: "Geografia",
        pytanie: "Jak nazywa się pustynia, która zajmuje większość północnej Afryki?",
        odpowiedzi: ["Gobi", "Kalahari", "Atakama", "Sahara"],
        poprawnaOdpowiedz: 3
    },
    {
        id: 5,
        kategoria: "Geografia",
        pytanie: "Która rzeka przepływa przez Londyn?",
        odpowiedzi: ["Sekwana", "Dunaj", "Tamiza", "Ren"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 6,
        kategoria: "Geografia",
        pytanie: "Stolicą Australii jest:",
        odpowiedzi: ["Sydney", "Melbourne", "Canberra", "Perth"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 7,
        kategoria: "Geografia",
        pytanie: "Które morze oddziela Europę od Afryki?",
        odpowiedzi: ["Morze Czarne", "Morze Północne", "Morze Śródziemne", "Morze Czerwone"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 8,
        kategoria: "Geografia",
        pytanie: "W którym kraju znajduje się Wielki Mur?",
        odpowiedzi: ["Indie", "Japonia", "Chiny", "Korea Południowa"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 9,
        kategoria: "Geografia",
        pytanie: "Największe jezioro świata pod względem powierzchni to:",
        odpowiedzi: ["Jezioro Górne", "Morze Kaspijskie", "Jezioro Wiktorii", "Jezioro Bajkał"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 10,
        kategoria: "Geografia",
        pytanie: "Który kontynent jest najmniejszy pod względem powierzchni?",
        odpowiedzi: ["Europa", "Australia", "Antarktyda", "Ameryka Południowa"],
        poprawnaOdpowiedz: 1
    },

    // KATEGORIA: HISTORIA
    {
        id: 11,
        kategoria: "Historia",
        pytanie: "W którym roku wybuchła I wojna światowa?",
        odpowiedzi: ["1912", "1914", "1916", "1918"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 12,
        kategoria: "Historia",
        pytanie: "Kto był pierwszym prezydentem Stanów Zjednoczonych?",
        odpowiedzi: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "Benjamin Franklin"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 13,
        kategoria: "Historia",
        pytanie: "W którym roku upadło Cesarstwo Rzymskie na Zachodzie?",
        odpowiedzi: ["395 n.e.", "476 n.e.", "1453 n.e.", "44 p.n.e."],
        poprawnaOdpowiedz: 1
    },
    {
        id: 14,
        kategoria: "Historia",
        pytanie: "Kto odkrył Amerykę w 1492 roku?",
        odpowiedzi: ["Vasco da Gama", "Ferdynand Magellan", "Krzysztof Kolumb", "James Cook"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 15,
        kategoria: "Historia",
        pytanie: "Co oznacza skrót 'PRL' w kontekście historii Polski?",
        odpowiedzi: ["Polski Ruch Ludowy", "Polska Rzeczpospolita Ludowa", "Powszechny Ruch Liberalny", "Polska Rada Ludowa"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 16,
        kategoria: "Historia",
        pytanie: "Rewolucja Francuska rozpoczęła się w roku:",
        odpowiedzi: ["1776", "1789", "1804", "1815"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 17,
        kategoria: "Historia",
        pytanie: "Bitwa pod Grunwaldem miała miejsce w roku:",
        odpowiedzi: ["1333", "1410", "1525", "1683"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 18,
        kategoria: "Historia",
        pytanie: "Kim był Mieszko I?",
        odpowiedzi: ["Pierwszy król Polski", "Legendarny założyciel Krakowa", "Pierwszy władca Polski z dynastii Piastów", "Wielki książę litewski"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 19,
        kategoria: "Historia",
        pytanie: "Które wydarzenie miało miejsce jako ostatnie?",
        odpowiedzi: ["Wynalezienie druku", "Odkrycie Ameryki", "Upadek muru berlińskiego", "Bitwa pod Waterloo"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 20,
        kategoria: "Historia",
        pytanie: "Który z cesarzy rzymskich jako pierwszy przyjął chrześcijaństwo?",
        odpowiedzi: ["Neron", "Dioklecjan", "Konstantyn Wielki", "August"],
        poprawnaOdpowiedz: 2
    },

    // KATEGORIA: NAUKA (FIZYKA I CHEMIA)
    {
        id: 21,
        kategoria: "Nauka",
        pytanie: "Jaka jest jednostka siły w układzie SI?",
        odpowiedzi: ["Wat", "Paskal", "Dżul", "Newton"],
        poprawnaOdpowiedz: 3
    },
    {
        id: 22,
        kategoria: "Nauka",
        pytanie: "Wzór chemiczny na wodę to:",
        odpowiedzi: ["CO2", "O2", "H2O", "NaCl"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 23,
        kategoria: "Nauka",
        pytanie: "Wartość pH neutralnej wody w temperaturze pokojowej wynosi:",
        odpowiedzi: ["0", "7", "14", "10"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 24,
        kategoria: "Nauka",
        pytanie: "Który pierwiastek chemiczny ma symbol Fe?",
        odpowiedzi: ["Fluor", "Żelazo", "Złoto", "Cyna"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 25,
        kategoria: "Nauka",
        pytanie: "Z jaką prędkością rozchodzi się światło w próżni (w przybliżeniu)?",
        odpowiedzi: ["3000 km/s", "300 000 km/s", "1 000 000 km/s", "30 000 km/s"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 26,
        kategoria: "Nauka",
        pytanie: "Jakie ciało niebieskie jest gwiazdą najbliższą Ziemi?",
        odpowiedzi: ["Księżyc", "Mars", "Słońce", "Alfa Centauri"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 27,
        kategoria: "Nauka",
        pytanie: "Co jest podstawową jednostką dziedziczności?",
        odpowiedzi: ["Chromosom", "Komórka", "Gen", "Protein"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 28,
        kategoria: "Nauka",
        pytanie: "Jak nazywa się siła, która utrzymuje nas na powierzchni Ziemi?",
        odpowiedzi: ["Siła odśrodkowa", "Siła magnetyczna", "Grawitacja", "Siła tarcia"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 29,
        kategoria: "Nauka",
        pytanie: "Jakiego gazu jest najwięcej w atmosferze Ziemi?",
        odpowiedzi: ["Tlen", "Dwutlenek węgla", "Azot", "Argon"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 30,
        kategoria: "Nauka",
        pytanie: "Który z poniższych metali jest cieczą w temperaturze pokojowej?",
        odpowiedzi: ["Żelazo", "Aluminium", "Rtęć", "Sód"],
        poprawnaOdpowiedz: 2
    },

    // KATEGORIA: LITERATURA
    {
        id: 31,
        kategoria: "Literatura",
        pytanie: "Kto jest autorem 'Pana Tadeusza'?",
        odpowiedzi: ["Juliusz Słowacki", "Adam Mickiewicz", "Czesław Miłosz", "Henryk Sienkiewicz"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 32,
        kategoria: "Literatura",
        pytanie: "Imię głównego bohatera powieści 'Zbrodnia i kara' to:",
        odpowiedzi: ["Iwan Karamazow", "Lew Myszkin", "Rodion Raskolnikow", "Andrzej Bołkoński"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 33,
        kategoria: "Literatura",
        pytanie: "Kto napisał dramat 'Romeo i Julia'?",
        odpowiedzi: ["George Orwell", "William Shakespeare", "Charles Dickens", "Johann Wolfgang von Goethe"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 34,
        kategoria: "Literatura",
        pytanie: "Książka o przygodach małego czarodzieja z blizną na czole to:",
        odpowiedzi: ["Hobbit", "Władca Pierścieni", "Harry Potter", "Opowieści z Narnii"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 35,
        kategoria: "Literatura",
        pytanie: "Która polska pisarka otrzymała Nagrodę Nobla w 1996 roku?",
        odpowiedzi: ["Maria Konopnicka", "Olga Tokarczuk", "Wisława Szymborska", "Eliza Orzeszkowa"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 36,
        kategoria: "Literatura",
        pytanie: "Jak nazywa się fikcyjna kraina, w której dzieje się akcja 'Władcy Pierścieni'?",
        odpowiedzi: ["Narnia", "Śródziemie", "Westeros", "Kraina Czarów"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 37,
        kategoria: "Literatura",
        pytanie: "Kto jest autorem wiersza 'Poezja'?",
        odpowiedzi: ["Leśmian", "Norwid", "Tuwim", "Szymborska"],
        poprawnaOdpowiedz: 3
    },
    {
        id: 38,
        kategoria: "Literatura",
        pytanie: "Jaki tytuł nosi najsłynniejsza powieść George'a Orwella, opisująca totalitarną wizję przyszłości?",
        odpowiedzi: ["Folwark zwierzęcy", "Rok 1984", "Hołd Katalonii", "Wiwat Aspidistra"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 39,
        kategoria: "Literatura",
        pytanie: "Kim z zawodu był Sherlock Holmes?",
        odpowiedzi: ["Pisarz", "Detektyw", "Lekarz", "Aktor"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 40,
        kategoria: "Literatura",
        pytanie: "Pierwsza część trylogii Henryka Sienkiewicza to:",
        odpowiedzi: ["Potop", "Pan Wołodyjowski", "Ogniem i mieczem", "Krzyżacy"],
        poprawnaOdpowiedz: 2
    },

    // KATEGORIA: SZTUKA I KULTURA
    {
        id: 41,
        kategoria: "Sztuka",
        pytanie: "Kto namalował 'Mona Lisę'?",
        odpowiedzi: ["Michał Anioł", "Leonardo da Vinci", "Rafael Santi", "Vincent van Gogh"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 42,
        kategoria: "Sztuka",
        pytanie: "Który z kompozytorów jest autorem 'Ody do radości'?",
        odpowiedzi: ["Wolfgang Amadeusz Mozart", "Ludwig van Beethoven", "Fryderyk Chopin", "Johann Sebastian Bach"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 43,
        kategoria: "Sztuka",
        pytanie: "Czym jest 'fresk'?",
        odpowiedzi: ["Rodzaj rzeźby", "Technika malarstwa ściennego", "Utwór muzyczny", "Rodzaj poezji"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 44,
        kategoria: "Sztuka",
        pytanie: "W którym mieście znajduje się słynna Opera Wiedeńska?",
        odpowiedzi: ["Berlin", "Wiedeń", "Paryż", "Mediolan"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 45,
        kategoria: "Sztuka",
        pytanie: "Co oznacza włoskie słowo 'piano' w muzyce?",
        odpowiedzi: ["Głośno", "Wolno", "Cicho", "Szybko"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 46,
        kategoria: "Sztuka",
        pytanie: "Kim był Witold Gombrowicz?",
        odpowiedzi: ["Malarz", "Kompozytor", "Pisarz", "Reżyser filmowy"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 47,
        kategoria: "Sztuka",
        pytanie: "Jak nazywa się film, który w 1997 roku zdobył 11 Oscarów i opowiada o katastrofie statku?",
        odpowiedzi: ["Avatar", "Titanic", "Ben-Hur", "Władca Pierścieni: Powrót Króla"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 48,
        kategoria: "Sztuka",
        pytanie: "Gdzie znajduje się słynna wieża Eiffla?",
        odpowiedzi: ["Rzym", "Madryt", "Paryż", "Londyn"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 49,
        kategoria: "Sztuka",
        pytanie: "Kto jest twórcą 'Stworzenia Adama' na sklepieniu Kaplicy Sykstyńskiej?",
        odpowiedzi: ["Donatello", "Botticelli", "Michał Anioł", "Tycjan"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 50,
        kategoria: "Sztuka",
        pytanie: "Jaka jest najpopularniejsza forma zapisu nutowego w muzyce zachodniej?",
        odpowiedzi: ["Tabulatura", "Neumy", "System pięciolinii", "Klucz wiolinowy"],
        poprawnaOdpowiedz: 2
    },

    // KATEGORIA: SPORT
    {
        id: 51,
        kategoria: "Sport",
        pytanie: "Ile zawodników liczy drużyna piłkarska na boisku?",
        odpowiedzi: ["10", "11", "12", "9"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 52,
        kategoria: "Sport",
        pytanie: "Co ile lat odbywają się letnie Igrzyska Olimpijskie?",
        odpowiedzi: ["2 lata", "3 lata", "4 lata", "5 lat"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 53,
        kategoria: "Sport",
        pytanie: "Jaki sport jest często nazywany 'królową sportu'?",
        odpowiedzi: ["Pływanie", "Gimnastyka", "Lekkoatletyka", "Piłka nożna"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 54,
        kategoria: "Sport",
        pytanie: "Z jakiego kraju pochodzi tenisista Roger Federer?",
        odpowiedzi: ["Hiszpania", "Szwajcaria", "Serbia", "USA"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 55,
        kategoria: "Sport",
        pytanie: "Jak nazywa się polski skoczek narciarski, trzykrotny mistrz olimpijski?",
        odpowiedzi: ["Piotr Żyła", "Kamil Stoch", "Adam Małysz", "Dawid Kubacki"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 56,
        kategoria: "Sport",
        pytanie: "Ile rund standardowo trwa walka bokserska o mistrzostwo świata?",
        odpowiedzi: ["10", "12", "15", "8"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 57,
        kategoria: "Sport",
        pytanie: "W którym sporcie używa się 'home run'?",
        odpowiedzi: ["Koszykówka", "Baseball", "Hokej", "Rugby"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 58,
        kategoria: "Sport",
        pytanie: "Które miasto było gospodarzem letnich Igrzysk Olimpijskich w 2016 roku?",
        odpowiedzi: ["Londyn", "Pekin", "Rio de Janeiro", "Tokio"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 59,
        kategoria: "Sport",
        pytanie: "Czym jest 'par' w golfie?",
        odpowiedzi: ["Nazwisko zawodnika", "Liczba uderzeń na dołek", "Nazwa kijów", "Rodzaj pola"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 60,
        kategoria: "Sport",
        pytanie: "Jaki kolor ma flaga oznaczająca w Formule 1 koniec wyścigu?",
        odpowiedzi: ["Czerwony", "Żółty", "Czarno-biała w szachownicę", "Zielony"],
        poprawnaOdpowiedz: 2
    },

    // KATEGORIA: Biologia
    {
        id: 61,
        kategoria: "Biologia",
        pytanie: "Który z poniższych narządów produkuje insulinę?",
        odpowiedzi: ["Wątroba", "Śledziona", "Trzustka", "Nerka"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 62,
        kategoria: "Biologia",
        pytanie: "Ile chromosomów znajduje się w typowej komórce somatycznej człowieka?",
        odpowiedzi: ["23", "46", "48", "92"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 63,
        kategoria: "Biologia",
        pytanie: "Jaka jest rola hemoglobiny we krwi?",
        odpowiedzi: ["Transport dwutlenku węgla", "Krzepnięcie krwi", "Transport tlenu", "Obrona przed infekcjami"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 64,
        kategoria: "Biologia",
        pytanie: "Jak nazywa się proces, w którym rośliny wytwarzają pokarm za pomocą światła?",
        odpowiedzi: ["Oddychanie", "Transpiracja", "Fotosynteza", "Fermentacja"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 65,
        kategoria: "Biologia",
        pytanie: "Podstawową jednostką budulcową białek jest:",
        odpowiedzi: ["Glukoza", "Kwas tłuszczowy", "Aminokwas", "Nukleotyd"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 66,
        kategoria: "Biologia",
        pytanie: "Jak nazywa się proces utrzymania stałych warunków wewnętrznych organizmu?",
        odpowiedzi: ["Adaptacja", "Metabolizm", "Homeostaza", "Rekurencja"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 67,
        kategoria: "Biologia",
        pytanie: "Która z wymienionych witamin jest wytwarzana w skórze pod wpływem światła słonecznego?",
        odpowiedzi: ["Witamina C", "Witamina D", "Witamina A", "Witamina K"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 68,
        kategoria: "Biologia",
        pytanie: "Największa kość w ludzkim ciele to:",
        odpowiedzi: ["Strzemiączko", "Kość ramienna", "Kość udowa", "Miednica"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 69,
        kategoria: "Biologia",
        pytanie: "Czym zajmuje się kardiologia?",
        odpowiedzi: ["Chorobami mózgu", "Chorobami serca", "Chorobami nerek", "Chorobami skóry"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 70,
        kategoria: "Biologia",
        pytanie: "DNA ma kształt:",
        odpowiedzi: ["Pojedynczej nici", "Podwójnej helisy", "Pierścienia", "Kwadratu"],
        poprawnaOdpowiedz: 1
    },
    // KATEGORIA: Matematyka
    {
        id: 71,
        kategoria: "Matematyka",
        pytanie: "Która z poniższych liczb należy do zbioru liczb niewymiernych?",
        odpowiedzi: ["1/2", "0,25", "√2", "3"],
        poprawnaOdpowiedz: 2
},
{
        id: 72,
        kategoria: "Matematyka",
        pytanie: "Jak nazywa się wielokąt, który ma wszystkie boki i kąty równe?",
        odpowiedzi: ["Równoległobok", "Wielokąt foremny", "Trapez", "Deltoid"],
        poprawnaOdpowiedz: 1
},
{
        id: 73,
        kategoria: "Matematyka",
        pytanie: "Który zbiór liczb zawiera liczby naturalne, całkowite i wymierne?",
        odpowiedzi: ["Liczby rzeczywiste", "Liczby zespolone", "Liczby pierwsze", "Liczby niewymierne"],
        poprawnaOdpowiedz: 0
},
{
        id: 74,
        kategoria: "Matematyka",
        pytanie: "Jak nazywa się punkt, w którym wykres funkcji przecina oś OY?",
        odpowiedzi: ["Miejsce zerowe","Wartość maksymalna","Punkt przecięcia z osią OY","Wierzchołek funkcji"],
        poprawnaOdpowiedz: 2
},
{
        id: 75,
        kategoria: "Matematyka",
        pytanie: "Która z poniższych figur NIE jest wielokątem?",
        odpowiedzi: ["Trójkąt", "Koło", "Pięciokąt", "Sześciokąt"],
        poprawnaOdpowiedz: 1
},
{
        id: 76,
        kategoria: "Matematyka",
        pytanie: "Jak nazywa się liczba, która dzieli inną bez reszty?",
        odpowiedzi: ["Dzielnik", "Iloczyn", "Pierwiastek", "Wykładnik"],
        poprawnaOdpowiedz: 0
},
{
        id: 77,
        kategoria: "Matematyka",
        pytanie: "Jak nazywa się zbiór wszystkich argumentów, dla których funkcja jest określona?",
        odpowiedzi: ["Zbiór wartości", "Dziedzina", "Przeciwdziedzina", "Obraz funkcji"],
        poprawnaOdpowiedz: 1
},
{
        id: 78,
        kategoria: "Matematyka",
        pytanie: "Które z poniższych twierdzeń dotyczy trójkąta prostokątnego?",
        odpowiedzi: ["Twierdzenie Talesa","Twierdzenie Pitagorasa","Twierdzenie Fermata","Twierdzenie Euklidesa"],
        poprawnaOdpowiedz: 1
},
{
        id: 79,
        kategoria: "Matematyka",
        pytanie: "Jak nazywa się liczba stojąca przy niewiadomej w wyrażeniu algebraicznym?",
        odpowiedzi: ["Wykładnik", "Współczynnik", "Stała", "Parametr"],
        poprawnaOdpowiedz: 1
},
{
        id: 80,
        kategoria: "Matematyka",
        pytanie: "Jak nazywa się trójkąt, który ma wszystkie boki równej długości?",
        odpowiedzi: ["Równoramienny", "Równoboczny", "Prostokątny", "Rozwartokątny"],
        poprawnaOdpowiedz: 1
},
    // KATEGORIA: EKONOMIA
    {
        id: 81,
        kategoria: "Ekonomia",
        pytanie: "Co oznacza skrót 'PKB'?",
        odpowiedzi: ["Powszechny Kurs Bankowy", "Pieniężny Kapitał Budżetowy", "Produkt Krajowy Brutto", "Podstawowy Koszyk Bezpieczeństwa"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 82,
        kategoria: "Ekonomia",
        pytanie: "Co jest podstawowym narzędziem walki z inflacją, którym posługuje się bank centralny?",
        odpowiedzi: ["Obniżanie podatków", "Regulowanie cen paliw", "Zmiana stóp procentowych", "Zwiększanie deficytu budżetowego"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 83,
        kategoria: "Ekonomia",
        pytanie: "Giełda papierów wartościowych w Warszawie to w skrócie:",
        odpowiedzi: ["NBP", "GPW", "KNF", "ZUS"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 84,
        kategoria: "Ekonomia",
        pytanie: "Co to jest 'deflacja'?",
        odpowiedzi: ["Wzrost cen", "Spadek cen", "Stałe ceny", "Wzrost bezrobocia"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 85,
        kategoria: "Ekonomia",
        pytanie: "Która instytucja w Polsce jest odpowiedzialna za emisję pieniądza?",
        odpowiedzi: ["Ministerstwo Finansów", "Narodowy Bank Polski", "Polska Agencja Prasowa", "Giełda Papierów Wartościowych"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 86,
        kategoria: "Ekonomia",
        pytanie: "Co mierzy wskaźnik 'stopa bezrobocia'?",
        odpowiedzi: ["Liczbę osób pracujących", "Odsetek ludności aktywnej zawodowo nie mającej pracy", "Średnią wysokość zarobków", "Wzrost gospodarczy"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 87,
        kategoria: "Ekonomia",
        pytanie: "Kiedy popyt na dane dobro rośnie, a podaż pozostaje stała, cena tego dobra zazwyczaj:",
        odpowiedzi: ["Spada", "Nie zmienia się", "Rośnie", "Maleje bardzo gwałtownie"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 88,
        kategoria: "Ekonomia",
        pytanie: "Co oznacza pojęcie 'obligacja'?",
        odpowiedzi: ["Udział w spółce", "Certyfikat depozytowy", "Papier wartościowy poświadczający dług", "Instrument pochodny"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 89,
        kategoria: "Ekonomia",
        pytanie: "Co to jest 'VAT'?",
        odpowiedzi: ["Podatek od dochodów osobistych", "Podatek od wartości dodanej", "Podatek od nieruchomości", "Podatek akcyzowy"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 90,
        kategoria: "Ekonomia",
        pytanie: "Jaki jest główny cel polityki monetarnej Banku Centralnego?",
        odpowiedzi: ["Osiągnięcie pełnego zatrudnienia", "Zapewnienie stabilności cen", "Zwiększenie eksportu", "Wspieranie małych firm"],
        poprawnaOdpowiedz: 1
    },

    // KATEGORIA: TECHNOLOGIA I INFORMATYKA
    {
        id: 91,
        kategoria: "Technologia",
        pytanie: "Jaki skrót oznacza pamięć krótkotrwałą komputera?",
        odpowiedzi: ["CPU", "ROM", "RAM", "SSD"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 92,
        kategoria: "Technologia",
        pytanie: "Twórca firmy Microsoft to:",
        odpowiedzi: ["Steve Jobs", "Jeff Bezos", "Bill Gates", "Mark Zuckerberg"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 93,
        kategoria: "Technologia ",
        pytanie: "Czym jest 'algorytm'?",
        odpowiedzi: ["Język programowania", "Program komputerowy", "Sekwencja kroków do rozwiązania problemu", "Rodzaj wirusa komputerowego"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 94,
        kategoria: "Technologia",
        pytanie: "Jaka firma stworzyła system operacyjny Android?",
        odpowiedzi: ["Apple", "Samsung", "Google", "Microsoft"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 95,
        kategoria: "Technologia",
        pytanie: "Co oznacza skrót 'HTML'?",
        odpowiedzi: ["High-Tech Modern Language", "Hyper Text Markup Language", "Hyperlink and Text Management Language", "Hardware Technology Modeling Language"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 96,
        kategoria: "Technologia",
        pytanie: "Najpopularniejsza kryptowaluta to:",
        odpowiedzi: ["Ethereum", "Litecoin", "Bitcoin", "Dogecoin"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 97,
        kategoria: "Technologia",
        pytanie: "Czym jest 'Firewall' w kontekście bezpieczeństwa sieci?",
        odpowiedzi: ["Program antywirusowy", "Zapora sieciowa", "Protokół przesyłania danych", "Szyfrowanie plików"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 98,
        kategoria: "Technologia",
        pytanie: "Jak nazywa się nauka o tworzeniu maszyn, które naśladują ludzką inteligencję?",
        odpowiedzi: ["Robotyka", "Inżynieria genetyczna", "Sztuczna Inteligencja", "Big Data"],
        poprawnaOdpowiedz: 2
    },
    {
        id: 99,
        kategoria: "Technologia",
        pytanie: "Pierwsza strona internetowa została stworzona w:",
        odpowiedzi: ["1989", "1991", "1995", "2000"],
        poprawnaOdpowiedz: 1
    },
    {
        id: 100,
        kategoria: "Technologia",
        pytanie: "Czym jest 'pixel'?",
        odpowiedzi: ["Jednostka pamięci", "Najmniejszy element obrazu cyfrowego", "Rodzaj procesora", "Wirus komputerowy"],
        poprawnaOdpowiedz: 1
    }
];
let nrPytania = 0;
let indeks =0;
let poprawnaOdp = 0;
let pytanie =0;
let odpowiedzZablokowana = false;
let poprawne;
let liczbaPytan;
let procent;
let kontrola=0;
function procenty() {
    poprawne = parseInt(localStorage.getItem("poprawne"), 10) || 0;
    liczbaPytan = parseInt(localStorage.getItem("liczbaPytan"), 10) || 0;
    if (liczbaPytan>0) {
    procent = poprawne/liczbaPytan;
    procent=procent*100;
    procent=Math.round(procent);
    document.getElementById("procent").innerHTML = "Procent poprawnych odpowiedzi: "+procent+"%";
    }
}
function pierwszePytanie() {
procenty();
losowanie();
indeks = nrPytania - 1; 
pytanie = quizPytania[indeks];
document.getElementById("pytanie").innerHTML = pytanie.pytanie;
document.getElementById("0").innerHTML = pytanie.odpowiedzi[0];
document.getElementById("1").innerHTML = pytanie.odpowiedzi[1];
document.getElementById("2").innerHTML = pytanie.odpowiedzi[2];
document.getElementById("3").innerHTML = pytanie.odpowiedzi[3];
document.getElementById("numer_pytania").innerHTML = "ID:"+pytanie.id;
document.getElementById("kategoria").innerHTML = "Kategoria: "+pytanie.kategoria;
odpowiedzZablokowana = false;
}
function nastepnePytanie() {
if (kontrola==1) {
pierwszePytanie();
kontrola=0;
}
else {
    return 0;
}
}
function losowanie() {
nrPytania = Math.floor(Math.random()*100)+1;
}
document.querySelectorAll(".odp").forEach(el => {
    el.addEventListener("click", event => {
        zaznaczenieOdp(event.currentTarget.id);
    });
});
function zaznaczenieOdp(id) {
     if (odpowiedzZablokowana) return;
    console.log("dziala");
     odpowiedzZablokowana = true;
    let idOdp = parseInt(id, 10);
    poprawnaOdp = pytanie.poprawnaOdpowiedz;
    if (idOdp===poprawnaOdp) {
        document.getElementById("pytanie").innerHTML = "Poprawna odpowiedź!";
        poprawne = parseInt(localStorage.getItem("poprawne"), 10) || 0;
        poprawne++;
        localStorage.setItem("poprawne", poprawne);
        liczbaPytan = parseInt(localStorage.getItem("liczbaPytan"), 10) || 0;
        liczbaPytan++;
        localStorage.setItem("liczbaPytan", liczbaPytan);
    }
    else {
        document.getElementById("pytanie").innerHTML = "Niepoprawna odpowiedź!";
        liczbaPytan = parseInt(localStorage.getItem("liczbaPytan"), 10) || 0;
        liczbaPytan++;
        localStorage.setItem("liczbaPytan", liczbaPytan);
    }
    procenty();
    kontrola=1;
}
