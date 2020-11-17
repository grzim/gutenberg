/**
 * WordPress dependencies
 */
import { createRegistryControl } from '@wordpress/data';

export const __unstableMarkAutomaticChangeFinalControl = function () {
	return {
		type: 'MARK_AUTOMATIC_CHANGE_FINAL_CONTROL',
	};
};

const controls = {
	SLEEP( { duration } ) {
		return new Promise( ( resolve ) => {
			setTimeout( resolve, duration );
		} );
	},

	MARK_AUTOMATIC_CHANGE_FINAL_CONTROL: createRegistryControl(
		( registry ) => () => {
			setTimeout(
				() =>
					registry
						.dispatch( 'core/block-editor' )
						.__unstableMarkAutomaticChangeFinal(),
				100
			);
		}
	),
};

export default controls;
