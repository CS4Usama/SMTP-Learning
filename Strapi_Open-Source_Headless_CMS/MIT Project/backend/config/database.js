// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', '127.0.0.1'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'mit-project'),
//       user: env('DATABASE_USERNAME', 'postgres'),
//       password: env('DATABASE_PASSWORD', '0000'),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//   },
// });



module.exports = ({ env }) => ({
    defaultConnection: "default",
    connection: {
        client: 'postgres',
        connection: {
            host: env('DATABASE_HOST', '127.0.0.1'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'mitproject'),
            user: env('DATABASE_USERNAME', 'postgres'),
            password: env('DATABASE_PASSWORD', 'usama'),
            // ssl: env.bool('DATABASE_SSL', false),
            schema: env('DATABASE_SCHEMA', "public"),
        },
    },
});
