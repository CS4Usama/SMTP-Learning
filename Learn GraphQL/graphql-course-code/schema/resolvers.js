const { UserList, MovieList } = require('../FakeData');
const _ = require('lodash');

const resolvers = {
    Query: {
        // USER RESOLVERS
        // users() {
        users: () => {
            return UserList;
        },
        user: (parent, args) => {
            
            const id = args.id;
            const user = _.find(UserList, { id: Number(id) });
            return user;
        },

        // USER RESOLVERS
        movies: () => {
            return MovieList
        },
        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(MovieList, { name: name });
            // const movie = MovieList.find(movie => movie.name === name);
            return movie;
        },
    },

    User: {
        favoriteMovies: () => {
            return _.filter(MovieList, (movie) => movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010);
        },
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            const lastID = UserList[UserList.length - 1].id;
            user.id = lastID + 1;
            UserList.push(user);
            return user;
        },
        updateUserName: (parent, args) => {
            // const id = args.input.id;
            // const newUserName = args.input.newUserName;
            const {id, newUserName} = args.input;   // Destructuring here
            let updatedUser;
            UserList.forEach((user) => {
                if(user.id === Number(id)) {
                    user.userName = newUserName;
                    updatedUser = user;
                }
            });
            return updatedUser;
        },
        deleteUser: (parent, args) => {
            const id = args.id;
            _.remove(UserList, (user) => user.id === Number(id));
            // return null;
            return 'User Deleted Successfully';
        },
    },
};

module.exports = { resolvers };
