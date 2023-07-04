import React, { Fragment } from 'react';
import Link from 'next/link';
//our-domian.com/news
const NewsPage = () => {
  return (
    <Fragment>
      <h1>Welcome to the Next.js index page!</h1>
      <ul>
            <li>
                <Link href='/news/nextjs-is-a-great-framework'>NextJs is A Great Framework</Link>
            </li>
            <li>something else</li>
      </ul>
    </Fragment>
  );
};

export default  NewsPage;
