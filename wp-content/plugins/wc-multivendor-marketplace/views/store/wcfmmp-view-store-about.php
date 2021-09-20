<?php
/**
 * The Template for displaying all store description.
 *
 * @package WCfM Markeplace Views Description
 *
 * For edit coping this to yourtheme/wcfm/store 
 *
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

global $WCFM, $WCFMmp, $wpdb;

$wcfm_shop_description = apply_filters( 'wcfmmp_store_about', apply_filters( 'woocommerce_short_description', $store_user->get_shop_description() ), $store_user->get_shop_description() );

?>

<div class="_area" id="wcfmmp_store_about">
	<div class="wcfmmp-store-description">
	 
	<!-- Profile Background -->
	<?php

$sql = "SELECT * from {$wpdb->prefix}mengaji";
		$sql .= " WHERE user_id = '{$store_user->id}'";
		
		$mengaji = $wpdb->get_results($sql);
		// /print_r("<pre>");print_r($mengaji);
	?>
		<div class="wcfm-store-about">
			<div class="wcfm_store_description" >

				<h4>Background</h4>
					Guru atau pusat pengajian? : <br>
						<?php echo (isset($mengaji[0]->type_ngaji) == 'guru\_ngaji') ? 'Guru mengaji' : 'Pusat Pengajian' ; ?>
					<br><br>
					<?php if(isset($mengaji[0]->type_ngaji) == 'guru\_ngaji'){ ?>
						Kategori yang pernah mengajar atau ingin mengajar:
						<br>
						<?php 
						$ajarsiapa = explode("#", $mengaji[0]->ajar_siapa) ;
						foreach ($ajarsiapa AS $key => $val){
							echo "-> ".$val."<br>" ;
						}
						?>
						<br><br>
						Institusi pengajian dan tahap kelayakan :<br>
						<?php echo (isset($mengaji[0]->institusi_pengajian)) ? $mengaji[0]->institusi_pengajian : '' ; ?>
						<br><br>
						Kemahiran Mengajar:
						<br>
						<?php 
						$kemahiran_mengajar = explode("#", $mengaji[0]->kemahiran_mengajar) ;
						foreach ($kemahiran_mengajar AS $key => $val){
							echo "-> ".$val."<br>" ;
						}
						?>
						<br><br>
						Bahasa Pertuturan:
						<br>
						<?php 
						$bahasa_pertuturan = explode("#", $mengaji[0]->bahasa_pertuturan) ;
						foreach ($bahasa_pertuturan AS $key => $val){
							echo "-> ".$val."<br>" ;
						}
						?>
					<?php } ?>


			</div>
		
		</div>

	
	  <?php do_action( 'wcfmmp_store_before_about', $store_user->get_id() ); ?>
	
		<?php if( $wcfm_shop_description ) { ?>
			<div class="wcfm-store-about">
				<div class="wcfm_store_description" ><?php echo $wcfm_shop_description; ?></div>
			</div>
		<?php } ?>
		
		<?php do_action( 'wcfmmp_store_after_about', $store_user->get_id() ); ?>
		
	</div>
</div>