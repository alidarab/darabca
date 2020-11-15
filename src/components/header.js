import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <header className="bg-teal-700">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-2 mx-auto">
        <Link to="/">
          <h1 className="flex items-center text-white no-underline">
          <svg
          role="img"
          aria-label="[title + description]"
          className="fill-current text-white inline-block h-32 w-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 789.75 359">
          <title>{site.siteMetadata.title}</title>
          <desc>{site.siteMetadata.description}</desc>
          <path d="M377.85 0v126.79l-22 6.12V0zM491.85 0v126.79l-22 6.12V0zM532.85 44.6a82 82 0 0114-1.06q20.34 0 32.84 13.08Q590.85 68.49 590.85 86v21.6a18.38 18.38 0 01-6.07 13.93 17.84 17.84 0 01-13.09 5.47h-56.84v-18h50.55c3 0 4.45-1.47 4.45-4.43V88c0-8.19-2.48-14.76-7.53-19.74-4.67-4.62-11.42-7.12-20.3-7.47a44.82 44.82 0 00-9.17.7zM446.85 35v77.55q0 22-13.71 34.14-8.82 8-22.72 11.23a73.27 73.27 0 01-13.53 1.25c-1.55 0-3.66-.14-6.3-.39l-8.84-18.48a72.63 72.63 0 0011.18.9q31.92 0 31.92-30.61V35zM0 271.55c0-44.41 32.63-87.47 83.07-87.47 19.13 0 38.58 8.67 51.78 22.37V46h30v309h-30v-22.37C123 350.32 102.2 359 82.42 359 34.94 359 0 320.29 0 271.55zm134.85 27.58v-62.08c-11.69-16.36-31.39-25.36-48.41-25.36-38.72 0-57.09 31-57.09 60.07 0 30.72 21.69 58.77 56.42 58.77 18.02 0 40.39-11.04 49.08-31.4zM385.85 215.74c9.89-18 24.73-31.74 42.53-31.74a76.74 76.74 0 0117.8 2l-5.6 32.39a33.1 33.1 0 00-15.5-3.34c-16.8 0-29 10-39.23 28.06V355h-30V188h30zM561.85 355v-18.14c-13.62 15.36-28.66 21.69-50 21.69-30.72 0-59.09-15-59.09-50.72 0-42.4 37.72-55.42 74.45-55.42 8.34 0 33.66 3.67 33.66 3.67v-5.57c0-25.36-11.86-40.06-38.89-40.06-19.12 0-39.21 7.34-52.4 14.7l-8.9-25.38c17.14-8.35 42.18-15.69 64.93-15.69 47.79 0 65.26 26.37 65.26 69.45V355zm-1-76.23a137.2 137.2 0 00-30.05-3.34c-20.69 0-48.07 5-48.07 30.06 0 20.36 15.35 27.7 33 27.7 17 0 31.72-8.67 45.07-20zM654.85 46v164.45c11.87-17.34 32.65-26.37 52.45-26.37 47.48 0 82.45 38.74 82.45 87.8 0 44.06-32.66 87.12-83.12 87.12a73 73 0 01-51.78-22v18h-30V46zm1 259.14c11.36 16.36 31 25.39 48.41 25.39 38.73 0 57.08-31 57.08-59.78 0-31-21.69-59.06-56.4-59.06-18.05 0-40.75 11-49.09 31.69zM313.85 45v59.57a4.43 4.43 0 01-4.43 4.43H220.6a13.59 13.59 0 01-9.47-3.74 13.24 13.24 0 01-4.28-10.2V45h-22v49.91q0 15.16 11.21 24.6A28.9 28.9 0 00216 127h29.88a33.29 33.29 0 0133.43 0h36.32a18 18 0 0014.59-7 18.33 18.33 0 004.64-12.66V45zM278.84 185.13a32.68 32.68 0 01-31 0 166.3 166.3 0 00-49.2 14.61l8.9 25.38c13.19-7.36 33.3-14.7 52.43-14.7 27 0 38.9 14.7 38.9 40.06v5.57s-24.83-3.67-33.18-3.67c-36.72 0-74.45 13-74.45 55.42 0 35.72 28.38 50.72 59.09 50.72 21.37 0 36.39-6.33 49.54-21.69V355h29V253.53c-.02-38.13-13.74-63.16-50.03-68.4zm20 128c-13.35 11.36-28 20-45.07 20-17.7 0-33.05-7.34-33.05-27.7 0-25 27.38-30.06 48.07-30.06a137.32 137.32 0 0130.05 3.34zM247.26 140a22.44 22.44 0 1015.79-6.5 21.47 21.47 0 00-15.79 6.5z" />
          </svg>
          </h1>
        </Link>

        <button
          className="items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/about`,
              title: `About`,
            },
            {
              route: `/contact`,
              title: `Contact`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
