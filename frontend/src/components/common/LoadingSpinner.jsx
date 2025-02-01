//const LoadingSpinner = ({ size = "md" }) => {
//	const sizeClass = `loading-${size}`;
const LoadingSpinner = () => {
	const sizeClass = 'loading';


	return <span className={`loading loading-spinner ${sizeClass}`} />;
};
export default LoadingSpinner;