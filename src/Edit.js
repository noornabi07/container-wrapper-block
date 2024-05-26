import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { useEffect } from 'react';
import ContentSettings from './Components/Settings/ContentSetting/ContentSettings';
import StyleSetting from './Components/Settings/StyleSetting/StyleSetting';
import Container from './Components/Container/Container';
import MainStyle from './Components/MainStyle/MainStyle';
const Edit = props => {
	const { className, setAttributes, attributes, clientId, } = props;
	const { tab, align, cId } = attributes;

	console.log("iddddd:", cId);

	useEffect(() => { clientId && setAttributes({ cId: clientId.substring(0, 10) }); }, [clientId]); // Set & Update clientId to cId

	return <Fragment>
		<InspectorControls>
			<TabPanel
				className="my-tab-panel"
				activeClass="active-tab"
				orientation="horizontal"
				initialTabName={tab.activeTab}
				onSelect={(tabName) => setAttributes({ tab: { activeTab: tabName } })}
				tabs={[
					{
						name: 'tab1',
						title: 'General',
						className: 'tab-one',
					},
					{
						name: 'tab2',
						title: 'Styles',
						text: 'Styles',
						className: 'tab-two',
					},
				]}>
				{(tab) => (
					<div className='myTabPanel'>
						{
							tab.name === 'tab1' && <ContentSettings attributes={attributes} setAttributes={setAttributes} />
						}
						{
							tab.name === 'tab2' && <StyleSetting attributes={attributes} setAttributes={setAttributes} />
						}
					</div>
				)
				}
			</TabPanel>
		</InspectorControls>


		
		<div>
			<MainStyle attributes={attributes}></MainStyle>

			<div className={`${className} align${align}`} id={`wrapper-${cId}`} >
				<Container attributes={attributes} />
			</div>
			
		</div>
	</Fragment>
};
export default Edit;