import React from 'react';
import Header from '../components/Header';
import BookCategories from '../components/BookCategories';
import AwardWinners from '../components/AwardWinners';
import ComingSoon from '../components/ComingSoon';
import Footer from '../components/Footer';

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <BookCategories />
        <ComingSoon />
        <AwardWinners />
      </main>
      <Footer />
    </div>
  );
}
