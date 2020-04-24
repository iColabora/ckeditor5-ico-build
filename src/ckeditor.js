/**
 * @license Copyright (c) 2014-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontSize.js';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js'

export default class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Autoformat,
	BlockQuote,
	Bold,
	CKFinder,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Italic,
	Link,
	List,
	MediaEmbed,
	PasteFromOffice,
	Table,
	TableToolbar,
	Base64UploadAdapter,
	FontSize,
	FontFamily,
	HorizontalLine,
	ImageResize,
	Underline,
	Essentials,
	Paragraph,
	Alignment
];

Editor.defaultConfig = {
	fontSize: {
        options: [
            9,
            11,
            13,
            'default',
            17,
            19,
            21
        ]
    },
    fontFamily: {
        options: [
            'default',
		    'Arial, Helvetica, sans-serif',
		    'Courier New, Courier, monospace',
		    'Georgia, serif',
		    'Lucida Sans Unicode, Lucida Grande, sans-serif',
		    'Tahoma, Geneva, sans-serif',
		    'Times New Roman, Times, serif',
		    'Trebuchet MS, Helvetica, sans-serif',
		    'Verdana, Geneva, sans-serif'
        ]
    },
    toolbar: {
		items: [
		    'heading',
		    '|',
		    'bold',
		    'italic',
		    'link',
		    'bulletedList',
		    'numberedList',
		    '|',
		    'fontSize',
		    'fontFamily',
		    '|',
		    'alignment:left',
		    'alignment:right',
		    'alignment:center',
		    'alignment:justify',
		    '|',
		    'indent',
		    'outdent',
		    '|',
		    'imageUpload',
		    'blockQuote',
		    'insertTable',
		    'mediaEmbed',
		    'undo',
		    'redo'
  		]
	},
	image: {
  		toolbar: [
		    'imageStyle:full',
		    'imageStyle:side',
		    '|',
		    'imageTextAlternative'
  		]
	},
	table: {
  		contentToolbar: [
		    'tableColumn',
		    'tableRow',
		    'mergeTableCells'
  		]
	}
};