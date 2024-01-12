"use client";

import { Button } from "./ui/button";

type Props = {
  text: string;
  url: string;
};

const OauthButton = ({ text, url }: Props) => {
  const handleOAuthLogin = () => {
    window.open(url, "_self"); // Opens the OAuth URL in a new tab
  };

  return <Button onClick={handleOAuthLogin}>{text} Login</Button>;
};

export default OauthButton;
