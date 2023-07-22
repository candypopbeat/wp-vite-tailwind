import { defineConfig } from "vite";
import liveReload from 'vite-plugin-live-reload';
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import path from "path";

const themePath = '/wp-content/themes/wp_vite_tailwind';
const assets = process.env.NODE_ENV === 'development' ? '/' : '/dist/';

export default defineConfig ( {
	plugins: [
		liveReload( __dirname + '/**/*.php' ),
	],
	root: '',
	base: process.env.NODE_ENV === 'development' ? './' : '/dist/',
	build: {
		outDir: path.resolve( __dirname, './dist' ),
		emptyOutDir: true,
		manifest: true,
		target: 'es2018',
		rollupOptions: {
			input: {
				main: path.resolve( __dirname + '/main.js' )
			},
			output: {
				entryFileNames: `assets/[name].js`,
				chunkFileNames: `assets/[name].js`,
				assetFileNames: ( { name } ) => {
					if ( /\.css$/.test( name ?? '' ) ) {
						return 'assets/[name].[ext]';
					}
					if ( /\.js$/.test( name ?? '' ) ) {
						return 'assets/[name].[ext]';
					}
					return 'assets/[name].[ext]';
				}
			},
		},
		assetsInlineLimit: 0,
		minify: true,
		write: true,
	},
	server: {
		cors: true,
		strictPort: true,
		port: 3000,
		https: false,
		hmr: {
			host: 'localhost'
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `$base-dir: '` + themePath + assets + `';`,
			},
		},
		postcss: {
			plugins: [
				tailwindcss,
				autoprefixer,
			],
		}
	},
} );
