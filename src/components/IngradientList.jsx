import PropTypes from 'prop-types';

const IngradientList = ({ ingradients }) => {
  return (
    ingradients.length > 0 && (
      <div className="py-4">
        <h2 className="text-2xl mb-4 font-semibold">Ingradients on Hand: </h2>
        <ul className="px-10 flex flex-col gap-3 list-disc">
          {ingradients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    )
  );
};

IngradientList.propTypes = {
  ingradients: PropTypes.array.isRequired,
};

export default IngradientList;
