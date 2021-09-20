// First remove node_modules folder then check following link to install gulp  https://gulpjs.com/docs/en/getting-started/quick-start/
var gulp = require('gulp'),
	// Prepare and optimize code etc
	autoprefixer = require('autoprefixer'),
	browserSync = require('browser-sync').create(),
	jshint = require('gulp-jshint'),
	postcss = require('gulp-postcss'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	babel = require('gulp-babel'),
	rename = require('gulp-rename'),
	stripDebug = require('gulp-strip-debug'),
	zip = require('gulp-zip'),
	merge = require('merge-stream');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rsync = require('gulp-rsync');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');

var xstoreConfig = {
	rsync: {
		options: {
			args: ["--verbose"],
			exclude: [
				".git*",
				"css/",
				"fonts",
				//"languages",
				"node_modules",
				"images",
				"woocommerce",
				"less/theme",
				"less/final.css",
				"less/style.less",
				"framework/tmp/*.txt",
				"framework/tmp/*.png",
				"theme/",
				"Gruntfile.js",
				"README.md",
				"rtl.css",
				"screenshot.png",
				"style.css",
				"woosearchform.php"
			],
			recursive: true
		},
	},
	concat: {
		style: [
			'less/cssv.css',
		],
		xstore: [
			"less/config.less",
			"less/base/mixins.less",
			'less/base/*.less',
			'less/layout/header.less',
			'less/layout/header-ltr.less',
			'less/layout/header/parts/promo-text-carousel.less',
			'less/layout/grid-columns.less',
			'less/layout/main.less',
			'less/layout/positions.less',
			'less/layout/positions-ltr.less',

			"less/modules/socials/icons.less",
			"less/modules/socials/icons-ltr.less",

			'less/layout/footer-layout.less',
			'less/layout/footer-layout-ltr.less',

			'less/modules/global/*.less',
			'!less/modules/global/skeleton.less',

			'less/modules/animations.less',
			'less/modules/animations-ltr.less',

			'less/modules/magnific-popup.less',

			// widgets
			// contains woocommerce widgets but mostly it is used
			'less/modules/widgets/*.less',
		],
		xstore_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			'less/base/*.less',
			'!less/base/*-ltr.less',
			'less/base-rtl/*.less',
			'less/layout/header.less',
			'less/layout-rtl/header.less',
			'less/layout/header/parts/promo-text-carousel.less',
			'less/layout-rtl/header/parts/promo-text-carousel.less',
			'less/layout-rtl/grid-columns.less',
			'less/layout/main.less',
			'less/layout-rtl/main.less',
			'less/layout/positions.less',
			'less/layout-rtl/positions.less',

			"less/modules/socials/icons.less",
			"less/modules/socials/icons-rtl.less",

			'less/layout/footer-layout.less',
			'less/layout-rtl/footer-layout.less',

			'less/modules/global/*.less',
			'!less/modules/global/skeleton.less',
			'!less/modules/global/*-ltr.less',
			'less/modules/global-rtl/*.less',
			'!less/modules/global-rtl/skeleton.less',

			'less/modules/animations.less',
			'less/modules/animations-rtl.less',

			'less/modules/magnific-popup.less',
			'less/modules/magnific-popup-rtl.less',

			// widgets
			// contains woocommerce widgets but mostly it is used
			'less/modules/widgets/*.less',
			'less/modules/widgets-rtl/*.less',
			'!less/modules/widgets/*-ltr.less',
		],
		dark: [
			"less/config.less",
			"less/base/mixins.less",
			"less/dark.less"
		],
		et_core_plugin_off: [
			"less/config.less",
			"less/base/mixins.less",
			"less/et-core-plugin-off.less"
		],
		slick_library: [
			"less/config.less",
			"less/base/mixins.less",
			"less/libs/slick.less"
		],
		skeleton: [
			"less/config.less",
			"less/base/mixins.less",
			'less/modules/global/skeleton.less',
		],
		skeleton_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			'less/modules/global/skeleton.less',
			'less/modules/global-rtl/skeleton.less',
		],
		sidebar: [
			"less/config.less",
			"less/base/mixins.less",
			'less/layout/sidebar.less',
		],
		off_canvas: [
			"less/config.less",
			"less/base/mixins.less",
			'less/layout/off-canvas.less',
			'less/layout/off-canvas-ltr.less',
		],
		off_canvas_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			'less/layout/off-canvas.less',
			'less/layout-rtl/off-canvas.less',
		],
		mobile_panel: [
			"less/config.less",
			"less/base/mixins.less",
			'less/layout/mobile-panel.less',
		],
		header_search: [
			"less/config.less",
			"less/base/mixins.less",
			'less/layout/header/parts/search.less',
			'less/layout/header/parts/search-ltr.less',
		],
		header_search_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			'less/layout/header/parts/search.less',
			'less/layout-rtl/header/parts/search.less',
		],
		ajax_search: [
			"less/config.less",
			"less/base/mixins.less",
			'less/layout/header/parts/ajax-search.less',
		],
		ajax_search_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			'less/layout/header/parts/ajax-search.less',
			'less/layout-rtl/header/parts/ajax-search.less',
		],
		full_width_search: [
			"less/config.less",
			"less/base/mixins.less",
			'less/layout/header/parts/full-width-search.less',
		],
		header_vertical: [
			"less/config.less",
			"less/base/mixins.less",
			'less/layout/header/header-vertical.less',
		],
		header_vertical_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			'less/layout/header/header-vertical.less',
			'less/layout-rtl/header/header-vertical.less',
		],
		header_menu: [
			"less/config.less",
			"less/base/mixins.less",
			'less/layout/header/parts/menu.less',
			'less/layout/header/parts/menu-ltr.less',
		],
		header_menu_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			'less/layout/header/parts/menu.less',
			'less/layout-rtl/header/parts/menu.less',
		],
		mobile_menu: [
			"less/config.less",
			"less/base/mixins.less",
			'less/layout/header/parts/mobile-menu.less',
		],
		mobile_menu_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			'less/layout/header/parts/mobile-menu.less',
			'less/layout-rtl/header/parts/mobile-menu.less',
		],
		all_departments_menu: [
			"less/config.less",
			"less/base/mixins.less",
			'less/layout/header/parts/all-departments-menu.less',
		],
		all_departments_menu_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			'less/layout/header/parts/all-departments-menu.less',
			'less/layout-rtl/header/parts/all-departments-menu.less'
		],
		account: [
			"less/config.less",
			"less/base/mixins.less",
			'less/layout/header/parts/account.less',
			'less/layout/header/parts/account-ltr.less',
		],
		account_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			'less/layout/header/parts/account.less',
			'less/layout-rtl/header/parts/account.less',
		],
		header_contacts: [
			"less/config.less",
			"less/base/mixins.less",
			'less/layout/header/parts/contacts.less',
			'less/layout/header/parts/contacts-ltr.less',
		],
		header_contacts_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			'less/layout/header/parts/contacts.less',
			'less/layout-rtl/header/parts/contacts.less',
		],
		toggles_by_arrow: [
			"less/config.less",
			"less/base/mixins.less",
			'less/layout/toggles-by-arrow.less',
		],
		widgets_open_close: [
			"less/config.less",
			"less/base/mixins.less",
			'less/layout/widgets-open-close-ltr.less',
			'less/layout/widgets-open-close.less',
		],
		widgets_open_close_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			'less/layout-rtl/widgets-open-close.less',
			'less/layout/widgets-open-close.less',
		],
		sidebar_off_canvas: [
			"less/config.less",
			"less/base/mixins.less",
			'less/layout/sidebar-off-canvas.less',
			'less/layout/sidebar-off-canvas-ltr.less',
		],
		sidebar_off_canvas_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			'less/layout/sidebar-off-canvas.less',
			'less/layout-rtl/sidebar-off-canvas.less',
		],
		sidebar_widgets_with_scroll: [
			"less/config.less",
			"less/base/mixins.less",
			'less/layout/sidebar-widgets-with-scroll.less',
			'less/layout/sidebar-widgets-with-scroll-ltr.less',
		],
		sidebar_widgets_with_scroll_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			'less/layout/sidebar-widgets-with-scroll.less',
			'less/layout-rtl/sidebar-widgets-with-scroll.less',
		],
		blog_global: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/blog-global.less",
			"less/blog/blog-formats/video.less",// small size
		],
		blog_global_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/blog-global.less",
			"less/blog/blog-global-rtl.less",
			"less/blog/blog-formats/video.less",// small size
		],
		blog_masonry: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/blog-masonry.less"
		],
		blog_full_width: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/full-width.less"
		],
		blog_ajax: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/blog-ajax.less",
			// "less/base/et-ajax-element.less", // in global css
		],
		pagination: [
			"less/config.less",
			"less/base/mixins.less",
			'less/blog/pagination.less',
		],
		pagination_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			'less/blog/pagination.less',
			'less/blog/pagination-rtl.less',
		],
		star_rating: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/star-rating.less"
		],
		star_rating_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/star-rating.less",
			"less/blog/star-rating-rtl.less",
		],
		comments: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/comments.less",
			"less/blog/comments-ltr.less"
		],
		comments_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/comments.less",
			"less/blog/comments-rtl.less"
		],
		navigation: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/single-post/navigation.less",
			"less/blog/single-post/navigation-ltr.less",
		],
		navigation_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/single-post/navigation.less",
			"less/blog/single-post/navigation-rtl.less"
		],
		single_post_global: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/single-post/single-post.less"
		],
		single_post_global_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/single-post/single-post.less",
			"less/blog/single-post/single-post-rtl.less"
		],
		single_meta: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/single-post/meta.less"
		],
		single_post_framed: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/single-post/framed.less"
		],
		single_post_large: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/single-post/large.less"
		],
		single_post_large2: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/single-post/large2.less"
		],
		single_post_full_width: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/single-post/full-width.less"
		],

		post_types_global: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/blog-types/global.less"
		],
		post_types_framed: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/blog-types/framed.less"
		],
		post_types_framed_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/blog-types/framed.less",
			"less/blog/blog-types/framed-rtl.less"
		],
		post_types_grid_grid2: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/blog-types/grid-grid2.less"
		],
		post_types_small_chess: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/blog-types/small-chess.less"
		],
		post_types_small_chess_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/blog-types/small-chess.less",
			"less/blog/blog-types/small-chess-rtl.less"
		],
		post_types_timeline: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/blog-types/timeline.less",
			"less/blog/blog-types/timeline2.less"
		],
		post_types_timeline_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/blog-types/timeline.less",
			"less/blog/blog-types/timeline2.less",
			"less/blog/blog-types/timeline-rtl.less",
			"less/blog/blog-types/timeline2-rtl.less",
		],
		post_types_with_author: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/blog-types/with-author.less"
		],
		post_types_with_author_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/blog-types/with-author.less",
			"less/blog/blog-types/with-author-rtl.less"
		],
		post_formats_quote: [
			"less/config.less",
			"less/base/mixins.less",
			"less/blog/blog-formats/quote.less"
		],

		single_testimonials: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/testimonials/single.less",
		],

		elementor_etheme_testimonials: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/builders/elementor/etheme-testimonials.less",
		],

		elementor_etheme_custom_masonry: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/builders/elementor/etheme-custom-masonry.less",
		],

		elementor_etheme_google_map: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/builders/elementor/etheme-google-map.less",
		],

		elementor_et_advance_tabs: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/builders/elementor/et-advance-tabs.less",
		],

		elementor_etheme_contact_form_7: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/builders/elementor/etheme-contact-form-7.less",
		],

		elementor_etheme_mailchimp: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/builders/elementor/etheme-mailchimp.less",
		],

		wpbakery: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/builders/wpb/global/*.less",
			'!less/modules/builders/wpb/global/*-rtl.less',
		],

		wpbakery_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/builders/wpb/global/*.less"
		],

		elementor: [
			"less/config.less",
			"less/base/mixins.less",
			// "less/modules/builders/global/*.less",
			"less/modules/builders/elementor/global.less",
			// "less/modules/builders/elementor/*.less",
		],

		breadcrumbs: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/page-headings.less",
			"less/modules/page-headings-ltr.less"
		],

		breadcrumbs_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/page-headings.less",
			"less/modules/page-headings-rtl.less"
		],

		mega_menu: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/mega-menu.less",
			"less/modules/mega-menu-ltr.less",
		],

		mega_menu_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/mega-menu.less",
			"less/modules/mega-menu-rtl.less"
		],

		fixed_footer: [
			"less/config.less",
			"less/base/mixins.less",
			"less/layout/fixed-footer.less"
		],

		back_top: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/back-top.less"
		],

		back_top_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/back-top.less",
			"less/modules/back-top-rtl.less"
		],

		portfolio: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/portfolio/portfolio.less",
			"less/modules/portfolio/portfolio-ltr.less"
		],

		portfolio_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/portfolio/portfolio.less",
			"less/modules/portfolio/portfolio-rtl.less",
		],
		//
		search_page: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/search/search-no-results.less",
			"less/modules/search/search-page.less"
		],

		banners_global: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/banners/global.less"
		],

		banner: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/banners/banner.less"
		],

		team_member: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/banners/team-member.less"
		],

		et_slider: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/builders/global/et-slider.less"
		],

		categories_carousel: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/builders/global/categories-carousel.less"
		],

		icon_boxes: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/builders/global/icon-boxes.less"
		],

		// et-blog
		et_blog: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/blog/et-blog.less",
			"less/modules/blog/et-blog-ltr.less"
		],

		et_blog_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/blog/et-blog.less",
			"less/modules/blog/et-blog-rtl.less"
		],

		// woocommerce
		brands_list: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/woocommerce/brand-list.less"
		],
		brands_carousel: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/woocommerce/brands-carousel.less"
		],
		categories_list_grid: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/woocommerce/categories-list-grid.less"
		],
		categories_menu_element: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/woocommerce/categories-menu-element.less"
		],
		et_offer: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/woocommerce/et-offer.less"
		],

		et_offer_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/woocommerce/et-offer.less",
			"less/modules/woocommerce/et-offer-rtl.less"
		],

		// builders
		elementor_categories: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/builders/elementor/categories.less"
		],

		// wpb
		wpb_autoscrolling_text: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/builders/wpb/autoscrolling-text.less"
		],
		wpb_banners: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/builders/wpb/banners.less"
		],
		wpb_et_offer: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/builders/wpb/et-offer.less"
		],
		wpb_et_timer: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/et-timer.less",
			"less/modules/builders/wpb/et-timer.less"
		],
		wpb_images_carousel: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/builders/wpb/images-carousel.less"
		],
		wpb_instagram: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/builders/wpb/instagram.less"
		],
		wpb_look_book: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/builders/wpb/look-book.less"
		],

		wpb_thelook: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/builders/wpb/thelook.less"
		],

		wpb_testimonials: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/builders/wpb/testimonials.less"
		],

		// photoswipe
		photoswipe: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/photoswipe/default-skin.less",
			"less/modules/photoswipe/photoswipe.less"
		],

		page_404: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/404-page.less",
		],

		blank_page: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/blank-page.less",
		],

		contact_forms: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/contact-form.less",
			"less/modules/mailchimp.less",
			"less/modules/mailchimp-ltr.less",
		],

		contact_forms_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/contact-form.less",
			"less/modules/contact-form-rtl.less",
			"less/modules/mailchimp.less",
			"less/modules/mailchimp-rtl.less",
		],

		dropcap: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/dropcap.less",
		],

		dropcap_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/dropcap.less",
			"less/modules/dropcap-rtl.less",
		],

		mark_text: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/mark-text.less",
		],

		et_timer: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/et-timer.less",
		],

		etheme_popup: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/etheme-popup.less",
		],

		etheme_popup_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/etheme-popup.less",
			"less/modules/etheme-popup-rtl.less",
		],

		socials_login: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/socials/login.less",
		],

		instagram: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/instagram.less",
		],

		instagram_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/instagram.less",
			"less/modules/instagram-rtl.less",
		],

		isotope_filters: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/isotope-filters.less",
		],

		tabs: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/tabs.less",
		],

		tabs_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/tabs.less",
			"less/modules/tabs-rtl.less",
		],

		woocommerce_global: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/global.less",
			"less/shop/global-ltr.less",

			// cart-icon-design
			"less/shop/cart-icon-design.less",
		],

		woocommerce_global_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/global.less",
			"less/shop/global-rtl.less",

			// cart-icon-design
			"less/shop/cart-icon-design.less",
		],

		woocommerce_archive: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/layout.less",
			"less/blog/star-rating.less",
			"less/shop/content-product.less",
			"less/shop/content-category.less",

			"less/shop/product-grid-list.less",

			// too small css
			"less/shop/pages/track-order.less",

			// 3d-party plugins css
			"less/shop/3d-party.less",
		],

		woocommerce_archive_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/layout.less",
			"less/shop/layout-rtl.less",
			"less/blog/star-rating.less",
			"less/blog/star-rating-rtl.less",
			"less/shop/content-product.less",
			"less/shop/content-product-rtl.less",
			"less/shop/content-category.less",

			"less/shop/product-grid-list.less",
			"less/shop/product-grid-list-rtl.less",

			// too small css
			"less/shop/pages/track-order.less",

			// 3d-party plugins css
			"less/shop/3d-party.less",
			"less/shop/3d-party-rtl.less",
		],

		cart_widget: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/cart-widget.less",
		],

		cart_widget_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/cart-widget.less",
			"less/shop/cart-widget-rtl.less",
		],

		yith_compare: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/yith-compare.less",
		],

		sb_infinite_scroll_load_more: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/sb-infinite-scroll-load-more.less",
		],

		catalog_mode: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/catalog-mode.less",
		],

		shop_full_width: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/shop-full-width.less",
		],

		products_full_screen: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/products-full-screen.less",
		],

		special_cart_breadcrumbs: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/pages/special-cart-breadcrumbs.less",
		],

		special_cart_breadcrumbs_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/pages/special-cart-breadcrumbs.less",
			"less/shop/pages-rtl/special-cart-breadcrumbs.less",
		],

		filter_area: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/filter-area.less",
		],

		filter_area_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/filter-area.less",
			"less/shop/filter-area-rtl.less",
		],

		quick_view: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/quick-view.less",
		],

		quick_view_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/quick-view.less",
			"less/shop/quick-view-rtl.less",
		],

		cart_page: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/pages/cart-ltr.less",
			"less/shop/pages/cart.less",
		],

		cart_page_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/pages/cart.less",
			"less/shop/pages-rtl/cart.less",
		],

		checkout_page: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/pages/checkout.less",
		],

		checkout_page_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/pages/checkout.less",
			"less/shop/pages-rtl/checkout.less",
		],

		thank_you_page: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/pages/thank-you.less",
		],

		account_page: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/pages/account.less",
			"less/shop/pages/only-title-breadcrumbs.less",
		],

		account_page_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/pages/account.less",
			"less/shop/pages-rtl/account.less",
			"less/shop/pages/only-title-breadcrumbs.less",
		],

		wishlist_page: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/pages/wishlist.less",
			"less/shop/pages/only-title-breadcrumbs.less",
		],

		wishlist_page_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/pages/wishlist.less",
			"less/shop/pages-rtl/wishlist.less",
			"less/shop/pages/only-title-breadcrumbs.less",
		],

		no_products_found: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/no-products-found.less",
		],

		//
		content_product_custom: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/content-product-custom.less",
		],
		product_view_default: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/product-hovers/global-mix-ltr.less",
			"less/shop/product-hovers/global-mix.less",
			"less/shop/product-hovers/product-view-default.less",
		],
		product_view_default_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/product-hovers/global-mix-rtl.less",
			"less/shop/product-hovers/global-mix.less",
			"less/shop/product-hovers/product-view-default.less",
			"less/shop/product-hovers/product-view-default-rtl.less",
		],
		product_view_mask2: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/product-hovers/global-mix-ltr.less",
			"less/shop/product-hovers/global-mix.less",
			"less/shop/product-hovers/product-view-mask2.less",
		],
		product_view_mask2_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/product-hovers/global-mix-rtl.less",
			"less/shop/product-hovers/global-mix.less",
			"less/shop/product-hovers/product-view-mask2.less",
		],
		product_view_mask3: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/product-hovers/global-mix-ltr.less",
			"less/shop/product-hovers/global-mix.less",
			"less/shop/product-hovers/product-view-mask3.less",
		],
		product_view_mask3_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/product-hovers/global-mix-rtl.less",
			"less/shop/product-hovers/global-mix.less",
			"less/shop/product-hovers/product-view-mask3.less",
		],
		product_view_light: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/product-hovers/global-mix-ltr.less",
			"less/shop/product-hovers/global-mix.less",
			"less/shop/product-hovers/product-view-light.less",
		],
		product_view_light_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/product-hovers/global-mix-rtl.less",
			"less/shop/product-hovers/global-mix.less",
			"less/shop/product-hovers/product-view-light.less",
			"less/shop/product-hovers/product-view-light-rtl.less",
		],
		product_booking: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/product-hovers/global-mix-ltr.less",
			"less/shop/product-hovers/global-mix.less",
			"less/shop/product-hovers/product-booking.less",
		],
		product_booking_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/product-hovers/global-mix-rtl.less",
			"less/shop/product-hovers/global-mix.less",
			"less/shop/product-hovers/product-booking.less",
			"less/shop/product-hovers/product-booking-rtl.less",
		],
		product_view_menu: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/product-hovers/global-mix-ltr.less",
			"less/shop/product-hovers/global-mix.less",
			"less/shop/product-hovers/product-view-menu.less",
		],
		product_view_menu_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/product-hovers/global-mix-rtl.less",
			"less/shop/product-hovers/global-mix.less",
			"less/shop/product-hovers/product-view-menu.less",
			"less/shop/product-hovers/product-view-menu-rtl.less",
		],
		product_view_info: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/product-hovers/global-mix-ltr.less",
			"less/shop/product-hovers/global-mix.less",
			"less/shop/product-hovers/product-view-info.less",
		],
		product_view_info_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/product-hovers/global-mix-rtl.less",
			"less/shop/product-hovers/global-mix.less",
			"less/shop/product-hovers/product-view-info.less",
		],

		single_product: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/single-product/single-product.less",
			"less/shop/single-product/single-product-ltr.less",
		],

		single_product_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/single-product/single-product.less",
			"less/shop/single-product/single-product-rtl.less",
		],

		single_product_elements: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/single-product/single-product-elements.less",
			"less/shop/single-product/single-product-elements-ltr.less",
		],

		single_product_elements_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/single-product/single-product-elements.less",
			"less/shop/single-product/single-product-elements-rtl.less",
		],

		// booking
		single_product_booking: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/single-product/single-product-booking.less",
		],

		single_product_booking_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/single-product/single-product-booking.less",
			"less/shop/single-product/single-product-booking-rtl.less",
		],
		// right
		single_product_right: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/single-product/single-product-right.less",
			// 20% of right
			"less/shop/single-product/single-product-wide.less",
		],
		// wide/right20%
		single_product_wide: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/single-product/single-product-wide.less",
		],

		// sticky cart
		sticky_cart: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/single-product/sticky-cart.less",
			"less/shop/single-product/sticky-cart-ltr.less",
		],

		sticky_cart_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/single-product/sticky-cart.less",
			"less/shop/single-product/sticky-cart-rtl.less",
		],

		// request quote
		request_quote: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/single-product/request-quote.less",
		],

		// single product builder
		single_product_builder: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/single-product/single-product-builder-ltr.less",
			"less/shop/single-product/single-product-builder.less",
		],

		single_product_builder_rtl: [
			"less/config.less",
			"less/base/mixins.less",
			"less/shop/single-product/single-product-builder.less",
			"less/shop/single-product/single-product-builder-rtl.less",
		],
		//
		swatches: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/swatches/swatches.less"
		],
		dokan: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/excluded/dokan.less"
		],
		forum: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/excluded/forum.less"
		],
		wcfmmp: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/excluded/wcfmmp.less"
		],
		wcmp: [
			"less/config.less",
			"less/base/mixins.less",
			"less/modules/excluded/wcmp.less"
		],
	},
	uglify: {
		postBackstretchJs: [
			'js/libs/jquery.backstretch.min.js',
			'js/theme/postBackstretchImg.js',
		],
		ethemeJs: [
			'js/libs/jquery.magnific-popup.js',
			'js/theme/init.js',
			'js/theme/helpers.js',
			'js/theme/fixes.js', // file does not exist
			//'js/theme/tabs.js',
			'js/theme/global_image_lazy.js',
			'js/theme/PostProductAjaxLoad.js',
			'js/theme/AjaxElement.js',
			'js/theme/imagesLightbox.js',
			'js/theme/search.js',
			'js/theme/headerElementsTabs.js',
			'js/theme/et_popup.js',
			'js/theme/et_content_toggle.js',
		],
		ethemePluginsJs:[
			'js/libs/jquery.magnific-popup.js',
			'js/libs/swiper.js',
			'js/libs/jquery.sticky-kit.js',
		],
		panelGeneratorJs:[
			'framework/panel/js/generator.js',
		],
		panelInstagramJs:[
			'framework/panel/js/instagram.js',
		],
		panelEmailBuilderJs:[
			'framework/panel/js/email_builder.js',
		],
		panelSalesBoosterJs:[
			'framework/panel/js/sales_booster.js',
		],
		panelPluginsJs:[
			'framework/panel/js/plugins.js',
		],
		optimize:[
			'js/libs/modernizr.js',
			'js/libs/flexibility.js',
		],
		photoswipe:[
			'js/libs/photoswipe.js',
			'js/libs/photoswipe-ui-default.js',
		],


		// new


		infiniteScrollLoadMoreJs:[
			'js/theme/ReinitForInfiniteScroll.js',
		],

		compareJs:[
			'js/theme/ForCompare.js',
		],

		countdownJs:[
			'js/theme/countdown.js',
		],

		theLookJs:[
			'js/theme/theLook.js',
		],

		wishlistJs:[
			'js/theme/wishlist.js',
		],

		promoTextCarouselJs:[
			'js/theme/promoTextCarousel.js',
		],

		menuPostsJs:[
			'js/theme/menuPosts.js',
		],

		onePageMenuJs:[
			'js/theme/onePageMenu.js',
		],

		secondaryMenuJs:[
			'js/theme/secondaryMenu.js',
		],

		filtersAreaJs:[
			'js/theme/filtersArea.js',
		],

		cartPageJs:[
			'js/theme/et_auto_cart.js',
		],

		cartProgressJs:[
			'js/theme/et_cart_progress.js',
		],

		fixedHeaderJs:[
			'js/theme/fixedHeader.js',
		],

		commentsFormValidationJs:[
			'js/theme/commentsForm.js',
		],

		contactUsPopupJs:[
			'js/theme/contactUsPopup.js',
		],

		singleProductBuilderJs:[
			'js/theme/singleProductBuilder.js',
		],

		variationGalleryJs:[
			'js/theme/variationGallery.js',
		],

		singleProductVerticalGalleryJs:[
			'js/theme/sliderVertical.js',
		],

		singleProductStickyProductImagesJs:[
			'js/theme/stickyProductImages.js',
		],

		singleProductJs:[
			'js/theme/photoSwipe.js',
			'js/theme/variationsThumbs.js', // single product/quick view
			'js/theme/jumpToSlide.js', // single product/quick view
			'js/theme/videoPopup.js', // open 360 single product
			'js/theme/sticky_cart.js', // single product
			'js/theme/single_product.js',
		],

		woocommerceJs:[
			'js/theme/contentProdImages.js',
			'js/theme/quantityIncrements.js', // woocommerce
			'js/theme/ajaxAddToCartInit.js', // woocommerce
			'js/theme/miniCartAjaxQuantity.js', // woocommerce // maybe separate on option
			'js/theme/quickView.js', // woocommerce / quick view
			'js/theme/after_cart_refreshed.js', // woocommerce
			'js/theme/buyNowBtn.js', // globally
		],

		widgetNavMenuJs:[
			'js/theme/CustomMenuAccordion.js',
		],

		productCategoriesWidgetJs:[
			'js/theme/categoriesAccordion.js',
		],

		widgetsShowMoreJs:[
			'js/theme/widgetsShowMore.js',
		],

		widgetsOpenCloseJs:[
			'js/theme/widgetsOpenClose.js',
			'js/theme/widgetsOpenCloseDefault.js',
		],

		sidebarCanvasJs:[
			'js/theme/sidebarCanvas.js', // for now only woocommerce archives
			'js/theme/sidebarCanvasToggle.js', // for now only woocommerce archives
		],

		stickySidebarJs:[
			'js/theme/stickySidebar.js'
		],

		isotopeJs:[
			'js/libs/isotope.js',// v.3.0.6
			'js/theme/isotope.js',
			'js/theme/isotopeFilters.js'
		],

		stickyKitJs:[
			'js/libs/jquery.sticky-kit.js'
		],

		fancySelectJs:[
			'js/libs/fancy.select.js'
		],

		backToTopJs:[
			'js/theme/backToTop.js'
		],

		fixedFooterJs:[
			'js/theme/fixedFooter.js'
		],

		navigationOnTouchJs:[
			'js/theme/navigationOnTouch.js'
		],

		navigationOnClickJs:[
			'js/theme/navigationOnClick.js'
		],

		mainNavigationJs:[
			'js/theme/mainNavigation.js'
		],

		breadcrumbsTextScrollJs:[
			'js/theme/breadcrumbs/effect-text-scroll.js'
		],

		breadcrumbsMouseJs:[
			'js/theme/breadcrumbs/effect-mouse.js'
		],

		swiperJs:[
			'js/libs/swiper.js',
			'js/theme/swiperFunc.js'
		],

		tabsJs:[
			'js/theme/tabs.js'
		],

		mobileMenuJs:[
			'js/theme/mobileMenu.js'
		],

		ajaxSearchJs:[
			'js/libs/jquery.autocomplete.js',
			'js/theme/ajaxSearch.js'
		],

		mobilePanelJs:[
			'js/theme/mobilePanel.js'
		],

		stWooSwatchesJs:[
			'../../plugins/et-core-plugin/packages/st-woo-swatches/public/js/frontend.js'
		],
	},
};

gulp.task('concate-style', function() {
	return gulp.src(xstoreConfig.concat.style)
		.pipe(concat('./less-ready/style.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-xstore', function() {
	return gulp.src(xstoreConfig.concat.xstore)
		.pipe(concat('./less-ready/xstore.less'))
		.pipe(gulp.dest('./'));
});

// xstore-rtl
gulp.task('concate-xstore-rtl', function() {
	return gulp.src(xstoreConfig.concat.xstore_rtl)
		.pipe(concat('./less-ready/xstore-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-dark', function() {
	return gulp.src(xstoreConfig.concat.dark)
		.pipe(concat('./less-ready/dark.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-et-core-plugin-off', function() {
	return gulp.src(xstoreConfig.concat.et_core_plugin_off)
		.pipe(concat('./less-ready/et-core-plugin-off.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-slick-library', function() {
	return gulp.src(xstoreConfig.concat.slick_library)
		.pipe(concat('./less-ready/libs/slick.less'))
		.pipe(gulp.dest('./'));
});

// skeleton
gulp.task('concate-skeleton', function() {
	return gulp.src(xstoreConfig.concat.skeleton)
		.pipe(concat('./less-ready/skeleton.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-skeleton-rtl', function() {
	return gulp.src(xstoreConfig.concat.skeleton_rtl)
		.pipe(concat('./less-ready/skeleton-rtl.less'))
		.pipe(gulp.dest('./'));
});

// sidebar
gulp.task('concate-sidebar', function() {
	return gulp.src(xstoreConfig.concat.sidebar)
		.pipe(concat('./less-ready/modules/layout/sidebar.less'))
		.pipe(gulp.dest('./'));
});

// off-canvas
gulp.task('concate-off-canvas', function() {
	return gulp.src(xstoreConfig.concat.off_canvas)
		.pipe(concat('./less-ready/modules/layout/off-canvas.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-off-canvas-rtl', function() {
	return gulp.src(xstoreConfig.concat.off_canvas_rtl)
		.pipe(concat('./less-ready/modules/layout/off-canvas-rtl.less'))
		.pipe(gulp.dest('./'));
});

// mobile-panel
gulp.task('concate-mobile-panel', function() {
	return gulp.src(xstoreConfig.concat.mobile_panel)
		.pipe(concat('./less-ready/modules/layout/mobile-panel.less'))
		.pipe(gulp.dest('./'));
});

// header parts
// search
gulp.task('concate-header-search', function() {
	return gulp.src(xstoreConfig.concat.header_search)
		.pipe(concat('./less-ready/modules/layout/header/parts/search.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-header-search-rtl', function() {
	return gulp.src(xstoreConfig.concat.header_search_rtl)
		.pipe(concat('./less-ready/modules/layout/header/parts/search-rtl.less'))
		.pipe(gulp.dest('./'));
});
// ajax-search
gulp.task('concate-ajax-search', function() {
	return gulp.src(xstoreConfig.concat.ajax_search)
		.pipe(concat('./less-ready/modules/layout/header/parts/ajax-search.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-ajax-search-rtl', function() {
	return gulp.src(xstoreConfig.concat.ajax_search_rtl)
		.pipe(concat('./less-ready/modules/layout/header/parts/ajax-search-rtl.less'))
		.pipe(gulp.dest('./'));
});

// full-width-search
gulp.task('concate-full-width-search', function() {
	return gulp.src(xstoreConfig.concat.full_width_search)
		.pipe(concat('./less-ready/modules/layout/header/parts/full-width-search.less'))
		.pipe(gulp.dest('./'));
});

// header-vertical
gulp.task('concate-header-vertical', function() {
	return gulp.src(xstoreConfig.concat.header_vertical)
		.pipe(concat('./less-ready/modules/layout/header/header-vertical.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-header-vertical-rtl', function() {
	return gulp.src(xstoreConfig.concat.header_vertical_rtl)
		.pipe(concat('./less-ready/modules/layout/header/header-vertical-rtl.less'))
		.pipe(gulp.dest('./'));
});

// mobile-menu
gulp.task('concate-mobile-menu', function() {
	return gulp.src(xstoreConfig.concat.mobile_menu)
		.pipe(concat('./less-ready/modules/layout/header/parts/mobile-menu.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-mobile-menu-rtl', function() {
	return gulp.src(xstoreConfig.concat.mobile_menu_rtl)
		.pipe(concat('./less-ready/modules/layout/header/parts/mobile-menu-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-all-departments-menu', function() {
	return gulp.src(xstoreConfig.concat.all_departments_menu)
		.pipe(concat('./less-ready/modules/layout/header/parts/all-departments-menu.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-all-departments-menu-rtl', function() {
	return gulp.src(xstoreConfig.concat.all_departments_menu_rtl)
		.pipe(concat('./less-ready/modules/layout/header/parts/all-departments-menu-rtl.less'))
		.pipe(gulp.dest('./'));
});

// menu
gulp.task('concate-header-menu', function() {
	return gulp.src(xstoreConfig.concat.header_menu)
		.pipe(concat('./less-ready/modules/layout/header/parts/menu.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-header-menu-rtl', function() {
	return gulp.src(xstoreConfig.concat.header_menu_rtl)
		.pipe(concat('./less-ready/modules/layout/header/parts/menu-rtl.less'))
		.pipe(gulp.dest('./'));
});

// account
gulp.task('concate-account', function() {
	return gulp.src(xstoreConfig.concat.account)
		.pipe(concat('./less-ready/modules/layout/header/parts/account.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-account-rtl', function() {
	return gulp.src(xstoreConfig.concat.account_rtl)
		.pipe(concat('./less-ready/modules/layout/header/parts/account-rtl.less'))
		.pipe(gulp.dest('./'));
});

// contacts
gulp.task('concate-header-contacts', function() {
	return gulp.src(xstoreConfig.concat.header_contacts)
		.pipe(concat('./less-ready/modules/layout/header/parts/contacts.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-header-contacts-rtl', function() {
	return gulp.src(xstoreConfig.concat.header_contacts_rtl)
		.pipe(concat('./less-ready/modules/layout/header/parts/contacts-rtl.less'))
		.pipe(gulp.dest('./'));
});

// sidebar/footer tasks
gulp.task('concate-toggles-by-arrow', function() {
	return gulp.src(xstoreConfig.concat.toggles_by_arrow)
		.pipe(concat('./less-ready/modules/layout/toggles-by-arrow.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-widgets-open-close', function() {
	return gulp.src(xstoreConfig.concat.widgets_open_close)
		.pipe(concat('./less-ready/modules/layout/widgets-open-close.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-widgets-open-close-rtl', function() {
	return gulp.src(xstoreConfig.concat.widgets_open_close_rtl)
		.pipe(concat('./less-ready/modules/layout/widgets-open-close-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-sidebar-off-canvas', function() {
	return gulp.src(xstoreConfig.concat.sidebar_off_canvas)
		.pipe(concat('./less-ready/modules/layout/sidebar-off-canvas.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-sidebar-off-canvas-rtl', function() {
	return gulp.src(xstoreConfig.concat.sidebar_off_canvas_rtl)
		.pipe(concat('./less-ready/modules/layout/sidebar-off-canvas-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-sidebar-widgets-with-scroll', function() {
	return gulp.src(xstoreConfig.concat.sidebar_widgets_with_scroll)
		.pipe(concat('./less-ready/modules/layout/sidebar-widgets-with-scroll.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-sidebar-widgets-with-scroll-rtl', function() {
	return gulp.src(xstoreConfig.concat.sidebar_widgets_with_scroll_rtl)
		.pipe(concat('./less-ready/modules/layout/sidebar-widgets-with-scroll-rtl.less'))
		.pipe(gulp.dest('./'));
});

// blog
gulp.task('concate-blog-global', function() {
	return gulp.src(xstoreConfig.concat.blog_global)
		.pipe(concat('./less-ready/blog/blog-global.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-blog-global-rtl', function() {
	return gulp.src(xstoreConfig.concat.blog_global_rtl)
		.pipe(concat('./less-ready/blog/blog-global-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-blog-masonry', function() {
	return gulp.src(xstoreConfig.concat.blog_masonry)
		.pipe(concat('./less-ready/blog/blog-masonry.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-blog-full-width', function() {
	return gulp.src(xstoreConfig.concat.blog_full_width)
		.pipe(concat('./less-ready/blog/blog-full-width.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-blog-ajax', function() {
	return gulp.src(xstoreConfig.concat.blog_ajax)
		.pipe(concat('./less-ready/blog/blog-ajax.less'))
		.pipe(gulp.dest('./'));
});

// pagination
gulp.task('concate-pagination', function() {
	return gulp.src(xstoreConfig.concat.pagination)
		.pipe(concat('./less-ready/pagination.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-pagination-rtl', function() {
	return gulp.src(xstoreConfig.concat.pagination_rtl)
		.pipe(concat('./less-ready/pagination-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-star-rating', function() {
	return gulp.src(xstoreConfig.concat.star_rating)
		.pipe(concat('./less-ready/star-rating.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-star-rating-rtl', function() {
	return gulp.src(xstoreConfig.concat.star_rating_rtl)
		.pipe(concat('./less-ready/star-rating-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-comments', function() {
	return gulp.src(xstoreConfig.concat.comments)
		.pipe(concat('./less-ready/comments.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-comments-rtl', function() {
	return gulp.src(xstoreConfig.concat.comments_rtl)
		.pipe(concat('./less-ready/comments-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-navigation', function() {
	return gulp.src(xstoreConfig.concat.navigation)
		.pipe(concat('./less-ready/navigation.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-navigation-rtl', function() {
	return gulp.src(xstoreConfig.concat.navigation_rtl)
		.pipe(concat('./less-ready/navigation-rtl.less'))
		.pipe(gulp.dest('./'));
});

// single post
gulp.task('concate-single-post-global', function() {
	return gulp.src(xstoreConfig.concat.single_post_global)
		.pipe(concat('./less-ready/blog/single-post/single-global.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-single-post-global-rtl', function() {
	return gulp.src(xstoreConfig.concat.single_post_global_rtl)
		.pipe(concat('./less-ready/blog/single-post/single-global-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-single-meta', function() {
	return gulp.src(xstoreConfig.concat.single_meta)
		.pipe(concat('./less-ready/blog/single-post/meta.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-single-post-framed', function() {
	return gulp.src(xstoreConfig.concat.single_post_framed)
		.pipe(concat('./less-ready/blog/single-post/framed.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-single-post-large', function() {
	return gulp.src(xstoreConfig.concat.single_post_large)
		.pipe(concat('./less-ready/blog/single-post/large.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-single-post-large2', function() {
	return gulp.src(xstoreConfig.concat.single_post_large2)
		.pipe(concat('./less-ready/blog/single-post/large2.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-single-post-full-width', function() {
	return gulp.src(xstoreConfig.concat.single_post_full_width)
		.pipe(concat('./less-ready/blog/single-post/full-width.less'))
		.pipe(gulp.dest('./'));
});

// post types
gulp.task('concate-post-types-global', function() {
	return gulp.src(xstoreConfig.concat.post_types_global)
		.pipe(concat('./less-ready/blog/types/global.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-post-types-framed', function() {
	return gulp.src(xstoreConfig.concat.post_types_framed)
		.pipe(concat('./less-ready/blog/types/framed.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-post-types-framed-rtl', function() {
	return gulp.src(xstoreConfig.concat.post_types_framed_rtl)
		.pipe(concat('./less-ready/blog/types/framed-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-post-types-grid-grid2', function() {
	return gulp.src(xstoreConfig.concat.post_types_grid_grid2)
		.pipe(concat('./less-ready/blog/types/grid-grid2.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-post-types-small-chess', function() {
	return gulp.src(xstoreConfig.concat.post_types_small_chess)
		.pipe(concat('./less-ready/blog/types/small-chess.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-post-types-small-chess-rtl', function() {
	return gulp.src(xstoreConfig.concat.post_types_small_chess_rtl)
		.pipe(concat('./less-ready/blog/types/small-chess-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-post-types-timeline', function() {
	return gulp.src(xstoreConfig.concat.post_types_timeline)
		.pipe(concat('./less-ready/blog/types/timeline.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-post-types-timeline-rtl', function() {
	return gulp.src(xstoreConfig.concat.post_types_timeline_rtl)
		.pipe(concat('./less-ready/blog/types/timeline-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-post-types-with-author', function() {
	return gulp.src(xstoreConfig.concat.post_types_with_author)
		.pipe(concat('./less-ready/blog/types/with-author.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-post-types-with-author-rtl', function() {
	return gulp.src(xstoreConfig.concat.post_types_with_author_rtl)
		.pipe(concat('./less-ready/blog/types/with-author-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-post-formats-quote', function() {
	return gulp.src(xstoreConfig.concat.post_formats_quote)
		.pipe(concat('./less-ready/blog/formats/quote.less'))
		.pipe(gulp.dest('./'));
});

// testimonials
gulp.task('concate-single-testimonials', function() {
	return gulp.src(xstoreConfig.concat.single_testimonials)
		.pipe(concat('./less-ready/testimonials/single.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-elementor-etheme-testimonials', function() {
	return gulp.src(xstoreConfig.concat.elementor_etheme_testimonials)
		.pipe(concat('./less-ready/modules/builders/elementor/etheme-testimonials.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-elementor-etheme-custom-masonry', function() {
	return gulp.src(xstoreConfig.concat.elementor_etheme_custom_masonry)
		.pipe(concat('./less-ready/modules/builders/elementor/etheme-custom-masonry.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-elementor-etheme-google-map', function() {
	return gulp.src(xstoreConfig.concat.elementor_etheme_google_map)
		.pipe(concat('./less-ready/modules/builders/elementor/etheme-google-map.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-elementor-et-advance-tabs', function() {
	return gulp.src(xstoreConfig.concat.elementor_et_advance_tabs)
		.pipe(concat('./less-ready/modules/builders/elementor/et-advance-tabs.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-elementor-etheme-contact-form-7', function() {
	return gulp.src(xstoreConfig.concat.elementor_etheme_contact_form_7)
		.pipe(concat('./less-ready/modules/builders/elementor/etheme-contact-form-7.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-elementor-etheme-mailchimp', function() {
	return gulp.src(xstoreConfig.concat.elementor_etheme_mailchimp)
		.pipe(concat('./less-ready/modules/builders/elementor/etheme-mailchimp.less'))
		.pipe(gulp.dest('./'));
});

// wpbakery
gulp.task('concate-wpbakery', function() {
	return gulp.src(xstoreConfig.concat.wpbakery)
		.pipe(concat('./less-ready/wpb.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-wpbakery-rtl', function() {
	return gulp.src(xstoreConfig.concat.wpbakery_rtl)
		.pipe(concat('./less-ready/wpb-rtl.less'))
		.pipe(gulp.dest('./'));
});

// elementor
gulp.task('concate-elementor', function() {
	return gulp.src(xstoreConfig.concat.elementor)
		.pipe(concat('./less-ready/elementor.less'))
		.pipe(gulp.dest('./'));
});

// portfolio
gulp.task('concate-portfolio', function() {
	return gulp.src(xstoreConfig.concat.portfolio)
		.pipe(concat('./less-ready/portfolio.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-portfolio-rtl', function() {
	return gulp.src(xstoreConfig.concat.portfolio_rtl)
		.pipe(concat('./less-ready/portfolio-rtl.less'))
		.pipe(gulp.dest('./'));
});

// breadcrumbs
gulp.task('concate-breadcrumbs', function() {
	return gulp.src(xstoreConfig.concat.breadcrumbs)
		.pipe(concat('./less-ready/breadcrumbs.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-breadcrumbs-rtl', function() {
	return gulp.src(xstoreConfig.concat.breadcrumbs_rtl)
		.pipe(concat('./less-ready/breadcrumbs-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-mega-menu', function() {
	return gulp.src(xstoreConfig.concat.mega_menu)
		.pipe(concat('./less-ready/modules/mega-menu.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-mega-menu-rtl', function() {
	return gulp.src(xstoreConfig.concat.mega_menu_rtl)
		.pipe(concat('./less-ready/modules/mega-menu-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-fixed-footer', function() {
	return gulp.src(xstoreConfig.concat.fixed_footer)
		.pipe(concat('./less-ready/modules/fixed-footer.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-back-top', function() {
	return gulp.src(xstoreConfig.concat.back_top)
		.pipe(concat('./less-ready/modules/back-top.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-back-top-rtl', function() {
	return gulp.src(xstoreConfig.concat.back_top_rtl)
		.pipe(concat('./less-ready/modules/back-top-rtl.less'))
		.pipe(gulp.dest('./'));
});

// search page
gulp.task('concate-search-page', function() {
	return gulp.src(xstoreConfig.concat.search_page)
		.pipe(concat('./less-ready/modules/search/global.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-banners-global', function() {
	return gulp.src(xstoreConfig.concat.banners_global)
		.pipe(concat('./less-ready/banners/banners-global.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-banner', function() {
	return gulp.src(xstoreConfig.concat.banner)
		.pipe(concat('./less-ready/banners/banner.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-team-member', function() {
	return gulp.src(xstoreConfig.concat.team_member)
		.pipe(concat('./less-ready/banners/team-member.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-et-slider', function() {
	return gulp.src(xstoreConfig.concat.et_slider)
		.pipe(concat('./less-ready/modules/builders/et-slider.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-categories-carousel', function() {
	return gulp.src(xstoreConfig.concat.categories_carousel)
		.pipe(concat('./less-ready/modules/builders/categories-carousel.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-icon-boxes', function() {
	return gulp.src(xstoreConfig.concat.icon_boxes)
		.pipe(concat('./less-ready/modules/builders/icon-boxes.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-et-blog', function() {
	return gulp.src(xstoreConfig.concat.et_blog)
		.pipe(concat('./less-ready/blog/et-blog.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-et-blog-rtl', function() {
	return gulp.src(xstoreConfig.concat.et_blog_rtl)
		.pipe(concat('./less-ready/blog/et-blog-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-brands-list', function() {
	return gulp.src(xstoreConfig.concat.brands_list)
		.pipe(concat('./less-ready/modules/woocommerce/brands-list.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-brands-carousel', function() {
	return gulp.src(xstoreConfig.concat.brands_carousel)
		.pipe(concat('./less-ready/modules/woocommerce/brands-carousel.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-categories-list-grid', function() {
	return gulp.src(xstoreConfig.concat.categories_list_grid)
		.pipe(concat('./less-ready/modules/woocommerce/categories-list-grid.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-categories-menu-element', function() {
	return gulp.src(xstoreConfig.concat.categories_menu_element)
		.pipe(concat('./less-ready/modules/woocommerce/categories-menu-element.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-et-offer', function() {
	return gulp.src(xstoreConfig.concat.et_offer)
		.pipe(concat('./less-ready/modules/woocommerce/et-offer.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-et-offer-rtl', function() {
	return gulp.src(xstoreConfig.concat.et_offer_rtl)
		.pipe(concat('./less-ready/modules/woocommerce/et-offer-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-elementor-categories', function() {
	return gulp.src(xstoreConfig.concat.elementor_categories)
		.pipe(concat('./less-ready/modules/builders/elementor/categories.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-wpb-autoscrolling-text', function() {
	return gulp.src(xstoreConfig.concat.wpb_autoscrolling_text)
		.pipe(concat('./less-ready/modules/builders/wpb/autoscrolling-text.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-wpb-banners', function() {
	return gulp.src(xstoreConfig.concat.wpb_banners)
		.pipe(concat('./less-ready/modules/builders/wpb/banners.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-wpb-et-offer', function() {
	return gulp.src(xstoreConfig.concat.wpb_et_offer)
		.pipe(concat('./less-ready/modules/builders/wpb/et-offer.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-wpb-et-timer', function() {
	return gulp.src(xstoreConfig.concat.wpb_et_timer)
		.pipe(concat('./less-ready/modules/builders/wpb/et-timer.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-wpb-images-carousel', function() {
	return gulp.src(xstoreConfig.concat.wpb_images_carousel)
		.pipe(concat('./less-ready/modules/builders/wpb/images-carousel.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-wpb-instagram', function() {
	return gulp.src(xstoreConfig.concat.wpb_instagram)
		.pipe(concat('./less-ready/modules/builders/wpb/instagram.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-wpb-look-book', function() {
	return gulp.src(xstoreConfig.concat.wpb_look_book)
		.pipe(concat('./less-ready/modules/builders/wpb/look-book.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-wpb-thelook', function() {
	return gulp.src(xstoreConfig.concat.wpb_thelook)
		.pipe(concat('./less-ready/modules/builders/wpb/thelook.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-wpb-testimonials', function() {
	return gulp.src(xstoreConfig.concat.wpb_testimonials)
		.pipe(concat('./less-ready/modules/builders/wpb/testimonials.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-photoswipe-styles', function() {
	return gulp.src(xstoreConfig.concat.photoswipe)
		.pipe(concat('./less-ready/modules/photoswipe.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-page-404', function() {
	return gulp.src(xstoreConfig.concat.page_404)
		.pipe(concat('./less-ready/modules/404-page.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-blank-page', function() {
	return gulp.src(xstoreConfig.concat.blank_page)
		.pipe(concat('./less-ready/modules/blank-page.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-contact-forms', function() {
	return gulp.src(xstoreConfig.concat.contact_forms)
		.pipe(concat('./less-ready/modules/contact-forms.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-contact-forms-rtl', function() {
	return gulp.src(xstoreConfig.concat.contact_forms_rtl)
		.pipe(concat('./less-ready/modules/contact-forms-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-dropcap', function() {
	return gulp.src(xstoreConfig.concat.dropcap)
		.pipe(concat('./less-ready/modules/dropcap.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-dropcap-rtl', function() {
	return gulp.src(xstoreConfig.concat.dropcap_rtl)
		.pipe(concat('./less-ready/modules/dropcap-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-mark-text', function() {
	return gulp.src(xstoreConfig.concat.mark_text)
		.pipe(concat('./less-ready/modules/mark-text.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-et-timer', function() {
	return gulp.src(xstoreConfig.concat.et_timer)
		.pipe(concat('./less-ready/modules/et-timer.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-etheme-popup', function() {
	return gulp.src(xstoreConfig.concat.etheme_popup)
		.pipe(concat('./less-ready/modules/etheme-popup.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-etheme-popup-rtl', function() {
	return gulp.src(xstoreConfig.concat.etheme_popup_rtl)
		.pipe(concat('./less-ready/modules/etheme-popup-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-socials-login', function() {
	return gulp.src(xstoreConfig.concat.socials_login)
		.pipe(concat('./less-ready/modules/socials/login.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-instagram', function() {
	return gulp.src(xstoreConfig.concat.instagram)
		.pipe(concat('./less-ready/modules/instagram.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-instagram-rtl', function() {
	return gulp.src(xstoreConfig.concat.instagram_rtl)
		.pipe(concat('./less-ready/modules/instagram-rtl.less'))
		.pipe(gulp.dest('./'));
});

// woocommerce
gulp.task('concate-isotope-filters', function() {
	return gulp.src(xstoreConfig.concat.isotope_filters)
		.pipe(concat('./less-ready/modules/isotope/filters.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-tabs', function() {
	return gulp.src(xstoreConfig.concat.tabs)
		.pipe(concat('./less-ready/modules/tabs.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-tabs-rtl', function() {
	return gulp.src(xstoreConfig.concat.tabs_rtl)
		.pipe(concat('./less-ready/modules/tabs-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-woocommerce-global', function() {
	return gulp.src(xstoreConfig.concat.woocommerce_global)
		.pipe(concat('./less-ready/modules/woocommerce/global.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-woocommerce-global-rtl', function() {
	return gulp.src(xstoreConfig.concat.woocommerce_global_rtl)
		.pipe(concat('./less-ready/modules/woocommerce/global-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-woocommerce-archive', function() {
	return gulp.src(xstoreConfig.concat.woocommerce_archive)
		.pipe(concat('./less-ready/modules/woocommerce/archive.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-woocommerce-archive-rtl', function() {
	return gulp.src(xstoreConfig.concat.woocommerce_archive_rtl)
		.pipe(concat('./less-ready/modules/woocommerce/archive-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-cart-widget', function() {
	return gulp.src(xstoreConfig.concat.cart_widget)
		.pipe(concat('./less-ready/modules/woocommerce/cart-widget.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-cart-widget-rtl', function() {
	return gulp.src(xstoreConfig.concat.cart_widget_rtl)
		.pipe(concat('./less-ready/modules/woocommerce/cart-widget-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-yith-compare', function() {
	return gulp.src(xstoreConfig.concat.yith_compare)
		.pipe(concat('./less-ready/modules/woocommerce/yith-compare.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-sb-infinite-scroll-load-more', function() {
	return gulp.src(xstoreConfig.concat.sb_infinite_scroll_load_more)
		.pipe(concat('./less-ready/modules/woocommerce/sb-infinite-scroll-load-more.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-catalog-mode', function() {
	return gulp.src(xstoreConfig.concat.catalog_mode)
		.pipe(concat('./less-ready/modules/woocommerce/catalog-mode.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-shop-full-width', function() {
	return gulp.src(xstoreConfig.concat.shop_full_width)
		.pipe(concat('./less-ready/modules/woocommerce/shop-full-width.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-products-full-screen', function() {
	return gulp.src(xstoreConfig.concat.products_full_screen)
		.pipe(concat('./less-ready/modules/woocommerce/products-full-screen.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-special-cart-breadcrumbs', function() {
	return gulp.src(xstoreConfig.concat.special_cart_breadcrumbs)
		.pipe(concat('./less-ready/modules/woocommerce/pages/special-cart-breadcrumbs.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-special-cart-breadcrumbs-rtl', function() {
	return gulp.src(xstoreConfig.concat.special_cart_breadcrumbs_rtl)
		.pipe(concat('./less-ready/modules/woocommerce/pages/special-cart-breadcrumbs-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-filter-area', function() {
	return gulp.src(xstoreConfig.concat.filter_area)
		.pipe(concat('./less-ready/modules/woocommerce/filter-area.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-filter-area-rtl', function() {
	return gulp.src(xstoreConfig.concat.filter_area_rtl)
		.pipe(concat('./less-ready/modules/woocommerce/filter-area-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-quick-view', function() {
	return gulp.src(xstoreConfig.concat.quick_view)
		.pipe(concat('./less-ready/modules/woocommerce/quick-view.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-quick-view-rtl', function() {
	return gulp.src(xstoreConfig.concat.quick_view_rtl)
		.pipe(concat('./less-ready/modules/woocommerce/quick-view-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-cart-page', function() {
	return gulp.src(xstoreConfig.concat.cart_page)
		.pipe(concat('./less-ready/modules/woocommerce/pages/cart.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-cart-page-rtl', function() {
	return gulp.src(xstoreConfig.concat.cart_page_rtl)
		.pipe(concat('./less-ready/modules/woocommerce/pages/cart-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-checkout-page', function() {
	return gulp.src(xstoreConfig.concat.checkout_page)
		.pipe(concat('./less-ready/modules/woocommerce/pages/checkout.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-checkout-page-rtl', function() {
	return gulp.src(xstoreConfig.concat.checkout_page_rtl)
		.pipe(concat('./less-ready/modules/woocommerce/pages/checkout-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-thank-you-page', function() {
	return gulp.src(xstoreConfig.concat.thank_you_page)
		.pipe(concat('./less-ready/modules/woocommerce/pages/thank-you.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-account-page', function() {
	return gulp.src(xstoreConfig.concat.account_page)
		.pipe(concat('./less-ready/modules/woocommerce/pages/account.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-account-page-rtl', function() {
	return gulp.src(xstoreConfig.concat.account_page_rtl)
		.pipe(concat('./less-ready/modules/woocommerce/pages/account-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-wishlist-page', function() {
	return gulp.src(xstoreConfig.concat.wishlist_page)
		.pipe(concat('./less-ready/modules/woocommerce/pages/wishlist.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-wishlist-page-rtl', function() {
	return gulp.src(xstoreConfig.concat.wishlist_page_rtl)
		.pipe(concat('./less-ready/modules/woocommerce/pages/wishlist-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-no-products-found', function() {
	return gulp.src(xstoreConfig.concat.no_products_found)
		.pipe(concat('./less-ready/modules/woocommerce/no-products-found.less'))
		.pipe(gulp.dest('./'));
});

// product views
gulp.task('concate-content-product-custom', function() {
	return gulp.src(xstoreConfig.concat.content_product_custom)
		.pipe(concat('./less-ready/modules/woocommerce/content-product-custom.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-product-view-default', function() {
	return gulp.src(xstoreConfig.concat.product_view_default)
		.pipe(concat('./less-ready/modules/woocommerce/product-hovers/product-view-default.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-product-view-default-rtl', function() {
	return gulp.src(xstoreConfig.concat.product_view_default_rtl)
		.pipe(concat('./less-ready/modules/woocommerce/product-hovers/product-view-default-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-product-view-mask2', function() {
	return gulp.src(xstoreConfig.concat.product_view_mask2)
		.pipe(concat('./less-ready/modules/woocommerce/product-hovers/product-view-mask2.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-product-view-mask2-rtl', function() {
	return gulp.src(xstoreConfig.concat.product_view_mask2_rtl)
		.pipe(concat('./less-ready/modules/woocommerce/product-hovers/product-view-mask2-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-product-view-mask3', function() {
	return gulp.src(xstoreConfig.concat.product_view_mask3)
		.pipe(concat('./less-ready/modules/woocommerce/product-hovers/product-view-mask3.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-product-view-mask3-rtl', function() {
	return gulp.src(xstoreConfig.concat.product_view_mask3_rtl)
		.pipe(concat('./less-ready/modules/woocommerce/product-hovers/product-view-mask3-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-product-view-light', function() {
	return gulp.src(xstoreConfig.concat.product_view_light)
		.pipe(concat('./less-ready/modules/woocommerce/product-hovers/product-view-light.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-product-view-light-rtl', function() {
	return gulp.src(xstoreConfig.concat.product_view_light_rtl)
		.pipe(concat('./less-ready/modules/woocommerce/product-hovers/product-view-light-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-product-booking', function() {
	return gulp.src(xstoreConfig.concat.product_booking)
		.pipe(concat('./less-ready/modules/woocommerce/product-hovers/product-booking.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-product-booking-rtl', function() {
	return gulp.src(xstoreConfig.concat.product_booking_rtl)
		.pipe(concat('./less-ready/modules/woocommerce/product-hovers/product-booking-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-product-view-menu', function() {
	return gulp.src(xstoreConfig.concat.product_view_menu)
		.pipe(concat('./less-ready/modules/woocommerce/product-hovers/product-view-menu.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-product-view-menu-rtl', function() {
	return gulp.src(xstoreConfig.concat.product_view_menu_rtl)
		.pipe(concat('./less-ready/modules/woocommerce/product-hovers/product-view-menu-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-product-view-info', function() {
	return gulp.src(xstoreConfig.concat.product_view_info)
		.pipe(concat('./less-ready/modules/woocommerce/product-hovers/product-view-info.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-product-view-info-rtl', function() {
	return gulp.src(xstoreConfig.concat.product_view_info_rtl)
		.pipe(concat('./less-ready/modules/woocommerce/product-hovers/product-view-info-rtl.less'))
		.pipe(gulp.dest('./'));
});

// single product
gulp.task('concate-single-product', function() {
	return gulp.src(xstoreConfig.concat.single_product)
		.pipe(concat('./less-ready/modules/woocommerce/single-product/single-product.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-single-product-rtl', function() {
	return gulp.src(xstoreConfig.concat.single_product_rtl)
		.pipe(concat('./less-ready/modules/woocommerce/single-product/single-product-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-single-product-elements', function() {
	return gulp.src(xstoreConfig.concat.single_product_elements)
		.pipe(concat('./less-ready/modules/woocommerce/single-product/single-product-elements.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-single-product-elements-rtl', function() {
	return gulp.src(xstoreConfig.concat.single_product_elements_rtl)
		.pipe(concat('./less-ready/modules/woocommerce/single-product/single-product-elements-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-single-product-booking', function() {
	return gulp.src(xstoreConfig.concat.single_product_booking)
		.pipe(concat('./less-ready/modules/woocommerce/single-product/single-product-booking.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-single-product-booking-rtl', function() {
	return gulp.src(xstoreConfig.concat.single_product_booking_rtl)
		.pipe(concat('./less-ready/modules/woocommerce/single-product/single-product-booking-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-single-product-right', function() {
	return gulp.src(xstoreConfig.concat.single_product_right)
		.pipe(concat('./less-ready/modules/woocommerce/single-product/single-product-right.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-single-product-wide', function() {
	return gulp.src(xstoreConfig.concat.single_product_wide)
		.pipe(concat('./less-ready/modules/woocommerce/single-product/single-product-wide.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-sticky-cart', function() {
	return gulp.src(xstoreConfig.concat.sticky_cart)
		.pipe(concat('./less-ready/modules/woocommerce/single-product/sticky-cart.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-sticky-cart-rtl', function() {
	return gulp.src(xstoreConfig.concat.sticky_cart_rtl)
		.pipe(concat('./less-ready/modules/woocommerce/single-product/sticky-cart-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-request-quote', function() {
	return gulp.src(xstoreConfig.concat.request_quote)
		.pipe(concat('./less-ready/modules/woocommerce/single-product/request-quote.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-single-product-builder', function() {
	return gulp.src(xstoreConfig.concat.single_product_builder)
		.pipe(concat('./less-ready/modules/woocommerce/single-product/single-product-builder.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-single-product-builder-rtl', function() {
	return gulp.src(xstoreConfig.concat.single_product_builder_rtl)
		.pipe(concat('./less-ready/modules/woocommerce/single-product/single-product-builder-rtl.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-swatches', function() {
	return gulp.src(xstoreConfig.concat.swatches)
		.pipe(concat('./less-ready/swatches.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-dokan', function() {
	return gulp.src(xstoreConfig.concat.dokan)
		.pipe(concat('./less-ready/dokan.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-forum', function() {
	return gulp.src(xstoreConfig.concat.forum)
		.pipe(concat('./less-ready/forum.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-wcfmmp', function() {
	return gulp.src(xstoreConfig.concat.wcfmmp)
		.pipe(concat('./less-ready/wcfmmp.less'))
		.pipe(gulp.dest('./'));
});

gulp.task('concate-wcmp', function() {
	return gulp.src(xstoreConfig.concat.wcmp)
		.pipe(concat('./less-ready/wcmp.less'))
		.pipe(gulp.dest('./'));
});

// Less
gulp.task('style', function() {
	return gulp.src('./less-ready/style.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('style.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('xstore', function() {
	return gulp.src('./less-ready/xstore.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('xstore.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('xstore.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('xstore-rtl', function() {
	return gulp.src('./less-ready/xstore-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('xstore-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('xstore-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('dark', function() {
	return gulp.src('./less-ready/dark.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/dark.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/dark.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('et-core-plugin-off', function() {
	return gulp.src('./less-ready/et-core-plugin-off.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/et-core-plugin-off.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/et-core-plugin-off.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('slick-library', function() {
	return gulp.src('./less-ready/libs/slick.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/libs/slick.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/libs/slick.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('skeleton', function() {
	return gulp.src('./less-ready/skeleton.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/skeleton.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/skeleton.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('skeleton-rtl', function() {
	return gulp.src('./less-ready/skeleton-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/skeleton-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/skeleton-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('sidebar', function() {
	return gulp.src('./less-ready/modules/layout/sidebar.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/layout/sidebar.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/layout/sidebar.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('off-canvas', function() {
	return gulp.src('./less-ready/modules/layout/off-canvas.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/layout/off-canvas.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/layout/off-canvas.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('off-canvas-rtl', function() {
	return gulp.src('./less-ready/modules/layout/off-canvas-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/layout/off-canvas-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/layout/off-canvas-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('mobile-panel', function() {
	return gulp.src('./less-ready/modules/layout/mobile-panel.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/layout/mobile-panel.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/layout/mobile-panel.min.css'))
		.pipe(gulp.dest('./'));
});

// header parts
// search
gulp.task('header-search', function() {
	return gulp.src('./less-ready/modules/layout/header/parts/search.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/layout/header/parts/search.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/layout/header/parts/search.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('header-search-rtl', function() {
	return gulp.src('./less-ready/modules/layout/header/parts/search-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/layout/header/parts/search-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/layout/header/parts/search-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

// ajax-search
gulp.task('ajax-search', function() {
	return gulp.src('./less-ready/modules/layout/header/parts/ajax-search.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/layout/header/parts/ajax-search.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/layout/header/parts/ajax-search.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('ajax-search-rtl', function() {
	return gulp.src('./less-ready/modules/layout/header/parts/ajax-search-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/layout/header/parts/ajax-search-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/layout/header/parts/ajax-search-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

// full-width-search
gulp.task('full-width-search', function() {
	return gulp.src('./less-ready/modules/layout/header/parts/full-width-search.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/layout/header/parts/full-width-search.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/layout/header/parts/full-width-search.min.css'))
		.pipe(gulp.dest('./'));
});

// header-vertical
gulp.task('header-vertical', function() {
	return gulp.src('./less-ready/modules/layout/header/header-vertical.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/layout/header/header-vertical.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/layout/header/header-vertical.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('header-vertical-rtl', function() {
	return gulp.src('./less-ready/modules/layout/header/header-vertical-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/layout/header/header-vertical-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/layout/header/header-vertical-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

// menu
gulp.task('header-menu', function() {
	return gulp.src('./less-ready/modules/layout/header/parts/menu.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/layout/header/parts/menu.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/layout/header/parts/menu.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('header-menu-rtl', function() {
	return gulp.src('./less-ready/modules/layout/header/parts/menu-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/layout/header/parts/menu-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/layout/header/parts/menu-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

// mobile-menu
gulp.task('mobile-menu', function() {
	return gulp.src('./less-ready/modules/layout/header/parts/mobile-menu.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/layout/header/parts/mobile-menu.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/layout/header/parts/mobile-menu.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('mobile-menu-rtl', function() {
	return gulp.src('./less-ready/modules/layout/header/parts/mobile-menu-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/layout/header/parts/mobile-menu-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/layout/header/parts/mobile-menu-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

// all-departments
gulp.task('all-departments-menu', function() {
	return gulp.src('./less-ready/modules/layout/header/parts/all-departments-menu.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/layout/header/parts/all-departments-menu.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/layout/header/parts/all-departments-menu.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('all-departments-menu-rtl', function() {
	return gulp.src('./less-ready/modules/layout/header/parts/all-departments-menu-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/layout/header/parts/all-departments-menu-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/layout/header/parts/all-departments-menu-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

// account
gulp.task('account', function() {
	return gulp.src('./less-ready/modules/layout/header/parts/account.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/layout/header/parts/account.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/layout/header/parts/account.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('account-rtl', function() {
	return gulp.src('./less-ready/modules/layout/header/parts/account-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/layout/header/parts/account-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/layout/header/parts/account-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

// contacts
gulp.task('header-contacts', function() {
	return gulp.src('./less-ready/modules/layout/header/parts/contacts.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/layout/header/parts/contacts.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/layout/header/parts/contacts.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('header-contacts-rtl', function() {
	return gulp.src('./less-ready/modules/layout/header/parts/contacts-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/layout/header/parts/contacts-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/layout/header/parts/contacts-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

// sidebar/footer tasks
gulp.task('toggles-by-arrow', function() {
	return gulp.src('./less-ready/modules/layout/toggles-by-arrow.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/layout/toggles-by-arrow.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/layout/toggles-by-arrow.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('widgets-open-close', function() {
	return gulp.src('./less-ready/modules/layout/widgets-open-close.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/layout/widgets-open-close.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/layout/widgets-open-close.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('widgets-open-close-rtl', function() {
	return gulp.src('./less-ready/modules/layout/widgets-open-close-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/layout/widgets-open-close-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/layout/widgets-open-close-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('sidebar-off-canvas', function() {
	return gulp.src('./less-ready/modules/layout/sidebar-off-canvas.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/layout/sidebar-off-canvas.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/layout/sidebar-off-canvas.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('sidebar-off-canvas-rtl', function() {
	return gulp.src('./less-ready/modules/layout/sidebar-off-canvas-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/layout/sidebar-off-canvas-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/layout/sidebar-off-canvas-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('sidebar-widgets-with-scroll', function() {
	return gulp.src('./less-ready/modules/layout/sidebar-widgets-with-scroll.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/layout/sidebar-widgets-with-scroll.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/layout/sidebar-widgets-with-scroll.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('sidebar-widgets-with-scroll-rtl', function() {
	return gulp.src('./less-ready/modules/layout/sidebar-widgets-with-scroll-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/layout/sidebar-widgets-with-scroll-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/layout/sidebar-widgets-with-scroll-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

// blog
gulp.task('blog-global', function() {
	return gulp.src('./less-ready/blog/blog-global.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/blog/blog-global.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/blog/blog-global.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('blog-global-rtl', function() {
	return gulp.src('./less-ready/blog/blog-global-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/blog/blog-global-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/blog/blog-global-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('blog-masonry', function() {
	return gulp.src('./less-ready/blog/blog-masonry.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/blog/blog-masonry.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/blog/blog-masonry.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('blog-full-width', function() {
	return gulp.src('./less-ready/blog/blog-full-width.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/blog/blog-full-width.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/blog/blog-full-width.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('blog-ajax', function() {
	return gulp.src('./less-ready/blog/blog-ajax.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/blog/blog-ajax.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/blog/blog-ajax.min.css'))
		.pipe(gulp.dest('./'));
});

// pagination
gulp.task('pagination', function() {
	return gulp.src('./less-ready/pagination.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/pagination.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/pagination.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('pagination-rtl', function() {
	return gulp.src('./less-ready/pagination-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/pagination-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/pagination-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('star-rating', function() {
	return gulp.src('./less-ready/star-rating.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/star-rating.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/star-rating.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('star-rating-rtl', function() {
	return gulp.src('./less-ready/star-rating-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/star-rating-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/star-rating-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('comments', function() {
	return gulp.src('./less-ready/comments.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/comments.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/comments.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('comments-rtl', function() {
	return gulp.src('./less-ready/comments-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/comments-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/comments-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('navigation', function() {
	return gulp.src('./less-ready/navigation.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/navigation.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/navigation.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('navigation-rtl', function() {
	return gulp.src('./less-ready/navigation-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/navigation-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/navigation-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

// single post
gulp.task('single-post-global', function() {
	return gulp.src('./less-ready/blog/single-post/single-global.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/blog/single-post/single-global.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/blog/single-post/single-global.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('single-post-global-rtl', function() {
	return gulp.src('./less-ready/blog/single-post/single-global-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/blog/single-post/single-global-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/blog/single-post/single-global-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('single-meta', function() {
	return gulp.src('./less-ready/blog/single-post/meta.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/blog/single-post/meta.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/blog/single-post/meta.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('single-post-framed', function() {
	return gulp.src('./less-ready/blog/single-post/framed.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/blog/single-post/framed.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/blog/single-post/framed.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('single-post-large', function() {
	return gulp.src('./less-ready/blog/single-post/large.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/blog/single-post/large.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/blog/single-post/large.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('single-post-large2', function() {
	return gulp.src('./less-ready/blog/single-post/large2.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/blog/single-post/large2.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/blog/single-post/large2.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('single-post-full-width', function() {
	return gulp.src('./less-ready/blog/single-post/full-width.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/blog/single-post/full-width.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/blog/single-post/full-width.min.css'))
		.pipe(gulp.dest('./'));
});

// post-types
gulp.task('post-types-global', function() {
	return gulp.src('./less-ready/blog/types/global.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/blog/types/global.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/blog/types/global.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('post-types-framed', function() {
	return gulp.src('./less-ready/blog/types/framed.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/blog/types/framed.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/blog/types/framed.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('post-types-framed-rtl', function() {
	return gulp.src('./less-ready/blog/types/framed-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/blog/types/framed-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/blog/types/framed-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('post-types-grid-grid2', function() {
	return gulp.src('./less-ready/blog/types/grid-grid2.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/blog/types/grid-grid2.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/blog/types/grid-grid2.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('post-types-small-chess', function() {
	return gulp.src('./less-ready/blog/types/small-chess.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/blog/types/small-chess.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/blog/types/small-chess.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('post-types-small-chess-rtl', function() {
	return gulp.src('./less-ready/blog/types/small-chess-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/blog/types/small-chess-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/blog/types/small-chess-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('post-types-timeline', function() {
	return gulp.src('./less-ready/blog/types/timeline.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/blog/types/timeline.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/blog/types/timeline.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('post-types-timeline-rtl', function() {
	return gulp.src('./less-ready/blog/types/timeline-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/blog/types/timeline-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/blog/types/timeline-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('post-types-with-author', function() {
	return gulp.src('./less-ready/blog/types/with-author.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/blog/types/with-author.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/blog/types/with-author.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('post-types-with-author-rtl', function() {
	return gulp.src('./less-ready/blog/types/with-author-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/blog/types/with-author-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/blog/types/with-author-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('post-formats-quote', function() {
	return gulp.src('./less-ready/blog/formats/quote.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/blog/formats/quote.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/blog/formats/quote.min.css'))
		.pipe(gulp.dest('./'));
});

// testimonials
gulp.task('single-testimonials', function() {
	return gulp.src('./less-ready/testimonials/single.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/testimonials/single.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/testimonials/single.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('elementor-etheme-testimonials', function() {
	return gulp.src('./less-ready/modules/builders/elementor/etheme-testimonials.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/builders/elementor/etheme-testimonials.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/builders/elementor/etheme-testimonials.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('elementor-etheme-custom-masonry', function() {
	return gulp.src('./less-ready/modules/builders/elementor/etheme-custom-masonry.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/builders/elementor/etheme-custom-masonry.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/builders/elementor/etheme-custom-masonry.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('elementor-etheme-google-map', function() {
	return gulp.src('./less-ready/modules/builders/elementor/etheme-google-map.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/builders/elementor/etheme-google-map.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/builders/elementor/etheme-google-map.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('elementor-et-advance-tabs', function() {
	return gulp.src('./less-ready/modules/builders/elementor/et-advance-tabs.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/builders/elementor/et-advance-tabs.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/builders/elementor/et-advance-tabs.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('elementor-etheme-contact-form-7', function() {
	return gulp.src('./less-ready/modules/builders/elementor/etheme-contact-form-7.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/builders/elementor/etheme-contact-form-7.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/builders/elementor/etheme-contact-form-7.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('elementor-etheme-mailchimp', function() {
	return gulp.src('./less-ready/modules/builders/elementor/etheme-mailchimp.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/builders/elementor/etheme-mailchimp.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/builders/elementor/etheme-mailchimp.min.css'))
		.pipe(gulp.dest('./'));
});

// wpbakery
gulp.task('wpbakery', function() {
	return gulp.src('./less-ready/wpb.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/wpb.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/wpb.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('wpbakery-rtl', function() {
	return gulp.src('./less-ready/wpb-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/wpb-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/wpb-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('elementor', function() {
	return gulp.src('./less-ready/elementor.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/elementor.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/elementor.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('icons', function() {
	return gulp.src('./less/modules/global/xstore-icons.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/xstore-icons.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/xstore-icons.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('portfolio', function() {
	return gulp.src('./less-ready/portfolio.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/portfolio.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/portfolio.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('portfolio-rtl', function() {
	return gulp.src('./less-ready/portfolio-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/portfolio-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/portfolio-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

// breadcrumbs
gulp.task('breadcrumbs', function() {
	return gulp.src('./less-ready/breadcrumbs.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/breadcrumbs.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/breadcrumbs.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('breadcrumbs-rtl', function() {
	return gulp.src('./less-ready/breadcrumbs-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/breadcrumbs-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/breadcrumbs-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('mega-menu', function() {
	return gulp.src('./less-ready/modules/mega-menu.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/mega-menu.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/mega-menu.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('mega-menu-rtl', function() {
	return gulp.src('./less-ready/modules/mega-menu-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/mega-menu-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/mega-menu-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('fixed-footer', function() {
	return gulp.src('./less-ready/modules/fixed-footer.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/fixed-footer.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/fixed-footer.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('back-top', function() {
	return gulp.src('./less-ready/modules/back-top.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/back-top.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/back-top.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('back-top-rtl', function() {
	return gulp.src('./less-ready/modules/back-top-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/back-top-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/back-top-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

// search page
gulp.task('search-page', function() {
	return gulp.src('./less-ready/modules/search/global.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/search/global.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/search/global.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('banners-global', function() {
	return gulp.src('./less-ready/banners/banners-global.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/banners/banners-global.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/banners/banners-global.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('banner', function() {
	return gulp.src('./less-ready/banners/banner.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/banners/banner.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/banners/banner.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('team-member', function() {
	return gulp.src('./less-ready/banners/team-member.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/banners/team-member.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/banners/team-member.min.css'))
		.pipe(gulp.dest('./'));
});

// et-slider
gulp.task('et-slider', function() {
	return gulp.src('./less-ready/modules/builders/et-slider.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/builders/et-slider.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/builders/et-slider.min.css'))
		.pipe(gulp.dest('./'));
});

// categories-carousel
gulp.task('categories-carousel', function() {
	return gulp.src('./less-ready/modules/builders/categories-carousel.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/builders/categories-carousel.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/builders/categories-carousel.min.css'))
		.pipe(gulp.dest('./'));
});

// icon-boxes
gulp.task('icon-boxes', function() {
	return gulp.src('./less-ready/modules/builders/icon-boxes.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/builders/icon-boxes.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/builders/icon-boxes.min.css'))
		.pipe(gulp.dest('./'));
});

// blog modules
gulp.task('et-blog', function() {
	return gulp.src('./less-ready/blog/et-blog.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/blog/et-blog.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/blog/et-blog.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('et-blog-rtl', function() {
	return gulp.src('./less-ready/blog/et-blog-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/blog/et-blog-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/blog/et-blog-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

// brands modules
gulp.task('brands-list', function() {
	return gulp.src('./less-ready/modules/woocommerce/brands-list.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/brands-list.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/brands-list.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('brands-carousel', function() {
	return gulp.src('./less-ready/modules/woocommerce/brands-carousel.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/brands-carousel.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/brands-carousel.min.css'))
		.pipe(gulp.dest('./'));
});

// categories-list-grid
gulp.task('categories-list-grid', function() {
	return gulp.src('./less-ready/modules/woocommerce/categories-list-grid.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/categories-list-grid.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/categories-list-grid.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('categories-menu-element', function() {
	return gulp.src('./less-ready/modules/woocommerce/categories-menu-element.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/categories-menu-element.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/categories-menu-element.min.css'))
		.pipe(gulp.dest('./'));
});

// et-offer
gulp.task('et-offer', function() {
	return gulp.src('./less-ready/modules/woocommerce/et-offer.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/et-offer.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/et-offer.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('et-offer-rtl', function() {
	return gulp.src('./less-ready/modules/woocommerce/et-offer-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/et-offer-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/et-offer-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

// elementor categories
gulp.task('elementor-categories', function() {
	return gulp.src('./less-ready/modules/builders/elementor/categories.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/builders/elementor/categories.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/builders/elementor/categories.min.css'))
		.pipe(gulp.dest('./'));
});

// wpb autoscrolling-text
gulp.task('wpb-autoscrolling-text', function() {
	return gulp.src('./less-ready/modules/builders/wpb/autoscrolling-text.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/builders/wpb/autoscrolling-text.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/builders/wpb/autoscrolling-text.min.css'))
		.pipe(gulp.dest('./'));
});

// wpb banners
gulp.task('wpb-banners', function() {
	return gulp.src('./less-ready/modules/builders/wpb/banners.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/builders/wpb/banners.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/builders/wpb/banners.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('wpb-et-offer', function() {
	return gulp.src('./less-ready/modules/builders/wpb/et-offer.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/builders/wpb/et-offer.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/builders/wpb/et-offer.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('wpb-et-timer', function() {
	return gulp.src('./less-ready/modules/builders/wpb/et-timer.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/builders/wpb/et-timer.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/builders/wpb/et-timer.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('wpb-images-carousel', function() {
	return gulp.src('./less-ready/modules/builders/wpb/images-carousel.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/builders/wpb/images-carousel.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/builders/wpb/images-carousel.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('wpb-instagram', function() {
	return gulp.src('./less-ready/modules/builders/wpb/instagram.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/builders/wpb/instagram.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/builders/wpb/instagram.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('wpb-look-book', function() {
	return gulp.src('./less-ready/modules/builders/wpb/look-book.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/builders/wpb/look-book.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/builders/wpb/look-book.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('wpb-thelook', function() {
	return gulp.src('./less-ready/modules/builders/wpb/thelook.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/builders/wpb/thelook.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/builders/wpb/thelook.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('wpb-testimonials', function() {
	return gulp.src('./less-ready/modules/builders/wpb/testimonials.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/builders/wpb/testimonials.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/builders/wpb/testimonials.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('photoswipe-styles', function() {
	return gulp.src('./less-ready/modules/photoswipe.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/photoswipe.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/photoswipe.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('page-404', function() {
	return gulp.src('./less-ready/modules/404-page.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/404-page.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/404-page.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('blank-page', function() {
	return gulp.src('./less-ready/modules/blank-page.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/blank-page.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/blank-page.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('contact-forms', function() {
	return gulp.src('./less-ready/modules/contact-forms.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/contact-forms.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/contact-forms.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('contact-forms-rtl', function() {
	return gulp.src('./less-ready/modules/contact-forms-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/contact-forms-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/contact-forms-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('dropcap', function() {
	return gulp.src('./less-ready/modules/dropcap.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/dropcap.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/dropcap.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('dropcap-rtl', function() {
	return gulp.src('./less-ready/modules/dropcap-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/dropcap-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/dropcap-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('mark-text', function() {
	return gulp.src('./less-ready/modules/mark-text.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/mark-text.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/mark-text.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('et-timer', function() {
	return gulp.src('./less-ready/modules/et-timer.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/et-timer.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/et-timer.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('etheme-popup', function() {
	return gulp.src('./less-ready/modules/etheme-popup.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/etheme-popup.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/etheme-popup.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('etheme-popup-rtl', function() {
	return gulp.src('./less-ready/modules/etheme-popup-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/etheme-popup-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/etheme-popup-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('socials-login', function() {
	return gulp.src('./less-ready/modules/socials/login.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/socials/login.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/socials/login.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('instagram', function() {
	return gulp.src('./less-ready/modules/instagram.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/instagram.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/instagram.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('instagram-rtl', function() {
	return gulp.src('./less-ready/modules/instagram-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/instagram-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/instagram-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

// woocommerce
gulp.task('isotope-filters', function() {
	return gulp.src('./less-ready/modules/isotope/filters.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/isotope/filters.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/isotope/filters.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('tabs', function() {
	return gulp.src('./less-ready/modules/tabs.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/tabs.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/tabs.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('tabs-rtl', function() {
	return gulp.src('./less-ready/modules/tabs-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/tabs-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/tabs-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('woocommerce-global', function() {
	return gulp.src('./less-ready/modules/woocommerce/global.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/global.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/global.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('woocommerce-global-rtl', function() {
	return gulp.src('./less-ready/modules/woocommerce/global-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/global-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/global-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('woocommerce-archive', function() {
	return gulp.src('./less-ready/modules/woocommerce/archive.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/archive.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/archive.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('woocommerce-archive-rtl', function() {
	return gulp.src('./less-ready/modules/woocommerce/archive-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/archive-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/archive-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('cart-widget', function() {
	return gulp.src('./less-ready/modules/woocommerce/cart-widget.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/cart-widget.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/cart-widget.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('cart-widget-rtl', function() {
	return gulp.src('./less-ready/modules/woocommerce/cart-widget-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/cart-widget-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/cart-widget-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('yith-compare', function() {
	return gulp.src('./less-ready/modules/woocommerce/yith-compare.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/yith-compare.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/yith-compare.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('sb-infinite-scroll-load-more', function() {
	return gulp.src('./less-ready/modules/woocommerce/sb-infinite-scroll-load-more.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/sb-infinite-scroll-load-more.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/sb-infinite-scroll-load-more.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('catalog-mode', function() {
	return gulp.src('./less-ready/modules/woocommerce/catalog-mode.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/catalog-mode.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/catalog-mode.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('shop-full-width', function() {
	return gulp.src('./less-ready/modules/woocommerce/shop-full-width.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/shop-full-width.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/shop-full-width.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('products-full-screen', function() {
	return gulp.src('./less-ready/modules/woocommerce/products-full-screen.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/products-full-screen.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/products-full-screen.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('special-cart-breadcrumbs', function() {
	return gulp.src('./less-ready/modules/woocommerce/pages/special-cart-breadcrumbs.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/pages/special-cart-breadcrumbs.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/pages/special-cart-breadcrumbs.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('special-cart-breadcrumbs-rtl', function() {
	return gulp.src('./less-ready/modules/woocommerce/pages/special-cart-breadcrumbs-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/pages/special-cart-breadcrumbs-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/pages/special-cart-breadcrumbs-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('filter-area', function() {
	return gulp.src('./less-ready/modules/woocommerce/filter-area.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/filter-area.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/filter-area.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('filter-area-rtl', function() {
	return gulp.src('./less-ready/modules/woocommerce/filter-area-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/filter-area-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/filter-area-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('quick-view', function() {
	return gulp.src('./less-ready/modules/woocommerce/quick-view.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/quick-view.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/quick-view.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('quick-view-rtl', function() {
	return gulp.src('./less-ready/modules/woocommerce/quick-view-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/quick-view-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/quick-view-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('cart-page', function() {
	return gulp.src('./less-ready/modules/woocommerce/pages/cart.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/pages/cart.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/pages/cart.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('cart-page-rtl', function() {
	return gulp.src('./less-ready/modules/woocommerce/pages/cart-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/pages/cart-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/pages/cart-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('checkout-page', function() {
	return gulp.src('./less-ready/modules/woocommerce/pages/checkout.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/pages/checkout.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/pages/checkout.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('checkout-page-rtl', function() {
	return gulp.src('./less-ready/modules/woocommerce/pages/checkout-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/pages/checkout-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/pages/checkout-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('thank-you-page', function() {
	return gulp.src('./less-ready/modules/woocommerce/pages/thank-you.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/pages/thank-you.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/pages/thank-you.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('account-page', function() {
	return gulp.src('./less-ready/modules/woocommerce/pages/account.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/pages/account.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/pages/account.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('account-page-rtl', function() {
	return gulp.src('./less-ready/modules/woocommerce/pages/account-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/pages/account-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/pages/account-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('wishlist-page', function() {
	return gulp.src('./less-ready/modules/woocommerce/pages/wishlist.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/pages/wishlist.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/pages/wishlist.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('wishlist-page-rtl', function() {
	return gulp.src('./less-ready/modules/woocommerce/pages/wishlist-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/pages/wishlist-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/pages/wishlist-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('no-products-found', function() {
	return gulp.src('./less-ready/modules/woocommerce/no-products-found.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/no-products-found.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/no-products-found.min.css'))
		.pipe(gulp.dest('./'));
});

// product views
gulp.task('content-product-custom', function() {
	return gulp.src('./less-ready/modules/woocommerce/content-product-custom.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/content-product-custom.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/content-product-custom.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('product-view-default', function() {
	return gulp.src('./less-ready/modules/woocommerce/product-hovers/product-view-default.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/product-hovers/product-view-default.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/product-hovers/product-view-default.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('product-view-default-rtl', function() {
	return gulp.src('./less-ready/modules/woocommerce/product-hovers/product-view-default-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/product-hovers/product-view-default-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/product-hovers/product-view-default-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('product-view-mask2', function() {
	return gulp.src('./less-ready/modules/woocommerce/product-hovers/product-view-mask2.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/product-hovers/product-view-mask2.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/product-hovers/product-view-mask2.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('product-view-mask2-rtl', function() {
	return gulp.src('./less-ready/modules/woocommerce/product-hovers/product-view-mask2-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/product-hovers/product-view-mask2-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/product-hovers/product-view-mask2-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('product-view-mask3', function() {
	return gulp.src('./less-ready/modules/woocommerce/product-hovers/product-view-mask3.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/product-hovers/product-view-mask3.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/product-hovers/product-view-mask3.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('product-view-mask3-rtl', function() {
	return gulp.src('./less-ready/modules/woocommerce/product-hovers/product-view-mask3-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/product-hovers/product-view-mask3-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/product-hovers/product-view-mask3-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('product-view-light', function() {
	return gulp.src('./less-ready/modules/woocommerce/product-hovers/product-view-light.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/product-hovers/product-view-light.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/product-hovers/product-view-light.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('product-view-light-rtl', function() {
	return gulp.src('./less-ready/modules/woocommerce/product-hovers/product-view-light-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/product-hovers/product-view-light-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/product-hovers/product-view-light-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('product-booking', function() {
	return gulp.src('./less-ready/modules/woocommerce/product-hovers/product-booking.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/product-hovers/product-booking.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/product-hovers/product-booking.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('product-booking-rtl', function() {
	return gulp.src('./less-ready/modules/woocommerce/product-hovers/product-booking-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/product-hovers/product-booking-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/product-hovers/product-booking-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('product-view-menu', function() {
	return gulp.src('./less-ready/modules/woocommerce/product-hovers/product-view-menu.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/product-hovers/product-view-menu.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/product-hovers/product-view-menu.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('product-view-menu-rtl', function() {
	return gulp.src('./less-ready/modules/woocommerce/product-hovers/product-view-menu-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/product-hovers/product-view-menu-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/product-hovers/product-view-menu-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('product-view-info', function() {
	return gulp.src('./less-ready/modules/woocommerce/product-hovers/product-view-info.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/product-hovers/product-view-info.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/product-hovers/product-view-info.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('product-view-info-rtl', function() {
	return gulp.src('./less-ready/modules/woocommerce/product-hovers/product-view-info-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/product-hovers/product-view-info-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/product-hovers/product-view-info-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('single-product', function() {
	return gulp.src('./less-ready/modules/woocommerce/single-product/single-product.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/single-product/single-product.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/single-product/single-product.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('single-product-rtl', function() {
	return gulp.src('./less-ready/modules/woocommerce/single-product/single-product-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/single-product/single-product-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/single-product/single-product-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('single-product-elements', function() {
	return gulp.src('./less-ready/modules/woocommerce/single-product/single-product-elements.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/single-product/single-product-elements.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/single-product/single-product-elements.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('single-product-elements-rtl', function() {
	return gulp.src('./less-ready/modules/woocommerce/single-product/single-product-elements-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/single-product/single-product-elements-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/single-product/single-product-elements-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('single-product-booking', function() {
	return gulp.src('./less-ready/modules/woocommerce/single-product/single-product-booking.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/single-product/single-product-booking.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/single-product/single-product-booking.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('single-product-booking-rtl', function() {
	return gulp.src('./less-ready/modules/woocommerce/single-product/single-product-booking-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/single-product/single-product-booking-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/single-product/single-product-booking-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('single-product-right', function() {
	return gulp.src('./less-ready/modules/woocommerce/single-product/single-product-right.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/single-product/single-product-right.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/single-product/single-product-right.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('single-product-wide', function() {
	return gulp.src('./less-ready/modules/woocommerce/single-product/single-product-wide.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/single-product/single-product-wide.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/single-product/single-product-wide.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('sticky-cart', function() {
	return gulp.src('./less-ready/modules/woocommerce/single-product/sticky-cart.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/single-product/sticky-cart.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/single-product/sticky-cart.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('sticky-cart-rtl', function() {
	return gulp.src('./less-ready/modules/woocommerce/single-product/sticky-cart-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/single-product/sticky-cart-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/single-product/sticky-cart-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('request-quote', function() {
	return gulp.src('./less-ready/modules/woocommerce/single-product/request-quote.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/single-product/request-quote.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/single-product/request-quote.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('single-product-builder', function() {
	return gulp.src('./less-ready/modules/woocommerce/single-product/single-product-builder.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/single-product/single-product-builder.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/single-product/single-product-builder.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('single-product-builder-rtl', function() {
	return gulp.src('./less-ready/modules/woocommerce/single-product/single-product-builder-rtl.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/modules/woocommerce/single-product/single-product-builder-rtl.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/modules/woocommerce/single-product/single-product-builder-rtl.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('swatches', function() {
	return gulp.src('./less-ready/swatches.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/swatches.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/swatches.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('forum', function() {
	return gulp.src('./less-ready/forum.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/forum.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/forum.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('wcfmmp', function() {
	return gulp.src('./less-ready/wcfmmp.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/wcfmmp.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/wcfmmp.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('wcmp', function() {
	return gulp.src('./less-ready/wcmp.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/wcmp.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/wcmp.min.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('dokan', function() {
	return gulp.src('./less-ready/dokan.less')
		.pipe(less({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		}))
		.pipe(postcss([
			autoprefixer('last 2 versions', '> 1%')
		]))
		.pipe(rename('css/dokan.css'))
		.pipe(gulp.dest('./'))
		.pipe(cleanCSS())
		.pipe(rename('css/dokan.min.css'))
		.pipe(gulp.dest('./'));
});

// Uglify Task
gulp.task('ethemeWhiteLabelPluginJs', function () {
	return gulp.src(['../../plugins/xstore-white-label-branding/js/scripts.js'])
		.pipe(concat('../../plugins/xstore-white-label-branding/js/scripts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('ajaxFiltersJs', function () {
	return gulp.src(['./js/theme/ajax-filters.js'])
		.pipe(concat('./js/ajax-filters.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('miniMart', function () {
	return gulp.src(['./js/theme/mini-cart.js'])
		.pipe(concat('./js/mini-cart.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('spv', function () {
	return gulp.src(['./js/theme/ajax-spv-add-to-cart.js'])
		.pipe(concat('./js/ajax-spv-add-to-cart.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('portfolioJs', function () {
	return gulp.src(['./js/theme/portfolio.js'])
		.pipe(concat('./js/portfolio.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('postBackstretchImgJs', function () {
	return gulp.src(xstoreConfig.uglify.postBackstretchJs)
		.pipe(concat('./js/postBackstretchImg.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('ethemeJs', function () {
	return gulp.src(xstoreConfig.uglify.ethemeJs)
		.pipe(concat('./js/etheme.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('ethemeCoreBuilderJs', function () {
	var builder = gulp.src(['../../plugins/et-core-plugin/app/models/customizer/builder/js/builder.js'])
		.pipe(concat('../../plugins/et-core-plugin/app/models/customizer/builder/js/builder.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));

	// var frontend = gulp.src(['../../plugins/et-core-plugin/app/models/customizer/frontend/js/frontend-script.js'])
	// 	.pipe(concat('../../plugins/et-core-plugin/app/models/customizer/frontend/js/frontend-script.min.js'))
	// 	.pipe(uglify())
	// 	.pipe(gulp.dest('./'));

	var script = gulp.src(['../../plugins/et-core-plugin/packages/sales-booster/assets/js/script.js'])
		.pipe(concat('../../plugins/et-core-plugin/packages/sales-booster/assets/js/script.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));

	return merge(builder, script);
});

gulp.task('ethemePluginsJs', function () {
	return gulp.src(xstoreConfig.uglify.ethemePluginsJs)
		.pipe(concat('./js/etheme.plugins.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('panelGeneratorJs', function () {
	return gulp.src(['./framework/panel/js/generator.js'])
		.pipe(concat('./framework/panel/js/generator.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('panelInstagramJs', function () {
	return gulp.src(['./framework/panel/js/instagram.js'])
		.pipe(concat('./framework/panel/js/instagram.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('panelEmailBuilderJs', function () {
	return gulp.src(['./framework/panel/js/email_builder.js'])
		.pipe(concat('./framework/panel/js/email_builder.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('panelSalesBoosterJs', function () {
	return gulp.src(['./framework/panel/js/sales_booster.js'])
		.pipe(concat('./framework/panel/js/sales_booster.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('panelPluginsJs', function () {
	return gulp.src(['./framework/panel/js/plugins.js'])
		.pipe(concat('./framework/panel/js/plugins.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('infiniteScrollLoadMoreJs', function () {
	return gulp.src(['./js/theme/ReinitForInfiniteScroll.js'])
		.pipe(concat('./js/modules/infinite_scroll_load_more.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('compareJs', function () {
	return gulp.src(['./js/theme/ForCompare.js'])
		.pipe(concat('./js/modules/compare.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('countdownJs', function () {
	return gulp.src(['./js/theme/countdown.js'])
		.pipe(concat('./js/modules/countdown.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('theLookJs', function () {
	return gulp.src(['./js/theme/theLook.js'])
		.pipe(concat('./js/modules/theLook.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('wishlistJs', function () {
	return gulp.src(['./js/theme/wishlist.js'])
		.pipe(concat('./js/modules/wishlist.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('promoTextCarouselJs', function () {
	return gulp.src(['./js/theme/promoTextCarousel.js'])
		.pipe(concat('./js/modules/promoTextCarousel.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('menuPostsJs', function () {
	return gulp.src(['./js/theme/menuPosts.js'])
		.pipe(concat('./js/modules/menuPosts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('onePageMenuJs', function () {
	return gulp.src(['./js/theme/onePageMenu.js'])
		.pipe(concat('./js/modules/onePageMenu.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('secondaryMenuJs', function () {
	return gulp.src(['./js/theme/secondaryMenu.js'])
		.pipe(concat('./js/modules/all-departments-menu.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('filtersAreaJs', function () {
	return gulp.src(['./js/theme/filtersArea.js'])
		.pipe(concat('./js/modules/filtersArea.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('cartPageJs', function () {
	return gulp.src(['./js/theme/et_auto_cart.js'])
		.pipe(concat('./js/modules/cart-page.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('cartProgressJs', function () {
	return gulp.src(['./js/theme/et_cart_progress.js'])
		.pipe(concat('./js/modules/cartProgressBar.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('fixedHeaderJs', function () {
	return gulp.src(['./js/theme/fixedHeader.js'])
		.pipe(concat('./js/modules/fixedHeader.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('commentsFormValidationJs', function () {
	return gulp.src(['./js/theme/commentsForm.js'])
		.pipe(concat('./js/modules/commentsForm.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('contactUsPopupJs', function () {
	return gulp.src(['./js/theme/contactUsPopup.js'])
		.pipe(concat('./js/modules/call-popup.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('singleProductBuilderJs', function () {
	return gulp.src(['./js/theme/singleProductBuilder.js'])
		.pipe(concat('./js/modules/single-product-builder.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('variationGalleryJs', function () {
	return gulp.src(['./js/theme/variationGallery.js'])
		.pipe(concat('./js/modules/variation-gallery.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('singleProductVerticalGalleryJs', function () {
	return gulp.src(['./js/theme/sliderVertical.js'])
		.pipe(concat('./js/modules/single-product-vertical-gallery.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('singleProductStickyProductImagesJs', function () {
	return gulp.src(['./js/theme/stickyProductImages.js'])
		.pipe(concat('./js/modules/single-product-sticky-product-images.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('singleProductJs', function () {
	return gulp.src(xstoreConfig.uglify.singleProductJs)
		.pipe(concat('./js/modules/single-product.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('woocommerceJs', function () {
	return gulp.src(xstoreConfig.uglify.woocommerceJs)
		.pipe(concat('./js/modules/woocommerce.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('widgetNavMenuJs', function () {
	return gulp.src(xstoreConfig.uglify.widgetNavMenuJs)
		.pipe(concat('./js/modules/customMenuAccordion.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('productCategoriesWidgetJs', function () {
	return gulp.src(xstoreConfig.uglify.productCategoriesWidgetJs)
		.pipe(concat('./js/modules/productCategoriesWidget.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('widgetsShowMoreJs', function () {
	return gulp.src(xstoreConfig.uglify.widgetsShowMoreJs)
		.pipe(concat('./js/modules/widgetsShowMore.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('widgetsOpenCloseJs', function () {
	return gulp.src(xstoreConfig.uglify.widgetsOpenCloseJs)
		.pipe(concat('./js/modules/widgetsOpenClose.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('sidebarCanvasJs', function () {
	return gulp.src(xstoreConfig.uglify.sidebarCanvasJs)
		.pipe(concat('./js/modules/sidebarCanvas.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('stickySidebarJs', function () {
	return gulp.src(xstoreConfig.uglify.stickySidebarJs)
		.pipe(concat('./js/modules/stickySidebar.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('isotopeJs', function () {
	return gulp.src(xstoreConfig.uglify.isotopeJs)
		.pipe(concat('./js/modules/isotope.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('stickyKitJs', function () {
	return gulp.src(xstoreConfig.uglify.stickyKitJs)
		.pipe(concat('./js/modules/jquery.sticky-kit.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('fancySelectJs', function () {
	return gulp.src(xstoreConfig.uglify.fancySelectJs)
		.pipe(concat('./js/modules/fancy.select.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('backToTopJs', function () {
	return gulp.src(xstoreConfig.uglify.backToTopJs)
		.pipe(concat('./js/modules/back-top.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('fixedFooterJs', function () {
	return gulp.src(xstoreConfig.uglify.fixedFooterJs)
		.pipe(concat('./js/modules/fixed-footer.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('navigationOnTouchJs', function () {
	return gulp.src(xstoreConfig.uglify.navigationOnTouchJs)
		.pipe(concat('./js/modules/menu-item-on-touch.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('navigationOnClickJs', function () {
	return gulp.src(xstoreConfig.uglify.navigationOnClickJs)
		.pipe(concat('./js/modules/menu-item-on-click.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('mainNavigationJs', function () {
	return gulp.src(xstoreConfig.uglify.mainNavigationJs)
		.pipe(concat('./js/modules/mega-menu.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('breadcrumbsTextScrollJs', function () {
	return gulp.src(xstoreConfig.uglify.breadcrumbsTextScrollJs)
		.pipe(concat('./js/modules/breadcrumbs/effect-text-scroll.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('breadcrumbsMouseJs', function () {
	return gulp.src(xstoreConfig.uglify.breadcrumbsMouseJs)
		.pipe(concat('./js/modules/breadcrumbs/effect-mouse.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('swiperJs', function () {
	return gulp.src(xstoreConfig.uglify.swiperJs)
		.pipe(concat('./js/modules/swiper.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('tabsJs', function () {
	return gulp.src(xstoreConfig.uglify.tabsJs)
		.pipe(concat('./js/modules/tabs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('mobileMenuJs', function () {
	return gulp.src(xstoreConfig.uglify.mobileMenuJs)
		.pipe(concat('./js/modules/mobileMenu.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('ajaxSearchJs', function () {
	return gulp.src(xstoreConfig.uglify.ajaxSearchJs)
		.pipe(concat('./js/modules/ajaxSearch.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('mobilePanelJs', function () {
	return gulp.src(xstoreConfig.uglify.mobilePanelJs)
		.pipe(concat('./js/modules/mobilePanel.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('stWooSwatchesJs', function () {
	return gulp.src(xstoreConfig.uglify.stWooSwatchesJs)
		.pipe(concat('../../plugins/et-core-plugin/packages/st-woo-swatches/public/js/frontend.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('optimize', function () {
	return gulp.src(xstoreConfig.uglify.optimize)
		.pipe(concat('./js/etheme.optimize.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('photoswipe', function () {
	return gulp.src(xstoreConfig.uglify.photoswipe)
		.pipe(concat('./js/photoswipe-optimize.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

// Compress
gulp.task('compress', function () {
	var branding =  gulp.src(['**','!node_modules','!node_modules/**','!Gruntfile.js','!package.json','!js/scripts.js','!.git','!.gitignore','!README.md','!idea/','!.DS_Store'], {cwd:'../../plugins/xstore-white-label-branding/'})
		.pipe(
			rename(
				function(path) {
					path.dirname = 'xstore-white-label-branding/' + path.dirname;
				}
			)
		)
		.pipe(zip('../xstore-white-label-branding.zip'))
		.pipe(gulp.dest('./'));

	var core =  gulp.src(['**','!node_modules','!node_modules/**','!Gruntfile.js','!package.json','!.git','!.gitignore','!README.md','!app/models/customizer/theme-options/product-archive-builder','!app/models/customizer/theme-options/product-archive-builder/**','!app/models/customizer/templates/woocommerce/archive-product','!app/models/customizer/templates/woocommerce/archive-product/**','!app/models/customizer/builder/js/builder.js','!app/models/customizer/frontend/js/frontend-script.js','!app/models/customizer/frontend/js/jquery.autocomplete.js','!packages/sales-booster/assets/js/script.js','!.DS_Store'], {cwd:'../../plugins/et-core-plugin/'})
		.pipe(
			rename(
				function(path) {
					path.dirname = 'et-core-plugin/' + path.dirname;
				}
			)
		)
		.pipe(zip('../et-core-plugin.zip'))
		.pipe(gulp.dest('./'));

	var xstore =  gulp.src(['**','!node_modules','!node_modules/**','!Gruntfile.js','!less/**','!less-ready/**','!theme/assets/dummy','!theme/assets/dummy/**','!theme/assets/dummy/*/*.jpg','!theme/assets/dummy/*/*.zip','!theme/assets/dummy/*/*.json','!theme/plugins/js_composer.zip','!theme/plugins/revslider.zip','!less_old','!less_old/**','!package.json','!.git','!.gitignore','!README.md','!js/etheme.plugins.min','!js/libs/flexibility.js','!js/flexibility.js','!js/jquery.magnific-popup.js','!js/libs/jquery.magnific-popup.js','!js/swiper.js','!js/libs/swiper.js','!js/jquery.sticky-kit.js','!js/libs/jquery.sticky-kit.js','!js/modernizr.js', '!js/libs/modernizr.js','!js/photoswipe.js','!js/photoswipe-ui-default.js','!js/libs/photoswipe.js','!js/libs/photoswipe-ui-default.js','!js/portfolio.js','!js/theme','!js/theme/','!js/theme/*','!js/theme/breadcrumbs/*','!js/ajax-filters.js','!js/theme/ajax-filters.js','!js/theme/mini-cart.js','!js/theme/ajax-spv-add-to-cart.js','!changelog.txt','!framework/panel/js/generator.js','!framework/panel/js/instagram.js','!framework/panel/js/email_builder.js','!framework/panel/js/sales_booster.js','!framework/panel/js/plugins.js','!js/oldHeader.js','!js/oldHeader.min.js','!js/etheme.js'])
		.pipe(
			rename(
				function(path) {
					path.dirname = 'xstore/' + path.dirname;
				}
			)
		)
		.pipe(zip('../xstore.zip'))
		.pipe(gulp.dest('./'));

	var xstore_dev =  gulp.src(['**','!node_modules','!node_modules/**','!Gruntfile.js','!theme/assets/dummy/*/*.jpg','!theme/assets/dummy/*/*.zip','!theme/plugins/js_composer.zip','!theme/plugins/revslider.zip','!package.json','!.git','!.gitignore','!README.md'])
		.pipe(
			rename(
				function(path) {
					path.dirname = 'xstore/' + path.dirname;
				}
			)
		)
		.pipe(zip('../xstore_dev.zip'))
		.pipe(gulp.dest('./'));

	var xstore_amp =  gulp.src(['**','!.git','!.gitignore','!README.md','!.DS_Store'], {cwd:'../../plugins/xstore-amp/'})
		.pipe(
			rename(
				function(path) {
					path.dirname = 'xstore-amp/' + path.dirname;
				}
			)
		)
		.pipe(zip('../xstore-amp.zip'))
		.pipe(gulp.dest('./'));

	return merge(branding, core, xstore, xstore_dev, xstore_amp);
});


// Watch everything
gulp.task('watch', function () {
	// Js uglify
	gulp.watch(['../../plugins/xstore-white-label-branding/js/scripts.js'], gulp.series('ethemeWhiteLabelPluginJs'));
	gulp.watch(['./js/theme/ajax-filters.js'], gulp.series('ajaxFiltersJs'));
	gulp.watch(['./js/theme/mini-cart.js'], gulp.series('miniMart'));
	gulp.watch(['./js/theme/ajax-spv-add-to-cart.js'], gulp.series('spv'));
	gulp.watch(['./js/theme/portfolio.js'], gulp.series('portfolioJs'));
	gulp.watch(xstoreConfig.uglify.ethemeJs, gulp.series('ethemeJs'));
	gulp.watch(xstoreConfig.uglify.postBackstretchJs, gulp.series('postBackstretchImgJs'));
	gulp.watch(['../../plugins/et-core-plugin/packages/sales-booster/assets/js/script.js','../../plugins/et-core-plugin/app/models/customizer/builder/js/builder.js', '../../plugins/et-core-plugin/app/models/customizer/frontend/js/frontend-script.js'], gulp.series('ethemeCoreBuilderJs'));
	gulp.watch(xstoreConfig.uglify.ethemePluginsJs, gulp.series('ethemePluginsJs'));
	gulp.watch(['./framework/panel/js/generator.js'], gulp.series('panelGeneratorJs'));
	gulp.watch(['./framework/panel/js/instagram.js'], gulp.series('panelInstagramJs'));
	gulp.watch(['./framework/panel/js/email_builder.js'], gulp.series('panelEmailBuilderJs'));
	gulp.watch(['./framework/panel/js/sales_booster.js'], gulp.series('panelSalesBoosterJs'));
	gulp.watch(['./framework/panel/js/plugins.js'], gulp.series('panelPluginsJs'));
	gulp.watch(['./js/theme/ReinitForInfiniteScroll.js'], gulp.series('infiniteScrollLoadMoreJs'));
	gulp.watch(['./js/theme/ForCompare.js'], gulp.series('compareJs'));
	gulp.watch(['./js/theme/countdown.js'], gulp.series('countdownJs'));
	gulp.watch(['./js/theme/theLook.js'], gulp.series('theLookJs'));
	gulp.watch(['./js/theme/wishlist.js'], gulp.series('wishlistJs'));
	gulp.watch(['./js/theme/promoTextCarousel.js'], gulp.series('promoTextCarouselJs'));
	gulp.watch(['./js/theme/menuPosts.js'], gulp.series('menuPostsJs'));
	gulp.watch(['./js/theme/onePageMenu.js'], gulp.series('onePageMenuJs'));
	gulp.watch(['./js/theme/secondaryMenu.js'], gulp.series('secondaryMenuJs'));
	gulp.watch(['./js/theme/filtersArea.js'], gulp.series('filtersAreaJs'));
	gulp.watch(['./js/theme/et_auto_cart.js'], gulp.series('cartPageJs'));
	gulp.watch(['./js/theme/et_cart_progress.js'], gulp.series('cartProgressJs'));
	gulp.watch(['./js/theme/fixedHeader.js'], gulp.series('fixedHeaderJs'));
	gulp.watch(['./js/theme/commentsForm.js'], gulp.series('commentsFormValidationJs'));
	gulp.watch(['./js/theme/contactUsPopup.js'], gulp.series('contactUsPopupJs'));
	gulp.watch(['./js/theme/singleProductBuilder.js'], gulp.series('singleProductBuilderJs'));
	gulp.watch(['./js/theme/variationGallery.js'], gulp.series('variationGalleryJs'));
	gulp.watch(['./js/theme/sliderVertical.js'], gulp.series('singleProductVerticalGalleryJs'));
	gulp.watch(['./js/theme/stickyProductImages.js'], gulp.series('singleProductStickyProductImagesJs'));
	gulp.watch(xstoreConfig.uglify.singleProductJs, gulp.series('singleProductJs'));
	gulp.watch(xstoreConfig.uglify.woocommerceJs, gulp.series('woocommerceJs'));
	gulp.watch(xstoreConfig.uglify.widgetNavMenuJs, gulp.series('widgetNavMenuJs'));
	gulp.watch(xstoreConfig.uglify.productCategoriesWidgetJs, gulp.series('productCategoriesWidgetJs'));
	gulp.watch(xstoreConfig.uglify.widgetsShowMoreJs, gulp.series('widgetsShowMoreJs'));
	gulp.watch(xstoreConfig.uglify.widgetsOpenCloseJs, gulp.series('widgetsOpenCloseJs'));
	gulp.watch(xstoreConfig.uglify.sidebarCanvasJs, gulp.series('sidebarCanvasJs'));
	gulp.watch(xstoreConfig.uglify.stickySidebarJs, gulp.series('stickySidebarJs'));
	gulp.watch(xstoreConfig.uglify.isotopeJs, gulp.series('isotopeJs'));
	gulp.watch(xstoreConfig.uglify.stickyKitJs, gulp.series('stickyKitJs'));
	gulp.watch(xstoreConfig.uglify.fancySelectJs, gulp.series('fancySelectJs'));
	gulp.watch(xstoreConfig.uglify.backToTopJs, gulp.series('backToTopJs'));
	gulp.watch(xstoreConfig.uglify.fixedFooterJs, gulp.series('fixedFooterJs'));
	gulp.watch(xstoreConfig.uglify.navigationOnClickJs, gulp.series('navigationOnClickJs'));
	gulp.watch(xstoreConfig.uglify.mainNavigationJs, gulp.series('mainNavigationJs'));
	gulp.watch(xstoreConfig.uglify.breadcrumbsTextScrollJs, gulp.series('breadcrumbsTextScrollJs'));
	gulp.watch(xstoreConfig.uglify.breadcrumbsMouseJs, gulp.series('breadcrumbsMouseJs'));
	gulp.watch(xstoreConfig.uglify.swiperJs, gulp.series('swiperJs'));
	gulp.watch(xstoreConfig.uglify.tabsJs, gulp.series('tabsJs'));
	gulp.watch(xstoreConfig.uglify.mobileMenuJs, gulp.series('mobileMenuJs'));
	gulp.watch(xstoreConfig.uglify.ajaxSearchJs, gulp.series('ajaxSearchJs'));
	gulp.watch(xstoreConfig.uglify.mobilePanelJs, gulp.series('mobilePanelJs'));
	gulp.watch(xstoreConfig.uglify.stWooSwatchesJs, gulp.series('stWooSwatchesJs'));

	gulp.watch(xstoreConfig.uglify.optimize, gulp.series('optimize'));
	gulp.watch(xstoreConfig.uglify.photoswipe, gulp.series('photoswipe'));

	// Less
	gulp.watch(xstoreConfig.concat.style, gulp.series('concate-style', 'style'));
	gulp.watch(xstoreConfig.concat.xstore, gulp.series('concate-xstore', 'xstore'));
	gulp.watch(xstoreConfig.concat.xstore_rtl, gulp.series('concate-xstore-rtl', 'xstore-rtl'));
	// dark
	gulp.watch(xstoreConfig.concat.dark, gulp.series('concate-dark', 'dark'));
	// et-core-plugin-off
	gulp.watch(xstoreConfig.concat.et_core_plugin_off, gulp.series('concate-et-core-plugin-off', 'et-core-plugin-off'));
	// slick library
	gulp.watch(xstoreConfig.concat.slick_library, gulp.series('concate-slick-library', 'slick-library'));
	// skeleton
	gulp.watch(xstoreConfig.concat.skeleton, gulp.series('concate-skeleton', 'skeleton'));
	gulp.watch(xstoreConfig.concat.skeleton_rtl, gulp.series('concate-skeleton-rtl', 'skeleton-rtl'));
	// sidebar
	gulp.watch(xstoreConfig.concat.sidebar, gulp.series('concate-sidebar', 'sidebar'));
	// off-canvas
	gulp.watch(xstoreConfig.concat.off_canvas, gulp.series('concate-off-canvas', 'off-canvas'));
	gulp.watch(xstoreConfig.concat.off_canvas_rtl, gulp.series('concate-off-canvas-rtl', 'off-canvas-rtl'));
	// mobile-panel
	gulp.watch(xstoreConfig.concat.mobile_panel, gulp.series('concate-mobile-panel', 'mobile-panel'));
	// header parts
	// search
	gulp.watch(xstoreConfig.concat.header_search, gulp.series('concate-header-search', 'header-search'));
	gulp.watch(xstoreConfig.concat.header_search_rtl, gulp.series('concate-header-search-rtl', 'header-search-rtl'));
	// ajax-search
	gulp.watch(xstoreConfig.concat.ajax_search, gulp.series('concate-ajax-search', 'ajax-search'));
	gulp.watch(xstoreConfig.concat.ajax_search_rtl, gulp.series('concate-ajax-search-rtl', 'ajax-search-rtl'));
	// full-width-search
	gulp.watch(xstoreConfig.concat.full_width_search, gulp.series('concate-full-width-search', 'full-width-search'));
	// header-vertical
	gulp.watch(xstoreConfig.concat.header_vertical, gulp.series('concate-header-vertical', 'header-vertical'));
	gulp.watch(xstoreConfig.concat.header_vertical_rtl, gulp.series('concate-header-vertical-rtl', 'header-vertical-rtl'));
	// menu
	gulp.watch(xstoreConfig.concat.header_menu, gulp.series('concate-header-menu', 'header-menu'));
	gulp.watch(xstoreConfig.concat.header_menu_rtl, gulp.series('concate-header-menu-rtl', 'header-menu-rtl'));
	// all-departments
	gulp.watch(xstoreConfig.concat.all_departments_menu, gulp.series('concate-all-departments-menu', 'all-departments-menu'));
	gulp.watch(xstoreConfig.concat.all_departments_menu_rtl, gulp.series('concate-all-departments-menu-rtl', 'all-departments-menu-rtl'));
	// mobile-menu
	gulp.watch(xstoreConfig.concat.mobile_menu, gulp.series('concate-mobile-menu', 'mobile-menu'));
	gulp.watch(xstoreConfig.concat.mobile_menu_rtl, gulp.series('concate-mobile-menu-rtl', 'mobile-menu-rtl'));
	// account
	gulp.watch(xstoreConfig.concat.account, gulp.series('concate-account', 'account'));
	gulp.watch(xstoreConfig.concat.account_rtl, gulp.series('concate-account-rtl', 'account-rtl'));

	// sidebar/footer
	gulp.watch(xstoreConfig.concat.toggles_by_arrow, gulp.series('concate-toggles-by-arrow', 'toggles-by-arrow'));
	gulp.watch(xstoreConfig.concat.widgets_open_close, gulp.series('concate-widgets-open-close', 'widgets-open-close'));
	gulp.watch(xstoreConfig.concat.widgets_open_close_rtl, gulp.series('concate-widgets-open-close-rtl', 'widgets-open-close-rtl'));

	gulp.watch(xstoreConfig.concat.sidebar_off_canvas, gulp.series('concate-sidebar-off-canvas', 'sidebar-off-canvas'));
	gulp.watch(xstoreConfig.concat.sidebar_off_canvas_rtl, gulp.series('concate-sidebar-off-canvas-rtl', 'sidebar-off-canvas-rtl'));

	gulp.watch(xstoreConfig.concat.sidebar_widgets_with_scroll, gulp.series('concate-sidebar-widgets-with-scroll', 'sidebar-widgets-with-scroll'));
	gulp.watch(xstoreConfig.concat.sidebar_widgets_with_scroll_rtl, gulp.series('concate-sidebar-widgets-with-scroll-rtl', 'sidebar-widgets-with-scroll-rtl'));

	// blog
	gulp.watch(xstoreConfig.concat.blog_global, gulp.series('concate-blog-global', 'blog-global'));
	gulp.watch(xstoreConfig.concat.blog_global_rtl, gulp.series('concate-blog-global-rtl', 'blog-global-rtl'));
	gulp.watch(xstoreConfig.concat.blog_masonry, gulp.series('concate-blog-masonry', 'blog-masonry'));
	gulp.watch(xstoreConfig.concat.blog_full_width, gulp.series('concate-blog-full-width', 'blog-full-width'));
	gulp.watch(xstoreConfig.concat.blog_ajax, gulp.series('concate-blog-ajax', 'blog-ajax'));

	// pagination
	gulp.watch(xstoreConfig.concat.pagination, gulp.series('concate-pagination', 'pagination'));
	gulp.watch(xstoreConfig.concat.pagination_rtl, gulp.series('concate-pagination-rtl', 'pagination-rtl'));
	gulp.watch(xstoreConfig.concat.star_rating, gulp.series('concate-star-rating', 'star-rating'));
	gulp.watch(xstoreConfig.concat.star_rating_rtl, gulp.series('concate-star-rating-rtl', 'star-rating-rtl'));
	gulp.watch(xstoreConfig.concat.comments, gulp.series('concate-comments', 'comments'));
	gulp.watch(xstoreConfig.concat.comments_rtl, gulp.series('concate-comments-rtl', 'comments-rtl'));
	gulp.watch(xstoreConfig.concat.navigation, gulp.series('concate-navigation', 'navigation'));
	gulp.watch(xstoreConfig.concat.navigation_rtl, gulp.series('concate-navigation-rtl', 'navigation-rtl'));

	gulp.watch(xstoreConfig.concat.single_post_global, gulp.series('concate-single-post-global', 'single-post-global'));
	gulp.watch(xstoreConfig.concat.single_post_global_rtl, gulp.series('concate-single-post-global-rtl', 'single-post-global-rtl'));
	gulp.watch(xstoreConfig.concat.single_meta, gulp.series('concate-single-meta', 'single-meta'));
	gulp.watch(xstoreConfig.concat.single_post_framed, gulp.series('concate-single-post-framed', 'single-post-framed'));
	gulp.watch(xstoreConfig.concat.single_post_large, gulp.series('concate-single-post-large', 'single-post-large'));
	gulp.watch(xstoreConfig.concat.single_post_large2, gulp.series('concate-single-post-large2', 'single-post-large2'));
	gulp.watch(xstoreConfig.concat.single_post_full_width, gulp.series('concate-single-post-full-width', 'single-post-full-width'));

	gulp.watch(xstoreConfig.concat.post_types_global, gulp.series('concate-post-types-global', 'post-types-global'));
	gulp.watch(xstoreConfig.concat.post_types_framed, gulp.series('concate-post-types-framed', 'post-types-framed'));
	gulp.watch(xstoreConfig.concat.post_types_framed_rtl, gulp.series('concate-post-types-framed-rtl', 'post-types-framed-rtl'));
	gulp.watch(xstoreConfig.concat.post_types_grid_grid2, gulp.series('concate-post-types-grid-grid2', 'post-types-grid-grid2'));
	gulp.watch(xstoreConfig.concat.post_types_small_chess, gulp.series('concate-post-types-small-chess', 'post-types-small-chess'));
	gulp.watch(xstoreConfig.concat.post_types_small_chess_rtl, gulp.series('concate-post-types-small-chess-rtl', 'post-types-small-chess-rtl'));
	gulp.watch(xstoreConfig.concat.post_types_timeline, gulp.series('concate-post-types-timeline', 'post-types-timeline'));
	gulp.watch(xstoreConfig.concat.post_types_timeline_rtl, gulp.series('concate-post-types-timeline-rtl', 'post-types-timeline-rtl'));
	gulp.watch(xstoreConfig.concat.post_types_with_author, gulp.series('concate-post-types-with-author', 'post-types-with-author'));
	gulp.watch(xstoreConfig.concat.post_types_with_author_rtl, gulp.series('concate-post-types-with-author-rtl', 'post-types-with-author-rtl'));
	gulp.watch(xstoreConfig.concat.post_formats_quote, gulp.series('concate-post-formats-quote', 'post-formats-quote'));

	gulp.watch(xstoreConfig.concat.single_testimonials, gulp.series('concate-single-testimonials', 'single-testimonials'));
	gulp.watch(xstoreConfig.concat.elementor_etheme_testimonials, gulp.series('concate-elementor-etheme-testimonials', 'elementor-etheme-testimonials'));
	gulp.watch(xstoreConfig.concat.elementor_etheme_custom_masonry, gulp.series('concate-elementor-etheme-custom-masonry', 'elementor-etheme-custom-masonry'));
	gulp.watch(xstoreConfig.concat.elementor_etheme_google_map, gulp.series('concate-elementor-etheme-google-map', 'elementor-etheme-google-map'));
	gulp.watch(xstoreConfig.concat.elementor_et_advance_tabs, gulp.series('concate-elementor-et-advance-tabs', 'elementor-et-advance-tabs'));
	gulp.watch(xstoreConfig.concat.elementor_etheme_contact_form_7, gulp.series('concate-elementor-etheme-contact-form-7', 'elementor-etheme-contact-form-7'));
	gulp.watch(xstoreConfig.concat.elementor_etheme_mailchimp, gulp.series('concate-elementor-etheme-mailchimp', 'elementor-etheme-mailchimp'));

	gulp.watch(xstoreConfig.concat.wpbakery, gulp.series('concate-wpbakery', 'wpbakery'));
	gulp.watch(xstoreConfig.concat.wpbakery_rtl, gulp.series('concate-wpbakery-rtl', 'wpbakery-rtl'));
	gulp.watch(xstoreConfig.concat.elementor, gulp.series('concate-elementor', 'elementor'));

	gulp.watch(['./less/modules/global/xstore-icons.less'], gulp.series(['icons']));

	gulp.watch(xstoreConfig.concat.portfolio, gulp.series('concate-portfolio', 'portfolio'));
	gulp.watch(xstoreConfig.concat.portfolio_rtl, gulp.series('concate-portfolio-rtl', 'portfolio-rtl'));

	gulp.watch(xstoreConfig.concat.breadcrumbs, gulp.series('concate-breadcrumbs', 'breadcrumbs'));
	gulp.watch(xstoreConfig.concat.breadcrumbs_rtl, gulp.series('concate-breadcrumbs-rtl', 'breadcrumbs-rtl'));
	gulp.watch(xstoreConfig.concat.mega_menu, gulp.series('concate-mega-menu', 'mega-menu'));
	gulp.watch(xstoreConfig.concat.mega_menu_rtl, gulp.series('concate-mega-menu-rtl', 'mega-menu-rtl'));
	gulp.watch(xstoreConfig.concat.fixed_footer, gulp.series('concate-fixed-footer', 'fixed-footer'));
	gulp.watch(xstoreConfig.concat.back_top, gulp.series('concate-back-top', 'back-top'));
	gulp.watch(xstoreConfig.concat.back_top_rtl, gulp.series('concate-back-top-rtl', 'back-top-rtl'));

	gulp.watch(xstoreConfig.concat.search_page, gulp.series('concate-search-page', 'search-page'));
	gulp.watch(xstoreConfig.concat.banners_global, gulp.series('concate-banners-global', 'banners-global'));
	gulp.watch(xstoreConfig.concat.banner, gulp.series('concate-banner', 'banner'));
	gulp.watch(xstoreConfig.concat.team_member, gulp.series('concate-team-member', 'team-member'));
	gulp.watch(xstoreConfig.concat.et_slider, gulp.series('concate-et-slider', 'et-slider'));
	gulp.watch(xstoreConfig.concat.categories_carousel, gulp.series('concate-categories-carousel', 'categories-carousel'));
	gulp.watch(xstoreConfig.concat.icon_boxes, gulp.series('concate-icon-boxes', 'icon-boxes'));
	gulp.watch(xstoreConfig.concat.et_blog, gulp.series('concate-et-blog', 'et-blog'));
	gulp.watch(xstoreConfig.concat.et_blog_rtl, gulp.series('concate-et-blog-rtl', 'et-blog-rtl'));
	gulp.watch(xstoreConfig.concat.brands_list, gulp.series('concate-brands-list', 'brands-list'));
	gulp.watch(xstoreConfig.concat.brands_carousel, gulp.series('concate-brands-carousel', 'brands-carousel'));
	gulp.watch(xstoreConfig.concat.categories_list_grid, gulp.series('concate-categories-list-grid', 'categories-list-grid'));
	gulp.watch(xstoreConfig.concat.categories_menu_element, gulp.series('concate-categories-menu-element', 'categories-menu-element'));
	gulp.watch(xstoreConfig.concat.et_offer, gulp.series('concate-et-offer', 'et-offer'));
	gulp.watch(xstoreConfig.concat.et_offer_rtl, gulp.series('concate-et-offer-rtl', 'et-offer-rtl'));
	gulp.watch(xstoreConfig.concat.elementor_categories, gulp.series('concate-elementor-categories', 'elementor-categories'));
	gulp.watch(xstoreConfig.concat.wpb_autoscrolling_text, gulp.series('concate-wpb-autoscrolling-text', 'wpb-autoscrolling-text'));
	gulp.watch(xstoreConfig.concat.wpb_banners, gulp.series('concate-wpb-banners', 'wpb-banners'));
	gulp.watch(xstoreConfig.concat.wpb_et_offer, gulp.series('concate-wpb-et-offer', 'wpb-et-offer'));
	gulp.watch(xstoreConfig.concat.wpb_et_timer, gulp.series('concate-wpb-et-timer', 'wpb-et-timer'));
	gulp.watch(xstoreConfig.concat.wpb_images_carousel, gulp.series('concate-wpb-images-carousel', 'wpb-images-carousel'));
	gulp.watch(xstoreConfig.concat.wpb_instagram, gulp.series('concate-wpb-instagram', 'wpb-instagram'));
	gulp.watch(xstoreConfig.concat.wpb_look_book, gulp.series('concate-wpb-look-book', 'wpb-look-book'));
	gulp.watch(xstoreConfig.concat.wpb_thelook, gulp.series('concate-wpb-thelook', 'wpb-thelook'));
	gulp.watch(xstoreConfig.concat.wpb_testimonials, gulp.series('concate-wpb-testimonials', 'wpb-testimonials'));
	gulp.watch(xstoreConfig.concat.photoswipe, gulp.series('concate-photoswipe-styles', 'photoswipe-styles'));

	gulp.watch(xstoreConfig.concat.page_404, gulp.series('concate-page-404', 'page-404'));
	gulp.watch(xstoreConfig.concat.blank_page, gulp.series('concate-blank-page', 'blank-page'));
	gulp.watch(xstoreConfig.concat.contact_forms, gulp.series('concate-contact-forms', 'contact-forms'));
	gulp.watch(xstoreConfig.concat.contact_forms_rtl, gulp.series('concate-contact-forms-rtl', 'contact-forms-rtl'));
	gulp.watch(xstoreConfig.concat.dropcap, gulp.series('concate-dropcap', 'dropcap'));
	gulp.watch(xstoreConfig.concat.dropcap_rtl, gulp.series('concate-dropcap-rtl', 'dropcap-rtl'));
	gulp.watch(xstoreConfig.concat.mark_text, gulp.series('concate-mark-text', 'mark-text'));
	gulp.watch(xstoreConfig.concat.et_timer, gulp.series('concate-et-timer', 'et-timer'));
	gulp.watch(xstoreConfig.concat.etheme_popup, gulp.series('concate-etheme-popup', 'etheme-popup'));
	gulp.watch(xstoreConfig.concat.etheme_popup_rtl, gulp.series('concate-etheme-popup-rtl', 'etheme-popup-rtl'));
	gulp.watch(xstoreConfig.concat.socials_login, gulp.series('concate-socials-login', 'socials-login'));
	gulp.watch(xstoreConfig.concat.instagram, gulp.series('concate-instagram', 'instagram'));
	gulp.watch(xstoreConfig.concat.instagram_rtl, gulp.series('concate-instagram-rtl', 'instagram-rtl'));

	gulp.watch(xstoreConfig.concat.isotope_filters, gulp.series('concate-isotope-filters', 'isotope-filters'));
	gulp.watch(xstoreConfig.concat.tabs, gulp.series('concate-tabs', 'tabs'));
	gulp.watch(xstoreConfig.concat.tabs_rtl, gulp.series('concate-tabs-rtl', 'tabs-rtl'));
	gulp.watch(xstoreConfig.concat.woocommerce_global, gulp.series('concate-woocommerce-global', 'woocommerce-global'));
	gulp.watch(xstoreConfig.concat.woocommerce_global_rtl, gulp.series('concate-woocommerce-global-rtl', 'woocommerce-global-rtl'));
	gulp.watch(xstoreConfig.concat.woocommerce_archive, gulp.series('concate-woocommerce-archive', 'woocommerce-archive'));
	gulp.watch(xstoreConfig.concat.woocommerce_archive_rtl, gulp.series('concate-woocommerce-archive-rtl', 'woocommerce-archive-rtl'));
	gulp.watch(xstoreConfig.concat.cart_widget, gulp.series('concate-cart-widget', 'cart-widget'));
	gulp.watch(xstoreConfig.concat.cart_widget_rtl, gulp.series('concate-cart-widget-rtl', 'cart-widget-rtl'));
	gulp.watch(xstoreConfig.concat.yith_compare, gulp.series('concate-yith-compare', 'yith-compare'));
	gulp.watch(xstoreConfig.concat.sb_infinite_scroll_load_more, gulp.series('concate-sb-infinite-scroll-load-more', 'sb-infinite-scroll-load-more'));
	gulp.watch(xstoreConfig.concat.catalog_mode, gulp.series('concate-catalog-mode', 'catalog-mode'));
	gulp.watch(xstoreConfig.concat.products_full_screen, gulp.series('concate-products-full-screen', 'products-full-screen'));
	gulp.watch(xstoreConfig.concat.special_cart_breadcrumbs, gulp.series('concate-special-cart-breadcrumbs', 'special-cart-breadcrumbs'));
	gulp.watch(xstoreConfig.concat.special_cart_breadcrumbs_rtl, gulp.series('concate-special-cart-breadcrumbs-rtl', 'special-cart-breadcrumbs-rtl'));
	gulp.watch(xstoreConfig.concat.filter_area, gulp.series('concate-filter-area', 'filter-area'));
	gulp.watch(xstoreConfig.concat.filter_area_rtl, gulp.series('concate-filter-area-rtl', 'filter-area-rtl'));
	gulp.watch(xstoreConfig.concat.quick_view, gulp.series('concate-quick-view', 'quick-view'));
	gulp.watch(xstoreConfig.concat.quick_view_rtl, gulp.series('concate-quick-view-rtl', 'quick-view-rtl'));
	gulp.watch(xstoreConfig.concat.cart_page, gulp.series('concate-cart-page', 'cart-page'));
	gulp.watch(xstoreConfig.concat.cart_page_rtl, gulp.series('concate-cart-page-rtl', 'cart-page-rtl'));
	gulp.watch(xstoreConfig.concat.checkout_page, gulp.series('concate-checkout-page', 'checkout-page'));
	gulp.watch(xstoreConfig.concat.checkout_page_rtl, gulp.series('concate-checkout-page-rtl', 'checkout-page-rtl'));
	gulp.watch(xstoreConfig.concat.thank_you_page, gulp.series('concate-thank-you-page', 'thank-you-page'));
	gulp.watch(xstoreConfig.concat.account_page, gulp.series('concate-account-page', 'account-page'));
	gulp.watch(xstoreConfig.concat.account_page_rtl, gulp.series('concate-account-page-rtl', 'account-page-rtl'));
	gulp.watch(xstoreConfig.concat.wishlist_page, gulp.series('concate-wishlist-page', 'wishlist-page'));
	gulp.watch(xstoreConfig.concat.wishlist_page_rtl, gulp.series('concate-wishlist-page-rtl', 'wishlist-page-rtl'));
	gulp.watch(xstoreConfig.concat.no_products_found, gulp.series('concate-no-products-found', 'no-products-found'));

	gulp.watch(xstoreConfig.concat.content_product_custom, gulp.series('concate-content-product-custom', 'content-product-custom'));
	gulp.watch(xstoreConfig.concat.product_view_default, gulp.series('concate-product-view-default', 'product-view-default'));
	gulp.watch(xstoreConfig.concat.product_view_default_rtl, gulp.series('concate-product-view-default-rtl', 'product-view-default-rtl'));
	gulp.watch(xstoreConfig.concat.product_view_mask2, gulp.series('concate-product-view-mask2', 'product-view-mask2'));
	gulp.watch(xstoreConfig.concat.product_view_mask2_rtl, gulp.series('concate-product-view-mask2-rtl', 'product-view-mask2-rtl'));
	gulp.watch(xstoreConfig.concat.product_view_mask3, gulp.series('concate-product-view-mask3', 'product-view-mask3'));
	gulp.watch(xstoreConfig.concat.product_view_mask3_rtl, gulp.series('concate-product-view-mask3-rtl', 'product-view-mask3-rtl'));
	gulp.watch(xstoreConfig.concat.product_view_light, gulp.series('concate-product-view-light', 'product-view-light'));
	gulp.watch(xstoreConfig.concat.product_view_light_rtl, gulp.series('concate-product-view-light-rtl', 'product-view-light-rtl'));
	gulp.watch(xstoreConfig.concat.product_booking, gulp.series('concate-product-booking', 'product-booking'));
	gulp.watch(xstoreConfig.concat.product_booking_rtl, gulp.series('concate-product-booking-rtl', 'product-booking-rtl'));
	gulp.watch(xstoreConfig.concat.product_view_menu_rtl, gulp.series('concate-product-view-menu-rtl', 'product-view-menu-rtl'));
	gulp.watch(xstoreConfig.concat.product_view_info, gulp.series('concate-product-view-info', 'product-view-info'));
	gulp.watch(xstoreConfig.concat.product_view_info_rtl, gulp.series('concate-product-view-info-rtl', 'product-view-info-rtl'));
	gulp.watch(xstoreConfig.concat.single_product, gulp.series('concate-single-product', 'single-product'));
	gulp.watch(xstoreConfig.concat.single_product_rtl, gulp.series('concate-single-product-rtl', 'single-product-rtl'));
	gulp.watch(xstoreConfig.concat.single_product_elements, gulp.series('concate-single-product-elements', 'single-product-elements'));
	gulp.watch(xstoreConfig.concat.single_product_elements_rtl, gulp.series('concate-single-product-elements-rtl', 'single-product-elements-rtl'));
	gulp.watch(xstoreConfig.concat.single_product_booking, gulp.series('concate-single-product-booking', 'single-product-booking'));
	gulp.watch(xstoreConfig.concat.single_product_booking_rtl, gulp.series('concate-single-product-booking-rtl', 'single-product-booking-rtl'));
	gulp.watch(xstoreConfig.concat.single_product_right, gulp.series('concate-single-product-right', 'single-product-right'));
	gulp.watch(xstoreConfig.concat.single_product_wide, gulp.series('concate-single-product-wide', 'single-product-wide'));
	gulp.watch(xstoreConfig.concat.sticky_cart, gulp.series('concate-sticky-cart', 'sticky-cart'));
	gulp.watch(xstoreConfig.concat.sticky_cart_rtl, gulp.series('concate-sticky-cart-rtl', 'sticky-cart-rtl'));
	gulp.watch(xstoreConfig.concat.request_quote, gulp.series('concate-request-quote', 'request-quote'));
	gulp.watch(xstoreConfig.concat.single_product_builder, gulp.series('concate-single-product-builder', 'single-product-builder'));
	gulp.watch(xstoreConfig.concat.single_product_builder_rtl, gulp.series('concate-single-product-builder-rtl', 'single-product-builder-rtl'));

	gulp.watch(xstoreConfig.concat.swatches, gulp.series('concate-swatches', 'swatches'));
	gulp.watch(xstoreConfig.concat.forum, gulp.series('concate-forum', 'forum'));
	gulp.watch(xstoreConfig.concat.wcfmmp, gulp.series('concate-wcfmmp', 'wcfmmp'));
	gulp.watch(xstoreConfig.concat.wcmp, gulp.series('concate-wcmp', 'wcmp'));
	gulp.watch(xstoreConfig.concat.dokan, gulp.series('concate-dokan', 'dokan'));

});

// one gulp task to create all css modules from tasks
gulp.task('css-minify', gulp.series(
	'concate-style',
	'style',

	'concate-xstore',
	'xstore',

	'concate-xstore-rtl',
	'xstore-rtl',

	'concate-dark',
	'dark',

	'concate-et-core-plugin-off',
	'et-core-plugin-off',

	'concate-slick-library',
	'slick-library',

	'concate-skeleton',
	'skeleton',

	'concate-skeleton-rtl',
	'skeleton-rtl',

	'concate-sidebar',
	'sidebar',

	'concate-off-canvas',
	'off-canvas',

	'concate-off-canvas-rtl',
	'off-canvas-rtl',

	'concate-mobile-panel',
	'mobile-panel',

	'concate-header-search',
	'header-search',

	'concate-header-search-rtl',
	'header-search-rtl',

	'concate-ajax-search',
	'ajax-search',

	'concate-ajax-search-rtl',
	'ajax-search-rtl',

	'concate-full-width-search',
	'full-width-search',

	'concate-header-vertical',
	'header-vertical',

	'concate-header-vertical-rtl',
	'header-vertical-rtl',

	'concate-header-menu',
	'header-menu',

	'concate-header-menu-rtl',
	'header-menu-rtl',

	'concate-mobile-menu',
	'mobile-menu',

	'concate-mobile-menu-rtl',
	'mobile-menu-rtl',

	'concate-all-departments-menu',
	'all-departments-menu',

	'concate-all-departments-menu-rtl',
	'all-departments-menu-rtl',

	'concate-account',
	'account',

	'concate-account-rtl',
	'account-rtl',

	'concate-header-contacts',
	'header-contacts',

	'concate-header-contacts-rtl',
	'header-contacts-rtl',

	'concate-toggles-by-arrow',
	'toggles-by-arrow',

	'concate-widgets-open-close',
	'widgets-open-close',

	'concate-widgets-open-close-rtl',
	'widgets-open-close-rtl',

	'concate-sidebar-off-canvas',
	'sidebar-off-canvas',

	'concate-sidebar-off-canvas-rtl',
	'sidebar-off-canvas-rtl',

	'concate-sidebar-widgets-with-scroll',
	'sidebar-widgets-with-scroll',

	'concate-sidebar-widgets-with-scroll-rtl',
	'sidebar-widgets-with-scroll-rtl',

	'concate-blog-global',
	'blog-global',

	'concate-blog-global-rtl',
	'blog-global-rtl',

	'concate-blog-masonry',
	'blog-masonry',

	'concate-blog-full-width',
	'blog-full-width',

	'concate-blog-ajax',
	'blog-ajax',

	'concate-pagination',
	'pagination',

	'concate-pagination-rtl',
	'pagination-rtl',

	'concate-star-rating',
	'star-rating',

	'concate-star-rating-rtl',
	'star-rating-rtl',

	'concate-comments',
	'comments',

	'concate-comments-rtl',
	'comments-rtl',

	'concate-navigation',
	'navigation',

	'concate-navigation-rtl',
	'navigation-rtl',

	'concate-single-post-global',
	'single-post-global',

	'concate-single-post-global-rtl',
	'single-post-global-rtl',

	'concate-single-meta',
	'single-meta',

	'concate-single-post-framed',
	'single-post-framed',

	'concate-single-post-large',
	'single-post-large',

	'concate-single-post-large2',
	'single-post-large2',

	'concate-single-post-full-width',
	'single-post-full-width',

	'concate-post-types-global',
	'post-types-global',

	'concate-post-types-framed',
	'post-types-framed',

	'concate-post-types-framed-rtl',
	'post-types-framed-rtl',

	'concate-post-types-grid-grid2',
	'post-types-grid-grid2',

	'concate-post-types-small-chess',
	'post-types-small-chess',

	'concate-post-types-small-chess-rtl',
	'post-types-small-chess-rtl',

	'concate-post-types-timeline',
	'post-types-timeline',

	'concate-post-types-timeline-rtl',
	'post-types-timeline-rtl',

	'concate-post-types-with-author',
	'post-types-with-author',

	'concate-post-types-with-author-rtl',
	'post-types-with-author-rtl',

	'concate-post-formats-quote',
	'post-formats-quote',

	'concate-single-testimonials',
	'single-testimonials',

	'concate-elementor-etheme-testimonials',
	'elementor-etheme-testimonials',

	'concate-elementor-etheme-custom-masonry',
	'elementor-etheme-custom-masonry',

	'concate-elementor-etheme-google-map',
	'elementor-etheme-google-map',

	'concate-elementor-et-advance-tabs',
	'elementor-et-advance-tabs',

	'concate-elementor-etheme-contact-form-7',
	'elementor-etheme-contact-form-7',

	'concate-elementor-etheme-mailchimp',
	'elementor-etheme-mailchimp',

	'concate-wpbakery',
	'wpbakery',

	'concate-wpbakery-rtl',
	'wpbakery-rtl',

	'concate-elementor',
	'elementor',

	// 'concate-icons',
	'icons',

	'concate-portfolio',
	'portfolio',

	'concate-portfolio-rtl',
	'portfolio-rtl',

	'concate-breadcrumbs',
	'breadcrumbs',

	'concate-breadcrumbs-rtl',
	'breadcrumbs-rtl',

	'concate-mega-menu',
	'mega-menu',

	'concate-mega-menu-rtl',
	'mega-menu-rtl',

	'concate-fixed-footer',
	'fixed-footer',

	'concate-back-top',
	'back-top',

	'concate-back-top-rtl',
	'back-top-rtl',

	'concate-search-page',
	'search-page',

	'concate-banners-global',
	'banners-global',

	'concate-banner',
	'banner',

	'concate-team-member',
	'team-member',

	'concate-et-slider',
	'et-slider',

	'concate-categories-carousel',
	'categories-carousel',

	'concate-icon-boxes',
	'icon-boxes',

	'concate-et-blog',
	'et-blog',

	'concate-et-blog-rtl',
	'et-blog-rtl',

	'concate-brands-list',
	'brands-list',

	'concate-brands-carousel',
	'brands-carousel',

	'concate-categories-list-grid',
	'categories-list-grid',

	'concate-categories-menu-element',
	'categories-menu-element',

	'concate-et-offer',
	'et-offer',

	'concate-et-offer-rtl',
	'et-offer-rtl',

	'concate-elementor-categories',
	'elementor-categories',

	'concate-wpb-autoscrolling-text',
	'wpb-autoscrolling-text',

	'concate-wpb-banners',
	'wpb-banners',

	'concate-wpb-et-offer',
	'wpb-et-offer',

	'concate-wpb-et-timer',
	'wpb-et-timer',

	'concate-wpb-images-carousel',
	'wpb-images-carousel',

	'concate-wpb-instagram',
	'wpb-instagram',

	'concate-wpb-look-book',
	'wpb-look-book',

	'concate-wpb-thelook',
	'wpb-thelook',

	'concate-wpb-testimonials',
	'wpb-testimonials',

	'concate-photoswipe-styles',
	'photoswipe-styles',

	'concate-page-404',
	'page-404',

	'concate-blank-page',
	'blank-page',

	'concate-contact-forms',
	'contact-forms',

	'concate-contact-forms-rtl',
	'contact-forms-rtl',

	'concate-dropcap',
	'dropcap',

	'concate-dropcap-rtl',
	'dropcap-rtl',

	'concate-mark-text',
	'mark-text',

	'concate-et-timer',
	'et-timer',

	'concate-etheme-popup',
	'etheme-popup',

	'concate-etheme-popup-rtl',
	'etheme-popup-rtl',

	'concate-socials-login',
	'socials-login',

	'concate-instagram',
	'instagram',

	'concate-instagram-rtl',
	'instagram-rtl',


	'concate-isotope-filters',
	'isotope-filters',

	'concate-tabs',
	'tabs',

	'concate-tabs-rtl',
	'tabs-rtl',

	'concate-woocommerce-global',
	'woocommerce-global',

	'concate-woocommerce-global-rtl',
	'woocommerce-global-rtl',

	'concate-woocommerce-archive',
	'woocommerce-archive',

	'concate-woocommerce-archive-rtl',
	'woocommerce-archive-rtl',

	'concate-cart-widget',
	'cart-widget',

	'concate-cart-widget-rtl',
	'cart-widget-rtl',

	'concate-yith-compare',
	'yith-compare',

	'concate-sb-infinite-scroll-load-more',
	'sb-infinite-scroll-load-more',

	'concate-catalog-mode',
	'catalog-mode',

	'concate-shop-full-width',
	'shop-full-width',

	'concate-products-full-screen',
	'products-full-screen',

	'concate-special-cart-breadcrumbs',
	'special-cart-breadcrumbs',

	'concate-special-cart-breadcrumbs-rtl',
	'special-cart-breadcrumbs-rtl',

	'concate-filter-area',
	'filter-area',

	'concate-filter-area-rtl',
	'filter-area-rtl',

	'concate-quick-view',
	'quick-view',

	'concate-quick-view-rtl',
	'quick-view-rtl',

	'concate-cart-page',
	'cart-page',

	'concate-cart-page-rtl',
	'cart-page-rtl',

	'concate-checkout-page',
	'checkout-page',

	'concate-checkout-page-rtl',
	'checkout-page-rtl',

	'concate-thank-you-page',
	'thank-you-page',

	'concate-account-page',
	'account-page',

	'concate-account-page-rtl',
	'account-page-rtl',

	'concate-wishlist-page',
	'wishlist-page',

	'concate-wishlist-page-rtl',
	'wishlist-page-rtl',

	'concate-no-products-found',
	'no-products-found',


	'concate-content-product-custom',
	'content-product-custom',

	'concate-product-view-default',
	'product-view-default',

	'concate-product-view-default-rtl',
	'product-view-default-rtl',

	'concate-product-view-mask2',
	'product-view-mask2',

	'concate-product-view-mask2-rtl',
	'product-view-mask2-rtl',

	'concate-product-view-mask3',
	'product-view-mask3',

	'concate-product-view-mask3-rtl',
	'product-view-mask3-rtl',

	'concate-product-view-light',
	'product-view-light',

	'concate-product-view-light-rtl',
	'product-view-light-rtl',

	'concate-product-booking',
	'product-booking',

	'concate-product-booking-rtl',
	'product-booking-rtl',

	'concate-product-view-menu',
	'product-view-menu',

	'concate-product-view-menu-rtl',
	'product-view-menu-rtl',

	'concate-product-view-info',
	'product-view-info',

	'concate-product-view-info-rtl',
	'product-view-info-rtl',

	'concate-single-product',
	'single-product',

	'concate-single-product-rtl',
	'single-product-rtl',

	'concate-single-product-elements',
	'single-product-elements',

	'concate-single-product-elements-rtl',
	'single-product-elements-rtl',

	'concate-single-product-booking',
	'single-product-booking',

	'concate-single-product-booking-rtl',
	'single-product-booking-rtl',

	'concate-single-product-right',
	'single-product-right',

	'concate-single-product-wide',
	'single-product-wide',

	'concate-sticky-cart',
	'sticky-cart',

	'concate-sticky-cart-rtl',
	'sticky-cart-rtl',

	'concate-request-quote',
	'request-quote',

	'concate-single-product-builder',
	'single-product-builder',

	'concate-single-product-builder-rtl',
	'single-product-builder-rtl',

	'concate-swatches',
	'swatches',

	'concate-forum',
	'forum',

	'concate-wcfmmp',
	'wcfmmp',

	'concate-wcmp',
	'wcmp',

	'concate-dokan',
	'dokan'
	)
);

// Default task (runs at initiation: gulp --verbose)
gulp.task('default', gulp.series('watch'));

gulp.task('AllPluginsJS', gulp.series('ethemeWhiteLabelPluginJs', 'ethemeCoreBuilderJs'));
gulp.task('AllThemeJS', gulp.series(
	'ajaxFiltersJs',
	'miniMart',
	'spv',
	'portfolioJs',
	'postBackstretchImgJs',
	'ethemeJs',
	'ethemePluginsJs',
	'panelGeneratorJs',
	'panelInstagramJs',
	'panelEmailBuilderJs',
	'panelSalesBoosterJs',
	'panelPluginsJs',
	'infiniteScrollLoadMoreJs',
	'compareJs',
	'countdownJs',
	'theLookJs',
	'wishlistJs',
	'promoTextCarouselJs',
	'menuPostsJs',
	'onePageMenuJs',
	'secondaryMenuJs',
	'filtersAreaJs',
	'cartPageJs',
	'cartProgressJs',
	'fixedHeaderJs',
	'commentsFormValidationJs',
	'contactUsPopupJs',
	'singleProductBuilderJs',
	'variationGalleryJs',
	'singleProductVerticalGalleryJs',
	'singleProductStickyProductImagesJs',
	'singleProductJs',
	'woocommerceJs',
	'widgetNavMenuJs',
	'productCategoriesWidgetJs',
	'widgetsShowMoreJs',
	'widgetsOpenCloseJs',
	'sidebarCanvasJs',
	'stickySidebarJs',
	'isotopeJs',
	'stickyKitJs',
	'fancySelectJs',
	'backToTopJs',
	'fixedFooterJs',
	'navigationOnTouchJs',
	'navigationOnClickJs',
	'mainNavigationJs',
	'breadcrumbsTextScrollJs',
	'breadcrumbsMouseJs',
	'swiperJs',
	'tabsJs',
	'mobileMenuJs',
	'ajaxSearchJs',
	'mobilePanelJs',
	'stWooSwatchesJs',
	'optimize',
	'photoswipe',
));