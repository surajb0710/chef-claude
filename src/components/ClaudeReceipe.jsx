import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const ClaudeReceipe = ({ receipe }) => {
  return (
    <section className="font-base mb-5">
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-3xl font-bold" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-2xl font-semibold" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="leading-relaxed" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside space-y-2" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="ml-4 leading-[2]" {...props} />
          ),
          a: ({ node, ...props }) => (
            <a className="text-blue-300 underline" {...props} />
          ),
        }}
      >
        {receipe}
      </ReactMarkdown>
    </section>
  );
};

ClaudeReceipe.propTypes = {
  receipe: PropTypes.string.isRequired,
};

export default ClaudeReceipe;
