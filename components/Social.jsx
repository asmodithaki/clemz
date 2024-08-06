import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faSpotify,
  faApple,
  faGooglePlay,
  faDeezer,
  faTiktok
} from "@fortawesome/free-brands-svg-icons";

const SocialShare = [
  {
    iconName: <FontAwesomeIcon icon={faFacebookF} />,
    link: "https://www.facebook.com/",
  },
  {
    iconName: <FontAwesomeIcon icon={faTwitter} />,
    link: "https://twitter.com/",
  },
  {
    iconName: <FontAwesomeIcon icon={faInstagram} />,
    link: "https://www.instagram.com/",
  },
  {
    iconName: <FontAwesomeIcon icon={faYoutube} />,
    link: "https://youtube.com/",
  },
  {
    iconName: <FontAwesomeIcon icon={faSpotify} />,
    link: "https://www.spotify.com/",
  },
  {
    iconName: <FontAwesomeIcon icon={faApple} />,
    link: "https://music.apple.com/",
  },
  {
    iconName: <FontAwesomeIcon icon={faGooglePlay} />,
    link: "https://play.google.com/music",
  },
  {
    iconName: <FontAwesomeIcon icon={faDeezer} />,
    link: "https://www.deezer.com/",
  },
  {
    iconName: <FontAwesomeIcon icon={faTiktok} />,
    link: "https://www.tiktok.com/",
  },
];

const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
