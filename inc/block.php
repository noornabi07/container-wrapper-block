<?php
class CTRBContainerBlock{
	public function __construct(){
		add_action( 'init', [$this, 'onInit'] );
	}
	function onInit() {
		wp_register_style( 'ctrb-container-style', CTRB_DIR_URL . 'dist/style.css', [ ], CTRB_VERSION ); // Style
		wp_register_style( 'ctrb-container-editor-style', CTRB_DIR_URL . 'dist/editor.css', [ 'ctrb-container-style' ], CTRB_VERSION ); // Backend Style

		register_block_type( __DIR__, [
			'editor_style'		=> 'ctrb-container-editor-style',
			'render_callback'	=> [$this, 'render']
		] ); // Register Block

		wp_set_script_translations( 'ctrb-container-editor-script', 'container-block', CTRB_DIR_PATH . 'languages' );
	}

	function fetch_svg_content($url) {
        if (filter_var($url, FILTER_VALIDATE_URL)) {
            return file_get_contents($url);
        }
        return '';
    }

	function render( $attributes, $innerBlocks ){
		extract( $attributes );

		wp_enqueue_style( 'ctrb-container-style' );
		wp_enqueue_script( 'ctrb-container-script', CTRB_DIR_URL . 'dist/script.js', [ 'react', 'react-dom' ], CTRB_VERSION, true );
		wp_set_script_translations( 'ctrb-container-script', 'container-block', CTRB_DIR_PATH . 'languages' );

		$className = $className ?? '';
		$blockClassName = "wp-block-ctrb-container $className align$align";

		ob_start();
		?>
		<!-- This is only css in dive start here -->
		<div class="wp-block-ctrb-style" data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>
		<!-- This is only css in dive end here -->

		<div class='<?php echo esc_attr( $blockClassName ); ?>' id='wrapper-<?php echo esc_attr( $cId ) ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'>
				<?php 
				echo $this->container($attributes, $innerBlocks);
				?>
		</div>

		<?php return ob_get_clean();
	}

function container($attributes, $innerBlocks) {
    $shaped = $attributes['shaped'];
    $topShaped = $shaped['topShaped'];
    $bottomShaped = $shaped['bottomShaped'];
    $topColors = $shaped['topColors'];
    $bottomColors = $shaped['bottomColors'];
		$topUploadSvg = $shaped["topUploadSvg"];
		$bottomUploadSvg = $shaped["bottomUploadSvg"];

		$isShaped = $shaped["isShaped"];
		$topUploadShaped = $isShaped["topUploadShaped"];
		$bottomUploadShaped = $isShaped["bottomUploadShaped"];

    ob_start();
    ?>
    <div class="mainDiv">

		<!-- Top shaped section here -->
				<?php if($topUploadShaped): ?>
					<div class="top-shaped">
						<?php echo $this->fetch_svg_content($topUploadSvg['url']); ?>
          </div>

				<?php else: ?>
        	<?php if ($topShaped !== 'none') : ?>
        	 <div class="top-shaped">
            <?php
            if ($topShaped === 'ocean wave') {
                echo '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1000 100" preserveAspectRatio="none"><g clipPath="url(#eb-shape-divider-ocean-wave)"><path className="eb-shape-divider-fill" fill="' . $topColors . '" d="M0 97.79S101.82-.97 283.17 5.23c203.09 0 290.46 94.4 716.83 94.4V0H0v97.79Z"></path></g><defs><clipPath id="eb-shape-divider-ocean-wave"><path fill="#fff" className="eb-shape-divider-fill" d="M0 0h1000v99.62H0z"></path></clipPath></defs></svg>';
            } elseif ($topShaped === 'asymmetric triangle') {
                echo '<svg {...props} preserveAspectRatio="none" viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#eb-shape-divider-triangle)"><path className="eb-shape-divider-fill" d="m0 98.99 170.59-87.45S611.11 98.99 1000 98.99V0H0v98.99Z"
				fill="'.$topColors.'" /></g><defs><clipPath id="eb-shape-divider-triangle"><path className="eb-shape-divider-fill" d="M0 0h1000v98.99H0z" fill="currentColor"/>
			</clipPath></defs></svg>';
            } elseif ($topShaped === 'abstract paintbrush') {
                echo '<svg
		{...props}
		preserveAspectRatio="none"
		viewBox="0 0 1000 100"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			className="eb-shape-divider-fill"
			d="M1000 0H0l.004 84.53c8.883-1.503 17.67-3.832 26.606-4.38 11.144-.693 22.668-2.426 33.516 2.75 2.148 1.022 5.802 1.283 7.787.236 16.643-8.726 35.02-8.353 52.995-8.552 16.393-.171 32.8 2.003 49.227 2.575 7.39.249 14.834-.883 22.252-1.395 5.505-.385 11.126-1.657 16.502-1.017 27.437 3.259 54.741.483 82.116-.512 22.989-.824 46.094-1.695 69.014-.384 18.454 1.053 36.688 5.406 55.054 8.106 3.796.56 7.833.866 11.584.284 19.935-3.06 39.975-5.795 59.667-9.936 13.651-2.875 27.24-4.332 41.044-3.482 16.178.995 32.295 2.86 48.464 4.05 14.143 1.039 28.322 2.251 42.486 2.24 6.99-.004 13.954-2.691 20.971-3.957 3.599-.646 7.394-1.548 10.917-1.071 8.379 1.156 16.747 2.73 24.926 4.807 3.59.91 6.937 3.182 9.992 5.342 8.332 5.887 12.636 5.884 21.316.173 1.429-.938 4.516-.871 6.155-.05 4.483 2.259 8.528 5.261 12.874 7.783 4.35 2.528 8.526 3.508 13.604.622 8.431-4.779 8.798-4.844 5.644-16.958 9.004 5.279 16.629 10.026 24.537 14.293 5.578 3.015 11.102 6.918 18.332 3.864 5.162-2.182 9.711-4.556 8.883-11.517 8.026 4.971 15.566 9.27 22.664 14.154 6.305 4.338 12.352 3.68 18.678.595 6.039-2.943 4.774-7.627 1.511-13.691 4.874 2.2 8.264 3.038 10.67 4.97 4.736 3.8 9.051 2.95 14.068.709 7.736-3.457 8.919-7.193 3.577-13.387-.879-1.02-1.85-1.978-1.982-3.99 5.02 3.216 10.095 6.346 15.041 9.666 5.659 3.8 11.127 7.853 16.793 11.63 7.265 4.848 15.631 4.988 21.951-.296 4.726-3.951 2.104-8.467-.974-12.184-4.576-5.533-9.527-10.8-14.312-16.168.415-.445.829-.877 1.244-1.316 5.943 4.058 11.898 8.105 17.824 12.196 4.109 2.835 8.088 5.854 12.277 8.587 10.747 7.007 15.487 6.835 26.683-1.303 4.201 3.223 8.74 6.49 13.041 10.025 9.951 8.183 15.277 7.933 24.777-2.595V0Z"
			fill="'.$topColors.'"
		/>
	</svg>';
            } elseif ($topShaped === 'asymmetric curve') {
                echo '<svg
		{...props}
		fill="none"
		preserveAspectRatio="none"
		viewBox="0 0 1000 100"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			className="eb-shape-divider-fill"
			d="M646.99 79.145C766.266 62.962 906.985 26.462 1000 0H0c211.255 131.265 460.086 104.501 646.99 79.145Z"
			fill="'.$topColors.'"
		/>
	</svg>';
            }
            ?>
       	 </div>
        	<?php endif; ?>
				<?php endif; ?>

				<!-- Bottom shaped section here -->
        <?php if($bottomUploadShaped): ?>
					<div class="bottom-shaped">
           <?php echo $this->fetch_svg_content($bottomUploadSvg['url']); ?>
          </div>
					<?php else: ?>
					<?php if ($bottomShaped !== 'none') : ?>
           <div class="bottom-shaped">
            <?php
             if ($bottomShaped === 'ocean wave') {
                echo '<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1000 100" preserveAspectRatio="none"><g clipPath="url(#eb-shape-divider-ocean-wave)"><path className="eb-shape-divider-fill" fill="'.$bottomColors.'" d="M0 97.79S101.82-.97 283.17 5.23c203.09 0 290.46 94.4 716.83 94.4V0H0v97.79Z"></path></g><defs><clipPath id="eb-shape-divider-ocean-wave"><path fill="#fff" className="eb-shape-divider-fill" d="M0 0h1000v99.62H0z"></path></clipPath></defs></svg>';
             } elseif ($bottomShaped === 'asymmetric triangle') {
                echo '<svg
		{...props}
		preserveAspectRatio="none"
		viewBox="0 0 1000 100"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g clipPath="url(#eb-shape-divider-triangle)">
			<path
				className="eb-shape-divider-fill"
				d="m0 98.99 170.59-87.45S611.11 98.99 1000 98.99V0H0v98.99Z"
				fill="'.$bottomColors.'"
			/>
		</g>
		<defs>
			<clipPath id="eb-shape-divider-triangle">
				<path
					className="eb-shape-divider-fill"
					d="M0 0h1000v98.99H0z"
					fill="'.$bottomColors.'"
				/>
			</clipPath>
		</defs>
	</svg>';
             } elseif ($bottomShaped === 'abstract paintbrush') {
                echo '<svg
		{...props}
		preserveAspectRatio="none"
		viewBox="0 0 1000 100"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			className="eb-shape-divider-fill"
			d="M1000 0H0l.004 84.53c8.883-1.503 17.67-3.832 26.606-4.38 11.144-.693 22.668-2.426 33.516 2.75 2.148 1.022 5.802 1.283 7.787.236 16.643-8.726 35.02-8.353 52.995-8.552 16.393-.171 32.8 2.003 49.227 2.575 7.39.249 14.834-.883 22.252-1.395 5.505-.385 11.126-1.657 16.502-1.017 27.437 3.259 54.741.483 82.116-.512 22.989-.824 46.094-1.695 69.014-.384 18.454 1.053 36.688 5.406 55.054 8.106 3.796.56 7.833.866 11.584.284 19.935-3.06 39.975-5.795 59.667-9.936 13.651-2.875 27.24-4.332 41.044-3.482 16.178.995 32.295 2.86 48.464 4.05 14.143 1.039 28.322 2.251 42.486 2.24 6.99-.004 13.954-2.691 20.971-3.957 3.599-.646 7.394-1.548 10.917-1.071 8.379 1.156 16.747 2.73 24.926 4.807 3.59.91 6.937 3.182 9.992 5.342 8.332 5.887 12.636 5.884 21.316.173 1.429-.938 4.516-.871 6.155-.05 4.483 2.259 8.528 5.261 12.874 7.783 4.35 2.528 8.526 3.508 13.604.622 8.431-4.779 8.798-4.844 5.644-16.958 9.004 5.279 16.629 10.026 24.537 14.293 5.578 3.015 11.102 6.918 18.332 3.864 5.162-2.182 9.711-4.556 8.883-11.517 8.026 4.971 15.566 9.27 22.664 14.154 6.305 4.338 12.352 3.68 18.678.595 6.039-2.943 4.774-7.627 1.511-13.691 4.874 2.2 8.264 3.038 10.67 4.97 4.736 3.8 9.051 2.95 14.068.709 7.736-3.457 8.919-7.193 3.577-13.387-.879-1.02-1.85-1.978-1.982-3.99 5.02 3.216 10.095 6.346 15.041 9.666 5.659 3.8 11.127 7.853 16.793 11.63 7.265 4.848 15.631 4.988 21.951-.296 4.726-3.951 2.104-8.467-.974-12.184-4.576-5.533-9.527-10.8-14.312-16.168.415-.445.829-.877 1.244-1.316 5.943 4.058 11.898 8.105 17.824 12.196 4.109 2.835 8.088 5.854 12.277 8.587 10.747 7.007 15.487 6.835 26.683-1.303 4.201 3.223 8.74 6.49 13.041 10.025 9.951 8.183 15.277 7.933 24.777-2.595V0Z"
			fill="'.$bottomColors.'"
		/>
	</svg>';
             } elseif ($bottomShaped === 'asymmetric curve') {
                echo '<svg
		{...props}
		fill="none"
		preserveAspectRatio="none"
		viewBox="0 0 1000 100"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			className="eb-shape-divider-fill"
			d="M646.99 79.145C766.266 62.962 906.985 26.462 1000 0H0c211.255 131.265 460.086 104.501 646.99 79.145Z"
			fill="'.$bottomColors.'"
		/>
	</svg>';
             }?>
         </div>
         <?php endif; ?>
				<?php endif; ?>

        <div class="innerBlock">
            <?php echo $innerBlocks; ?>
        </div>
    </div>
    <?php
    return ob_get_clean();
}

}
new CTRBContainerBlock();
require_once("ExtendMime.php");