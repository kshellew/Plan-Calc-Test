import HelpScout, { NOTIFICATION_TYPES } from "@helpscout/javascript-sdk";
import {
  Button,
  DefaultStyle,
  Heading,
  useSetAppHeight,
} from "@helpscout/ui-kit";
import { useEffect, useState } from "react";

function App() {
  const appRef = useSetAppHeight();

  const [userEmail, setUserEmail] = useState<string | undefined>(
    "unknown user"
  );

  useEffect(() => {
    HelpScout.getApplicationContext().then(({ user }) =>
      setUserEmail(user?.email)
    );
  }, []);

  function onClick() {
    HelpScout.showNotification(
      NOTIFICATION_TYPES.SUCCESS,
      "Hello from the sidebar app"
    );
  }

  return (
    <div className="App" ref={appRef}>
      <DefaultStyle />
      <Heading level="h1">Hi, {userEmail}</Heading>
      <br />
      <Button size="sm" onClick={onClick}>
        Click me
      </Button>
      <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTrXzIm3xypkIn2qETwoQpyFJTQiK0b-m2C2qtycTgAlBUAE9CQKL5wXjS06yruDKQXfzdvyDwWlfDn/pubhtml?gid=1118442371&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
    </div>
  );
}

export default App;
