//babel.config.js
MediaSourceHandle.expos = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                }
            }
        ]
    ]
}