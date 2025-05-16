import React, { useState, useEffect } from 'react';
import MailIconWithBadge from './MailIconWithBadge';
import NewMailNotifier from './NewMailNotifier';

const MailApp = () => {
  const [unreadCount, setUnreadCount] = useState(0);
  const [newMail, setNewMail] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/api/mail/check')
        .then(res => res.json())
        .then(data => {
          setUnreadCount(data.unreadCount);
          if (data.latestMail) {
            setNewMail(data.latestMail);
          }
        });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <MailIconWithBadge unreadCount={unreadCount} />
      <NewMailNotifier newMail={newMail} />
    </div>
  );
};

export default MailApp;