const babelConfig = {
    babelrc: false,
    "presets":[],
    "plugins":[],
}

export const clientBabel = {
    ...babelConfig,
    "presets":[
        [
            "@babel/preset-env",
            {
                "loose": true,
                "modules": false,
                "useBuiltIns": "entry",
            }
        ],
        "@babel/preset-react"
    ],
    "plugins": [
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-transform-runtime",
        [
            "import",
            {
                "libraryName": "antd",
                "libraryDirectory": "es",
                "style": true
            }
        ],
        "@babel/plugin-proposal-class-properties",
    ]
};

export const serverBabel = {
    ...babelConfig,
    "presets":[
        [
            "@babel/preset-env",
            {
                "modules": false,
                "targets":{
                    node: 'current',
                }
            }
        ],
        "@babel/preset-react"
    ],
    plugins:[
        [
            "import",
            {
                "libraryName": "antd",
            }
        ],
        "@babel/plugin-proposal-class-properties",
        "dynamic-import-node"
    ]
}