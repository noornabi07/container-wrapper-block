import { InnerBlocks } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import metadata from '../inc/block.json';
import Edit from './Edit';
import './editor.scss';

registerBlockType(metadata, {
	icon: {
		src: 'slides',
		foreground: '#FF0080'
	},

	// Build in Functions
	edit: Edit,

	save: () => <InnerBlocks.Content />,
});
