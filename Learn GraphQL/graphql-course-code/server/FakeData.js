const UserList = [
    {
        id: 1,
        name: 'Usama',
        userName: 'CS4Usama',
        age: 21,
        nationality: 'PAKISTAN',
        friends: [
            {
                id: 2,
                name: 'ALi',
                userName: 'someName',
                age: 25,
                nationality: 'USA',
            },
            {
                id: 3,
                name: 'My_Name',
                userName: 'your_name',
                age: 30,
                nationality: 'TURKEY',
            },
        ],
    },
    {
        id: 2,
        name: 'ALi',
        userName: 'someName',
        age: 25,
        nationality: 'USA',
    },
    {
        id: 3,
        name: 'My_Name',
        userName: 'your_name',
        age: 30,
        nationality: 'TURKEY',
    },
    {
        id: 4,
        name: 'John Joe',
        userName: 'joe123',
        age: 28,
        nationality: 'CANADA',
        friends: [
            {
                id: 4,
                name: 'John Joe',
                userName: 'joe123',
                age: 28,
                nationality: 'CANADA',
            },
        ],
    },
    {
        id: 5,
        name: 'Robert Don',
        userName: 'don-robert',
        age: 34,
        nationality: 'AUSTRALIA',
    },
];


const MovieList = [
    {
        id: 1,
        name: "Avengers Endgame",
        yearOfPublication: 2019,
        isInTheaters: true,
    },
    {
        id: 2,
        name: "Interstellar",
        yearOfPublication: 2007,
        isInTheaters: true,
    },
    {
        id: 3,
        name: "Superbad",
        yearOfPublication: 2009,
        isInTheaters: true,
    },
    {
        id: 4,
        name: "PedroTech The Movie",
        yearOfPublication: 2035,
        isInTheaters: false,
    },
];

module.exports = { UserList, MovieList };
