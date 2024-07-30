import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx('hero__title', styles.heroTitle)}>
          <b className='text--primary'>DataTome</b> Docs
        </h1>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          All your IoT data processing is in one library.
        </p>

        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Getting Started - 1min ⏱️
          </Link>
        </div>

         <div className="relative w-full lg:w-1/2 mx-auto mt-8 pt-4 pb-20">
          <div
            className="rounded-lg border-neutral-800 border border-solid w-full bg-neutral-900 overflow-hidden flex flex-col"
            style={{
              boxShadow:
                "0px 0px 0px 0.5px rgba(255, 255, 255, 0.20), 0px 5px 12px 0px rgba(0, 0, 0, 0.50), 0px 16px 40px 0px rgba(0, 0, 0, 0.46)",
            }}
          >
            <div className="flex border-b border-neutral-700 bg-neutral-800 gap-2 py-3 w-full">
              <div className="rounded-full w-3 h-3 bg-red-500 ml-3" />
              <div className="rounded-full w-3 h-3 bg-yellow-500" />
              <div className="rounded-full w-3 h-3 bg-green-500" />
            </div>
            <div className="w-full">
              <div className="p-4 text-left">
                <code className="bg-transparent border-none inline-block">
                  <p className="text-neutral-500 mb-0">
                    # 1. Open PlatformIO Core CLI <br />
                    # 2. Change directory (cd) to the PlatformIO project where platformio.ini is located. <br />
                    # 3. Install Data Tome library by running:
                  </p>
                  <p className="mb-0">
                    <span className="text-green-600">pio&nbsp;</span>
                    <span className="text-white">pkg install&nbsp;</span>
                    <span className="text-stone-500">--library&nbsp;</span>
                    <span className="text-cyan-600">"alexandrehiroyuki/DataTome"</span>
                  </p>

                </code>
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}

// const GettingStartedHome() {
//   return ()
// }


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Home`}
      description="Data Tome documentation. Learn how to use Data Tome library on Arduino and other microcontrollers."
    >
      <HomepageHeader />
    </Layout>
  );
}
