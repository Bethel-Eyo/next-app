import React from "react";
import Script from "next/script";

const GoogleAnalyticsScipt = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DNJN1PF3CS"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-XXXXXXX');`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScipt;
