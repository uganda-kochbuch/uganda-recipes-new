import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { recipes } from './data/recipes';
import RecipeCard from './components/RecipeCard';
import RecipeDetail from './components/RecipeDetail';

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-orange-500 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Ugandische Rezepte</h1>
          <p className="text-xl">Traditionelle ugandische Küche auf Deutsch</p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>Kreatives Projekt von Finn Pfeifer</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
