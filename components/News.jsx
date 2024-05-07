/* eslint-disable @next/next/no-img-element */
'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function News() {
  const [news, setNews] = useState([]);
  const [articles, setArticles] = useState(4);

  useEffect(() => {
    fetch('https://saurav.tech/NewsAPI/top-headlines/category/business/us.json')
      .then((res) => res.json())
      .then((data) => {
        setNews(data.articles);
      });
  }, []);

  return (
    <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2">
      <h4 className="font-bold text-xl px-4">What&apos;s happening</h4>
      {news.slice(0, articles).map((article, index) => (
        <div key={index}>
          <a href={article.url} target="_blank">
            <div className="flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-200">
              <div className="space-y-1">
                <h6 className="text-md font-semibold">{article.title}</h6>
                <p className="text-sm font-medium text-gray-500">{article.source.name}</p>
              </div>
              <img
                src={article.urlToImage}
                alt={article.title}
                className="rounded-xl"
                width={100}
              />
            </div>
          </a>
        </div>
      ))}
      <button
        onClick={() => setArticles(articles + 3)}
        className="w-full py-2 text-white bg-gray-700 rounded-b-xl hover:bg-gray-900 transition duration-200" 
      >
        Show More
      </button>
    </div>
  );
}
