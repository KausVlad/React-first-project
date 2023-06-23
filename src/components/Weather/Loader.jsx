import './Loader.scss';

export const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner">◌</div>
      Loading...
    </div>
  );
};
