// pages/_document.js

import {Head, Html, Main, NextScript} from 'next/document'
import React from "react";

export default function Document() {
    return (
        <Html>
            <Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-TE6HHSESG5"></script>
            </Head>
            <body>
            <Main/>
            <NextScript>
                {`
                    window.dataLayer = window.dataLayer || [];
                    if (typeof window !== 'undefined'){
                        function gtag() {
                            window.dataLayer.push(arguments)
                        }
                    }
                    gtag('js', new Date());

                    gtag('config', 'G-TE6HHSESG5');
                `}
            </NextScript>
            </body>
        </Html>
    )
}
