import { useState } from 'react';
import { useQuery, useLazyQuery, useMutation, gql } from '@apollo/client';

const QUERY_ALL_USERS = gql`
    query GetAllUsers {
        users {
            id
            name
            userName
            nationality
            age
        }
    }
`;
const QUERY_ALL_MOVIES = gql`
    query GetAllMovies {
        movies {
            id
            name
            yearOfPublication
            isInTheaters
        }
    }
`;
const GET_MOVIE_BY_NAME = gql`
    query Movie($name: String!) {
        movie(name: $name) {
            id
            name
            yearOfPublication
            isInTheaters
        }
    }
`;
const CREATE_USER_MUTATION = gql`
    mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
            id
            name
        }
    }
`;


export default function DisplayData() {
    const [movieSearch, setMovieSearch] = useState('');
    // Create User States
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');
    const [nationality, setNationality] = useState('');

    const { data, loading, error, refetch } = useQuery(QUERY_ALL_USERS);
    const { data: movieData } = useQuery(QUERY_ALL_MOVIES);
    const [ fetchMovieData, {data: movieSearchedData, error: movieSearchedError} ] = useLazyQuery(GET_MOVIE_BY_NAME);

    const [createUser] = useMutation(CREATE_USER_MUTATION);

    if(loading) {
        return <h3>Data is Loading...</h3>
    } else if(data) {
        console.log(data);
    } else if(error) {
        return <h3>Some Error Occurs while Fetching Data from GraphQL API</h3>
    }
    if(movieSearchedError) {
        console.log(movieSearchedError)
    }

    return(
        <div>

            <div>
                <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} />
                <input type='text' placeholder='Username' onChange={(e) => setUserName(e.target.value)} />
                <input type='number' placeholder='Age' onChange={(e) => setAge(e.target.value)} />
                <input type='text' placeholder='Nationality' onChange={(e) => setNationality(e.target.value.toUpperCase())} />
                {/* We can also write 'age' instead 'age:age' and inside onClick '()' is an anonymous function. */}
                <button
                    onClick={() => {
                        createUser({
                            variables: {
                                input: {name:name, userName, age:Number(age), nationality:nationality}
                            },
                        });
                        refetch();
                    }}
                >
                    Create User
                </button>
            </div>

            <h3>USERS</h3>
            {
                data &&
                    // 'data' is an object and map is an array's loop. 'users' is an array inside data object.
                    data.users.map((user) => {
                        return(
                            <div>
                                <p>ID: {user.id}</p>
                                <p>Name: {user.name}</p>
                                <p>Username: {user.userName}</p>
                                <p>Nationality: {user.nationality}</p>
                                <p>Age: {user.age}</p>
                                <br />
                            </div>
                        );
                    })
            }
            <h3>MOVIES</h3>
            {
                movieData &&
                    movieData.movies.map((movie) => {
                        return(
                            <div>
                                <p>ID: {movie.id}</p>
                                <p>Name: {movie.name}</p>
                                <p>Year of Publication: {movie.yearOfPublication}</p>
                                <p>Is In Theater: {movie.isInTheaters}</p>
                                <br />
                            </div>
                        );
                    })
            }

            <div>
                <input type='text' placeholder='Search here...' onChange={(e) => setMovieSearch(e.target.value)} />
                <button onClick={() => fetchMovieData({variables:{name: movieSearch}})}>Fetch Data</button>
                <div>
                    {
                        movieSearchedData ?
                            <div>
                                <p>Movie ID: {movieSearchedData.movie.id}</p>
                                <p>Movie Name: {movieSearchedData.movie.name}</p>
                                <p>Year of Publication: {movieSearchedData.movie.yearOfPublication}</p>
                                <p>Is In Theater: {movieSearchedData.movie.isInTheaters}</p>
                            </div>
                        :
                            movieSearchedError &&
                                <p>ERROR</p>
                    }
                </div>
                <br />
                <br />
            </div>
        </div>
    );
}
