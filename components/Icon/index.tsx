import { Icons } from "../../enum/Icon";
import GithubIcon from "./Github";
import SearchIcon from "./Search";
import QueueMusicIcon from "./QueueMusic";
import FavoriteIcon from "./Favorite";
import LiveIcon from "./Live";
import DownloadIcon from "./Download";
import MobileIcon from "./Mobile";
import OfflineIcon from "./Offline";
import AndroidIcon from "./Android";
import SecurityIcon from "./Security";
import CodeIcon from "./Code";
import BackupIcon from "./Backup";
import DesignIcon from "./Design";
import LanguageIcon from "./Language";
import { SvgProps } from "./Svg";
import LinkedInIcon from "./LinkedIn";
import TwitterIcon from "./Twitter";
import EmailIcon from "./Email";
import CarConnected from "./CarConnected";

export interface Props extends SvgProps {
  name: string;
}

const Icon: React.FC<Props> = ({ name, ...props }) => {
  let Component = null;

  switch (true) {
    case name === Icons.Github:
      Component = <GithubIcon {...props} />;
      break;
    case name === Icons.Search:
      Component = <SearchIcon {...props} />;
      break;
    case name === Icons.QueueMusic:
      Component = <QueueMusicIcon {...props} />;
      break;
    case name === Icons.Favorite:
      Component = <FavoriteIcon {...props} />;
      break;
    case name === Icons.Live:
      Component = <LiveIcon {...props} />;
      break;
    case name === Icons.Download:
      Component = <DownloadIcon {...props} />;
      break;
    case name === Icons.Mobile:
      Component = <MobileIcon {...props} />;
      break;
    case name === Icons.Offline:
      Component = <OfflineIcon {...props} />;
      break;
    case name === Icons.Android:
      Component = <AndroidIcon {...props} />;
      break;
    case name === Icons.Security:
      Component = <SecurityIcon {...props} />;
      break;
    case name === Icons.Code:
      Component = <CodeIcon {...props} />;
      break;
    case name === Icons.Backup:
      Component = <BackupIcon {...props} />;
      break;
    case name === Icons.Design:
      Component = <DesignIcon {...props} />;
      break;
    case name === Icons.Language:
      Component = <LanguageIcon {...props} />;
      break;
    case name === Icons.LinkedIn:
      Component = <LinkedInIcon {...props} />;
      break;
    case name === Icons.Twitter:
      Component = <TwitterIcon {...props} />;
      break;
    case name === Icons.Email:
      Component = <EmailIcon {...props} />;
      break;
    case name === Icons.CarConnected:
      Component = <CarConnected {...props} />;
      break;
    default:
      break;
  }

  return Component;
};

export default Icon;
