export default ({ env }) => {
    // Debug environment variables
    console.log('Development database environment:', {
        DATABASE_CLIENT: env('DATABASE_CLIENT'),
        DATABASE_PUBLIC_URL: env('DATABASE_PUBLIC_URL'),
        DATABASE_PRIVATE_URL: env('DATABASE_PRIVATE_URL'),
        DATABASE_URL: env('DATABASE_URL'),
    });

    return {
        connection: {
            host: env('DATABASE_HOST', '::'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'railway'),
            user: env('DATABASE_USERNAME', 'postgres'),
            password: env('DATABASE_PASSWORD', 'pYQUMTwcjIlcVjjzaqHnoGPfkFIiXOhl'),
            ssl: false,
          },
    };
};