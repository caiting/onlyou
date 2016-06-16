/**
 * Created by tt on 16/6/14.
 */

require.config({
    baseUrl: "./",
    paths: {
        "react": "bower_components/react/react.min",
        "react-dom": "bower_components/react/react-dom.min",
        "browser":"node_modules/babel-core/browser.min"
    }

});

require(['react', 'react-dom','browser'], function (){

});