/**
 * WordPress dependencies
 */
import { createAtom, createDerivedAtom } from '@wordpress/data';

export const shortcutsByNameAtom = createAtom( {}, 'shortcuts-by-name' );
export const shortcutNamesAtom = createAtom( [], 'shortcut-names' );
export const shortcutsAtom = createDerivedAtom(
	( get ) => {
		const shortcutsByName = get( shortcutsByNameAtom );
		return get( shortcutNamesAtom ).map( ( id ) =>
			get( shortcutsByName[ id ] )
		);
	},
	() => {},
	'shortcuts'
);
