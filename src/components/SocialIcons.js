import React from 'react';

const socialMediaLinks = [
  {
    name: 'WhatsApp',
    iconClass: 'fa fa-whatsapp',
    url: 'https://chat.whatsapp.com/CYmkHLDzRTyJkY5Dw0LRPd',
  },
  {
    name: 'Twitter',
    iconClass: 'fa fa-twitter',
    url: 'https://twitter.com/VanaraIT',
  },
  {
    name: 'YouTube',
    iconClass: 'fa fa-youtube',
    url: 'https://www.youtube.com/@vanarait?sub_confirmation=1',
  },
  {
    name: 'Facebook',
    iconClass: 'fa fa-facebook',
    url: 'https://www.facebook.com/vanarait',
  },
  {
    name: 'Instagram',
    iconClass: 'fa fa-instagram',
    url: 'https://www.instagram.com/vanarait/',
  },
];

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <div className="rounded-social-buttons">
        {socialMediaLinks.map((link, index) => (
          <a
            key={index}
            className={`social-button ${link.name.toLowerCase()}`}
            href={link.url}
            target="_blank"
            rel="noreferrer"
          >
            <i className={link.iconClass} aria-hidden="true"></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialIcons;
