import React from 'react';
import '../styles/Sidebar.css';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ContactsIcon from '@material-ui/icons/Contacts';
import YouTubeIcon from '@material-ui/icons/YouTube';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import BookIcon from '@material-ui/icons/Book';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Subscriptions from './Subscriptions';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';
import Extra from './Extra';

function Sidebar() {
	return (
		<div className="sidebar">
			<SidebarOptions active Icon={HomeIcon} text={'Home'} />
			<SidebarOptions Icon={WhatshotIcon} text={'Trending'} />
			<SidebarOptions Icon={ContactsIcon} text={'Subscriptions'} />
			<SidebarOptions Icon={YouTubeIcon} text={'Originals'} />

			<hr />

			<SidebarOptions Icon={VideoLibraryIcon} text={'Library'} />
			<SidebarOptions Icon={HistoryIcon} text={'History'} />
			<SidebarOptions Icon={OndemandVideoOutlinedIcon} text={'Your Videos'} />
			<SidebarOptions Icon={BookIcon} text={'Purchases'} />
			<SidebarOptions Icon={WatchLaterIcon} text={'Watch Later'} />
			<SidebarOptions Icon={KeyboardArrowDownIcon} text={'Show More'} />

			<hr />

			<Subscriptions />
			<SidebarOptions Icon={KeyboardArrowDownIcon} text={'Show 54 More'} />

			<hr />

			<SidebarOptions Icon={SettingsIcon} text={'Settings'} />
			<SidebarOptions Icon={FlagIcon} text={'Report history'} />
			<SidebarOptions Icon={HelpIcon} text={'Help'} />
			<SidebarOptions Icon={FeedbackIcon} text={'Send Feedback'} />

			<hr />

			<div className="links">
				<Extra text={'About'} />
				<Extra text={'Press'} />
				<Extra text={'Copyright'} />
			</div>

			<div className="links">
				<Extra text={'Contact Us'} />
				<Extra text={'Creators'} />
			</div>

			<div className="links">
				<Extra text={'Advertise'} />
				<Extra text={'Developers'} />
			</div>

			<br />

			<div className="links">
				<Extra text={'Terms'} />
				<Extra text={'Privacy'} />
				<Extra text={'Policy & Safety'} />
			</div>
			<div className="links">
				<Extra text={'How Youtube Works'} />
			</div>
			<div className="links">
				<Extra text={'Test new features'} />
			</div>

			<br />
			<br />

			<p>© 2020 Google LLC</p>

			<br />
		</div>
	);
}

export default Sidebar;
