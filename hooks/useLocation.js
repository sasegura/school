const { useEffect } = require('react');
const { useState } = require('react');

export default function useLocation() {
  const [location, setLocation] = useState({});
  useEffect(() => {
    const Url = 'https://ip.nf/me.json';
    fetch(Url, { method: 'get' })
      .then((response) => response.json())
      .then((data) => {
        setLocation(data.ip);
      });
  }, []);

  return location;
}
