import { useState } from 'react';
import IngradientList from './IngradientList';
import ClaudeReceipe from './ClaudeReceipe';
import { getRecipeFromMistral } from '../ai';

const Main = () => {
  const [ingradients, setIngradients] = useState([]);
  const [item, setItem] = useState('');
  const [receipe, setReceipe] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    setIngradients((prev) => {
      return [...prev, formData.get('ingradient')];
    });
    form.reset();
  };

  const getReceipe = async () => {
    const receipe = await getRecipeFromMistral(ingradients);
    setReceipe(receipe);
  };

  return (
    <main className="px-5 lg:px-50 py-4">
      <form
        onSubmit={handleSubmit}
        className="flex justify-between items-center gap-5"
      >
        <input
          type="text"
          placeholder="eg oregano"
          aria-label="add ingradient"
          className="border border-white px-4 py-2 rounded-lg grow-1"
          value={item}
          name="ingradient"
          onChange={(e) => setItem(e.target.value)}
        />
        <button
          type="submit"
          className="px-5 py-2 text-base bg-green-500 rounded-lg cursor-pointer"
        >
          + Add ingradients
        </button>
      </form>
      <IngradientList ingradients={ingradients} />
      {ingradients.length > 5 && (
        <div className="bg-[#a5b4fc] w-full p-5 flex items-center justify-between rounded-lg">
          <div>
            <p className="text-base font-semibold text-black mb-3">
              Ready for Receipe
            </p>
            <p className="text-black text-base">
              Generate a receipe from list of ingradients
            </p>
          </div>
          <button
            onClick={getReceipe}
            className="py-2 px-5 text-black font-medium text-base bg-[#fb923c] rounded-lg cursor-pointer"
          >
            Get a receipe
          </button>
        </div>
      )}
      {receipe !== '' && <ClaudeReceipe receipe={receipe} />}
    </main>
  );
};

export default Main;
