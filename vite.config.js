import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
       
    //https://vite.dev/config/server-options    
    server: {
        port: 8080,
        hot: true
    },

//cf https://vite.dev/config/preview-options.html    
    
    //root: path.resolve(__dirname, 'src'),
    build: {
        assetsDir: "assets"
    },
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
        }
    }
});