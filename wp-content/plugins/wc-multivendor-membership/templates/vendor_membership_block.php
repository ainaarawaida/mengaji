<?php
/**
 * WCFM plugin view
 *
 * WCFMgs Memberships BLock Template
 *
 * @author 		WC Lovers
 * @package 	wcfmvm/templates
 * @version   1.0.0
 */

global $WCFM, $WCFMvm;
  
?>

<div id="wcfmu-feature-missing-message" class="wcfm-warn-message wcfm-wcfmu" style="display: block;">
	<p><span class="wcfmfa fa-exclamation-triangle"></span>
	<?php printf( __( 'Restricted: You are not allowed to access this page. %sPlease contact %sPage Admin%s for more details.', 'wc-multivendor-membership' ), '<strong>', '</strong>', '<strong>', '</strong>', '<br />', '<strong>', '</strong>' ); ?></p>
</div>