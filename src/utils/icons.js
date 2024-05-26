const iconColor = '#4527a4';

export const blockIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 20 20' fill={iconColor}>
	<path fill={iconColor} fillRule='evenodd' d='M9.938 4.016a.146.146 0 00-.054.057L3.027 15.74a.176.176 0 00-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 00.066-.017.163.163 0 00.055-.06.176.176 0 00-.003-.183L10.12 4.073a.146.146 0 00-.054-.057.13.13 0 00-.063-.016.13.13 0 00-.064.016zm1.043-.45a1.13 1.13 0 00-1.96 0L2.166 15.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L10.982 3.566z'></path>
	<rect fill={iconColor} width='2' height='2' x='9.002' y='13' rx='1'></rect>
	<path fill={iconColor} d='M9.1 7.995a.905.905 0 111.8 0l-.35 3.507a.553.553 0 01-1.1 0L9.1 7.995z'></path>
</svg>;

export function OceanWabe({ ...props }){
	return <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1000 100" preserveAspectRatio="none"><g clipPath="url(#eb-shape-divider-ocean-wave)"><path className="eb-shape-divider-fill" fill="currentColor" d="M0 97.79S101.82-.97 283.17 5.23c203.09 0 290.46 94.4 716.83 94.4V0H0v97.79Z"></path></g><defs><clipPath id="eb-shape-divider-ocean-wave"><path fill="#fff" className="eb-shape-divider-fill" d="M0 0h1000v99.62H0z"></path></clipPath></defs></svg>
}

export function AsymmetricTriangle({ ...props }) {
	return <svg
		{...props}
		preserveAspectRatio="none"
		viewBox="0 0 1000 100"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g clipPath="url(#eb-shape-divider-triangle)">
			<path
				className="eb-shape-divider-fill"
				d="m0 98.99 170.59-87.45S611.11 98.99 1000 98.99V0H0v98.99Z"
				fill="currentColor"
			/>
		</g>
		<defs>
			<clipPath id="eb-shape-divider-triangle">
				<path
					className="eb-shape-divider-fill"
					d="M0 0h1000v98.99H0z"
					fill="currentColor"
				/>
			</clipPath>
		</defs>
	</svg>
}

export function Abstract({ ...props }) {
	return <svg
		{...props}
		preserveAspectRatio="none"
		viewBox="0 0 1000 100"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			className="eb-shape-divider-fill"
			d="M1000 0H0l.004 84.53c8.883-1.503 17.67-3.832 26.606-4.38 11.144-.693 22.668-2.426 33.516 2.75 2.148 1.022 5.802 1.283 7.787.236 16.643-8.726 35.02-8.353 52.995-8.552 16.393-.171 32.8 2.003 49.227 2.575 7.39.249 14.834-.883 22.252-1.395 5.505-.385 11.126-1.657 16.502-1.017 27.437 3.259 54.741.483 82.116-.512 22.989-.824 46.094-1.695 69.014-.384 18.454 1.053 36.688 5.406 55.054 8.106 3.796.56 7.833.866 11.584.284 19.935-3.06 39.975-5.795 59.667-9.936 13.651-2.875 27.24-4.332 41.044-3.482 16.178.995 32.295 2.86 48.464 4.05 14.143 1.039 28.322 2.251 42.486 2.24 6.99-.004 13.954-2.691 20.971-3.957 3.599-.646 7.394-1.548 10.917-1.071 8.379 1.156 16.747 2.73 24.926 4.807 3.59.91 6.937 3.182 9.992 5.342 8.332 5.887 12.636 5.884 21.316.173 1.429-.938 4.516-.871 6.155-.05 4.483 2.259 8.528 5.261 12.874 7.783 4.35 2.528 8.526 3.508 13.604.622 8.431-4.779 8.798-4.844 5.644-16.958 9.004 5.279 16.629 10.026 24.537 14.293 5.578 3.015 11.102 6.918 18.332 3.864 5.162-2.182 9.711-4.556 8.883-11.517 8.026 4.971 15.566 9.27 22.664 14.154 6.305 4.338 12.352 3.68 18.678.595 6.039-2.943 4.774-7.627 1.511-13.691 4.874 2.2 8.264 3.038 10.67 4.97 4.736 3.8 9.051 2.95 14.068.709 7.736-3.457 8.919-7.193 3.577-13.387-.879-1.02-1.85-1.978-1.982-3.99 5.02 3.216 10.095 6.346 15.041 9.666 5.659 3.8 11.127 7.853 16.793 11.63 7.265 4.848 15.631 4.988 21.951-.296 4.726-3.951 2.104-8.467-.974-12.184-4.576-5.533-9.527-10.8-14.312-16.168.415-.445.829-.877 1.244-1.316 5.943 4.058 11.898 8.105 17.824 12.196 4.109 2.835 8.088 5.854 12.277 8.587 10.747 7.007 15.487 6.835 26.683-1.303 4.201 3.223 8.74 6.49 13.041 10.025 9.951 8.183 15.277 7.933 24.777-2.595V0Z"
			fill="currentColor"
		/>
	</svg>
} 

export function AsymmetricCurve({ ...props }) {
	return <svg
		{...props}
		fill="none"
		preserveAspectRatio="none"
		viewBox="0 0 1000 100"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			className="eb-shape-divider-fill"
			d="M646.99 79.145C766.266 62.962 906.985 26.462 1000 0H0c211.255 131.265 460.086 104.501 646.99 79.145Z"
			fill="currentColor"
		/>
	</svg>
} 

export function AiFillLock(props) {
	return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" height="1em" width="1em" {...props}><path d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM540 701v53c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-53a48.01 48.01 0 1 1 56 0zm152-237H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224z" /></svg>;
}


