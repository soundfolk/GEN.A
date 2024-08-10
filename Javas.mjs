let data = [
    {
        "question": "How many ways can you arrange 3 different books on a shelf?",
        "options": [
            "3",
            "6",
            "9",
            "12"
        ],
        "answer": "6"
    },
    {
        "question": "In how many ways can a committee of 3 be formed from a group of 5 people?",
        "options": [
            "30",
            "20",
            "10",
            "60"
        ],
        "answer": "10"
    },
    {
        "question": "In how many ways can 5 girls and 4 boys be seated in a row if no two boys are together?",
        "options": ["2880", "1440", "720", "360"],
        "answer": "2880"
    },
    {
        "question": "How many different 6-digit numbers can be formed using the digits 1, 2, 3, 4, 5, and 6 if the number must be divisible by 3?",
        "options": ["240", "360", "480", "120"],
        "answer": "240"
    },
    {
        "question": "In how many ways can a committee of 4 people be formed from a group of 12 people if two particular persons must be excluded?",
        "options": ["210", "120", "90", "70"],
        "answer": "210"
    },
    {
        "question": "How many different 5-letter words can be formed using the letters of the word 'SCHOOL' without repetition?",
        "options": ["120", "60", "144", "24"],
        "answer": "120"
    },
    {
        "question": "A bag contains 7 red balls and 3 green balls. In how many ways can 4 balls be drawn so that at least 2 are red?",
        "options": ["100", "120", "140", "80"],
        "answer": "140"
    },
    {
        "question": "How many different 6-digit numbers can be formed using the digits 0, 1, 2, 3, 4, and 5 if the number must be greater than 300000?",
        "options": ["120", "720", "360", "600"],
        "answer": "600"
    },
    {
        "question": "In how many ways can 8 people be seated around a circular table if there are 4 men and 4 women and no two men or two women sit together?",
        "options": ["384", "192", "384", "48"],
        "answer": "384"
    },
    {
        "question": "How many diagonals does a regular dodecagon have?",
        "options": ["66", "54", "44", "33"],
        "answer": "54"
    },

    {
        "question": "How many different 4-digit numbers can be formed using the digits 1, 2, 3, and 4 without repetition?",
        "options": [
            "12",
            "24",
            "48",
            "96"
        ],
        "answer": "24"
    },
    {
        "question": "How many ways can you choose 2 balls from a bag containing 5 different colored balls?",
        "options": [
            "5",
            "10",
            "15",
            "20"
        ],
        "answer": "10"
    },
    {
        "question": "If you flip a coin 3 times, how many possible outcomes are there?",
        "options": [
            "2",
            "4",
            "6",
            "8"
        ],
        "answer": "8"
    },
    {
        "question": "How many ways can you arrange the letters of the word 'MATH'?",
        "options": [
            "4",
            "12",
            "24",
            "48"
        ],
        "answer": "24"
    },
    {
        "question": "In how many ways can a team of 4 be selected from a group of 7 players?",
        "options": [
            "104",
            "70",
            "35",
            "140"
        ],
        "answer": "35"
    },
    {
        "question": "How many different 3-letter codes can be formed using the letters A, B, and C if repetition is allowed?",
        "options": [
            "3",
            "6",
            "9",
            "27"
        ],
        "answer": "27"
    },
    {
        "question": "If you roll two dice, how many possible outcomes are there?",
        "options": [
            "6",
            "12",
            "18",
            "36"
        ],
        "answer": "36"
    },
    {
        "question": "How many ways can you arrange 5 people in a line?",
        "options": [
            "120",
            "240",
            "360",
            "480"
        ],
        "answer": "120"
    },
    {
        "question": "In how many ways can a committee of 2 be formed from a group of 6 people?",
        "options": [
            "12",
            "15",
            "18",
            "21"
        ],
        "answer": "15"
    },
    {
        "question": "In how many ways can a committee of 5 people be formed from a group of 8 people?",
        "options": ["28", "56", "40", "32"],
        "answer": "56"
    },
    {
        "question": "How many different 4-letter words can be formed using the letters of the word 'DELHI' without repetition?",
        "options": ["60", "120", "144", "24"],
        "answer": "120"
    },
    {
        "question": "A box contains 5 red balls and 3 green balls. In how many ways can 2 red balls and 1 green ball be drawn?",
        "options": ["45", "30", "60", "20"],
        "answer": "30"
    },
    {
        "question": "How many different 5-digit numbers can be formed using the digits 1, 2, 3, 4, and 5 without repetition?",
        "options": ["60", "120", "125", "24"],
        "answer": "120"
    },
    {
        "question": "In how many ways can a cricket team of 11 players be selected from a group of 15 players?",
        "options": ["3003", "1365", "2002", "1500"],
        "answer": "1365"
    },
    {
        "question": "How many different 3-digit even numbers can be formed using the digits 1, 2, 3, 4, and 5 without repetition?",
        "options": ["40", "30", "24", "60"],
        "answer": "30"
    },
    {
        "question": "A bag contains 4 white balls and 3 black balls. In how many ways can 2 white balls and 1 black ball be drawn?",
        "options": ["24", "18", "36", "12"],
        "answer": "18"
    },
    {
        "question": "How many different arrangements can be made with the letters of the word 'MISSISSIPPI'?",
        "options": ["69300", "34650", "49896", "55440"],
        "answer": "34650"
    },
    {
        "question": "In how many ways can 6 people be seated in a row if two particular persons must always sit together?",
        "options": ["120", "240", "480", "360"],
        "answer": "240"
    },
    {
        "question": "How many diagonals does a regular hexagon have?",
        "options": ["12", "9", "6", "8"],
        "answer": "9"
    },
    {
        "question": "In how many ways can a cricket team of 11 players be selected from a group of 15 players if a particular player must be included?",
        "options": ["3003", "1365", "2002", "1001"],
        "answer": "1001"
    },
    {
        "question": "How many different 4-digit numbers greater than 3000 can be formed using the digits 1, 2, 3, and 4 without repetition?",
        "options": ["24", "18", "12", "36"],
        "answer": "18"
    },
    {
        "question": "In how many ways can a committee of 4 men and 3 women be formed from a group of 7 men and 5 women?",
        "options": ["210", "350", "105", "140"],
        "answer": "350"
    },
    {
        "question": "How many different arrangements can be made with the letters of the word 'STATISTICS'?",
        "options": ["60480", "50400", "40320", "30240"],
        "answer": "50400"
    },
    {
        "question": "In how many ways can 5 boys and 3 girls be seated in a row if no two girls are together?",
        "options": ["720", "1440", "360", "2880"],
        "answer": "1440"
    },
    {
        "question": "How many different 5-digit numbers can be formed using the digits 0, 1, 2, 3, and 4 without repetition?",
        "options": ["120", "96", "48", "60"],
        "answer": "96"
    },
    {
        "question": "In how many ways can a committee of 3 men and 2 women be formed from a group of 5 men and 4 women?",
        "options": ["40", "60", "80", "120"],
        "answer": "60"
    },
    {
        "question": "How many different 4-letter words can be formed using the letters of the word 'NOON'?",
        "options": ["6", "12", "8", "4"],
        "answer": "6"
    }, {
        "question": "In how many ways can 7 people be seated in a row if two particular persons must not sit together?",
        "options": ["3600", "2400", "4320", "5040"],
        "answer": "3600"
    },
    {
        "question": "How many different 5-letter words can be formed using the letters of the word 'EQUATION' without repetition?",
        "options": ["360", "420", "720", "240"],
        "answer": "420"
    },
    {
        "question": "A box contains 6 red balls and 4 green balls. In how many ways can 3 red balls and 2 green balls be drawn?",
        "options": ["120", "150", "180", "90"],
        "answer": "150"
    },
    {
        "question": "How many different 6-digit numbers can be formed using the digits 0, 1, 2, 3, 4, and 5 without repetition?",
        "options": ["360", "720", "600", "120"],
        "answer": "720"
    },
    {
        "question": "In how many ways can a cricket team of 11 players be selected from a group of 16 players if two particular players are always included?",
        "options": ["3003", "1365", "2002", "840"],
        "answer": "840"
    },
    {
        "question": "How many different 4-digit even numbers can be formed using the digits 2, 3, 5, and 7 without repetition?",
        "options": ["18", "12", "24", "6"],
        "answer": "12"
    },
    {
        "question": "A bag contains 5 white balls and 4 black balls. In how many ways can 3 white balls and 2 black balls be drawn?",
        "options": ["120", "140", "100", "80"],
        "answer": "140"
    },
    {
        "question": "How many different arrangements can be made with the letters of the word 'STATISTICS' if the vowels must come together?",
        "options": ["720", "1440", "2880", "360"],
        "answer": "1440"
    },
    {
        "question": "In how many ways can 7 people be seated around a circular table?",
        "options": ["360", "720", "120", "240"],
        "answer": "720"
    },
    {
        "question": "How many diagonals does a regular octagon have?",
        "options": ["28", "20", "32", "16"],
        "answer": "20"
    },
    {
        "question": "In how many ways can a committee of 5 men and 4 women be formed from a group of 8 men and 6 women?",
        "options": ["1260", "1680", "840", "630"],
        "answer": "1680"
    },
    {
        "question": "How many different 5-digit numbers can be formed using the digits 2, 3, 4, 5, and 6 without repetition if the number must be divisible by 5?",
        "options": ["24", "120", "60", "48"],
        "answer": "48"
    },
    {
        "question": "In how many ways can 5 girls and 3 boys be seated in a row if the boys and girls must alternate?",
        "options": ["72", "144", "36", "288"],
        "answer": "144"
    },
    {
        "question": "How many different arrangements can be made with the letters of the word 'PERMUTATION'?",
        "options": ["806400", "907200", "725760", "604800"],
        "answer": "907200"
    },
    {
        "question": "In how many ways can 8 people be divided into two groups of 4 each?",
        "options": ["35", "70", "105", "140"],
        "answer": "70"
    },
    {
        "question": "How many different 6-digit numbers can be formed using the digits 1, 2, 3, 4, 5, and 6 if the digits can be repeated?",
        "options": ["36000", "46656", "720", "7776"],
        "answer": "46656"
    },
    {
        "question": "In how many ways can a committee of 4 people be formed from a group of 10 people if two particular persons must be included?",
        "options": ["56", "28", "40", "32"],
        "answer": "28"
    },
    {
        "question": "How many different 4-letter words can be formed using the letters of the word 'MISSISSIPPI' without repetition?",
        "options": ["60", "120", "144", "24"],
        "answer": "120"
    },
    {
        "question": "A box contains 6 red balls and 4 green balls. In how many ways can 2 red balls and 2 green balls be drawn?",
        "options": ["120", "150", "180", "90"],
        "answer": "150"
    },
    {
        "question": "How many different 5-digit numbers can be formed using the digits 1, 2, 3, 4, and 5 if repetition is allowed?",
        "options": ["625", "3125", "125", "25"],
        "answer": "3125"
    },
    {
        "question": "In how many ways can a cricket team of 11 players be selected from a group of 15 players if a particular player must be excluded?",
        "options": ["3003", "1365", "2002", "1001"],
        "answer": "1001"
    },
    {
        "question": "How many different 4-digit odd numbers can be formed using the digits 1, 3, 5, and 7 without repetition?",
        "options": ["18", "24", "12", "6"],
        "answer": "24"
    },
    {
        "question": "A bag contains 5 white balls and 3 black balls. In how many ways can 4 balls be drawn so that at least 2 are white?",
        "options": ["56", "70", "42", "35"],
        "answer": "70"
    },
    {
        "question": "How many different arrangements can be made with the letters of the word 'PERMUTATION' if the vowels must come together?",
        "options": ["806400", "907200", "725760", "60480"],
        "answer": "60480"
    },
    {
        "question": "In how many ways can 8 people be seated around a circular table if two particular persons must sit together?",
        "options": ["360", "720", "120", "240"],
        "answer": "720"
    },
    {
        "question": "How many diagonals does a regular decagon have?",
        "options": ["45", "35", "54", "27"],
        "answer": "35"
    }, ,
    {
        "question": "How many different 5-digit numbers can be formed using the digits 0, 1, 2, 3, and 4 without repetition?",
        "options": [
            "120",
            "240",
            "360",
            "480"
        ],
        "answer": "120"
    },
    {
        "question": "How many ways can you choose 3 cards from a deck of 52 cards?",
        "options": [
            "22100",
            "132600",
            "265200",
            "1232"
        ],
        "answer": "22100"
    },
    {
        "question": "How many ways can you arrange 4 different flowers in a vase?",
        "options": [
            "12",
            "24",
            "48",
            "96"
        ],
        "answer": "24"
    },
    {
        "question": "In how many ways can a committee of 4 be formed from a group of 6 people?",
        "options": [
            "15",
            "30",
            "60",
            "120"
        ],
        "answer": "15"
    },
    {
        "question": "How many different 5-digit numbers can be formed using the digits 2, 3, 4, 5, and 6 without repetition?",
        "options": [
            "120",
            "240",
            "360",
            "480"
        ],
        "answer": "120"
    },
    {
        "question": "How many ways can you choose 4 cards from a deck of 52 cards?",
        "options": [
            "270725",
            "65780",
            "132600",
            "265200"
        ],
        "answer": "270725"
    },
    {
        "question": "If you flip a coin 4 times, how many possible outcomes are there?",
        "options": [
            "4",
            "8",
            "12",
            "16"
        ],
        "answer": "16"
    },
    {
        "question": "How many ways can you arrange the letters of the word 'PEACE'?",
        "options": [
            "24",
            "60",
            "120",
            "240"
        ],
        "answer": "60"
    },
    {
        "question": "In how many ways can a team of 5 be selected from a group of 8 players?",
        "options": [
            "56",
            "70",
            "84",
            "112"
        ],
        "answer": "56"
    },
    {
        "question": "How many different 4-letter codes can be formed using the letters A, B, C, and D if repetition is allowed?",
        "options": [
            "24",
            "64",
            "128",
            "256"
        ],
        "answer": "256"
    },
    {
        "question": "If you roll three dice, how many possible outcomes are there?",
        "options": [
            "216",
            "120",
            "72",
            "36"
        ],
        "answer": "216"
    },
    {
        "question": "How many ways can you arrange 6 people in a line?",
        "options": [
            "720",
            "360",
            "412",
            "434"
        ],
        "answer": "720"
    },
    {
        "question": "In how many ways can a committee of 5 be formed from a group of 7 people?",
        "options": [
            "21",
            "35",
            "42",
            "56"
        ],
        "answer": "21"
    },
    {
        "question": "How many different 6-digit numbers can be formed using the digits 1, 2, 3, 4, 5, and 6 without repetition?",
        "options": [
            "720",
            "360",
            "120",
            "60",
        ],
        "answer": "720",
    },
    {
        "question": "In how many ways can a boy choose a shirt and a pant from 5 shirts and 4 pants?",
        "options": ["15", "20", "10", "9"],
        "answer": "20"
    },
    {
        "question": "How many 3-digit numbers can be formed from the digits 1, 2, 3, 4, 5 if repetition is allowed?",
        "options": ["125", "60", "120", "25"],
        "answer": "125"
    },
    {
        "question": "How many different words can be formed using all the letters of the word ‘DELHI’?",
        "options": ["120", "60", "24", "12"],
        "answer": "120"
    },
    {
        "question": "How many numbers greater than 3000 can be formed by using the digits 1, 2, 3, 4, 5 if repetition is not allowed?",
        "options": ["60", "48", "24", "12"],
        "answer": "60"
    },
    {
        "question": "In how many ways can a committee of 3 members be formed out of 5 men and 4 women if at least one woman must be a member of the committee?",
        "options": ["60", "48", "36", "24"],
        "answer": "60"
    },
    {
        "question": "Evaluate 5!",
        "options": ["120", "60", "24", "12"],
        "answer": "120"
    },
    {
        "question": "Simplify: (n+2)!/(n)!",
        "options": ["n(n+1)(n+2)", "(n+1)(n+2)", "n+2", "n+1"],
        "answer": "(n+1)(n+2)"
    },
    {
        "question": "Find the value of n if n! = 5040.",
        "options": ["7", "6", "5", "4"],
        "answer": "7"
    },
    {
        "question": "If (n+1)! = 12(n-1)!, find n.",
        "options": ["4", "5", "6", "3"],
        "answer": "4"
    },
    {
        "question": "Find the number of permutations of 5 different things taken 3 at a time.",
        "options": ["60", "120", "24", "12"],
        "answer": "60"
    },
    {
        "question": "How many different 4-letter words can be formed from the letters of the word ‘PHONE’?",
        "options": ["24", "12", "48", "60"],
        "answer": "24"
    },
    {
        "question": "In how many ways can 5 people be arranged in a row?",
        "options": ["120", "60", "24", "12"],
        "answer": "120"
    },
    {
        "question": "How many different signals can be generated by arranging 5 flags of different colors in a vertical line?",
        "options": ["120", "60", "24", "12"],
        "answer": "120"
    },
    {
        "question": "Find the number of permutations of the letters of the word ‘MISSISSIPPI’.",
        "options": ["34650", "69300", "138600", "277200"],
        "answer": "34650"
    },
    {
        "question": "In how many ways can a committee of 3 be formed from a group of 5 people?",
        "options": ["10", "20", "30", "40"],
        "answer": "10"
    },
    {
        "question": "How many different selections of 3 books can be made from a shelf containing 8 books?",
        "options": ["56", "48", "36", "24"],
        "answer": "56"
    }
]
let data2 = [
    {
        "question": "In how many ways can 10 people be divided into two groups of 5 each?",
        "options": ["252", "315", "360", "420"],
        "answer": "252"
    },
    {
        "question": "How many different 5-letter words can be formed from the letters of the word 'EQUATION' if the word must start with a vowel and end with a consonant?",
        "options": ["120", "240", "360", "480"],
        "answer": "240"
    },
    {
        "question": "In how many ways can 7 boys and 4 girls be arranged in a row if no two girls sit together?",
        "options": ["(7!) * (8P4)", "(7!) * (7P4)", "(8!) * (7P4)", "(8!) * (8P4)"],
        "answer": "(7!) * (8P4)"
    },
    {
        "question": "How many different 6-digit numbers can be formed using the digits 1, 2, 3, 4, 5, and 6 if the number must be even and divisible by 5?",
        "options": ["60", "120", "180", "240"],
        "answer": "120"
    },
    {
        "question": "In how many ways can a committee of 5 be formed from 6 men and 4 women if there must be at least 3 men and 1 woman on the committee?",
        "options": ["180", "210", "240", "270"],
        "answer": "210"
    },
    {
        "question": "How many different 4-letter words can be formed from the letters of the word 'MISSISSIPPI' if the word must contain at least two S's?",
        "options": ["360", "420", "480", "540"],
        "answer": "420"
    },
    {
        "question": "In how many ways can 8 people be divided into 2 groups of 4 each?",
        "options": ["70", "105", "140", "175"],
        "answer": "70"
    },
    {
        "question": "How many different 5-digit numbers can be formed from the digits 0, 1, 2, 3, and 4 if repetition is allowed and the number must be divisible by 4?",
        "options": ["600", "800", "1000", "1200"],
        "answer": "800"
    },
    {
        "question": "In how many ways can 6 boys and 4 girls be arranged in a circle if no two girls sit together?",
        "options": ["(6!) * (7P4)", "(6!) * (6P4)", "(7!) * (7P4)", "(7!) * (8P4)"],
        "answer": "(6!) * (7P4)"
    },
    {
        "question": "How many different 7-digit numbers can be formed using the digits 1, 2, 3, 4, 5, 6, and 7 if the number must be odd and divisible by 3?",
        "options": ["840", "1260", "1680", "2100"],
        "answer": "1680"
    },
    {
        "question": "In how many ways can a committee of 6 be formed from 8 men and 5 women if there must be at least 3 men and 2 women on the committee?",
        "options": ["1120", "1400", "1680", "1960"],
        "answer": "1400"
    },
    {
        "question": "How many different 5-letter words can be formed from the letters of the word 'STATISTICS' if the word must contain exactly two T's?",
        "options": ["1800", "2160", "2520", "2880"],
        "answer": "2160"
    },
    {
        "question": "In how many ways can 9 people be divided into 3 groups of 3 each?",
        "options": ["1680", "2100", "2520", "2940"],
        "answer": "1680"
    },
    {
        "question": "How many different 6-digit numbers can be formed using the digits 0, 1, 2, 3, 4, and 5 if repetition is not allowed and the number must be greater than 300000?",
        "options": ["300", "360", "420", "480"],
        "answer": "360"
    },
    {
        "question": "In how many ways can 7 boys and 5 girls be arranged in a row if no two boys sit together and no two girls sit together?",
        "options": ["(7!) * (8P5)", "(7!) * (7P5)", "(8!) * (7P5)", "(8!) * (8P5)"],
        "answer": "(7!) * (8P5)"
    },
    {
        "question": "How many different 7-digit numbers can be formed using the digits 1, 2, 3, 4, 5, 6, and 7 if the number must be divisible by 7 and 11?",
        "options": ["60", "120", "180", "240"],
        "answer": "60"
    },
    {
        "question": "In how many ways can a committee of 7 be formed from 9 men and 6 women if there must be at least 4 men and 3 women on the committee?",
        "options": ["3780", "4200", "4620", "5040"],
        "answer": "4200"
    },
    {
        "question": "How many different 5-letter words can be formed from the letters of the word 'EXAMINATION' if the word must contain exactly two A's?",
        "options": ["3600", "4200", "4800", "5400"],
        "answer": "4200"
    },
    {
        "question": "In how many ways can 10 people be divided into 2 groups of 3, 3, and 4 each?",
        "options": ["12600", "14000", "15400", "16800"],
        "answer": "12600"
    },
    {
        "question": "How many different 6-digit numbers can be formed using the digits 0, 1, 2, 3, 4, and 5 if repetition is not allowed and the number must be odd and divisible by 5?",
        "options": ["120", "180", "240", "300"],
        "answer": "120"
    },
    {
        "question": "In how many ways can 8 people be seated around a circular table if two particular persons must not sit together?",
        "options": ["(7!) * 6", "(6!) * 5", "(8!) / 2", "(7!) * 8"],
        "answer": "(7!) * 6"
    },
    {
        "question": "How many different 5-digit numbers can be formed from the digits 1, 2, 3, 4, and 5 if repetition is not allowed and the number must be divisible by 5?",
        "options": ["48", "60", "72", "96"],
        "answer": "48"
    },
    {
        "question": "A committee of 5 is to be formed from 6 men and 4 women. In how many ways can this be done if at least 3 men must be on the committee?",
        "options": ["120", "140", "160", "180"],
        "answer": "160"
    },
    {
        "question": "In how many ways can 6 boys and 6 girls be seated in a row so that no two boys sit together?",
        "options": ["(6!)^2 * 7!", "(6!)^2 * 6!", "7! * 6!", "8! * 6!"],
        "answer": "(6!)^2 * 7!"
    },
    {
        "question": "How many different 7-digit numbers can be formed using the digits 1, 2, 3, 4, 5, 6, and 7 if the number must be divisible by 11?",
        "options": ["840", "1680", "2520", "3360"],
        "answer": "1680"
    },
    {
        "question": "A box contains 5 red balls, 4 green balls, and 3 blue balls. In how many ways can 4 balls be drawn from the box if at least one ball of each color must be included?",
        "options": ["120", "180", "240", "300"],
        "answer": "180"
    },
    {
        "question": "In how many ways can a cricket team of 11 be selected from 15 players if 2 particular players must be included and 3 particular players must be excluded?",
        "options": ["120", "180", "240", "300"],
        "answer": "120"
    },
    {
        "question": "How many different words can be formed using all the letters of the word 'MISSISSIPPI' if the two I's must not be together?",
        "options": ["33600", "40320", "45360", "50400"],
        "answer": "33600"
    },
    {
        "question": "In how many ways can 5 boys and 5 girls be seated in a row if no two boys sit together and no two girls sit together?",
        "options": ["(5!)^2 * 2!", "(5!)^2 * 4!", "(5!)^2 * 6!", "(5!)^2 * 8!"],
        "answer": "(5!)^2 * 6!"
    },
    {
        "question": "How many different 6-digit numbers can be formed using the digits 0, 1, 2, 3, 4, and 5 if repetition is not allowed and the number must be divisible by 3?",
        "options": ["480", "600", "720", "840"],
        "answer": "600"
    },
    {
        "question": "In how many ways can a committee of 5 be formed from 6 men and 4 women if there must be at least 2 men and 2 women on the committee?",
        "options": ["150", "180", "210", "240"],
        "answer": "180"
    },
    {
        "question": "In how many ways can 10 people be divided into two groups of 5 each?",
        "options": ["252", "315", "360", "420"],
        "answer": "252"
    },
    {
        "question": "How many different 5-letter words can be formed from the letters of the word 'EQUATION' if the word must start with a vowel and end with a consonant?",
        "options": ["120", "240", "360", "480"],
        "answer": "240"
    },
    {
        "question": "In how many ways can 7 boys and 4 girls be arranged in a row if no two girls sit together?",
        "options": ["(7!) * (8P4)", "(7!) * (7P4)", "(8!) * (7P4)", "(8!) * (8P4)"],
        "answer": "(7!) * (8P4)"
    },
    {
        "question": "How many different 6-digit numbers can be formed using the digits 1, 2, 3, 4, 5, and 6 if the number must be even and divisible by 5?",
        "options": ["60", "120", "180", "240"],
        "answer": "120"
    },
    {
        "question": "In how many ways can a committee of 5 be formed from 6 men and 4 women if there must be at least 3 men and 1 woman on the committee?",
        "options": ["180", "210", "240", "270"],
        "answer": "210"
    },
    {
        "question": "How many different 4-letter words can be formed from the letters of the word 'MISSISSIPPI' if the word must contain at least two S's?",
        "options": ["360", "420", "480", "540"],
        "answer": "420"
    },
    {
        "question": "In how many ways can 8 people be divided into 2 groups of 4 each?",
        "options": ["70", "105", "140", "175"],
        "answer": "70"
    },
    {
        "question": "How many different 5-digit numbers can be formed from the digits 0, 1, 2, 3, and 4 if repetition is allowed and the number must be divisible by 4?",
        "options": ["600", "800", "1000", "1200"],
        "answer": "800"
    },
    {
        "question": "In how many ways can 6 boys and 4 girls be arranged in a circle if no two girls sit together?",
        "options": ["(6!) * (7P4)", "(6!) * (6P4)", "(7!) * (7P4)", "(7!) * (8P4)"],
        "answer": "(6!) * (7P4)"
    },
    {
        "question": "How many different 7-digit numbers can be formed using the digits 1, 2, 3, 4, 5, 6, and 7 if the number must be odd and divisible by 3?",
        "options": ["840", "1260", "1680", "2100"],
        "answer": "1680"
    },
    {
        "question": "In how many ways can a committee of 6 be formed from 8 men and 5 women if there must be at least 3 men and 2 women on the committee?",
        "options": ["1120", "1400", "1680", "1960"],
        "answer": "1400"
    },
    {
        "question": "How many different 5-letter words can be formed from the letters of the word 'STATISTICS' if the word must contain exactly two T's?",
        "options": ["1800", "2160", "2520", "2880"],
        "answer": "2160"
    },
]
console.log(data.length, data2.length)
let lists = [data, data2]
const audio = new Audio("podcast.mp3");
let socres = document.getElementById("score")
let exit = document.getElementById("exit")
let end = document.getElementById("end")
let questions = document.getElementById("pip");
let mute = document.getElementById("none")
let skip = document.getElementById("skip")
let butcontainer = document.getElementById("contain");
let quesno = 0
let Score = 0
let total = 0
let is = 0
audio.loop = true

mute.addEventListener("click", function () {
    if (audio.paused) {
        mute.textContent = "Pause"
        audio.play();

    } else {
        audio.pause();
        mute.textContent = "Play"

    }
}

)
console.log(data.length + data2.length)

function ques() {
    quesno++
    let i = Math.floor(Math.random() * lists[is].length)
    next()
    questions.innerHTML = `<b>Q${quesno} :</b> ${lists[is][i].question}`
    console.log(lists[is][i].answer)
    lists[is][i].options.forEach(answer => {
        let button = document.createElement("button")
        button.innerText = answer
        button.classList = "but"
        butcontainer.appendChild(button)
        button.onclick = (e) => {
            let select = e.target
            Array.from(butcontainer.children).forEach(button => {
                if (button.innerText == lists[is][i].answer) {
                    button.classList.add("correct")
                }
                button.disabled = true
            })
            if (button.innerText == lists[is][i].answer) {
                if (Score >= 40) {
                    is = 1
                }
                Score++
                total++
                setTimeout(() => {
                    ques()
                }, 1000)
                console.log(`Score ${Score}/${total}`)
            }
            else {
                select.classList.add("incorrect")
                setTimeout(() => {
                    ques()
                }, 1000)
                total++
                console.log(`Score ${Score}/${total}`)
            }
        }
    })
}

function next() {
    while (butcontainer.firstChild) {
        butcontainer.removeChild(butcontainer.firstChild)
    }
}
ques()

skip.addEventListener("click", function () {
    ques()
})

end.addEventListener("click", function () {
    const marks = { score: Score, Total: total }
    localStorage.setItem('marks', JSON.stringify(marks));
    window.location.href = "resu.html"
})