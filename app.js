
// Socks of Destiny - Full build (wheel + turns + dice + steal trivia)
// NOTE: This is a simplified "works-first" full version built on the stable wheel baseline.

const DEFAULT_PLAYERS = ["Mike", "Emma", "Charlotte", "Harriet", "Callum", "Ethan", "Alina", "Isobelle", "Ben", "Tyler", "Chloe", "Keira", "Dan", "Kelly", "Fiona", "Nick", "Joe", "Jamie", "Abby"];
const SOCK_PHRASES = ["Choose your socks like you\u2019re defusing a bomb.", "Select your socks. Regret will follow shortly.", "Pick a pair. Lie to everyone about how good they are.", "Choose wisely. Or don\u2019t. This is Christmas.", "Pick your socks. Pretend it was always your plan.", "Choose a pair and act confident. Nobody can tell.", "Grab your socks. Smile like you didn\u2019t just choose chaos.", "Pick a pair. You\u2019re one step closer to betrayal.", "Choose socks. Hide your emotions. Weaponise your face.", "Select your pair. The table is judging you already.", "Pick socks. Commit. And remember: no refunds.", "Choose a pair. Your dignity is on layaway.", "Pick your socks. Then act like they\u2019re designer.", "Choose a pair. This is the start of your villain arc.", "Pick socks. Christmas spirit, but make it feral.", "Choose your socks like you\u2019re auditioning for drama.", "Pick a pair. Whisper \u201cworth it\u201d to yourself.", "Choose socks. You\u2019re basically gambling with fabric.", "Pick a pair. Keep eye contact. Assert dominance.", "Choose socks. The fate of the spot prizes *may* be inside."];
const NEXT_CONTENDER = ["Tap to summon the next contender.", "Tap to unleash the next victim.", "Tap for the next brave soul.", "Tap to rotate the chaos.", "Tap to pick who suffers next.", "Tap to roll the next human into the arena.", "Tap to continue the nonsense.", "Tap to nominate the next legend.", "Tap to drag another name into the spotlight.", "Tap to feed the wheel another sacrifice.", "Tap to pick the next sock goblin.", "Tap for the next contestant. May the odds be rude.", "Tap to send someone else into the storm.", "Tap to proceed. Apologies in advance.", "Tap to continue. Christmas is cancelled anyway.", "Tap to call the next one up.", "Tap to pick who\u2019s about to get stitched up.", "Tap for the next turn. No whining.", "Tap to choose the next contender. Try not to laugh.", "Tap to continue. Somebody\u2019s about to get robbed."];
const TURN_PHRASES = ["The Dice Decides. Step up.", "Time to roll. Consequences pending.", "Roll the dice. Choose violence.", "Your turn. Try not to embarrass the family.", "Roll it. Let fate do the dirty work.", "Roll the dice. Pretend you\u2019re innocent.", "Your move. The socks are watching.", "Roll up. Betray someone politely.", "Roll the dice. No takesies-backsies.", "Your turn. May your poker face survive.", "Roll it. Christmas spirit is optional.", "Roll the dice. Chaos is mandatory.", "Step up. The dice wants drama.", "Roll. Then act shocked at the result.", "Your turn. The table demands entertainment.", "Roll the dice. Be someone\u2019s origin story.", "Roll it. Fabric-based warfare begins.", "Your turn. Don\u2019t be nice.", "Roll the dice. Make it iconic.", "Roll it. May your socks be\u2026 suspicious."];
const ADULT_TRIVIA = [{"q": "What’s the capital of Australia?", "choices": ["Canberra", "Sydney", "Melbourne", "Perth"], "a": 0}, {"q": "Which element has the symbol Fe?", "choices": ["Iron", "Fluorine", "Lead", "Silver"], "a": 0}, {"q": "Which ocean is off the east coast of the USA?", "choices": ["Atlantic", "Pacific", "Indian", "Arctic"], "a": 0}, {"q": "What does HTTP stand for?", "choices": ["HyperText Transfer Protocol", "High Transfer Text Program", "Host Transfer Text Process", "Hyper Terminal Trace Path"], "a": 0}, {"q": "Which metal is liquid at room temperature?", "choices": ["Mercury", "Aluminium", "Copper", "Zinc"], "a": 0}, {"q": "Who wrote 1984?", "choices": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.K. Rowling"], "a": 0}, {"q": "What’s the universal donor (red cells)?", "choices": ["O negative", "AB positive", "A positive", "B negative"], "a": 0}, {"q": "Capital of Canada?", "choices": ["Ottawa", "Toronto", "Vancouver", "Montreal"], "a": 0}, {"q": "Smallest prime number?", "choices": ["2", "1", "3", "5"], "a": 0}, {"q": "Main gas in Earth’s atmosphere?", "choices": ["Nitrogen", "Oxygen", "CO2", "Hydrogen"], "a": 0}, {"q": "Which planet is known as the Red Planet?", "choices": ["Mars", "Venus", "Jupiter", "Mercury"], "a": 0}, {"q": "How many bones are in the adult human body (approx.)?", "choices": ["206", "180", "250", "300"], "a": 0}, {"q": "What’s the largest organ in the human body?", "choices": ["Skin", "Liver", "Heart", "Brain"], "a": 0}, {"q": "Which country gifted the Statue of Liberty to the USA?", "choices": ["France", "UK", "Spain", "Italy"], "a": 0}, {"q": "What is the chemical formula for water?", "choices": ["H2O", "CO2", "NaCl", "O2"], "a": 0}, {"q": "Which language has the most native speakers?", "choices": ["Mandarin Chinese", "English", "Spanish", "Hindi"], "a": 0}, {"q": "In computing, what does “CPU” stand for?", "choices": ["Central Processing Unit", "Computer Power Unit", "Core Processing Utility", "Control Program Unit"], "a": 0}, {"q": "Which continent is the Sahara Desert on?", "choices": ["Africa", "Asia", "Australia", "South America"], "a": 0}, {"q": "Which year did the Titanic sink?", "choices": ["1912", "1902", "1922", "1898"], "a": 0}, {"q": "What is the hardest natural substance?", "choices": ["Diamond", "Gold", "Quartz", "Iron"], "a": 0}, {"q": "Which gas do plants absorb from the atmosphere?", "choices": ["Carbon dioxide", "Oxygen", "Nitrogen", "Helium"], "a": 0}, {"q": "What’s the capital of Japan?", "choices": ["Tokyo", "Osaka", "Kyoto", "Sapporo"], "a": 0}, {"q": "Who painted the Mona Lisa?", "choices": ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"], "a": 0}, {"q": "Which is the smallest planet in our solar system?", "choices": ["Mercury", "Mars", "Venus", "Pluto"], "a": 0}, {"q": "How many minutes are in a day?", "choices": ["1440", "1240", "1640", "1040"], "a": 0}, {"q": "What is the square root of 64?", "choices": ["8", "6", "7", "9"], "a": 0}, {"q": "Which country is famous for the tulip?", "choices": ["Netherlands", "Belgium", "Denmark", "Austria"], "a": 0}, {"q": "What’s the currency of Japan?", "choices": ["Yen", "Won", "Yuan", "Dollar"], "a": 0}, {"q": "What’s the capital of Scotland?", "choices": ["Edinburgh", "Glasgow", "Aberdeen", "Inverness"], "a": 0}, {"q": "What does “DNA” stand for?", "choices": ["Deoxyribonucleic acid", "Dinucleic acid", "Dual nitrogen acid", "Deoxy nitrogen array"], "a": 0}, {"q": "Which blood type is known as the universal recipient?", "choices": ["AB positive", "O negative", "A negative", "B positive"], "a": 0}, {"q": "Which instrument has 88 keys?", "choices": ["Piano", "Guitar", "Violin", "Saxophone"], "a": 0}, {"q": "What is the tallest mountain in the world (above sea level)?", "choices": ["Mount Everest", "K2", "Kangchenjunga", "Makalu"], "a": 0}, {"q": "Which planet has the most moons (currently known)?", "choices": ["Saturn", "Jupiter", "Uranus", "Neptune"], "a": 0}, {"q": "What’s the largest mammal?", "choices": ["Blue whale", "Elephant", "Giraffe", "Hippo"], "a": 0}, {"q": "In which city is the Colosseum?", "choices": ["Rome", "Athens", "Istanbul", "Paris"], "a": 0}, {"q": "Which country is home to Machu Picchu?", "choices": ["Peru", "Mexico", "Chile", "Bolivia"], "a": 0}, {"q": "What’s the chemical symbol for gold?", "choices": ["Au", "Ag", "Gd", "Go"], "a": 0}, {"q": "Which sea separates Saudi Arabia and Africa?", "choices": ["Red Sea", "Black Sea", "Mediterranean Sea", "Arabian Sea"], "a": 0}, {"q": "How many players are on a football (soccer) team on the pitch?", "choices": ["11", "10", "9", "12"], "a": 0}, {"q": "Which is the longest river in the world (commonly cited)?", "choices": ["Nile", "Amazon", "Yangtze", "Mississippi"], "a": 0}, {"q": "What’s the capital of New Zealand?", "choices": ["Wellington", "Auckland", "Christchurch", "Dunedin"], "a": 0}, {"q": "Which country’s flag is the only one with a dragon on it?", "choices": ["Bhutan", "Wales", "China", "Vietnam"], "a": 0}, {"q": "What is the boiling point of water at sea level (°C)?", "choices": ["100", "90", "80", "120"], "a": 0}, {"q": "Which scientist proposed the theory of relativity?", "choices": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Niels Bohr"], "a": 0}, {"q": "What’s the largest planet in our solar system?", "choices": ["Jupiter", "Saturn", "Neptune", "Earth"], "a": 0}, {"q": "What is the main ingredient in guacamole?", "choices": ["Avocado", "Cucumber", "Pea", "Spinach"], "a": 0}, {"q": "What’s the capital of Italy?", "choices": ["Rome", "Milan", "Venice", "Florence"], "a": 0}, {"q": "Which organ pumps blood around the body?", "choices": ["Heart", "Lungs", "Kidney", "Stomach"], "a": 0}, {"q": "Which country is famous for the Great Pyramid of Giza?", "choices": ["Egypt", "Greece", "India", "Iraq"], "a": 0}, {"q": "What does “WWW” stand for?", "choices": ["World Wide Web", "World Web Wide", "Web World Wide", "Wide World Web"], "a": 0}, {"q": "Which is the smallest continent by land area?", "choices": ["Australia", "Europe", "Antarctica", "South America"], "a": 0}, {"q": "How many degrees are in a full circle?", "choices": ["360", "180", "90", "270"], "a": 0}, {"q": "What’s the capital of Ireland?", "choices": ["Dublin", "Cork", "Galway", "Limerick"], "a": 0}, {"q": "What’s the largest ocean?", "choices": ["Pacific", "Atlantic", "Indian", "Arctic"], "a": 0}, {"q": "What is the chemical symbol for sodium?", "choices": ["Na", "So", "Sd", "Sn"], "a": 0}, {"q": "Which planet is closest to the Sun?", "choices": ["Mercury", "Venus", "Earth", "Mars"], "a": 0}, {"q": "Which country is known as the Land of the Rising Sun?", "choices": ["Japan", "China", "Thailand", "Korea"], "a": 0}, {"q": "In the UK, what’s the emergency telephone number?", "choices": ["999", "911", "112", "101"], "a": 0}, {"q": "What’s the capital of Spain?", "choices": ["Madrid", "Barcelona", "Seville", "Valencia"], "a": 0}, {"q": "How many continents are there?", "choices": ["7", "5", "6", "8"], "a": 0}, {"q": "Which animal is the fastest land animal?", "choices": ["Cheetah", "Lion", "Horse", "Greyhound"], "a": 0}, {"q": "Which gas do humans need to breathe?", "choices": ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"], "a": 0}, {"q": "Which country invented paper?", "choices": ["China", "Egypt", "Greece", "Italy"], "a": 0}, {"q": "What’s the capital of Norway?", "choices": ["Oslo", "Bergen", "Trondheim", "Stavanger"], "a": 0}, {"q": "What does “kg” stand for?", "choices": ["Kilogram", "Kilogallon", "King gram", "Kilo-grade"], "a": 0}, {"q": "Which is the largest desert in the world?", "choices": ["Antarctica", "Sahara", "Gobi", "Arabian"], "a": 0}, {"q": "What’s the name of the galaxy we live in?", "choices": ["Milky Way", "Andromeda", "Sombrero", "Whirlpool"], "a": 0}, {"q": "How many hearts does an octopus have?", "choices": ["3", "1", "2", "4"], "a": 0}, {"q": "Which vitamin is mainly produced when skin is exposed to sunlight?", "choices": ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin B12"], "a": 0}, {"q": "Which country has the most people?", "choices": ["India", "China", "USA", "Indonesia"], "a": 0}, {"q": "What’s the main component of the Sun?", "choices": ["Hydrogen", "Oxygen", "Carbon", "Nitrogen"], "a": 0}, {"q": "In chess, how many squares are on the board?", "choices": ["64", "48", "72", "81"], "a": 0}, {"q": "Which city hosted the 2012 Summer Olympics?", "choices": ["London", "Beijing", "Rio", "Athens"], "a": 0}, {"q": "What’s the capital of Brazil?", "choices": ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"], "a": 0}, {"q": "What is the largest internal organ?", "choices": ["Liver", "Lung", "Brain", "Stomach"], "a": 0}, {"q": "Which planet is famous for its rings?", "choices": ["Saturn", "Mars", "Venus", "Mercury"], "a": 0}, {"q": "What does “RAM” stand for?", "choices": ["Random Access Memory", "Rapid Action Module", "Read Access Mode", "Runtime Allocation Memory"], "a": 0}, {"q": "Which is the longest bone in the human body?", "choices": ["Femur", "Tibia", "Humerus", "Radius"], "a": 0}, {"q": "What’s the name of the process plants use to make food?", "choices": ["Photosynthesis", "Respiration", "Fermentation", "Transpiration"], "a": 0}, {"q": "Which country is the origin of the Olympic Games?", "choices": ["Greece", "Italy", "France", "Turkey"], "a": 0}, {"q": "Which continent is the Amazon Rainforest mainly in?", "choices": ["South America", "Africa", "Asia", "North America"], "a": 0}, {"q": "What’s the smallest unit of life?", "choices": ["Cell", "Atom", "Molecule", "Organ"], "a": 0}, {"q": "What’s the capital of South Korea?", "choices": ["Seoul", "Busan", "Incheon", "Daegu"], "a": 0}, {"q": "Which is colder: the North Pole or the South Pole?", "choices": ["South Pole", "North Pole", "Same", "Depends on season"], "a": 0}, {"q": "What is the study of earthquakes called?", "choices": ["Seismology", "Meteorology", "Ecology", "Geology"], "a": 0}, {"q": "Which is the biggest country by land area?", "choices": ["Russia", "Canada", "China", "USA"], "a": 0}, {"q": "How many strings does a standard guitar have?", "choices": ["6", "4", "5", "7"], "a": 0}, {"q": "What’s the capital of Portugal?", "choices": ["Lisbon", "Porto", "Braga", "Faro"], "a": 0}, {"q": "Which organ is primarily responsible for detoxifying the body?", "choices": ["Liver", "Pancreas", "Spleen", "Bladder"], "a": 0}, {"q": "Which river runs through London?", "choices": ["Thames", "Severn", "Trent", "Tyne"], "a": 0}, {"q": "What colour is the 'Red' in the UK flag of St George?", "choices": ["Red", "Blue", "Green", "Yellow"], "a": 0}, {"q": "Which city is known as the 'Steel City' in the UK?", "choices": ["Sheffield", "Leeds", "Bristol", "Norwich"], "a": 0}, {"q": "In tennis, what is a score of zero called?", "choices": ["Love", "Nil", "Duck", "Blank"], "a": 0}, {"q": "Which month has 28 days in a normal year?", "choices": ["February", "January", "June", "October"], "a": 0}, {"q": "What is the UK currency?", "choices": ["Pound sterling", "Euro", "Dollar", "Krona"], "a": 0}, {"q": "What do the letters 'BBC' stand for?", "choices": ["British Broadcasting Corporation", "British Broadcast Company", "Broadcast Britain Channel", "Britain Broadcasting Collective"], "a": 0}, {"q": "What is the chemical symbol for iron?", "choices": ["Fe", "Ir", "In", "I"], "a": 0}, {"q": "Which planet is known as the Red Planet?", "choices": ["Mars", "Jupiter", "Saturn", "Venus"], "a": 0}, {"q": "How many sides does a hexagon have?", "choices": ["6", "5", "7", "8"], "a": 0}, {"q": "What is the largest mammal?", "choices": ["Blue whale", "Elephant", "Giraffe", "Great white shark"], "a": 0}, {"q": "Which language is primarily spoken in Brazil?", "choices": ["Portuguese", "Spanish", "French", "English"], "a": 0}, {"q": "What is the name of the wizard school in Harry Potter?", "choices": ["Hogwarts", "Durmstrang", "Beauxbatons", "Ilvermorny"], "a": 0}, {"q": "Which ocean is the UK closest to on the west coast?", "choices": ["Atlantic", "Pacific", "Indian", "Arctic"], "a": 0}, {"q": "Which instrument has 88 keys?", "choices": ["Piano", "Guitar", "Violin", "Trumpet"], "a": 0}, {"q": "What is the capital of Northern Ireland?", "choices": ["Belfast", "Derry", "Lisburn", "Newry"], "a": 0}, {"q": "What is 47 × 14?", "choices": ["657", "654", "659", "658"], "a": 3}, {"q": "What is 44 × 34?", "choices": ["1494", "1496", "1483", "1489"], "a": 1}, {"q": "What is 42 - 19?", "choices": ["33", "22", "23", "30"], "a": 2}, {"q": "What is 51 + 34?", "choices": ["81", "86", "85", "83"], "a": 2}, {"q": "What is 31 + 13?", "choices": ["48", "44", "34", "45"], "a": 1}, {"q": "What is 31 - 12?", "choices": ["17", "21", "23", "19"], "a": 3}, {"q": "What is 56 × 25?", "choices": ["1400", "1399", "1395", "1405"], "a": 0}, {"q": "What is 17 + 30?", "choices": ["45", "47", "40", "48"], "a": 1}, {"q": "What is 17 + 36?", "choices": ["56", "52", "54", "53"], "a": 3}, {"q": "What is 58 + 27?", "choices": ["86", "78", "85", "83"], "a": 2}, {"q": "What is 32 + 48?", "choices": ["80", "81", "79", "76"], "a": 0}, {"q": "What is 44 + 32?", "choices": ["72", "89", "75", "76"], "a": 3}, {"q": "What is 16 × 47?", "choices": ["752", "745", "757", "759"], "a": 0}, {"q": "What is 40 - 23?", "choices": ["12", "18", "17", "4"], "a": 2}, {"q": "What is 34 + 17?", "choices": ["38", "48", "52", "51"], "a": 3}, {"q": "What is 60 - 47?", "choices": ["17", "13", "11", "9"], "a": 1}, {"q": "What is 45 + 27?", "choices": ["67", "76", "72", "59"], "a": 2}, {"q": "What is 22 × 43?", "choices": ["946", "959", "942", "939"], "a": 0}, {"q": "What is 42 + 17?", "choices": ["59", "57", "66", "61"], "a": 0}, {"q": "What is 35 + 40?", "choices": ["74", "70", "75", "68"], "a": 2}, {"q": "What is 44 × 21?", "choices": ["923", "914", "917", "924"], "a": 3}, {"q": "What is 11 × 39?", "choices": ["429", "430", "427", "442"], "a": 0}, {"q": "What is 22 + 57?", "choices": ["86", "74", "77", "79"], "a": 3}, {"q": "What is 29 + 34?", "choices": ["53", "58", "73", "63"], "a": 3}, {"q": "What is 58 × 13?", "choices": ["764", "752", "754", "750"], "a": 2}, {"q": "What is 36 × 22?", "choices": ["802", "787", "782", "792"], "a": 3}, {"q": "What is 17 + 33?", "choices": ["55", "48", "63", "50"], "a": 3}, {"q": "What is 7 + 31?", "choices": ["48", "40", "38", "45"], "a": 2}, {"q": "What is 25 × 20?", "choices": ["503", "490", "500", "513"], "a": 2}, {"q": "What is 18 - 11?", "choices": ["0", "6", "12", "7"], "a": 3}, {"q": "What is 44 × 45?", "choices": ["1983", "1987", "1980", "1973"], "a": 2}, {"q": "What is 22 + 23?", "choices": ["41", "47", "45", "55"], "a": 2}, {"q": "What is 36 - 46?", "choices": ["-17", "-15", "-10", "-12"], "a": 2}, {"q": "What is 11 + 22?", "choices": ["43", "33", "30", "35"], "a": 1}, {"q": "What is 49 - 59?", "choices": ["-8", "-14", "-10", "-15"], "a": 2}, {"q": "What is 54 × 42?", "choices": ["2270", "2266", "2268", "2269"], "a": 2}, {"q": "What is 39 + 38?", "choices": ["67", "70", "77", "84"], "a": 2}, {"q": "What is 28 × 56?", "choices": ["1569", "1568", "1578", "1565"], "a": 1}, {"q": "What is 14 - 11?", "choices": ["-1", "3", "7", "-7"], "a": 1}, {"q": "What is 9 + 26?", "choices": ["39", "35", "33", "25"], "a": 1}, {"q": "What is 29 - 56?", "choices": ["-20", "-28", "-27", "-31"], "a": 2}, {"q": "What is 8 - 18?", "choices": ["-7", "-3", "-10", "-11"], "a": 2}, {"q": "What is 31 + 9?", "choices": ["39", "40", "50", "38"], "a": 1}, {"q": "What is 21 - 8?", "choices": ["11", "16", "13", "18"], "a": 2}, {"q": "What is 29 - 48?", "choices": ["-32", "-14", "-16", "-19"], "a": 3}, {"q": "What is 44 × 23?", "choices": ["1007", "1012", "1016", "1019"], "a": 1}, {"q": "What is 31 × 43?", "choices": ["1323", "1334", "1340", "1333"], "a": 3}, {"q": "What is 30 × 34?", "choices": ["1020", "1015", "1023", "1022"], "a": 0}, {"q": "What is 27 - 32?", "choices": ["-5", "-7", "-3", "-9"], "a": 0}, {"q": "What is 50 × 54?", "choices": ["2687", "2700", "2705", "2702"], "a": 1}, {"q": "What is 34 - 57?", "choices": ["-13", "-23", "-20", "-25"], "a": 1}, {"q": "What is 49 + 12?", "choices": ["64", "54", "61", "60"], "a": 2}, {"q": "What is 16 × 8?", "choices": ["141", "128", "121", "127"], "a": 1}, {"q": "What is 52 + 51?", "choices": ["102", "103", "116", "108"], "a": 1}, {"q": "What is 55 × 56?", "choices": ["3079", "3077", "3080", "3087"], "a": 2}, {"q": "What is 14 × 36?", "choices": ["507", "514", "504", "511"], "a": 2}, {"q": "What is 35 × 23?", "choices": ["806", "805", "818", "804"], "a": 1}, {"q": "What is 52 × 25?", "choices": ["1303", "1301", "1300", "1293"], "a": 2}, {"q": "What is 31 × 51?", "choices": ["1581", "1588", "1579", "1574"], "a": 0}, {"q": "What is 33 × 10?", "choices": ["317", "330", "337", "335"], "a": 1}, {"q": "What is 29 + 26?", "choices": ["55", "68", "62", "54"], "a": 0}, {"q": "What is 38 + 8?", "choices": ["49", "51", "46", "43"], "a": 2}, {"q": "What is 32 - 44?", "choices": ["-19", "-12", "-25", "-5"], "a": 1}, {"q": "What is 10 + 23?", "choices": ["33", "31", "43", "36"], "a": 0}, {"q": "What is 24 + 55?", "choices": ["80", "92", "72", "79"], "a": 3}, {"q": "What is 29 - 21?", "choices": ["-2", "-5", "8", "1"], "a": 2}, {"q": "What is 46 × 16?", "choices": ["736", "732", "749", "731"], "a": 0}, {"q": "What is 56 × 30?", "choices": ["1682", "1677", "1675", "1680"], "a": 3}, {"q": "What is 26 - 43?", "choices": ["-12", "-19", "-17", "-24"], "a": 2}, {"q": "What is 50 × 45?", "choices": ["2254", "2240", "2250", "2257"], "a": 2}, {"q": "What is 7 + 33?", "choices": ["35", "40", "44", "47"], "a": 1}, {"q": "What is 34 - 18?", "choices": ["16", "17", "26", "29"], "a": 0}, {"q": "What is 27 × 22?", "choices": ["594", "593", "595", "604"], "a": 0}, {"q": "What is 28 + 8?", "choices": ["36", "49", "39", "33"], "a": 0}, {"q": "What is 28 - 24?", "choices": ["5", "2", "-9", "4"], "a": 3}, {"q": "What is 38 × 42?", "choices": ["1606", "1583", "1609", "1596"], "a": 3}, {"q": "What is 32 × 51?", "choices": ["1632", "1645", "1634", "1636"], "a": 0}, {"q": "What is 29 + 51?", "choices": ["81", "79", "82", "80"], "a": 3}, {"q": "What is 27 - 14?", "choices": ["13", "26", "11", "10"], "a": 0}, {"q": "What is 13 × 60?", "choices": ["779", "780", "782", "784"], "a": 1}, {"q": "What is 52 × 41?", "choices": ["2132", "2134", "2133", "2122"], "a": 0}, {"q": "What is 13 - 7?", "choices": ["8", "19", "6", "16"], "a": 2}, {"q": "What is 23 × 37?", "choices": ["856", "864", "844", "851"], "a": 3}, {"q": "What is 16 - 16?", "choices": ["-1", "-7", "2", "0"], "a": 3}, {"q": "What is 45 - 45?", "choices": ["0", "5", "10", "-1"], "a": 0}, {"q": "What is 10 - 46?", "choices": ["-38", "-35", "-41", "-36"], "a": 3}, {"q": "What is 18 × 42?", "choices": ["756", "753", "763", "743"], "a": 0}, {"q": "What is 25 × 9?", "choices": ["227", "225", "235", "218"], "a": 1}, {"q": "What is 34 - 14?", "choices": ["21", "19", "20", "16"], "a": 2}, {"q": "What is 17 + 57?", "choices": ["74", "76", "69", "84"], "a": 0}, {"q": "What is 51 + 32?", "choices": ["93", "76", "96", "83"], "a": 3}, {"q": "What is 45 × 23?", "choices": ["1034", "1035", "1022", "1028"], "a": 1}, {"q": "What is 55 × 55?", "choices": ["3025", "3038", "3035", "3026"], "a": 0}, {"q": "What is 47 + 59?", "choices": ["106", "110", "99", "119"], "a": 0}, {"q": "What is 49 × 13?", "choices": ["637", "640", "644", "650"], "a": 0}, {"q": "What is 59 - 55?", "choices": ["4", "14", "-6", "-3"], "a": 0}, {"q": "What is 14 + 56?", "choices": ["57", "80", "77", "70"], "a": 3}, {"q": "What is 46 + 55?", "choices": ["99", "101", "111", "91"], "a": 1}, {"q": "What is 25 - 35?", "choices": ["-23", "-10", "3", "-15"], "a": 1}, {"q": "What is 26 × 42?", "choices": ["1099", "1085", "1091", "1092"], "a": 3}, {"q": "What is 48 × 60?", "choices": ["2880", "2882", "2881", "2893"], "a": 0}, {"q": "What is 22 - 36?", "choices": ["-18", "-9", "-14", "-16"], "a": 2}, {"q": "What is 56 + 57?", "choices": ["113", "100", "116", "114"], "a": 0}, {"q": "What is 60 - 44?", "choices": ["16", "12", "26", "29"], "a": 0}, {"q": "What is 42 - 55?", "choices": ["-10", "-13", "-3", "-8"], "a": 1}, {"q": "What is 43 × 31?", "choices": ["1333", "1336", "1323", "1340"], "a": 0}, {"q": "What is 31 - 49?", "choices": ["-18", "-28", "-5", "-22"], "a": 0}, {"q": "What is 13 × 35?", "choices": ["465", "455", "442", "451"], "a": 1}, {"q": "What is 11 + 37?", "choices": ["48", "41", "53", "51"], "a": 0}, {"q": "What is 27 - 47?", "choices": ["-20", "-27", "-30", "-7"], "a": 0}, {"q": "What is 21 × 54?", "choices": ["1134", "1141", "1129", "1144"], "a": 0}, {"q": "What is 8 + 9?", "choices": ["7", "17", "19", "21"], "a": 1}, {"q": "What is 22 + 40?", "choices": ["59", "62", "55", "67"], "a": 1}, {"q": "What is 21 - 36?", "choices": ["-5", "-15", "-14", "-28"], "a": 1}, {"q": "What is 11 + 35?", "choices": ["53", "46", "48", "47"], "a": 1}, {"q": "What is 31 × 37?", "choices": ["1147", "1152", "1151", "1146"], "a": 0}, {"q": "What is 8 - 60?", "choices": ["-65", "-47", "-51", "-52"], "a": 3}, {"q": "What is 60 × 25?", "choices": ["1504", "1500", "1499", "1498"], "a": 1}, {"q": "What is 47 - 13?", "choices": ["44", "24", "36", "34"], "a": 3}, {"q": "What is 53 × 15?", "choices": ["798", "797", "795", "802"], "a": 2}, {"q": "What is 57 + 41?", "choices": ["98", "99", "95", "111"], "a": 0}, {"q": "What is 58 + 14?", "choices": ["72", "65", "68", "71"], "a": 0}, {"q": "What is 12 + 57?", "choices": ["69", "64", "56", "70"], "a": 0}, {"q": "What is 44 - 31?", "choices": ["17", "8", "13", "12"], "a": 2}, {"q": "What is 46 - 21?", "choices": ["27", "18", "25", "35"], "a": 2}, {"q": "What is 9 + 9?", "choices": ["18", "13", "31", "17"], "a": 0}, {"q": "What is 30 - 49?", "choices": ["-19", "-24", "-23", "-12"], "a": 0}, {"q": "What is 24 - 9?", "choices": ["19", "25", "15", "13"], "a": 2}, {"q": "What is 13 + 50?", "choices": ["67", "53", "63", "68"], "a": 2}, {"q": "What is 59 × 36?", "choices": ["2122", "2111", "2124", "2114"], "a": 2}, {"q": "What is 57 × 43?", "choices": ["2449", "2444", "2451", "2450"], "a": 2}, {"q": "What is 24 × 16?", "choices": ["385", "379", "381", "384"], "a": 3}, {"q": "What is 29 × 57?", "choices": ["1656", "1640", "1653", "1650"], "a": 2}, {"q": "What is 54 - 33?", "choices": ["34", "21", "16", "14"], "a": 1}, {"q": "What is 35 × 39?", "choices": ["1375", "1355", "1367", "1365"], "a": 3}, {"q": "What is 32 - 34?", "choices": ["-7", "8", "11", "-2"], "a": 3}, {"q": "What is 45 × 16?", "choices": ["720", "721", "723", "716"], "a": 0}, {"q": "What is 36 - 39?", "choices": ["-5", "-3", "-8", "4"], "a": 1}, {"q": "What is 33 + 28?", "choices": ["61", "68", "56", "66"], "a": 0}, {"q": "What is 49 + 23?", "choices": ["65", "68", "85", "72"], "a": 3}, {"q": "What is 34 - 13?", "choices": ["25", "21", "17", "11"], "a": 1}, {"q": "What is 33 - 29?", "choices": ["6", "4", "-6", "11"], "a": 1}, {"q": "What is 43 × 39?", "choices": ["1676", "1690", "1673", "1677"], "a": 3}, {"q": "What is 14 + 55?", "choices": ["56", "76", "69", "68"], "a": 2}, {"q": "What is 24 + 51?", "choices": ["78", "79", "75", "62"], "a": 2}, {"q": "What is 11 - 16?", "choices": ["-5", "-12", "-7", "-18"], "a": 0}, {"q": "What is 28 + 17?", "choices": ["48", "38", "47", "45"], "a": 3}, {"q": "What is 55 × 46?", "choices": ["2530", "2540", "2523", "2531"], "a": 0}, {"q": "What is 33 × 24?", "choices": ["799", "796", "787", "792"], "a": 3}, {"q": "What is 40 + 49?", "choices": ["88", "94", "79", "89"], "a": 3}, {"q": "What is 26 × 20?", "choices": ["522", "521", "523", "520"], "a": 3}, {"q": "What is 54 × 34?", "choices": ["1835", "1832", "1836", "1841"], "a": 2}, {"q": "What is 54 + 9?", "choices": ["63", "56", "50", "73"], "a": 0}, {"q": "What is 43 - 32?", "choices": ["13", "18", "11", "6"], "a": 2}, {"q": "What is 17 - 58?", "choices": ["-48", "-31", "-41", "-37"], "a": 2}, {"q": "What is 34 + 44?", "choices": ["71", "80", "78", "83"], "a": 2}, {"q": "What is 56 × 17?", "choices": ["947", "952", "950", "956"], "a": 1}, {"q": "What is 22 × 13?", "choices": ["287", "286", "284", "283"], "a": 1}, {"q": "What is 18 - 56?", "choices": ["-25", "-28", "-38", "-35"], "a": 2}, {"q": "What is 47 + 26?", "choices": ["73", "63", "66", "77"], "a": 0}, {"q": "What is 9 + 10?", "choices": ["24", "19", "12", "21"], "a": 1}, {"q": "What is 35 - 58?", "choices": ["-10", "-25", "-23", "-20"], "a": 2}, {"q": "What is 13 + 58?", "choices": ["71", "61", "68", "64"], "a": 0}, {"q": "What is 35 - 40?", "choices": ["-5", "-3", "-8", "-1"], "a": 0}, {"q": "What is 57 - 47?", "choices": ["10", "3", "5", "13"], "a": 0}, {"q": "What is 53 - 49?", "choices": ["4", "-3", "7", "0"], "a": 0}, {"q": "What is 48 - 51?", "choices": ["-3", "-7", "-10", "2"], "a": 0}, {"q": "What is 48 + 57?", "choices": ["101", "112", "105", "98"], "a": 2}, {"q": "What is 26 × 18?", "choices": ["471", "466", "468", "481"], "a": 2}, {"q": "What is 11 × 25?", "choices": ["265", "278", "275", "271"], "a": 2}, {"q": "What is 18 - 60?", "choices": ["-45", "-42", "-32", "-52"], "a": 1}, {"q": "What is 35 + 46?", "choices": ["83", "80", "81", "91"], "a": 2}, {"q": "What is 50 + 43?", "choices": ["98", "95", "93", "103"], "a": 2}, {"q": "What is 58 × 45?", "choices": ["2600", "2610", "2623", "2611"], "a": 1}, {"q": "What is 52 × 40?", "choices": ["2077", "2080", "2073", "2082"], "a": 1}, {"q": "What is 60 × 34?", "choices": ["2044", "2039", "2050", "2040"], "a": 3}, {"q": "What is 32 + 39?", "choices": ["64", "70", "71", "76"], "a": 2}, {"q": "What is 27 - 13?", "choices": ["4", "14", "17", "10"], "a": 1}, {"q": "What is 55 + 52?", "choices": ["117", "94", "100", "107"], "a": 3}, {"q": "What is 60 - 16?", "choices": ["46", "44", "39", "51"], "a": 1}, {"q": "What is 10 + 22?", "choices": ["25", "32", "42", "27"], "a": 1}, {"q": "What is 47 - 39?", "choices": ["4", "10", "8", "7"], "a": 2}, {"q": "What is 22 + 43?", "choices": ["58", "62", "69", "65"], "a": 3}, {"q": "What is 47 + 31?", "choices": ["82", "79", "65", "78"], "a": 3}, {"q": "What is 13 - 56?", "choices": ["-43", "-40", "-53", "-47"], "a": 0}, {"q": "What is 59 × 48?", "choices": ["2829", "2845", "2832", "2842"], "a": 2}, {"q": "What is 9 × 25?", "choices": ["225", "223", "215", "228"], "a": 0}, {"q": "What is 59 + 41?", "choices": ["98", "100", "90", "101"], "a": 1}, {"q": "What is 48 + 28?", "choices": ["76", "80", "83", "71"], "a": 0}, {"q": "What is 31 × 28?", "choices": ["869", "872", "881", "868"], "a": 3}, {"q": "What is 12 - 34?", "choices": ["-19", "-20", "-25", "-22"], "a": 3}, {"q": "What is 49 + 25?", "choices": ["74", "84", "81", "71"], "a": 0}, {"q": "What is 9 + 53?", "choices": ["63", "52", "69", "62"], "a": 3}, {"q": "What is 30 - 39?", "choices": ["-22", "-13", "-9", "-12"], "a": 2}, {"q": "What is 11 - 22?", "choices": ["-11", "-21", "-6", "-7"], "a": 0}, {"q": "What is 30 + 30?", "choices": ["60", "64", "56", "53"], "a": 0}, {"q": "What is 22 × 14?", "choices": ["313", "305", "321", "308"], "a": 3}, {"q": "What is 52 × 35?", "choices": ["1833", "1818", "1822", "1820"], "a": 3}, {"q": "What is 35 - 18?", "choices": ["10", "17", "20", "27"], "a": 1}, {"q": "What is 42 + 41?", "choices": ["87", "85", "83", "80"], "a": 2}, {"q": "What is 57 × 15?", "choices": ["868", "855", "842", "859"], "a": 1}, {"q": "What is 46 × 12?", "choices": ["565", "552", "554", "557"], "a": 1}, {"q": "What is 15 - 27?", "choices": ["-2", "-12", "-19", "-8"], "a": 1}, {"q": "What is 56 + 15?", "choices": ["66", "61", "71", "67"], "a": 2}, {"q": "What is 27 × 52?", "choices": ["1406", "1408", "1404", "1397"], "a": 2}, {"q": "What is 15 + 47?", "choices": ["62", "55", "59", "58"], "a": 0}, {"q": "What is 60 × 43?", "choices": ["2570", "2580", "2567", "2573"], "a": 1}, {"q": "What is 56 + 43?", "choices": ["86", "99", "112", "101"], "a": 1}, {"q": "What is 58 - 58?", "choices": ["2", "5", "10", "0"], "a": 3}, {"q": "What is 17 + 35?", "choices": ["65", "52", "62", "50"], "a": 1}, {"q": "What is 27 + 52?", "choices": ["75", "79", "84", "83"], "a": 1}, {"q": "What is 27 + 22?", "choices": ["44", "59", "49", "50"], "a": 2}, {"q": "What is 10 + 25?", "choices": ["35", "32", "34", "42"], "a": 0}, {"q": "What is 19 × 55?", "choices": ["1058", "1047", "1045", "1055"], "a": 2}, {"q": "What is 22 - 20?", "choices": ["2", "-8", "4", "6"], "a": 0}, {"q": "What is 25 × 41?", "choices": ["1025", "1032", "1021", "1020"], "a": 0}, {"q": "What is 55 + 32?", "choices": ["87", "85", "77", "92"], "a": 0}, {"q": "What is 11 - 31?", "choices": ["-10", "-25", "-20", "-19"], "a": 2}, {"q": "What is 30 + 57?", "choices": ["83", "87", "91", "85"], "a": 1}, {"q": "What is 9 × 9?", "choices": ["94", "81", "84", "91"], "a": 1}, {"q": "What is 27 + 46?", "choices": ["73", "78", "70", "75"], "a": 0}, {"q": "What is 52 + 43?", "choices": ["82", "95", "108", "99"], "a": 1}, {"q": "What is 33 + 44?", "choices": ["78", "77", "90", "64"], "a": 1}, {"q": "What is 44 × 37?", "choices": ["1624", "1627", "1633", "1628"], "a": 3}, {"q": "What is 19 + 8?", "choices": ["34", "27", "30", "23"], "a": 1}, {"q": "What is 33 - 39?", "choices": ["-6", "7", "-10", "-16"], "a": 0}, {"q": "What is 49 - 37?", "choices": ["12", "17", "9", "15"], "a": 0}, {"q": "What is 41 - 29?", "choices": ["12", "10", "13", "25"], "a": 0}, {"q": "What is 21 + 26?", "choices": ["47", "60", "50", "45"], "a": 0}, {"q": "What is 25 - 14?", "choices": ["15", "16", "11", "7"], "a": 2}, {"q": "What is 52 + 12?", "choices": ["74", "77", "64", "65"], "a": 2}, {"q": "What is 42 + 51?", "choices": ["92", "89", "93", "88"], "a": 2}, {"q": "What is 47 × 21?", "choices": ["994", "990", "987", "982"], "a": 2}, {"q": "What is 7 × 42?", "choices": ["294", "301", "307", "292"], "a": 0}, {"q": "What is 48 × 10?", "choices": ["477", "470", "480", "479"], "a": 2}, {"q": "What is 60 + 32?", "choices": ["82", "94", "89", "92"], "a": 3}, {"q": "What is 28 + 25?", "choices": ["49", "63", "53", "66"], "a": 2}, {"q": "What is 28 - 17?", "choices": ["21", "8", "12", "11"], "a": 3}, {"q": "What is 57 - 25?", "choices": ["32", "37", "29", "30"], "a": 0}, {"q": "What is 12 - 32?", "choices": ["-23", "-20", "-24", "-25"], "a": 1}, {"q": "What is 7 + 23?", "choices": ["31", "30", "40", "29"], "a": 1}, {"q": "What is 23 + 48?", "choices": ["61", "71", "66", "70"], "a": 1}, {"q": "What is 32 - 50?", "choices": ["-14", "-23", "-18", "-16"], "a": 2}, {"q": "What is 37 + 16?", "choices": ["60", "66", "53", "57"], "a": 2}, {"q": "What is 40 - 35?", "choices": ["0", "-2", "9", "5"], "a": 3}, {"q": "What is 43 × 41?", "choices": ["1760", "1766", "1773", "1763"], "a": 3}, {"q": "What is 52 + 44?", "choices": ["106", "89", "96", "86"], "a": 2}, {"q": "What is 36 × 43?", "choices": ["1558", "1548", "1535", "1550"], "a": 1}, {"q": "What is 54 - 20?", "choices": ["24", "34", "27", "41"], "a": 1}, {"q": "What is 41 × 10?", "choices": ["400", "412", "410", "423"], "a": 2}, {"q": "What is 56 - 48?", "choices": ["8", "13", "12", "15"], "a": 0}, {"q": "What is 12 - 50?", "choices": ["-38", "-42", "-34", "-43"], "a": 0}, {"q": "What is 40 - 15?", "choices": ["25", "24", "27", "12"], "a": 0}, {"q": "What is 41 × 31?", "choices": ["1275", "1271", "1270", "1281"], "a": 1}, {"q": "What is 53 × 55?", "choices": ["2902", "2922", "2915", "2905"], "a": 2}, {"q": "What is 13 × 45?", "choices": ["575", "595", "584", "585"], "a": 3}, {"q": "What is 21 × 41?", "choices": ["861", "863", "851", "857"], "a": 0}, {"q": "What is 43 - 45?", "choices": ["-3", "-2", "1", "0"], "a": 1}, {"q": "What is 33 + 26?", "choices": ["49", "56", "59", "66"], "a": 2}, {"q": "What is 48 + 49?", "choices": ["93", "97", "104", "100"], "a": 1}];
const KIDS_TRIVIA = [{"q": "How many legs does a spider have?", "choices": ["8", "6", "10", "4"], "a": 0}, {"q": "What colour do you get if you mix red and blue?", "choices": ["Purple", "Green", "Orange", "Yellow"], "a": 0}, {"q": "Which animal says 'moo'?", "choices": ["Cow", "Sheep", "Pig", "Dog"], "a": 0}, {"q": "How many days are in a week?", "choices": ["7", "5", "10", "8"], "a": 0}, {"q": "Which planet do we live on?", "choices": ["Earth", "Mars", "Jupiter", "Venus"], "a": 0}, {"q": "What do bees make?", "choices": ["Honey", "Milk", "Bread", "Cheese"], "a": 0}, {"q": "Which shape has 3 sides?", "choices": ["Triangle", "Square", "Circle", "Rectangle"], "a": 0}, {"q": "What’s the opposite of 'hot'?", "choices": ["Cold", "Warm", "Spicy", "Bright"], "a": 0}, {"q": "How many wheels does a bicycle have?", "choices": ["2", "3", "4", "1"], "a": 0}, {"q": "What colour is a ripe banana?", "choices": ["Yellow", "Blue", "Purple", "Red"], "a": 0}, {"q": "Which animal has a long trunk?", "choices": ["Elephant", "Tiger", "Rabbit", "Frog"], "a": 0}, {"q": "How many letters are in the English alphabet?", "choices": ["26", "24", "28", "20"], "a": 0}, {"q": "What do you call a baby dog?", "choices": ["Puppy", "Kitten", "Calf", "Foal"], "a": 0}, {"q": "Which season comes after spring?", "choices": ["Summer", "Winter", "Autumn", "Monsoon"], "a": 0}, {"q": "What do you use to write on a blackboard?", "choices": ["Chalk", "Soap", "Spoon", "Glue"], "a": 0}, {"q": "Which animal can fly?", "choices": ["Bird", "Lion", "Elephant", "Horse"], "a": 0}, {"q": "How many hours are in a day?", "choices": ["24", "12", "10", "30"], "a": 0}, {"q": "What’s the colour of grass?", "choices": ["Green", "Pink", "Orange", "Blue"], "a": 0}, {"q": "Which is a fruit?", "choices": ["Apple", "Carrot", "Potato", "Onion"], "a": 0}, {"q": "What’s 5 + 5?", "choices": ["10", "8", "12", "15"], "a": 0}, {"q": "Which animal says 'meow'?", "choices": ["Cat", "Dog", "Cow", "Duck"], "a": 0}, {"q": "What’s the biggest animal in the sea?", "choices": ["Blue whale", "Shark", "Dolphin", "Octopus"], "a": 0}, {"q": "Which direction does the sun rise?", "choices": ["East", "West", "North", "South"], "a": 0}, {"q": "What do you wear on your feet?", "choices": ["Shoes", "Hats", "Gloves", "Scarves"], "a": 0}, {"q": "How many sides does a square have?", "choices": ["4", "3", "5", "6"], "a": 0}, {"q": "What colour do you get if you mix red and blue?", "choices": ["Purple", "Orange", "Green", "Brown"], "a": 0}, {"q": "How many days are in a week?", "choices": ["7", "5", "10", "6"], "a": 0}, {"q": "Which animal is famous for a long neck?", "choices": ["Giraffe", "Penguin", "Dolphin", "Rabbit"], "a": 0}, {"q": "What do you use to write on a blackboard?", "choices": ["Chalk", "Soap", "Glue", "Sand"], "a": 0}, {"q": "What’s the opposite of 'up'?", "choices": ["Down", "Left", "Fast", "Near"], "a": 0}, {"q": "Which season is usually the coldest in the UK?", "choices": ["Winter", "Summer", "Spring", "Autumn"], "a": 0}, {"q": "How many wheels does a bicycle have?", "choices": ["2", "3", "4", "1"], "a": 0}, {"q": "What is 10 + 10?", "choices": ["20", "10", "30", "25"], "a": 0}, {"q": "What is 18 + 16?", "choices": ["36", "33", "34", "30"], "a": 2}, {"q": "What is 14 × 18?", "choices": ["251", "248", "252", "257"], "a": 2}, {"q": "What is 3 - 15?", "choices": ["-19", "-12", "-14", "-22"], "a": 1}, {"q": "What is 3 × 7?", "choices": ["24", "19", "21", "34"], "a": 2}, {"q": "What is 7 × 4?", "choices": ["26", "41", "28", "27"], "a": 2}, {"q": "What is 10 - 13?", "choices": ["-3", "1", "-2", "-1"], "a": 0}, {"q": "What is 15 × 4?", "choices": ["60", "63", "73", "58"], "a": 0}, {"q": "What is 2 + 19?", "choices": ["17", "21", "8", "22"], "a": 1}, {"q": "What is 7 + 11?", "choices": ["18", "23", "17", "31"], "a": 0}, {"q": "What is 16 + 15?", "choices": ["27", "35", "31", "28"], "a": 2}, {"q": "What is 17 + 2?", "choices": ["6", "19", "26", "9"], "a": 1}, {"q": "What is 3 + 5?", "choices": ["6", "18", "12", "8"], "a": 3}, {"q": "What is 16 + 1?", "choices": ["4", "24", "17", "18"], "a": 2}, {"q": "What is 6 + 4?", "choices": ["10", "6", "8", "9"], "a": 0}, {"q": "What is 13 - 3?", "choices": ["20", "10", "15", "9"], "a": 1}, {"q": "What is 2 - 3?", "choices": ["-11", "12", "4", "-1"], "a": 3}, {"q": "What is 3 - 16?", "choices": ["-10", "-18", "-13", "-23"], "a": 2}, {"q": "What is 9 + 2?", "choices": ["8", "12", "11", "1"], "a": 2}, {"q": "What is 19 × 5?", "choices": ["100", "95", "97", "88"], "a": 1}, {"q": "What is 19 × 13?", "choices": ["252", "250", "243", "247"], "a": 3}, {"q": "What is 2 - 4?", "choices": ["-3", "-2", "1", "-9"], "a": 1}, {"q": "What is 9 - 15?", "choices": ["-2", "-7", "-6", "-1"], "a": 2}, {"q": "What is 3 - 20?", "choices": ["-16", "-17", "-18", "-24"], "a": 1}, {"q": "What is 13 - 11?", "choices": ["2", "-3", "-11", "-5"], "a": 0}, {"q": "What is 9 + 4?", "choices": ["13", "10", "20", "6"], "a": 0}, {"q": "What is 4 + 1?", "choices": ["9", "8", "5", "-2"], "a": 2}, {"q": "What is 14 + 13?", "choices": ["26", "32", "27", "24"], "a": 2}, {"q": "What is 10 - 9?", "choices": ["1", "-3", "-6", "-2"], "a": 0}, {"q": "What is 10 + 16?", "choices": ["25", "26", "27", "30"], "a": 1}, {"q": "What is 15 + 4?", "choices": ["19", "24", "6", "21"], "a": 0}, {"q": "What is 11 - 15?", "choices": ["-8", "-4", "-2", "3"], "a": 1}, {"q": "What is 16 + 11?", "choices": ["32", "27", "29", "30"], "a": 1}, {"q": "What is 11 - 13?", "choices": ["3", "-2", "2", "-7"], "a": 1}, {"q": "What is 18 × 1?", "choices": ["20", "28", "16", "18"], "a": 3}, {"q": "What is 5 + 10?", "choices": ["11", "16", "15", "22"], "a": 2}, {"q": "What is 20 × 16?", "choices": ["325", "320", "327", "310"], "a": 1}, {"q": "What is 4 × 8?", "choices": ["32", "29", "36", "22"], "a": 0}, {"q": "What is 9 × 8?", "choices": ["76", "72", "82", "71"], "a": 1}, {"q": "What is 12 - 1?", "choices": ["18", "13", "6", "11"], "a": 3}, {"q": "What is 12 - 10?", "choices": ["15", "2", "0", "12"], "a": 1}, {"q": "What is 15 - 15?", "choices": ["2", "-7", "-10", "0"], "a": 3}, {"q": "What is 4 × 6?", "choices": ["21", "24", "27", "23"], "a": 1}, {"q": "What is 13 + 6?", "choices": ["19", "26", "6", "24"], "a": 0}, {"q": "What is 13 × 1?", "choices": ["11", "6", "14", "13"], "a": 3}, {"q": "What is 12 + 11?", "choices": ["23", "24", "33", "18"], "a": 0}, {"q": "What is 20 × 13?", "choices": ["255", "260", "264", "265"], "a": 1}, {"q": "What is 10 × 20?", "choices": ["203", "193", "196", "200"], "a": 3}, {"q": "What is 4 - 6?", "choices": ["-2", "5", "3", "-6"], "a": 0}, {"q": "What is 14 - 6?", "choices": ["10", "5", "8", "21"], "a": 2}, {"q": "What is 15 + 20?", "choices": ["22", "39", "35", "48"], "a": 2}, {"q": "What is 18 × 17?", "choices": ["313", "316", "306", "319"], "a": 2}, {"q": "What is 19 + 1?", "choices": ["20", "22", "21", "10"], "a": 0}, {"q": "What is 6 × 15?", "choices": ["91", "90", "103", "85"], "a": 1}, {"q": "What is 15 + 18?", "choices": ["28", "40", "33", "32"], "a": 2}, {"q": "What is 9 + 12?", "choices": ["21", "31", "20", "16"], "a": 0}, {"q": "What is 20 + 14?", "choices": ["34", "32", "30", "24"], "a": 0}, {"q": "What is 20 + 18?", "choices": ["41", "40", "39", "38"], "a": 3}, {"q": "What is 2 × 9?", "choices": ["18", "14", "21", "17"], "a": 0}, {"q": "What is 16 × 5?", "choices": ["81", "85", "80", "87"], "a": 2}, {"q": "What is 13 × 17?", "choices": ["222", "221", "225", "231"], "a": 1}, {"q": "What is 3 × 15?", "choices": ["50", "45", "38", "49"], "a": 1}, {"q": "What is 16 - 9?", "choices": ["10", "7", "9", "3"], "a": 1}, {"q": "What is 2 × 4?", "choices": ["8", "18", "-5", "3"], "a": 0}, {"q": "What is 1 + 14?", "choices": ["12", "17", "15", "11"], "a": 2}, {"q": "What is 9 - 3?", "choices": ["11", "6", "-4", "3"], "a": 1}, {"q": "What is 14 × 3?", "choices": ["40", "29", "42", "37"], "a": 2}, {"q": "What is 19 × 8?", "choices": ["139", "155", "162", "152"], "a": 3}, {"q": "What is 16 + 3?", "choices": ["14", "12", "24", "19"], "a": 3}, {"q": "What is 10 - 5?", "choices": ["5", "1", "-2", "-8"], "a": 0}, {"q": "What is 7 - 5?", "choices": ["0", "-5", "12", "2"], "a": 3}, {"q": "What is 19 - 13?", "choices": ["2", "6", "13", "9"], "a": 1}, {"q": "What is 8 × 18?", "choices": ["144", "142", "131", "146"], "a": 0}, {"q": "What is 10 + 2?", "choices": ["17", "12", "7", "25"], "a": 1}, {"q": "What is 17 - 1?", "choices": ["12", "16", "19", "21"], "a": 1}, {"q": "What is 19 + 3?", "choices": ["23", "12", "20", "22"], "a": 3}, {"q": "What is 17 - 14?", "choices": ["-1", "8", "3", "-4"], "a": 2}, {"q": "What is 3 + 17?", "choices": ["23", "25", "16", "20"], "a": 3}, {"q": "What is 8 + 2?", "choices": ["17", "10", "3", "5"], "a": 1}, {"q": "What is 10 + 6?", "choices": ["16", "12", "3", "13"], "a": 0}, {"q": "What is 6 + 12?", "choices": ["18", "13", "5", "19"], "a": 0}, {"q": "What is 17 - 3?", "choices": ["7", "24", "14", "27"], "a": 2}, {"q": "What is 19 - 6?", "choices": ["8", "10", "14", "13"], "a": 3}, {"q": "What is 2 + 1?", "choices": ["16", "-7", "3", "7"], "a": 2}, {"q": "What is 2 × 18?", "choices": ["36", "43", "39", "35"], "a": 0}, {"q": "What is 9 × 3?", "choices": ["31", "22", "27", "17"], "a": 2}, {"q": "What is 10 - 10?", "choices": ["-13", "-7", "0", "10"], "a": 2}, {"q": "What is 19 × 10?", "choices": ["200", "194", "190", "189"], "a": 2}, {"q": "What is 5 - 1?", "choices": ["3", "-9", "8", "4"], "a": 3}, {"q": "What is 13 + 10?", "choices": ["21", "22", "23", "30"], "a": 2}, {"q": "What is 9 + 3?", "choices": ["19", "12", "16", "11"], "a": 1}, {"q": "What is 19 × 4?", "choices": ["81", "69", "72", "76"], "a": 3}, {"q": "What is 8 - 10?", "choices": ["8", "3", "-2", "1"], "a": 2}, {"q": "What is 7 × 5?", "choices": ["35", "30", "32", "31"], "a": 0}, {"q": "What is 14 × 4?", "choices": ["56", "54", "66", "60"], "a": 0}, {"q": "What is 4 + 3?", "choices": ["9", "-3", "7", "5"], "a": 2}, {"q": "What is 8 - 12?", "choices": ["-3", "-2", "-4", "-14"], "a": 2}, {"q": "What is 15 × 18?", "choices": ["280", "265", "269", "270"], "a": 3}, {"q": "What is 1 + 2?", "choices": ["8", "3", "-1", "1"], "a": 1}, {"q": "What is 19 - 19?", "choices": ["-7", "-13", "0", "-2"], "a": 2}, {"q": "What is 11 + 4?", "choices": ["15", "25", "12", "5"], "a": 0}, {"q": "What is 16 - 1?", "choices": ["12", "22", "15", "19"], "a": 2}, {"q": "What is 9 + 15?", "choices": ["24", "14", "26", "23"], "a": 0}, {"q": "What is 13 - 5?", "choices": ["8", "-5", "6", "7"], "a": 0}, {"q": "What is 16 - 18?", "choices": ["1", "3", "-2", "2"], "a": 2}, {"q": "What is 11 + 20?", "choices": ["31", "32", "18", "21"], "a": 0}, {"q": "What is 19 + 8?", "choices": ["28", "26", "22", "27"], "a": 3}, {"q": "What is 12 + 6?", "choices": ["22", "17", "21", "18"], "a": 3}, {"q": "What is 19 + 19?", "choices": ["51", "38", "36", "40"], "a": 1}, {"q": "What is 3 + 2?", "choices": ["18", "4", "-8", "5"], "a": 3}, {"q": "What is 5 × 11?", "choices": ["58", "52", "45", "55"], "a": 3}, {"q": "What is 4 - 17?", "choices": ["-9", "-20", "-8", "-13"], "a": 3}, {"q": "What is 11 + 5?", "choices": ["16", "23", "29", "19"], "a": 0}, {"q": "What is 8 + 19?", "choices": ["23", "27", "29", "32"], "a": 1}, {"q": "What is 2 × 6?", "choices": ["7", "11", "12", "15"], "a": 2}, {"q": "What is 3 - 8?", "choices": ["-2", "-5", "-8", "-12"], "a": 1}, {"q": "What is 9 + 7?", "choices": ["9", "17", "20", "16"], "a": 3}, {"q": "What is 2 - 13?", "choices": ["-11", "2", "-14", "-4"], "a": 0}, {"q": "What is 4 × 16?", "choices": ["61", "74", "63", "64"], "a": 3}, {"q": "What is 1 - 11?", "choices": ["-7", "-10", "-17", "-15"], "a": 1}, {"q": "What is 3 + 18?", "choices": ["24", "21", "8", "34"], "a": 1}];
const SARCASM = ["Wow. A functioning brain cell. In THIS economy?", "Correct. Someone call Oxford \u2014 you\u2019ve arrived.", "Absolutely disgusting levels of competence.", "Look at you\u2026 using knowledge like a weapon.", "Correct. The bar was on the floor, but you still cleared it.", "Correct. Your GCSEs have finally paid off.", "That\u2019s correct. Enjoy this brief moment of power.", "Correct. You\u2019re legally allowed to be smug for 5 seconds.", "Correct. The sock gods are\u2026 mildly impressed.", "Right answer. You may now commit theft with confidence.", "Correct. Intelligence detected. Cancel Christmas.", "Correct. That was almost suspiciously competent.", "Correct. Congrats \u2014 you\u2019ve unlocked CHAOS.", "Correct. Your victim should be very, very afraid.", "Correct. Now go ruin someone\u2019s evening."];

// Remove the "dragon on the flag" question (Bhutan/Wales) — too messy.
(() => {
  try {
    const i = ADULT_TRIVIA.findIndex(x => (x && x.q && x.q.toLowerCase().includes("dragon on it")));
    if (i >= 0) ADULT_TRIVIA.splice(i, 1);
  } catch (e) {}
})();

// Bump this whenever state shape or flow changes to avoid loading stale/bad state
const STATE_KEY = "sod_state_full_v14";

let state = loadState();

// Elements
const splash = document.getElementById("splash");
const wheelScreen = document.getElementById("wheelScreen");
const turnScreen = document.getElementById("turnScreen");

const canvas = document.getElementById("wheelCanvas");
const ctx = canvas.getContext("2d");

const spinBtn = document.getElementById("spinBtn");
const toTurnsBtn = document.getElementById("toTurnsBtn");
const wheelStatus = document.getElementById("wheelStatus");
const wheelHint = document.getElementById("wheelHint");

const pickTurnBtn = document.getElementById("pickTurnBtn");
const resetTurnsBtn = document.getElementById("resetTurnsBtn");
const turnInfo = document.getElementById("turnInfo");
const turnRemaining = document.getElementById("turnRemaining");

const overlay = document.getElementById("overlay");
const overlayTitle = document.getElementById("overlayTitle");
const overlaySub = document.getElementById("overlaySub");
const overlayText = document.getElementById("overlayText");
const rollBtn = document.getElementById("rollBtn");
const endTurnBtn = document.getElementById("endTurnBtn");

const triviaBox = document.getElementById("triviaBox");
const triviaQ = document.getElementById("triviaQ");
const triviaTimer = document.getElementById("triviaTimer");
const triviaChoices = document.getElementById("triviaChoices");

const postTrivia = document.getElementById("postTrivia");
const postTriviaMsg = document.getElementById("postTriviaMsg");
const postTriviaContinue = document.getElementById("postTriviaContinue");

const roundEnd = document.getElementById("roundEnd");
const roundEndList = document.getElementById("roundEndList");
const roundEndConfirm = document.getElementById("roundEndConfirm");

const gameOver = document.getElementById("gameOver");
const playAgainBtn = document.getElementById("playAgainBtn");


const drawer = document.getElementById("drawer");
const cogBtn = document.getElementById("cogBtn");
const playerInput = document.getElementById("playerInput");
const addPlayerBtn = document.getElementById("addPlayerBtn");
const playerTags = document.getElementById("playerTags");
const resetGameBtn = document.getElementById("resetGameBtn");

// Wheel animation state
let wheelAngle = 0;
let isSpinning = false;
let highlightIndex = -1;
let lastTickIndex = -1;

// Timers
let typeTimer = null;
let triviaInterval = null;

// ---------- State ----------
function saveState() {
  localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem(STATE_KEY) || "null");
    if (s && Array.isArray(s.players) && s.players.length) return normalize(s);
  } catch (e) {}
  return normalize({
    players: [...DEFAULT_PLAYERS],
    wheelPool: [...DEFAULT_PLAYERS],
    stage: "wheel",          // wheel | turns
    turnPool: [],
    currentPlayer: null,
    lastDice: null,
    stealUnlocked: false,
    pendingDice: null,
    pendingOutcome: null,
    pools: {
      sock: [],
      contender: [],
      turn: [],
      sarcasm: []
    }
  });
}

function normalize(s) {
  s.players = Array.isArray(s.players) && s.players.length ? s.players : [...DEFAULT_PLAYERS];
  s.wheelPool = Array.isArray(s.wheelPool) ? s.wheelPool : [...s.players];
  s.stage = (s.stage === "wheel" || s.stage === "turns") ? s.stage : "wheel";
  s.turnPool = Array.isArray(s.turnPool) ? s.turnPool : [];
  s.currentPlayer = s.currentPlayer || null;
  s.lastDice = s.lastDice || null;
  s.stealUnlocked = !!s.stealUnlocked;
  s.pendingDice = s.pendingDice || null;
  s.pendingOutcome = s.pendingOutcome || null;
  if (!s.pools) s.pools = { sock: [], contender: [], turn: [], sarcasm: [] };
  return s;
}

// ---------- Utilities ----------
function showScreen(which) {
  splash.classList.toggle("active", which === "splash");
  wheelScreen.classList.toggle("active", which === "wheel");
  turnScreen.classList.toggle("active", which === "turns");
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function nextUnique(poolKey, source) {
  if (!state.pools[poolKey] || state.pools[poolKey].length === 0) {
    state.pools[poolKey] = shuffle(source.map((_, i) => i));
  }
  const idx = state.pools[poolKey].pop();
  saveState();
  return source[idx];
}

function playSound(name) {
  try {
    const a = new Audio("sounds/" + name + ".wav");
    a.volume = 0.9;
    a.play().catch(() => {});
  } catch (e) {}
}

// Slower typewriter with random pauses
function typeText(el, text, onDone) {
  if (typeTimer) clearTimeout(typeTimer);
  el.innerHTML = "";
  const cursor = document.createElement("span");
  cursor.className = "cursor";
  let i = 0;

  function step() {
    el.textContent = text.slice(0, i + 1);
    el.appendChild(cursor);
    i++;
    if (i < text.length) {
      let delay = 155; // slightly faster typewriter
      if (Math.random() < 0.10) delay += 350 + Math.random() * 650;
      typeTimer = setTimeout(step, delay);
    } else {
      // finished
      if (typeof onDone === "function") {
        // next tick so DOM settles
        setTimeout(onDone, 0);
      }
    }
  }
  step();
}

// ---------- Wheel Drawing ----------
function drawWheel() {
  const names = state.wheelPool;
  const n = Math.max(names.length, 1);
  const w = canvas.width, h = canvas.height;
  const cx = w / 2, cy = h / 2;
  const r = Math.min(cx, cy) - 10;

  ctx.clearRect(0, 0, w, h);

  // outer ring
  ctx.beginPath();
  ctx.arc(cx, cy, r + 6, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(255,255,255,.10)";
  ctx.lineWidth = 18;
  ctx.stroke();

  const step = (Math.PI * 2) / n;

  // pointer angle is at top (-90deg)
  const pointerAngle = -Math.PI / 2;
  let rel = (pointerAngle - wheelAngle) % (Math.PI * 2);
  if (rel < 0) rel += Math.PI * 2;
  highlightIndex = Math.floor(rel / step);

  for (let i = 0; i < n; i++) {
    const a0 = wheelAngle + i * step;
    const a1 = a0 + step;

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, a0, a1);
    ctx.closePath();

    const base = (i % 2 === 0) ? "#15151b" : "#101016";
    ctx.fillStyle = (i === highlightIndex) ? "#2a2a33" : base;
    ctx.fill();

    ctx.strokeStyle = (i === highlightIndex) ? "rgba(255,77,77,.75)" : "rgba(255,255,255,.10)";
    ctx.lineWidth = (i === highlightIndex) ? 5 : 2;
    ctx.stroke();

    // label
    const mid = (a0 + a1) / 2;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(mid);
    ctx.textAlign = "right";
    ctx.fillStyle = (i === highlightIndex) ? "rgba(255,255,255,.98)" : "rgba(255,255,255,.86)";
    ctx.font = (i === highlightIndex) ? "900 36px system-ui" : "800 32px system-ui";
    ctx.fillText(names[i] || "", r - 18, 12);
    ctx.restore();
  }
}

// ---------- Overlay ----------
function showOverlay(title, sub, text, mode) {
  overlay.classList.add("show");
  overlayTitle.textContent = title;
  overlaySub.textContent = sub;

  // reset sections
  postTrivia.classList.remove("show");
  if (roundEnd) { roundEnd.style.display = "none"; }
  if (gameOver) { gameOver.style.display = "none"; }
  triviaBox.classList.remove("show");
  triviaChoices.innerHTML = "";
  clearInterval(triviaInterval);
  triviaInterval = null;

  endTurnBtn.classList.remove("pulse-endturn");
  // During a player's turn we only want END TURN after the trivia gate resolves.
  // For other overlays (wheel/sock/etc) keep it visible.
  endTurnBtn.style.display = (mode === "turn") ? "none" : (mode === "roundEnd" ? "none" : (mode === "gameOver" ? "none" : "block"));

  rollBtn.style.display = (mode === "turn") ? "block" : "none";
  if (mode === "roundEnd" || mode === "gameOver") { rollBtn.style.display = "none"; }

  typeText(overlayText, text);
}

function hideOverlay() {
  overlay.classList.remove("show");
}

// ---------- Wheel Spin ----------
function spinWheel() {
  if (isSpinning) return;
  if (state.stage !== "wheel") return;
  const names = state.wheelPool;
  if (!names.length) {
    wheelStatus.textContent = "Wheel empty. Hit Next Stage.";
    return;
  }
  isSpinning = true;
  spinBtn.disabled = true;
  wheelStatus.textContent = "Spinning…";

  const n = names.length;
  const step = (Math.PI * 2) / n;
  const winnerIndex = Math.floor(Math.random() * n);

  const pointerAngle = -Math.PI / 2;
  const desired = pointerAngle - (winnerIndex + 0.5) * step;

  // Enforce a minimum of 2 full spins before landing on a selection
  const TWO_PI = Math.PI * 2;
  const minFullRotations = 2;
  const extraRotations = Math.floor(Math.random() * 3); // 0–2 extra
  const fullRotations = minFullRotations + extraRotations;

  // Ensure we always spin forwards (no back-spins if wheelAngle has grown large)
  const start = wheelAngle;
  const current = ((wheelAngle % TWO_PI) + TWO_PI) % TWO_PI;       // 0..2π
  const desiredNorm = ((desired % TWO_PI) + TWO_PI) % TWO_PI;      // 0..2π
  const baseDelta = ((desiredNorm - current) + TWO_PI) % TWO_PI;   // 0..2π

  // Small random nudge within the winner segment so it doesn't feel "robotic"
  const jitter = Math.random() * step * 0.2;

  const target = start + (fullRotations * TWO_PI) + baseDelta + jitter;

  const duration = 2800;
  const startTime = performance.now();
  const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

  function frame(now) {
    const t = Math.min(1, (now - startTime) / duration);
    const e = easeOutCubic(t);
    wheelAngle = start + (target - start) * e;
    drawWheel();

    // tick sound on segment changes
    if (highlightIndex !== lastTickIndex) {
      lastTickIndex = highlightIndex;
      playSound("wheel-click");
    }

    if (t < 1) requestAnimationFrame(frame);
    else {
      isSpinning = false;
      spinBtn.disabled = false;

      const winner = names[winnerIndex];
      state.wheelPool = names.filter((_, i) => i !== winnerIndex);
      saveState();

      const phrase = nextUnique("sock", SOCK_PHRASES);
      showOverlay("Sock Selection", "Keep them paired. Poker face ON.", winner + ": " + phrase, "sock");

      if (!state.wheelPool.length) {
        wheelStatus.textContent = "Wheel complete ✅";
        wheelHint.textContent = "Wheel empty → Next Stage unlocks.";
      } else {
        wheelStatus.textContent = "Selected: " + winner;
      }
      drawWheel();
    }
  }
  requestAnimationFrame(frame);
}

// ---------- Turn Picker ----------
function ensureTurnPool() {
  if (!state.turnPool || state.turnPool.length === 0) {
    state.turnPool = shuffle([...state.players]);
    saveState();
  }
}

function renderTurnRemaining() {
  turnRemaining.innerHTML = "";
  state.turnPool.forEach(n => {
    const d = document.createElement("div");
    d.className = "tagP";
    d.textContent = n;
    turnRemaining.appendChild(d);
  });
  turnInfo.textContent = nextUnique("contender", NEXT_CONTENDER);
}


function pickContender() {
  ensureTurnPool();
  if (!state.turnPool.length) {
    showRoundEnd();
    return;
  }

  // Whizz through names like a roulette, then land on the chosen one.
  pickTurnBtn.disabled = true;
  resetTurnsBtn.disabled = true;

  const candidates = [...state.turnPool];
  const finalIdx = Math.floor(Math.random() * candidates.length);
  const finalName = candidates[finalIdx];

  let spins = 0;
  const minSpins = 24 + Math.floor(Math.random() * 10); // 24-33 ticks
  const startDelay = 50;
  const endDelay = 160;
  const totalTicks = minSpins;

  function tickDelay(t) {
    // ease-out delay ramp
    const p = Math.min(1, t / (totalTicks - 1));
    return startDelay + (endDelay - startDelay) * (p * p);
  }

  let i = Math.floor(Math.random() * candidates.length);

  // Slot-machine style UI: show 3 names, middle highlighted green.
  turnInfo.innerHTML = (
    '<div class="slotBox" aria-label="Selecting contender">' +
    '  <div class="slotRow" id="slotTop">...</div>' +
    '  <div class="slotRow mid" id="slotMid">...</div>' +
    '  <div class="slotRow" id="slotBot">...</div>' +
    '</div>'
  );
  const slotTop = document.getElementById("slotTop");
  const slotMid = document.getElementById("slotMid");
  const slotBot = document.getElementById("slotBot");

  function tick() {
    // show current "highlight" name in the UI as it whizzes
    const idx = i % candidates.length;
    const topName = candidates[(idx - 1 + candidates.length) % candidates.length];
    const midName = candidates[idx];
    const botName = candidates[(idx + 1) % candidates.length];
    if (slotTop) slotTop.textContent = topName;
    if (slotMid) slotMid.textContent = midName;
    if (slotBot) slotBot.textContent = botName;
    playSound("wheel-click");
    i++;
    spins++;

    if (spins < totalTicks) {
      setTimeout(tick, tickDelay(spins));
      return;
    }

    // land
    state.turnPool = state.turnPool.filter(n => n !== finalName);
    state.currentPlayer = finalName;
    state.lastDice = null;
    state.stealUnlocked = false;
  state.pendingDice = null;
  state.pendingOutcome = null;
  state.pendingLabel = null;
    saveState();

    renderTurnRemaining();

    const phrase = nextUnique("turn", TURN_PHRASES);
    showOverlay("The Dice Decides", "Roll the dice. Obey the outcome.", finalName + ": " + phrase, "turn");

    pickTurnBtn.disabled = false;
    resetTurnsBtn.disabled = false;
  }

  tick();
}


// ---------- Dice + Actions ----------
function rollDice() {
  if (!state.currentPlayer) return;
  if (state.lastDice) return; // no rerolls

  playSound("dice-roll");
  const n = 1 + Math.floor(Math.random() * 6);
  state.lastDice = n;

  const who = state.currentPlayer;

  // Build outcome text (we show the roll result BEFORE trivia)
  let outcome = who + " rolled a " + n + ". ";
  let label = "";

  if (n === 1) { label = "PEEK"; outcome += "PEEK — secretly peek at ONE person’s socks. No touching."; }
  if (n === 2) { label = "STEAL"; outcome += "STEAL — choose a victim and take their socks (you give yours in return). Enforced."; }
  if (n === 3) { label = "ACTION CARD"; outcome += "ACTION CARD — draw a chaos card (physical). Play this turn only."; }
  if (n === 4) { label = "REVERSE STEAL"; outcome += "REVERSE STEAL — choose a victim. THEY must steal socks from someone else of their choice."; }
  if (n === 5) { label = "STEAL"; outcome += "STEAL — choose a victim and take their socks (you give yours in return). Enforced."; }
  if (n === 6) { label = "SHIELD"; outcome += "SHIELD — immune to ONE steal attempt against you until your next turn. Announce it."; }

  // Store pending action + reset trivia gate
  state.pendingDice = n;
  state.pendingOutcome = outcome;
  state.pendingLabel = label || ('ROLL ' + n);
  state.stealUnlocked = false;
  saveState();

  rollBtn.style.display = "none";
  // Don't allow ending the turn until the trivia is answered
  endTurnBtn.classList.remove("pulse-endturn");
  endTurnBtn.style.display = "none";

  // Show the dice outcome FIRST, then (after the typewriter finishes) launch trivia
  typeText(overlayText, outcome, () => startTrivia(who));
}



function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
  }
  return arr;
}

function buildTriviaDeck(bankLen) {
  const deck = Array.from({ length: bankLen }, (_, i) => i);
  return shuffleArray(deck);
}

function nextTriviaQuestion(isKid) {
  const bank = isKid ? KIDS_TRIVIA : ADULT_TRIVIA;
  const deckKey = isKid ? "triviaDeckKids" : "triviaDeckAdult";

  if (!state[deckKey] || !Array.isArray(state[deckKey]) || state[deckKey].length === 0) {
    // Fresh deck: guarantees zero repeats until exhausted
    state[deckKey] = buildTriviaDeck(bank.length);
    saveState();
  }

  const idx = state[deckKey].pop();
  saveState();
  return bank[idx];
}

// ---------- Trivia ----------
function startTrivia(who) {
  triviaBox.classList.add("show");

  const isKid = (who === "Charlotte" || who === "Harriet");
  const q = nextTriviaQuestion(isKid);

  triviaQ.textContent = q.q;
  triviaChoices.innerHTML = "";

  let remaining = 8;
  triviaTimer.textContent = remaining + "s";
  triviaTimer.classList.remove("danger");

  function lock() {
    Array.from(triviaChoices.querySelectorAll("button")).forEach(b => b.disabled = true);
  }

  function finish(ok, timedOut) {
    lock();
    clearInterval(triviaInterval);
    triviaInterval = null;

    state.stealUnlocked = !!ok;
    saveState();

    if (ok) {
      playSound("steal");
      postTriviaMsg.textContent = nextUnique("sarcasm", SARCASM);
    } else {
      postTriviaMsg.textContent = timedOut ? "Too slow. The sock gods love a choke." : "Wrong. Sit down and accept it.";
    }
    postTrivia.classList.add("show");
  }

  q.choices.forEach((c, i) => {
    const b = document.createElement("button");
    b.className = "choiceBtn";
    b.type = "button";
    b.textContent = c;
    b.addEventListener("click", () => {
      const ok = (i === q.a);
      if (ok) b.classList.add("correct");
      else b.classList.add("wrong");

      const corr = triviaChoices.querySelectorAll("button")[q.a];
      if (corr) corr.classList.add("correct");

      finish(ok, false);
    });
    triviaChoices.appendChild(b);
  });

  triviaInterval = setInterval(() => {
    remaining -= 1;
    triviaTimer.textContent = remaining + "s";
    if (remaining <= 3) triviaTimer.classList.add("danger");
    if (remaining <= 0) finish(false, true);
  }, 1000);

  // scroll trivia into view inside overlay
  setTimeout(() => {
    triviaBox.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 60);
}

postTriviaContinue.addEventListener("click", () => {
  postTrivia.classList.remove("show");
  if (roundEnd) { roundEnd.style.display = "none"; }
  if (gameOver) { gameOver.style.display = "none"; }
  triviaBox.classList.remove("show");

  const outcome = state.pendingOutcome || "";
  const dice = state.pendingDice;
  const ok = !!state.stealUnlocked;

  // ENFORCED CHAOS:
  // - Normally: wrong answer => draw a chaos card.
  // - Dice roll 3 (ACTION CARD): correct answer lets you AVOID drawing a card.
  if (dice === 3) {
    if (ok) typeText(overlayText, outcome + "\n\n✅ Correct — you dodged the chaos card. END TURN.");
    else typeText(overlayText, outcome + "\n\n❌ Wrong — draw a chaos card. END TURN.");
  } else {
    if (ok) typeText(overlayText, outcome + "\n\n✅ Correct — do the action above, then END TURN.");
    else typeText(overlayText, outcome + "\n\n❌ Wrong — draw a chaos card. END TURN.");
  }

  endTurnBtn.style.display = "block";
  endTurnBtn.classList.add("pulse-endturn");
});


function showRoundEnd() {
  showOverlay("Round Complete", "Choose who plays again", "Select who is staying in. Anyone leaving can now open their socks and reveal them.", "roundEnd");

  if (!roundEnd || !roundEndList || !roundEndConfirm) return;

  const selections = new Set(state.players);

  roundEndList.innerHTML = "";
  state.players.forEach(name => {
    const chip = document.createElement("div");
    chip.className = "tagP sel";
    chip.textContent = name;
    chip.addEventListener("click", () => {
      if (selections.has(name)) {
        selections.delete(name);
        chip.classList.remove("sel");
      } else {
        selections.add(name);
        chip.classList.add("sel");
      }
    });
    roundEndList.appendChild(chip);
  });

  roundEnd.style.display = "block";

  pickTurnBtn.disabled = true;
  resetTurnsBtn.disabled = true;

  roundEndConfirm.onclick = () => {
    const staying = state.players.filter(p => selections.has(p));

    // Remove leavers from players and pools
    state.players = staying;
    state.turnPool = [];
    state.wheelPool = state.wheelPool.filter(p => staying.includes(p));
    if (state.currentPlayer && !staying.includes(state.currentPlayer)) state.currentPlayer = null;

    if (!staying.length) {
      // Proper Game Over screen with hard reset.
      saveState();

      // Clean up UI state
      if (roundEnd) { roundEnd.style.display = "none"; }
      if (postTrivia) { postTrivia.classList.remove("show"); }
      triviaBox.classList.remove("show");

      showOverlay("Game Over", "No one is continuing", "Everyone chose to leave. Crack open the socks and reveal them. 🎁", "gameOver");
      if (gameOver) gameOver.style.display = "block";

      // No turn buttons now
      pickTurnBtn.disabled = true;
      resetTurnsBtn.disabled = false;
      renderTurnRemaining();
      return;
    }

    state.turnPool = shuffle([...staying]);
    saveState();

    roundEnd.style.display = "none";
    hideOverlay();

    pickTurnBtn.disabled = false;
    resetTurnsBtn.disabled = false;
    renderTurnRemaining();
  };
}


// ---------- End Turn ----------
endTurnBtn.addEventListener("click", () => {
  if (state.stage === "wheel") {
    hideOverlay();
    return;
  }
  state.currentPlayer = null;
  state.lastDice = null;
  state.stealUnlocked = false;
  state.pendingDice = null;
  state.pendingOutcome = null;
  state.pendingLabel = null;
  saveState();
  // If the round is complete, ask who plays again / leaves.
  if (state.stage === "turns" && (!state.turnPool || state.turnPool.length === 0)) {
    showRoundEnd();
    return;
  }
  hideOverlay();
});

rollBtn.addEventListener("click", rollDice);

// ---------- Buttons ----------
spinBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  spinWheel();
});

toTurnsBtn.addEventListener("click", () => {
  if (state.wheelPool.length) {
    wheelStatus.textContent = "Wheel not empty yet 👀";
    return;
  }
  state.stage = "turns";
  saveState();
  showScreen("turns");
  renderTurnRemaining();
});

pickTurnBtn.addEventListener("click", pickContender);

resetTurnsBtn.addEventListener("click", () => {
  state.turnPool = [];
  state.currentPlayer = null;
  state.lastDice = null;
  state.stealUnlocked = false;
  state.pendingDice = null;
  state.pendingOutcome = null;
  state.pendingLabel = null;
  saveState();
  renderTurnRemaining();
});

// Tap anywhere on splash to start
document.addEventListener("click", () => {
  if (splash.classList.contains("active")) {
    showScreen("wheel");
    drawWheel();
  }
});

// ---------- Config Drawer ----------
function renderPlayers() {
  playerTags.innerHTML = "";
  state.players.forEach(p => {
    const t = document.createElement("div");
    t.className = "tagP";
    t.textContent = p;
    t.addEventListener("click", () => {
      state.players = state.players.filter(x => x !== p);
      state.wheelPool = state.wheelPool.filter(x => x !== p);
      state.turnPool = state.turnPool.filter(x => x !== p);
      if (state.currentPlayer === p) state.currentPlayer = null;
      saveState();
      renderPlayers();
      drawWheel();
      renderTurnRemaining();
    });
    playerTags.appendChild(t);
  });
}

addPlayerBtn.addEventListener("click", () => {
  const name = (playerInput.value || "").trim();
  if (!name) return;
  if (!state.players.includes(name)) {
    state.players.push(name);
    if (state.stage === "wheel") state.wheelPool.push(name);
    saveState();
  }
  playerInput.value = "";
  renderPlayers();
  drawWheel();
  renderTurnRemaining();
});

function hardResetGame() {
  localStorage.removeItem(STATE_KEY);
  state = loadState();
  wheelAngle = 0;
  lastTickIndex = -1;
  drawer.classList.remove("show");
  hideOverlay();
  showScreen("splash");
  renderPlayers();
  drawWheel();
  renderTurnRemaining();
}

resetGameBtn.addEventListener("click", () => {
  hardResetGame();
});

if (playAgainBtn) {
  playAgainBtn.addEventListener("click", () => {
    hardResetGame();
  });
}

let lastDrawerToggle = 0;
function toggleDrawer(e){
  const now = Date.now();
  if(now - lastDrawerToggle < 350) return;
  lastDrawerToggle = now;
  try{ e && e.preventDefault && e.preventDefault(); }catch(_){}
  try{ e && e.stopPropagation && e.stopPropagation(); }catch(_){}
  drawer.classList.toggle("show");
  renderPlayers();
}
cogBtn.addEventListener("pointerdown", toggleDrawer, {passive:false});

document.addEventListener("click", (e) => {
  if (!drawer.classList.contains("show")) return;
  if (drawer.contains(e.target) || e.target === cogBtn) return;
  drawer.classList.remove("show");
});

// ---------- Boot ----------
(function boot() {
  // keep splash first always
  showScreen("splash");
  renderPlayers();
  drawWheel();
  if (state.stage === "turns") renderTurnRemaining();
})();
