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
	    	'less/config.less',
	    	'less/base/*.less',
	    	'less/layout/*.less',
	    	'less/shop/*.less',
	    	'less/shop/**/*.less',
	    	'less/blog/*.less',
	    	'less/blog/**/*.less',
	    	'less/portfolio/*.less',
	    	'less/modules/*.less',
	    	'less/modules/**/*.less',
	    	'!less/modules/swatches/*.less',
	    	'!less/modules/portfolio/*.less',
	    	'!less/modules/excluded/*.less',
	    	'!less/modules/builders/global/*.less',
	    	'!less/modules/builders/global/**/*.less',
	    	'!less/modules/builders/elementor/*.less',
	    	'!less/modules/builders/elementor/**/*.less',
	    	'!less/modules/builders/wpb/*.less',
	    	'!less/modules/builders/wpb/**/*.less',
	    	],
	    	xstore: [
	    	'css/bootstrap.min.css',
	    	'less/config.less',
	    	'less/base/*.less',
	    	'less/layout/*.less',
	    	'less/shop/*.less',
	    	'less/shop/**/*.less',
	    	'less/blog/*.less',
	    	'less/blog/**/*.less',
	    	'less/portfolio/*.less',
	    	'less/modules/*.less',
	    	'less/modules/**/*.less',
	    	'!less/modules/swatches/*.less',
	    	'!less/modules/portfolio/*.less',
	    	'!less/modules/excluded/*.less',
	    	'!less/modules/builders/global/*.less',
	    	'!less/modules/builders/global/**/*.less',
	    	'!less/modules/builders/elementor/*.less',
	    	'!less/modules/builders/elementor/**/*.less',
	    	'!less/modules/builders/wpb/*.less',
	    	'!less/modules/builders/wpb/**/*.less',
	    	],
	    	builders: [
	    	"less/config.less",
	    	"less/base/mixins.less",
	    	"less/modules/builders/global/*.less",
	    	"less/modules/builders/global/**/*.less",
	    	],
	    	wpb: [
	    	"less/config.less",
	    	"less/base/mixins.less",
	    	"less/modules/builders/wpb/**/*.less",
	    	"less/modules/builders/wpb/*.less",
	    	],
	    	elementor: [
	    	"less/config.less",
	    	"less/base/mixins.less",
	    	"less/modules/builders/elementor/**/*.less",
	    	"less/modules/builders/elementor/*.less",
	    	],
	    	portfolio: [
	    	"less/config.less",
	    	"less/base/mixins.less",
	    	"less/modules/portfolio/portfolio.less"
	    	],
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
	    	secondary: [
	    	"less/config.less",
	    	"less/base/mixins.less",
	    	"less/modules/excluded/secondary-menu.less"
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

	    	ethemeJs: [
	    	'js/libs/jquery.magnific-popup.js',
	    	'js/libs/swiper.js',
	    	'js/libs/jquery.sticky-kit.js',

	    	'js/theme/init.js',
	    	'js/theme/helpers.js',
	    	'js/theme/swiperFunc.js',
	    	'js/theme/fixes.js',
	    	'js/theme/breadcrumbs.js',
	    	'js/theme/secondaryMenu.js',
	    	'js/theme/onePageMenu.js',
	    	'js/theme/menuPosts.js',
	    	'js/theme/mainNavigation.js',
	    	'js/theme/fixedFooter.js',
	    	'js/theme/blogIsotope.js',
	    	'js/theme/isotope.js',
	    	'js/theme/isotopeFilters.js',
	    	'js/theme/contactUsPopup.js',
	    	'js/theme/backToTop.js',
	    	'js/theme/tabs.js',
	    	'js/theme/global_image_lazy.js',
	    	'js/theme/PostProductAjaxLoad.js',
	    	'js/theme/AjaxElement.js',
	    	'js/theme/commentsForm.js',
	    	'js/theme/contentProdImages.js',
	    	'js/theme/photoSwipe.js',
	    	'js/theme/sliderVertical.js',
	    	'js/theme/woocommerce.js',
	    	'js/theme/quantityIncrements.js',
	    	'js/theme/ajaxAddToCartInit.js',
	    	'js/theme/miniCartAjaxQuantity.js',
	    	'js/theme/variationGallery.js',
	    	'js/theme/variationsThumbs.js',
	    	'js/theme/jumpToSlide.js',
	    	'js/theme/videoPopup.js',
	    	'js/theme/quickView.js',
	    	'js/theme/theLook.js',
	    	'js/theme/filtersArea.js',
	    	'js/theme/stickyProductImages.js',
	    	'js/theme/ForCompare.js',
	    	'js/theme/after_cart_refreshed.js',
	    	'js/theme/categoriesAccordion.js',
	    	'js/theme/buyNowBtn.js',
	    	'js/theme/ReinitForInfiniteScroll.js',
	    	'js/theme/widgetsShowMore.js',
	    	'js/theme/et_cart_progress.js',
	    	'js/theme/et_auto_cart.js',
	    	'js/theme/after_cart_refreshed.js',
	    	'js/theme/CustomMenuAccordion.js',
	    	'js/theme/widgetsOpenCloseDefault.js',
	    	'js/theme/widgetsOpenClose.js',
	    	'js/theme/stickySidebar.js',
	    	'js/theme/sidebarCanvas.js',
	    	'js/theme/sidebarCanvasToggle.js',
	    	'js/theme/imagesLightbox.js',
	    	'js/theme/countdown.js',
	    	],

	    	ethemePluginsJs:[
	    	'js/libs/jquery.magnific-popup.js',
	    	'js/libs/swiper.js',
	    	'js/libs/jquery.sticky-kit.js',
	    	],

	    	optimize:[
	    	'js/libs/modernizr.js',   
	    	'js/libs/imagesLoaded.js',
	    	'js/libs/flexibility.js', 
	    	],

	    	photoswipe:[
	    	'js/libs/photoswipe.js', 
	    	'js/libs/photoswipe-ui-default.js',
	    	],
	    },
	};

// rsync
// gulp.task('rsync', function() {
//   return gulp.src('build/**')
//     .pipe(rsync(xstoreConfig.rsync.less/style.less));
// });

// Concate
gulp.task('concate-style', function() {
	return gulp.src(xstoreConfig.concat.style)
	.pipe(concat('./less/style.less'))
	.pipe(gulp.dest('./'));
});

gulp.task('concate-xstore', function() {
	return gulp.src(xstoreConfig.concat.xstore)
	.pipe(concat('./less/xstore.less'))
	.pipe(gulp.dest('./'));
});

gulp.task('concate-builders', function() {
	return gulp.src(xstoreConfig.concat.builders)
	.pipe(concat('./less/builders-global.less'))
	.pipe(gulp.dest('./'));
});

gulp.task('concate-wpb', function() {
	return gulp.src(xstoreConfig.concat.wpb)
	.pipe(concat('./less/wpb.less'))
	.pipe(gulp.dest('./'));
});

gulp.task('concate-elementor', function() {
	return gulp.src(xstoreConfig.concat.elementor)
	.pipe(concat('./less/elementor.less'))
	.pipe(gulp.dest('./'));
});

gulp.task('concate-portfolio', function() {
	return gulp.src(xstoreConfig.concat.portfolio)
	.pipe(concat('./less/portfolio.less'))
	.pipe(gulp.dest('./'));
});

gulp.task('concate-swatches', function() {
	return gulp.src(xstoreConfig.concat.swatches)
	.pipe(concat('./less/swatches.less'))
	.pipe(gulp.dest('./'));
});

gulp.task('concate-dokan', function() {
	return gulp.src(xstoreConfig.concat.dokan)
	.pipe(concat('./less/dokan.less'))
	.pipe(gulp.dest('./'));
});

gulp.task('concate-forum', function() {
	return gulp.src(xstoreConfig.concat.forum)
	.pipe(concat('./less/forum.less'))
	.pipe(gulp.dest('./'));
});

gulp.task('concate-secondary', function() {
	return gulp.src(xstoreConfig.concat.secondary)
	.pipe(concat('./less/secondary-menu.less'))
	.pipe(gulp.dest('./'));
});

gulp.task('concate-wcfmmp', function() {
	return gulp.src(xstoreConfig.concat.wcfmmp)
	.pipe(concat('./less/wcfmmp.less'))
	.pipe(gulp.dest('./'));
});

gulp.task('concate-wcmp', function() {
	return gulp.src(xstoreConfig.concat.wcmp)
	.pipe(concat('./less/wcmp.less'))
	.pipe(gulp.dest('./'));
});

// Less
gulp.task('style', function() {
	return gulp.src('./less/style.less')
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
	return gulp.src('./less/xstore.less')
	.pipe(less({
		outputStyle: 'expanded',
		indentType: 'tab',
		indentWidth: '1'
	}))
	.pipe(postcss([
		autoprefixer('last 2 versions', '> 1%')
		]))
	.pipe(rename('xstore.css'))
	.pipe(gulp.dest('./'));
});

gulp.task('dark', function() {
	return gulp.src('./less/dark.less')
	.pipe(less({
		outputStyle: 'expanded',
		indentType: 'tab',
		indentWidth: '1'
	}))
	.pipe(postcss([
		autoprefixer('last 2 versions', '> 1%')
		]))
	.pipe(rename('css/dark.css'))
	.pipe(gulp.dest('./'));
});

gulp.task('rtl', function() {
	return gulp.src('./less/rtl.less')
	.pipe(less({
		outputStyle: 'expanded',
		indentType: 'tab',
		indentWidth: '1'
	}))
	.pipe(postcss([
		autoprefixer('last 2 versions', '> 1%')
		]))
	.pipe(rename('rtl.css'))
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
	.pipe(gulp.dest('./'));
});

gulp.task('secondary', function() {
	return gulp.src('./less/secondary-menu.less')
	.pipe(less({
		outputStyle: 'expanded',
		indentType: 'tab',
		indentWidth: '1'
	}))
	.pipe(postcss([
		autoprefixer('last 2 versions', '> 1%')
		]))
	.pipe(rename('css/secondary-menu.css'))
	.pipe(gulp.dest('./'));
});

gulp.task('portfolio', function() {
	return gulp.src('./less/portfolio.less')
	.pipe(less({
		outputStyle: 'expanded',
		indentType: 'tab',
		indentWidth: '1'
	}))
	.pipe(postcss([
		autoprefixer('last 2 versions', '> 1%')
		]))
	.pipe(rename('css/portfolio.css'))
	.pipe(gulp.dest('./'));
});

gulp.task('swatches', function() {
	return gulp.src('./less/swatches.less')
	.pipe(less({
		outputStyle: 'expanded',
		indentType: 'tab',
		indentWidth: '1'
	}))
	.pipe(postcss([
		autoprefixer('last 2 versions', '> 1%')
		]))
	.pipe(rename('css/swatches.css'))
	.pipe(gulp.dest('./'));
});

gulp.task('builders', function() {
	return gulp.src('./less/builders-global.less')
	.pipe(less({
		outputStyle: 'expanded',
		indentType: 'tab',
		indentWidth: '1'
	}))
	.pipe(postcss([
		autoprefixer('last 2 versions', '> 1%')
		]))
	.pipe(rename('css/builders-global.css'))
	.pipe(gulp.dest('./'));
});

gulp.task('elementor', function() {
	return gulp.src('./less/elementor.less')
	.pipe(less({
		outputStyle: 'expanded',
		indentType: 'tab',
		indentWidth: '1'
	}))
	.pipe(postcss([
		autoprefixer('last 2 versions', '> 1%')
		]))
	.pipe(rename('css/elementor.css'))
	.pipe(gulp.dest('./'));
});

gulp.task('wpb', function() {
	return gulp.src('./less/wpb.less')
	.pipe(less({
		outputStyle: 'expanded',
		indentType: 'tab',
		indentWidth: '1'
	}))
	.pipe(postcss([
		autoprefixer('last 2 versions', '> 1%')
		]))
	.pipe(rename('css/wpb.css'))
	.pipe(gulp.dest('./'));
});

gulp.task('forum', function() {
	return gulp.src('./less/forum.less')
	.pipe(less({
		outputStyle: 'expanded',
		indentType: 'tab',
		indentWidth: '1'
	}))
	.pipe(postcss([
		autoprefixer('last 2 versions', '> 1%')
		]))
	.pipe(rename('css/forum.css'))
	.pipe(gulp.dest('./'));
});

gulp.task('wcfmmp', function() {
	return gulp.src('./less/wcfmmp.less')
	.pipe(less({
		outputStyle: 'expanded',
		indentType: 'tab',
		indentWidth: '1'
	}))
	.pipe(postcss([
		autoprefixer('last 2 versions', '> 1%')
		]))
	.pipe(rename('css/wcfmmp.css'))
	.pipe(gulp.dest('./'));
});

gulp.task('wcmp', function() {
	return gulp.src('./less/wcmp.less')
	.pipe(less({
		outputStyle: 'expanded',
		indentType: 'tab',
		indentWidth: '1'
	}))
	.pipe(postcss([
		autoprefixer('last 2 versions', '> 1%')
		]))
	.pipe(rename('css/wcmp.css'))
	.pipe(gulp.dest('./'));
});

gulp.task('dokan', function() {
	return gulp.src('./less/dokan.less')
	.pipe(less({
		outputStyle: 'expanded',
		indentType: 'tab',
		indentWidth: '1'
	}))
	.pipe(postcss([
		autoprefixer('last 2 versions', '> 1%')
		]))
	.pipe(rename('css/dokan.css'))
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
	return gulp.src(['./js/theme/postBackstretchImg.js'])
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

	var frontend = gulp.src(['../../plugins/et-core-plugin/app/models/customizer/frontend/js/jquery.autocomplete.js', '../../plugins/et-core-plugin/app/models/customizer/frontend/js/frontend-script.js'])
	 .pipe(concat('../../plugins/et-core-plugin/app/models/customizer/frontend/js/frontend-script.min.js'))
	 .pipe(uglify())
	 .pipe(gulp.dest('./'));

	var script = gulp.src(['../../plugins/et-core-plugin/packages/sales-booster/assets/js/script.js'])
	 .pipe(concat('../../plugins/et-core-plugin/packages/sales-booster/assets/js/script.min.js'))
	 .pipe(uglify())
	 .pipe(gulp.dest('./'));

	 return merge(builder, frontend, script);
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
	var barnding =  gulp.src(['**','!node_modules','!node_modules/**','!Gruntfile.js','!package.json','!js/scripts.js','!.git','!.gitignore','!README.md','!idea/','!.DS_Store'], {cwd:'../../plugins/xstore-white-label-branding/'})
	.pipe(zip('../xstore-white-label-branding.zip'))
	.pipe(gulp.dest('./'));

	var core =  gulp.src(['**','!node_modules','!node_modules/**','!Gruntfile.js','!package.json','!.git','!.gitignore','!README.md','!app/models/customizer/theme-options/product-archive-builder','!app/models/customizer/theme-options/product-archive-builder/**','!app/models/customizer/templates/woocommerce/archive-product','!app/models/customizer/templates/woocommerce/archive-product/**','!app/models/customizer/builder/js/builder.js','!app/models/customizer/frontend/js/frontend-script.js','!app/models/customizer/frontend/js/jquery.autocomplete.js','!packages/sales-booster/assets/js/script.js','!.DS_Store'], {cwd:'../../plugins/et-core-plugin/'})
	.pipe(zip('../et-core-plugin.zip'))
	.pipe(gulp.dest('./'));

	var xstore =  gulp.src(['**','!node_modules','!node_modules/**','!Gruntfile.js','!less/**','!theme/assets/dummy','!theme/assets/dummy/**','!theme/assets/dummy/*/*.jpg','!theme/assets/dummy/*/*.zip','!theme/assets/dummy/*/*.json','!theme/plugins/js_composer.zip','!theme/plugins/revslider.zip','!less_old','!less_old/**','!package.json','!.git','!.gitignore','!README.md','!js/etheme.plugins.min','!js/libs/flexibility.js','!js/flexibility.js','!js/jquery.magnific-popup.js','!js/libs/jquery.magnific-popup.js','!js/swiper.js','!js/libs/swiper.js','!js/jquery.sticky-kit.js','!js/libs/jquery.sticky-kit.js','!js/modernizr.js', '!js/libs/modernizr.js','!js/photoswipe.js','!js/photoswipe-ui-default.js','!js/libs/photoswipe.js','!js/libs/photoswipe-ui-default.js','!js/portfolio.js','!js/theme','!js/theme/','!js/theme/*','!js/ajax-filters.js','!js/theme/ajax-filters.js','!js/theme/mini-cart.js','!js/theme/ajax-spv-add-to-cart.js','!changelog.txt','!framework/panel/js/generator.js','!framework/panel/js/instagram.js','!framework/panel/js/email_builder.js','!framework/panel/js/sales_booster.js','!framework/panel/js/plugins.js','!js/oldHeader.js','!js/oldHeader.min.js','!js/etheme.js'])
	.pipe(zip('../xstore.zip'))
	.pipe(gulp.dest('./'));

	var xstore_dev =  gulp.src(['**','!node_modules','!node_modules/**','!Gruntfile.js','!theme/assets/dummy/*/*.jpg','!theme/assets/dummy/*/*.zip','!theme/plugins/js_composer.zip','!theme/plugins/revslider.zip','!package.json','!.git','!.gitignore','!README.md'])
	.pipe(zip('../xstore_dev.zip'))
	.pipe(gulp.dest('./'));

	return merge(barnding, core, xstore, xstore_dev);
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
    gulp.watch(['./js/theme/postBackstretchImg.js'], gulp.series('postBackstretchImgJs'));
    gulp.watch(['../../plugins/et-core-plugin/packages/sales-booster/assets/js/script.js','../../plugins/et-core-plugin/app/models/customizer/builder/js/builder.js','../../plugins/et-core-plugin/app/models/customizer/frontend/js/jquery.autocomplete.js', '../../plugins/et-core-plugin/app/models/customizer/frontend/js/frontend-script.js'], gulp.series('ethemeCoreBuilderJs'));
    gulp.watch(xstoreConfig.uglify.ethemePluginsJs, gulp.series('ethemePluginsJs'));
    gulp.watch(['./framework/panel/js/generator.js'], gulp.series('panelGeneratorJs'));
    gulp.watch(['./framework/panel/js/instagram.js'], gulp.series('panelInstagramJs'));
    gulp.watch(['./framework/panel/js/email_builder.js'], gulp.series('panelEmailBuilderJs'));
    gulp.watch(['./framework/panel/js/sales_booster.js'], gulp.series('panelSalesBoosterJs'));
    gulp.watch(['./framework/panel/js/plugins.js'], gulp.series('panelPluginsJs'));
    gulp.watch(xstoreConfig.uglify.optimize, gulp.series('optimize'));
    gulp.watch(xstoreConfig.uglify.photoswipe, gulp.series('photoswipe'));
    // Less
    gulp.watch(xstoreConfig.concat.style, gulp.series('concate-style', 'style'));
    gulp.watch(xstoreConfig.concat.xstore, gulp.series('concate-xstore', 'xstore'));
    gulp.watch(['./less/dark.less'], gulp.series('dark'));
    gulp.watch(['./less/rtl.less'], gulp.series('rtl'));
    gulp.watch(['./less/modules/global/xstore-icons.less'], gulp.series(['icons']));
    gulp.watch(xstoreConfig.concat.secondary, gulp.series('concate-secondary', 'secondary'));
    gulp.watch(xstoreConfig.concat.portfolio, gulp.series('concate-portfolio', 'portfolio'));
    gulp.watch(xstoreConfig.concat.swatches, gulp.series('concate-swatches', 'swatches'));
    gulp.watch(xstoreConfig.concat.builders, gulp.series('concate-builders', 'builders'));
    gulp.watch(xstoreConfig.concat.elementor, gulp.series('concate-elementor', 'elementor'));
    gulp.watch(xstoreConfig.concat.wpb, gulp.series('concate-wpb', 'wpb'));
    gulp.watch(xstoreConfig.concat.forum, gulp.series('concate-forum', 'forum'));
    gulp.watch(xstoreConfig.concat.wcfmmp, gulp.series('concate-wcfmmp', 'wcfmmp'));
    gulp.watch(xstoreConfig.concat.wcmp, gulp.series('concate-wcmp', 'wcmp'));
    gulp.watch(xstoreConfig.concat.dokan, gulp.series('concate-dokan', 'dokan'));

});


// Default task (runs at initiation: gulp --verbose)
gulp.task('default', gulp.series('watch'));
