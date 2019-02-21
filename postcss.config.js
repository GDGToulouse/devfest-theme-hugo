module.exports = {
    plugins: [
        require('postcss-preset-env')({
            autoprefixer: {grid: true},
            stage: 3
        }),
        require('cssnano')({preset: 'default'})
    ]
};